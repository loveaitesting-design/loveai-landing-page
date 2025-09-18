import React, { createContext, useContext, useEffect } from 'react';
import { useAccessibility } from '@/hooks/useAccessibility';

interface AccessibilityContextType {
  announceChange: (message: string) => void;
  playSound: (type?: 'success' | 'error' | 'click') => void;
  isHighContrast: boolean;
  isReducedMotion: boolean;
  isScreenReaderMode: boolean;
  isFocusIndicatorEnabled: boolean;
  isSoundEnabled: boolean;
  isLargerCursor: boolean;
  isKeyboardNavigation: boolean;
  fontSize: number;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibilityContext = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibilityContext must be used within an AccessibilityProvider');
  }
  return context;
};

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const accessibility = useAccessibility();

  // Set up global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip main content (Alt + S)
      if (e.altKey && e.key === 's') {
        e.preventDefault();
        const mainContent = document.querySelector('main, [role="main"], #main-content');
        if (mainContent) {
          (mainContent as HTMLElement).focus();
          accessibility.announceChange('Skipped to main content');
        }
      }
      
      // Skip to navigation (Alt + N)
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const nav = document.querySelector('nav, [role="navigation"]');
        if (nav) {
          (nav as HTMLElement).focus();
          accessibility.announceChange('Skipped to navigation');
        }
      }
      
      // Increase font size (Ctrl + Plus)
      if (e.ctrlKey && e.key === '=') {
        e.preventDefault();
        const newSize = Math.min(accessibility.fontSize + 10, 150);
        accessibility.updateSetting('fontSize', newSize);
        accessibility.announceChange(`Font size increased to ${newSize}%`);
      }
      
      // Decrease font size (Ctrl + Minus)
      if (e.ctrlKey && e.key === '-') {
        e.preventDefault();
        const newSize = Math.max(accessibility.fontSize - 10, 80);
        accessibility.updateSetting('fontSize', newSize);
        accessibility.announceChange(`Font size decreased to ${newSize}%`);
      }
      
      // Toggle high contrast (Ctrl + Shift + H)
      if (e.ctrlKey && e.shiftKey && e.key === 'H') {
        e.preventDefault();
        const newValue = !accessibility.isHighContrast;
        accessibility.updateSetting('highContrast', newValue);
        accessibility.announceChange(`High contrast ${newValue ? 'enabled' : 'disabled'}`);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [accessibility]);

  // Add skip links to the page
  useEffect(() => {
    const skipLinks = document.getElementById('skip-links');
    if (!skipLinks) {
      const skipLinksContainer = document.createElement('div');
      skipLinksContainer.id = 'skip-links';
      skipLinksContainer.innerHTML = `
        
      `;
      document.body.insertBefore(skipLinksContainer, document.body.firstChild);
    }
  }, []);

  // Add semantic landmarks
  useEffect(() => {
    // Ensure main content has proper landmarks
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
    }
    
    // Ensure navigation has proper landmarks
    const nav = document.querySelector('nav');
    if (nav && !nav.id) {
      nav.id = 'navigation';
    }
  }, []);

  const value: AccessibilityContextType = {
    announceChange: accessibility.announceChange,
    playSound: accessibility.playSound,
    isHighContrast: accessibility.isHighContrast,
    isReducedMotion: accessibility.isReducedMotion,
    isScreenReaderMode: accessibility.isScreenReaderMode,
    isFocusIndicatorEnabled: accessibility.isFocusIndicatorEnabled,
    isSoundEnabled: accessibility.isSoundEnabled,
    isLargerCursor: accessibility.isLargerCursor,
    isKeyboardNavigation: accessibility.isKeyboardNavigation,
    fontSize: accessibility.fontSize,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};