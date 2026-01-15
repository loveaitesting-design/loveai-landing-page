// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Accessibility,
//   Type,
//   Contrast,
//   VolumeX,
//   Volume2,
//   MousePointer,
//   Keyboard,
//   X,
//   RotateCcw,
//   Eye
// } from "lucide-react";

// interface AccessibilitySettings {
//   fontSize: number;
//   highContrast: boolean;
//   reducedMotion: boolean;
//   screenReaderMode: boolean;
//   focusIndicator: boolean;
//   soundEnabled: boolean;
//   largerCursor: boolean;
//   keyboardNavigation: boolean;
// }

// const DEFAULT_SETTINGS: AccessibilitySettings = {
//   fontSize: 100,
//   highContrast: false,
//   reducedMotion: false,
//   screenReaderMode: false,
//   focusIndicator: false,
//   soundEnabled: true,
//   largerCursor: false,
//   keyboardNavigation: true,
// };

// export const AccessibilityWidget: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
//   const [announcer, setAnnouncer] = useState<HTMLDivElement | null>(null);

//   // Create screen reader announcer
//   useEffect(() => {
//     const announcerEl = document.createElement('div');
//     announcerEl.setAttribute('aria-live', 'polite');
//     announcerEl.setAttribute('aria-atomic', 'true');
//     announcerEl.className = 'sr-only';
//     announcerEl.style.position = 'absolute';
//     announcerEl.style.width = '1px';
//     announcerEl.style.height = '1px';
//     announcerEl.style.padding = '0';
//     announcerEl.style.margin = '-1px';
//     announcerEl.style.overflow = 'hidden';
//     announcerEl.style.clip = 'rect(0, 0, 0, 0)';
//     announcerEl.style.whiteSpace = 'nowrap';
//     announcerEl.style.border = '0';
//     document.body.appendChild(announcerEl);
//     setAnnouncer(announcerEl);

//     return () => {
//       if (document.body.contains(announcerEl)) {
//         document.body.removeChild(announcerEl);
//       }
//     };
//   }, []);

//   // Announce changes to screen readers
//   const announceChange = (message: string) => {
//     if (announcer && settings.screenReaderMode) {
//       announcer.textContent = message;
//       setTimeout(() => {
//         announcer.textContent = '';
//       }, 1000);
//     }
//   };

//   // Play sound effects
//   const playSound = (type: 'success' | 'error' | 'click' = 'click') => {
//     if (!settings.soundEnabled) return;
    
//     try {
//       const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
//       const oscillator = audioContext.createOscillator();
//       const gainNode = audioContext.createGain();
      
//       oscillator.connect(gainNode);
//       gainNode.connect(audioContext.destination);
      
//       const frequencies = {
//         click: 800,
//         success: 1000,
//         error: 400
//       };
      
//       oscillator.frequency.value = frequencies[type];
//       oscillator.type = 'sine';
      
//       gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
//       gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
//       oscillator.start(audioContext.currentTime);
//       oscillator.stop(audioContext.currentTime + 0.1);
//     } catch (error) {
//       console.log('Audio not supported');
//     }
//   };

//   // Apply settings to document
//   useEffect(() => {
//     const root = document.documentElement;
    
//     // Font size
//     root.style.fontSize = `${(settings.fontSize / 100) * 16}px`;
    
//     // High contrast - subtle enhancement
//     if (settings.highContrast) {
//       root.classList.add('high-contrast');
      
//       const contrastStyle = document.getElementById('high-contrast-global') || document.createElement('style');
//       contrastStyle.id = 'high-contrast-global';
//       contrastStyle.textContent = `
//         .high-contrast {
//           filter: contrast(150%) brightness(1.1);
//         }
        
//         .high-contrast * {
//           border-color: #333 !important;
//         }
        
//         .high-contrast button {
//           background-color: #fde047 !important;
//           color: #000000 !important;
//           border: 1px solid #fde047 !important;
//         }
        
//         .high-contrast button:hover {
//           background-color: #fde089 !important;
//         }
        
//         .high-contrast .bg-white {
//           background-color: #f9fafb !important;
//           color: #111827 !important;
//         }
//       `;
//       document.head.appendChild(contrastStyle);
//     } else {
//       root.classList.remove('high-contrast');
//       const contrastStyle = document.getElementById('high-contrast-global');
//       if (contrastStyle) contrastStyle.remove();
//     }
    
