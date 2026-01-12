// // components/CookieConsent.tsx
// 'use client';

// import { useState, useEffect } from 'react';
// import styles from './CookieConsent.module.css';
// import { useTranslation } from 'react-i18next';
// export default function CookieConsent() {
//   const [showConsent, setShowConsent] = useState(false);
// const { t } = useTranslation();
//   useEffect(() => {
//     // Check if user has already made a choice
//     const consent = localStorage.getItem('cookieConsent');
//     if (!consent) {
//       setShowConsent(true);
//     }
//   }, []);

//   const acceptAllCookies = () => {
//     localStorage.setItem('cookieConsent', 'accepted');
//     setShowConsent(false);
//     // Add your cookie tracking code here
//     console.log('All cookies accepted');
//   };

//   const rejectAllCookies = () => {
//     localStorage.setItem('cookieConsent', 'rejected');
//     setShowConsent(false);
//     // Remove any existing cookies if needed
//     console.log('All cookies rejected');
//   };

//   if (!showConsent) {
//     return null;
//   }

//   return (
//     <div className={styles.overlay}>
//       <div className={styles.popup}>
//         <div className={styles.content}>
//           <h2 className={styles.title}>{t('cookie.title')}</h2>
//           <p className={styles.description}>
//             {t('cookie.description')}
//           </p>
//           <div className={styles.buttonGroup}>
//             <button 
//               className={styles.rejectBtn} 
//               onClick={rejectAllCookies}
//             >
//               {t('cookie.rejectAll')}
//             </button>
//             <button 
//               className={styles.acceptBtn} 
//               onClick={acceptAllCookies}
//             >
//               {t('cookie.acceptAll')}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';
import { useTranslation } from 'react-i18next';

// ============================================
// COOKIE MANAGEMENT UTILITY
// ============================================
class CookieManager {
  // Set a cookie with expiration
  static setCookie(name: string, value: string, days: number = 365) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
    // console.log(`Cookie set: ${name} = ${value}`);
  }

  // Get a cookie value
  static getCookie(name: string): string | null {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Delete a cookie
  static deleteCookie(name: string) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    // console.log(`Cookie deleted: ${name}`);
  }

  // Check if cookies are enabled
  static areCookiesEnabled(): boolean {
    try {
      document.cookie = 'cookietest=1';
      const cookiesEnabled = document.cookie.indexOf('cookietest=') !== -1;
      document.cookie = 'cookietest=1; expires=Thu, 01 Jan 1970 00:00:00 UTC';
      return cookiesEnabled;
    } catch (e) {
      return false;
    }
  }

  // Set essential cookies (always allowed)
  static setEssentialCookies() {
    this.setCookie('cookieConsent', 'essential', 365);
    this.setCookie('sessionId', this.generateSessionId(), 1);
    // console.log('Essential cookies set');
  }

  // Set analytics cookies
  static setAnalyticsCookies() {
    this.setCookie('analyticsEnabled', 'true', 365);
    this.setCookie('userId', this.generateUserId(), 365);
    this.setCookie('visitCount', this.getVisitCount().toString(), 365);
    // console.log('Analytics cookies set');
  }

  // Set marketing cookies
  static setMarketingCookies() {
    this.setCookie('marketingEnabled', 'true', 365);
    this.setCookie('adPreferences', 'personalized', 365);
    // console.log('Marketing cookies set');
  }

  // Set preferences cookies
  static setPreferencesCookies(preferences: any) {
    this.setCookie('userPreferences', JSON.stringify(preferences), 365);
    // console.log('Preferences cookies set');
  }

  // Accept all cookies
  static acceptAllCookies(userPreferences?: any) {
    this.setCookie('cookieConsent', 'accepted', 365);
    this.setEssentialCookies();
    this.setAnalyticsCookies();
    this.setMarketingCookies();
    
    if (userPreferences) {
      this.setPreferencesCookies(userPreferences);
    }

    // Store consent timestamp
    this.setCookie('consentTimestamp', new Date().toISOString(), 365);
    
    // Initialize tracking (if you have tracking scripts)
    this.initializeTracking();
  }

  // Reject all non-essential cookies
  static rejectAllCookies() {
    this.setCookie('cookieConsent', 'rejected', 365);
    this.setEssentialCookies(); // Only essential cookies
    
    // Delete any existing non-essential cookies
    this.deleteCookie('analyticsEnabled');
    this.deleteCookie('marketingEnabled');
    this.deleteCookie('userId');
    this.deleteCookie('adPreferences');
    
    // console.log('All non-essential cookies rejected');
  }

  // Get visit count
  static getVisitCount(): number {
    const count = this.getCookie('visitCount');
    return count ? parseInt(count) + 1 : 1;
  }

  // Generate session ID
  static generateSessionId(): string {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  // Generate user ID
  static generateUserId(): string {
    return 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  // Initialize tracking scripts (Google Analytics, Facebook Pixel, etc.)
  static initializeTracking() {
    // Google Analytics Example
    if (typeof window !== 'undefined' && this.getCookie('analyticsEnabled') === 'true') {
      // Example: Initialize Google Analytics
      // window.gtag('config', 'GA_MEASUREMENT_ID');
      // console.log('Analytics tracking initialized');
    }

    // Facebook Pixel Example
    if (typeof window !== 'undefined' && this.getCookie('marketingEnabled') === 'true') {
      // Example: Initialize Facebook Pixel
      // fbq('init', 'PIXEL_ID');
      // console.log('Marketing tracking initialized');
    }
  }

  // Get all cookie data
  static getAllCookieData(): Record<string, string> {
    const cookies: Record<string, string> = {};
    const cookieArray = document.cookie.split(';');
    
    cookieArray.forEach(cookie => {
      const [name, value] = cookie.trim().split('=');
      if (name && value) {
        cookies[name] = value;
      }
    });
    
    return cookies;
  }

  // Clear all cookies
  static clearAllCookies() {
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }
    
    // console.log('All cookies cleared');
  }
}

