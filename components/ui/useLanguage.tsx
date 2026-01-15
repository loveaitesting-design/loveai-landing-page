import * as React from 'react';
import { createContext, useContext, useState, ReactNode } from 'react';
// import { translations } from '@/utils/translations';

type Language = 'he' | 'en';
// type Translations = typeof translations.he;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = React.useState<Language>(() => {
    // Safely get saved language from localStorage or default to Hebrew
    try {
      const savedLang = localStorage.getItem('preferred-language') as Language;
      return (savedLang && ['he', 'en'].includes(savedLang)) ? savedLang : 'he';
    } catch (error) {
      console.warn('Error accessing localStorage:', error);
      return 'he';
    }
  });
  
  const dir = language === 'he' ? 'rtl' : 'ltr';

  const toggleLanguage = () => {
    try {
      const languages: Language[] = ['he', 'en'];
      const currentIndex = languages.indexOf(language);
      const nextIndex = (currentIndex + 1) % languages.length;
      const newLang = languages[nextIndex];
      setLanguage(newLang);
      localStorage.setItem('preferred-language', newLang);
    } catch (error) {
      console.warn('Error toggling language:', error);
    }
  };

  const setLanguageWithStorage = (lang: Language) => {
    try {
      setLanguage(lang);
      localStorage.setItem('preferred-language', lang);
    } catch (error) {
      console.warn('Error setting language:', error);
      // Still set the language even if localStorage fails
      setLanguage(lang);
    }
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    // let value: any = translations[language];
    
    // for (const k of keys) {
    //   value = value?.[k];
    //   if (value === undefined) break;
    // }
    
    // return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageWithStorage, toggleLanguage, t, dir }}>
      <div dir={dir} className={dir}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};