//     // Reduced motion
//     if (settings.reducedMotion) {
//       root.style.setProperty('--animation-duration', '0s');
//       root.style.setProperty('--transition-duration', '0s');
//       root.classList.add('reduce-motion');
      
//       const style = document.getElementById('reduced-motion-styles') || document.createElement('style');
//       style.id = 'reduced-motion-styles';
//       style.textContent = `
//         *, *::before, *::after {
//           animation-duration: 0.01ms !important;
//           animation-iteration-count: 1 !important;
//           transition-duration: 0.01ms !important;
//           scroll-behavior: auto !important;
//         }
//       `;
//       document.head.appendChild(style);
//     } else {
//       root.style.removeProperty('--animation-duration');
//       root.style.removeProperty('--transition-duration');
//       root.classList.remove('reduce-motion');
      
//       const style = document.getElementById('reduced-motion-styles');
//       if (style) style.remove();
//     }
    
//     // Large cursor
//     if (settings.largerCursor) {
//       root.style.cursor = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Cpath d=\'M2 2 L14 14 L10 18 L18 26 L22 22 L14 14 Z\' fill=\'black\'/%3E%3Cpath d=\'M3 3 L13 13 L11 17 L17 23 L21 21 L15 15 Z\' fill=\'white\'/%3E%3C/svg%3E") 16 16, auto';
//       document.body.style.cursor = 'inherit';
//     } else {
//       root.style.cursor = 'auto';
//       document.body.style.cursor = 'auto';
//     }
    
//     // Focus indicators
//     if (settings.focusIndicator) {
//       const style = document.getElementById('enhanced-focus-styles') || document.createElement('style');
//       style.id = 'enhanced-focus-styles';
//       style.textContent = `
//         *:focus {
//           outline: 3px solid #0ea5e9 !important;
//           outline-offset: 2px !important;
//           box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.3) !important;
//         }
        
//         *:focus-visible {
//           outline: 3px solid #0ea5e9 !important;
//           outline-offset: 2px !important;
//           box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.3) !important;
//         }
//       `;
//       document.head.appendChild(style);
//     } else {
//       const style = document.getElementById('enhanced-focus-styles');
//       if (style) style.remove();
//     }
//   }, [settings]);

//   const updateSetting = <K extends keyof AccessibilitySettings>(
//     key: K,
//     value: AccessibilitySettings[K]
//   ) => {
//     setSettings((prev) => ({ ...prev, [key]: value }));
//     playSound('success');
//     announceChange(`${key} ${value ? 'enabled' : 'disabled'}`);
//   };

//   const resetSettings = () => {
//     setSettings(DEFAULT_SETTINGS);
//     playSound('success');
//     announceChange('Settings reset to default');
//   };

//   // Keyboard shortcuts
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       // Alt + A to open/close
//       if (e.altKey && e.key.toLowerCase() === "a") {
//         e.preventDefault();
//         setIsOpen((prev) => !prev);
//         playSound('click');
//       }
      
//       // Escape to close
//       if (e.key === "Escape" && isOpen) {
//         setIsOpen(false);
//         playSound('click');
//       }
      
//       // Ctrl + Plus to increase font
//       if (e.ctrlKey && (e.key === '=' || e.key === '+')) {
//         e.preventDefault();
//         updateSetting('fontSize', Math.min(settings.fontSize + 10, 150));
//       }
      
//       // Ctrl + Minus to decrease font
//       if (e.ctrlKey && e.key === '-') {
//         e.preventDefault();
//         updateSetting('fontSize', Math.max(settings.fontSize - 10, 80));
//       }
      
//       // Ctrl + Shift + H for high contrast
//       if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'h') {
//         e.preventDefault();
//         updateSetting('highContrast', !settings.highContrast);
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [isOpen, settings]);

//   return (
//     <>
//       {/* Floating button */}
//       <div className="fixed bottom-6 left-6 z-[100]">
//         <button
//           onClick={() => {
//             setIsOpen(true);
//             playSound('click');
//           }}
//           className="rounded-full h-16 w-16 bg-sky-600 hover:bg-sky-700 shadow-2xl border-2 border-white text-white hover:scale-110 transition-all duration-300 flex items-center justify-center"
//           aria-label="Open Accessibility Settings (Alt + A)"
//         >
//           <Accessibility className="h-7 w-7" />
//           <span className="sr-only">Accessibility Settings</span>
//         </button>
//       </div>

