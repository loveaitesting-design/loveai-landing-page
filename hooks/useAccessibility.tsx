import { useState, useEffect, useCallback } from 'react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  screenReaderMode: boolean;
  focusIndicator: boolean;
  soundEnabled: boolean;
  largerCursor: boolean;
  keyboardNavigation: boolean;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  reducedMotion: false,
  screenReaderMode: false,
  focusIndicator: true,
  soundEnabled: true,
  largerCursor: false,
  keyboardNavigation: true,
};

export const useAccessibility = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);

  // Load settings from localStorage
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem('accessibility-settings');
      if (savedSettings) {
        try {
          const parsed = JSON.parse(savedSettings);
          setSettings({ ...DEFAULT_SETTINGS, ...parsed });
        } catch (e) {
          console.error('Failed to parse accessibility settings:', e);
          // Clear corrupted data
          localStorage.removeItem('accessibility-settings');
        }
      }
    } catch (e) {
      console.error('Failed to access localStorage:', e);
    }
    
    // Check for system preferences
    checkSystemPreferences();
  }, []);

  const checkSystemPreferences = () => {
    // Check for prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSettings(prev => ({ ...prev, reducedMotion: true }));
    }
    
    // Check for prefers-contrast
    if (window.matchMedia('(prefers-contrast: high)').matches) {
      setSettings(prev => ({ ...prev, highContrast: true }));
    }
  };

  // Apply settings to DOM
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${newSettings.fontSize}%`;
    
    // High contrast
    root.classList.toggle('high-contrast', newSettings.highContrast);
    
    // Reduced motion
    root.classList.toggle('reduce-motion', newSettings.reducedMotion);
    
    // Screen reader mode
    root.classList.toggle('screen-reader-mode', newSettings.screenReaderMode);
    
    // Focus indicator
    root.classList.toggle('enhanced-focus', newSettings.focusIndicator);
    
    // Larger cursor
    root.classList.toggle('large-cursor', newSettings.largerCursor);
    
    // Keyboard navigation
    root.classList.toggle('keyboard-navigation', newSettings.keyboardNavigation);
    
    // Save to localStorage
    try {
      localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    } catch (e) {
      console.error('Failed to save accessibility settings:', e);
    }
  }, []);

  // Update settings
  const updateSetting = useCallback(<K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: value };
      applySettings(newSettings);
      return newSettings;
    });
  }, [applySettings]);

  // Reset to defaults
  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    applySettings(DEFAULT_SETTINGS);
  }, [applySettings]);

  // Apply settings when they change
  useEffect(() => {
    applySettings(settings);
  }, [settings, applySettings]);

  // Announce changes to screen readers
  const announceChange = useCallback((message: string) => {
    if (settings.screenReaderMode) {
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = message;
      document.body.appendChild(announcement);
      
      setTimeout(() => {
        document.body.removeChild(announcement);
      }, 1000);
    }
  }, [settings.screenReaderMode]);

  // Play sound feedback
  const playSound = useCallback((type: 'success' | 'error' | 'click' = 'click') => {
    if (!settings.soundEnabled) return;
    
    // Create simple audio feedback using Web Audio API
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Different frequencies for different feedback types
      const frequencies = {
        success: 800,
        error: 300,
        click: 600
      };
      
      oscillator.frequency.setValueAtTime(frequencies[type], audioContext.currentTime);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // Fallback for browsers that don't support Web Audio API
      console.log(`Sound feedback: ${type}`);
    }
  }, [settings.soundEnabled]);

  return {
    settings,
    updateSetting,
    resetSettings,
    announceChange,
    playSound,
    isHighContrast: settings.highContrast,
    isReducedMotion: settings.reducedMotion,
    isScreenReaderMode: settings.screenReaderMode,
    isFocusIndicatorEnabled: settings.focusIndicator,
    isSoundEnabled: settings.soundEnabled,
    isLargerCursor: settings.largerCursor,
    isKeyboardNavigation: settings.keyboardNavigation,
    fontSize: settings.fontSize
  };
};