// ============================================
// COOKIE CONSENT COMPONENT
// ============================================
export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Check if cookies are enabled
    if (!CookieManager.areCookiesEnabled()) {
      console.warn('Cookies are disabled in this browser');
      return;
    }

    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    const cookieConsent = CookieManager.getCookie('cookieConsent');
    
    if (!consent && !cookieConsent) {
      // Show consent popup after a short delay for better UX
      setTimeout(() => {
        setShowConsent(true);
      }, 1000);
    } else if (consent === 'accepted' || cookieConsent === 'accepted') {
      // If previously accepted, reinitialize tracking
      CookieManager.initializeTracking();
    }
  }, []);

  const acceptAllCookies = () => {
    // Store in localStorage
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('consentDate', new Date().toISOString());
    
    // Get user preferences from localStorage if available
    const userPreferences = {
      language: localStorage.getItem('i18nextLng') || 'en',
      theme: localStorage.getItem('theme') || 'light',
    };

    // Set all cookies using CookieManager
    CookieManager.acceptAllCookies(userPreferences);
    
    // Close the popup
    setShowConsent(false);
    
    // console.log('All cookies accepted and stored');
    // console.log('Cookie data:', CookieManager.getAllCookieData());
  };

  const rejectAllCookies = () => {
    // Store in localStorage
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('consentDate', new Date().toISOString());
    
    // Only set essential cookies
    CookieManager.rejectAllCookies();
    
    // Close the popup
    setShowConsent(false);
    
    // console.log('All non-essential cookies rejected');
    // console.log('Essential cookies:', CookieManager.getAllCookieData());
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('cookie.title')}</h2>
          <p className={styles.description}>
            {t('cookie.description')}
          </p>
          <div className={styles.buttonGroup}>
            <button
              className={styles.rejectBtn}
              onClick={rejectAllCookies}
            >
              {t('cookie.rejectAll')}
            </button>
            <button
              className={styles.acceptBtn}
              onClick={acceptAllCookies}
            >
              {t('cookie.acceptAll')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// // Export CookieManager for use in other components
// export { CookieManager };