//       {/* Accessibility Panel */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-[110] bg-black/50 flex items-center justify-center p-4"
//           role="dialog"
//           aria-modal="true"
//           onClick={(e) => {
//             if (e.target === e.currentTarget) {
//               setIsOpen(false);
//               playSound('click');
//             }
//           }}
//         >
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden">
//             {/* Header */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-200">
//               <div className="flex items-center gap-3">
//                 <Accessibility className="h-6 w-6 text-gray-700" />
//                 <h2 className="text-xl font-semibold text-gray-900">Accessibility Settings</h2>
//               </div>
//               <button
//                 onClick={() => {
//                   setIsOpen(false);
//                   playSound('click');
//                 }}
//                 className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full flex items-center justify-center"
//                 aria-label="Close"
//               >
//                 <X className="h-4 w-4 text-gray-500" />
//               </button>
//             </div>

//             {/* Content */}
//             <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-100px)]">
//               {/* Font Size */}
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
//                   <Type className="h-4 w-4" />
//                   Font Size
//                 </div>
//                 <div className="px-1">
//                   <div className="relative mb-3">
//                     <input
//                       type="range"
//                       min="80"
//                       max="150"
//                       step="10"
//                       value={settings.fontSize}
//                       onChange={(e) => updateSetting("fontSize", parseInt(e.target.value))}
//                       className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer slider-track"
//                       style={{
//                         background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${((settings.fontSize - 80) / 70) * 100}%, #e5e7eb ${((settings.fontSize - 80) / 70) * 100}%, #e5e7eb 100%)`
//                       }}
//                     />
//                     <style jsx>{`
//                       .slider-track {
//                         outline: none !important;
//                       }
                      
//                       .slider-track:focus {
//                         outline: none !important;
//                         box-shadow: none !important;
//                         border: none !important;
//                       }
                      
//                       .slider-track::-webkit-slider-thumb {
//                         appearance: none;
//                         height: 24px;
//                         width: 24px;
//                         border-radius: 50%;
//                         background: #ffffff;
//                         cursor: pointer;
//                         border: 3px solid #0ea5e9;
//                         box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
//                         transition: border 0.2s ease;
//                         outline: none !important;
//                       }
                      
//                       .slider-track:focus::-webkit-slider-thumb {
//                         outline: none !important;
//                         box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
//                         border: 3px solid #0ea5e9;
//                       }
                      
//                       .slider-track:active::-webkit-slider-thumb {
//                         border: 3px solid #0ea5e9;
//                         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//                       }
                      
//                       .slider-track::-moz-range-thumb {
//                         height: 24px;
//                         width: 24px;
//                         border-radius: 50%;
//                         background: #ffffff;
//                         cursor: pointer;
//                         border: 3px solid #0ea5e9;
//                         box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
//                         transition: border 0.2s ease;
//                         outline: none !important;
//                       }
                      
//                       .slider-track:focus::-moz-range-thumb {
//                         outline: none !important;
//                         box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
//                         border: 3px solid #0ea5e9;
//                       }
                      
//                       .slider-track:active::-moz-range-thumb {
//                         border: 3px solid #0ea5e9;
//                         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//                       }
                      
//                       .slider-track::-webkit-slider-track {
//                         height: 12px;
//                         border-radius: 6px;
//                       }
//                     `}</style>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs text-gray-500">Small</span>
//                     <div className="bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1 rounded-full text-sm font-medium">
//                       {settings.fontSize}%
//                     </div>
//                     <span className="text-xs text-gray-500">Extra Large</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Settings Toggles */}
//               <SettingToggle
//                 label="High Contrast"
//                 checked={settings.highContrast}
//                 onChange={(val) => updateSetting("highContrast", val)}
//                 icon={<Contrast className="h-4 w-4" />}
//               />
//               <SettingToggle
//                 label="Reduced Motion"
//                 checked={settings.reducedMotion}
//                 onChange={(val) => updateSetting("reducedMotion", val)}
//                 icon={<Eye className="h-4 w-4" />}
//               />
//               <SettingToggle
//                 label="Screen Reader Mode"
//                 checked={settings.screenReaderMode}
//                 onChange={(val) => updateSetting("screenReaderMode", val)}
//                 icon={<VolumeX className="h-4 w-4" />}
//               />
//               <SettingToggle
//                 label="Enhanced Focus Indicators"
//                 checked={settings.focusIndicator}
//                 onChange={(val) => updateSetting("focusIndicator", val)}
//                 icon={<MousePointer className="h-4 w-4" />}
//               />
//               <SettingToggle
//                 label="Sound Enabled"
//                 checked={settings.soundEnabled}
//                 onChange={(val) => updateSetting("soundEnabled", val)}
//                 icon={<Volume2 className="h-4 w-4" />}
//               />
//               <SettingToggle
//                 label="Large Cursor"
//                 checked={settings.largerCursor}
//                 onChange={(val) => updateSetting("largerCursor", val)}
//                 icon={<MousePointer className="h-4 w-4" />}
//               />
//               <SettingToggle
//                 label="Keyboard Navigation"
//                 checked={settings.keyboardNavigation}
//                 onChange={(val) => updateSetting("keyboardNavigation", val)}
//                 icon={<Keyboard className="h-4 w-4" />}
//               />

//               {/* Reset Button */}
//               <button
//                 onClick={resetSettings}
//                 className="w-full mt-6 h-12 border-2 border-sky-200 text-sky-700 hover:bg-sky-50 font-medium rounded-xl flex items-center justify-center gap-2 transition-colors"
//               >
//                 <RotateCcw className="h-4 w-4" />
//                 Reset Settings
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// // Helper component for toggle switches
// const SettingToggle = ({
//   label,
//   checked,
//   onChange,
//   icon,
// }: {
//   label: string;
//   checked: boolean;
//   onChange: (val: boolean) => void;
//   icon: React.ReactNode;
// }) => (
//   <div className="flex items-center justify-between py-2">
//     <div className="flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer">
//       {icon}
//       {label}
//     </div>
//     <button
//       onClick={() => onChange(!checked)}
//       className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
//         checked ? 'bg-sky-600' : 'bg-gray-300'
//       }`}
//       role="switch"
//       aria-checked={checked}
//       aria-label={`Toggle ${label}`}
//     >
//       <span
//         className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-md ${
//           checked ? 'translate-x-6' : 'translate-x-1'
//         }`}
//       />
//     </button>
//   </div>
// );

// export default AccessibilityWidget;
"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import {
  Accessibility,
  Type,
  Contrast,
  VolumeX,
  Volume2,
  MousePointer,
  Keyboard,
  X,
  RotateCcw,
  Eye,
  Languages
} from "lucide-react";

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
  focusIndicator: false,
  soundEnabled: true,
  largerCursor: false,
  keyboardNavigation: true,
};

const LANGUAGES = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'ru', label: 'Russian', nativeLabel: 'Русский' },
  { code: 'he', label: 'Hebrew', nativeLabel: 'עברית' }
];

export const AccessibilityWidget: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const [announcer, setAnnouncer] = useState<HTMLDivElement | null>(null);

  // Create screen reader announcer
  useEffect(() => {
    const announcerEl = document.createElement('div');
    announcerEl.setAttribute('aria-live', 'polite');
    announcerEl.setAttribute('aria-atomic', 'true');
    announcerEl.className = 'sr-only';
    announcerEl.style.position = 'absolute';
    announcerEl.style.width = '1px';
    announcerEl.style.height = '1px';
    announcerEl.style.padding = '0';
    announcerEl.style.margin = '-1px';
    announcerEl.style.overflow = 'hidden';
    announcerEl.style.clip = 'rect(0, 0, 0, 0)';
    announcerEl.style.whiteSpace = 'nowrap';
    announcerEl.style.border = '0';
    document.body.appendChild(announcerEl);
    setAnnouncer(announcerEl);

    return () => {
      if (document.body.contains(announcerEl)) {
        document.body.removeChild(announcerEl);
      }
    };
  }, []);

  // Announce changes to screen readers
  const announceChange = (message: string) => {
    if (announcer && settings.screenReaderMode) {
      announcer.textContent = message;
      setTimeout(() => {
        announcer.textContent = '';
      }, 1000);
    }
  };

  // Play sound effects
  const playSound = (type: 'success' | 'error' | 'click' = 'click') => {
    if (!settings.soundEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      const frequencies = {
        click: 800,
        success: 1000,
        error: 400
      };
      
      oscillator.frequency.value = frequencies[type];
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      console.log('Audio not supported');
    }
  };

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${(settings.fontSize / 100) * 16}px`;
    
    // High contrast - subtle enhancement
    if (settings.highContrast) {
      root.classList.add('high-contrast');
      
      const contrastStyle = document.getElementById('high-contrast-global') || document.createElement('style');
      contrastStyle.id = 'high-contrast-global';
      contrastStyle.textContent = `
        .high-contrast {
          filter: contrast(150%) brightness(1.1);
        }
        
        .high-contrast * {
          border-color: #333 !important;
        }
        
        .high-contrast button {
          background-color: #fde047 !important;
          color: #000000 !important;
          border: 1px solid #fde047 !important;
        }
        
        .high-contrast button:hover {
          background-color: #fde089 !important;
        }
        
        .high-contrast .bg-white {
          background-color: #f9fafb !important;
          color: #111827 !important;
        }
      `;
      document.head.appendChild(contrastStyle);
    } else {
      root.classList.remove('high-contrast');
      const contrastStyle = document.getElementById('high-contrast-global');
      if (contrastStyle) contrastStyle.remove();
    }
    
    // Reduced motion
    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
      root.style.setProperty('--transition-duration', '0s');
      root.classList.add('reduce-motion');
      
      const style = document.getElementById('reduced-motion-styles') || document.createElement('style');
      style.id = 'reduced-motion-styles';
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      root.style.removeProperty('--animation-duration');
      root.style.removeProperty('--transition-duration');
      root.classList.remove('reduce-motion');
      
      const style = document.getElementById('reduced-motion-styles');
      if (style) style.remove();
    }
    
    // Large cursor
    if (settings.largerCursor) {
      root.style.cursor = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Cpath d=\'M2 2 L14 14 L10 18 L18 26 L22 22 L14 14 Z\' fill=\'black\'/%3E%3Cpath d=\'M3 3 L13 13 L11 17 L17 23 L21 21 L15 15 Z\' fill=\'white\'/%3E%3C/svg%3E") 16 16, auto';
      document.body.style.cursor = 'inherit';
    } else {
      root.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
    }
    
    // Focus indicators
    if (settings.focusIndicator) {
      const style = document.getElementById('enhanced-focus-styles') || document.createElement('style');
      style.id = 'enhanced-focus-styles';
      style.textContent = `
        *:focus {
          outline: 3px solid #0ea5e9 !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.3) !important;
        }
        
        *:focus-visible {
          outline: 3px solid #0ea5e9 !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.3) !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      const style = document.getElementById('enhanced-focus-styles');
      if (style) style.remove();
    }

    // RTL support for Hebrew
    if (i18n.language === 'he') {
      root.setAttribute('dir', 'rtl');
    } else {
      root.setAttribute('dir', 'ltr');
    }
  }, [settings, i18n.language]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    playSound('success');
    const status = value ? t('accessibility.announcements.enabled', { setting: key }) : t('accessibility.announcements.disabled', { setting: key });
    announceChange(status);
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    playSound('success');
    announceChange(t('accessibility.announcements.settingsReset'));
  };

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    playSound('success');
    announceChange(`Language changed to ${langCode}`);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + A to open/close
      if (e.altKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        playSound('click');
      }
      
      // Escape to close
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        playSound('click');
      }
      
      // Ctrl + Plus to increase font
      if (e.ctrlKey && (e.key === '=' || e.key === '+')) {
        e.preventDefault();
        updateSetting('fontSize', Math.min(settings.fontSize + 10, 150));
      }
      
      // Ctrl + Minus to decrease font
      if (e.ctrlKey && e.key === '-') {
        e.preventDefault();
        updateSetting('fontSize', Math.max(settings.fontSize - 10, 80));
      }
      
      // Ctrl + Shift + H for high contrast
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'h') {
        e.preventDefault();
        updateSetting('highContrast', !settings.highContrast);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, settings]);

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <button
          onClick={() => {
            setIsOpen(true);
            playSound('click');
          }}
          className="rounded-full h-16 w-16 bg-sky-600 hover:bg-sky-700 shadow-2xl border-2 border-white text-white hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label={t('accessibility.openButton')}
        >
          <Accessibility className="h-7 w-7" />
          <span className="sr-only">{t('accessibility.title')}</span>
        </button>
      </div>

      {/* Accessibility Panel */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
              playSound('click');
            }
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Accessibility className="h-6 w-6 text-gray-700" />
                <h2 className="text-xl font-semibold text-gray-900">{t('accessibility.title')}</h2>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  playSound('click');
                }}
                className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full flex items-center justify-center"
                aria-label={t('accessibility.close')}
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          

              {/* Font Size */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <Type className="h-4 w-4" />
                  {t('accessibility.fontSize')}
                </div>
                <div className="px-1">
                  <div className="relative mb-3">
                    <input
                      type="range"
                      min="80"
                      max="150"
                      step="10"
                      value={settings.fontSize}
                      onChange={(e) => updateSetting("fontSize", parseInt(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer slider-track"
                      style={{
                        background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${((settings.fontSize - 80) / 70) * 100}%, #e5e7eb ${((settings.fontSize - 80) / 70) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                    <style jsx>{`
                      .slider-track {
                        outline: none !important;
                      }
                      
                      .slider-track:focus {
                        outline: none !important;
                        box-shadow: none !important;
                        border: none !important;
                      }
                      
                      .slider-track::-webkit-slider-thumb {
                        appearance: none;
                        height: 24px;
                        width: 24px;
                        border-radius: 50%;
                        background: #ffffff;
                        cursor: pointer;
                        border: 3px solid #0ea5e9;
                        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
                        transition: border 0.2s ease;
                        outline: none !important;
                      }
                      
                      .slider-track:focus::-webkit-slider-thumb {
                        outline: none !important;
                        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
                        border: 3px solid #0ea5e9;
                      }
                      
                      .slider-track:active::-webkit-slider-thumb {
                        border: 3px solid #0ea5e9;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                      }
                      
                      .slider-track::-moz-range-thumb {
                        height: 24px;
                        width: 24px;
                        border-radius: 50%;
                        background: #ffffff;
                        cursor: pointer;
                        border: 3px solid #0ea5e9;
                        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
                        transition: border 0.2s ease;
                        outline: none !important;
                      }
                      
                      .slider-track:focus::-moz-range-thumb {
                        outline: none !important;
                        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
                        border: 3px solid #0ea5e9;
                      }
                      
                      .slider-track:active::-moz-range-thumb {
                        border: 3px solid #0ea5e9;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                      }
                      
                      .slider-track::-webkit-slider-track {
                        height: 12px;
                        border-radius: 6px;
                      }
                    `}</style>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{t('accessibility.fontSizeSmall')}</span>
                    <div className="bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1 rounded-full text-sm font-medium">
                      {settings.fontSize}%
                    </div>
                    <span className="text-xs text-gray-500">{t('accessibility.fontSizeLarge')}</span>
                  </div>
                </div>
              </div>

              {/* Settings Toggles */}
              <SettingToggle
                label={t('accessibility.highContrast')}
                checked={settings.highContrast}
                onChange={(val) => updateSetting("highContrast", val)}
                icon={<Contrast className="h-4 w-4" />}
              />
              <SettingToggle
                label={t('accessibility.reducedMotion')}
                checked={settings.reducedMotion}
                onChange={(val) => updateSetting("reducedMotion", val)}
                icon={<Eye className="h-4 w-4" />}
              />
              <SettingToggle
                label={t('accessibility.screenReaderMode')}
                checked={settings.screenReaderMode}
                onChange={(val) => updateSetting("screenReaderMode", val)}
                icon={<VolumeX className="h-4 w-4" />}
              />
              <SettingToggle
                label={t('accessibility.focusIndicators')}
                checked={settings.focusIndicator}
                onChange={(val) => updateSetting("focusIndicator", val)}
                icon={<MousePointer className="h-4 w-4" />}
              />
              <SettingToggle
                label={t('accessibility.soundEnabled')}
                checked={settings.soundEnabled}
                onChange={(val) => updateSetting("soundEnabled", val)}
                icon={<Volume2 className="h-4 w-4" />}
              />
              <SettingToggle
                label={t('accessibility.largeCursor')}
                checked={settings.largerCursor}
                onChange={(val) => updateSetting("largerCursor", val)}
                icon={<MousePointer className="h-4 w-4" />}
              />
              <SettingToggle
                label={t('accessibility.keyboardNavigation')}
                checked={settings.keyboardNavigation}
                onChange={(val) => updateSetting("keyboardNavigation", val)}
                icon={<Keyboard className="h-4 w-4" />}
              />

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full mt-6 h-12 border-2 border-sky-200 text-sky-700 hover:bg-sky-50 font-medium rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                {t('accessibility.resetSettings')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Helper component for toggle switches
const SettingToggle = ({
  label,
  checked,
  onChange,
  icon,
}: {
  label: string;
  checked: boolean;
  onChange: (val: boolean) => void;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer">
      {icon}
      {label}
    </div>
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
        checked ? 'bg-sky-600' : 'bg-gray-300'
      }`}
      role="switch"
      aria-checked={checked}
      aria-label={`Toggle ${label}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-md ${
          checked ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  </div>
);

export default AccessibilityWidget;