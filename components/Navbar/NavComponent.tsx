"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Globe, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useRouter, usePathname } from "next/navigation";
import SEOHead from "../seo/SEOHead";

export default function NavComponent() {
  const { t, ready } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchClosing, setIsSearchClosing] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchInputContainerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (section: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    if (section === "pricing") {
      router.push("/pricing");
    }
    if (section === "about") {
      router.push("/about");
    } else {
      if (pathname !== "/") {
        router.push("/#" + section);
      } else {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    setIsMobileMenuOpen(false);
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "he", name: "עברית", flag: "🇮🇱" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ];

  const fallbackNav = {
    home: "Home",
    features: "Features",
    matches: "Matches",
    testimonials: "Testimonials",
    pricing: "Pricing",
    about: "About",
    search: "Search...",
    login: "Login",
    signin:"Sign In",
    register: "Register",
    language: "Language",
  };

  const hebrewFallback = {
    home: "בית",
    features: "תכונות",
    matches: "התאמות",
    testimonials: "המלצות",
    pricing: "תמחור",
    about: "אודות",
    search: "חיפוש...",
    login: "התחברות",
    signin:"התחבר",
    register: "הרשמה",
    language: "שפה",
  };

  const getTranslation = (key: string): string => {
    if (!ready || !isMounted) {
      if (i18n.language === "he") {
        return hebrewFallback[key as keyof typeof hebrewFallback] || fallbackNav[key as keyof typeof fallbackNav];
      }
      return fallbackNav[key as keyof typeof fallbackNav];
    }
    
    const translation = t(key);
    
    console.log(`Translation for '${key}' in '${i18n.language}':`, translation);
    
    if (translation === key) {
      if (i18n.language === "he") {
        return hebrewFallback[key as keyof typeof hebrewFallback] || fallbackNav[key as keyof typeof fallbackNav];
      }
      return fallbackNav[key as keyof typeof fallbackNav];
    }
    
    return translation;
  };

  useEffect(() => {
    const currentLang = languages.find((lang) => lang.code === i18n.language);
    setSelectedLanguage(currentLang ? currentLang.name : "English");
    setIsMounted(true);
    
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      if (i18n.language === "he") {
        html.dir = "rtl";
        html.lang = "he";
        html.style.fontFamily = "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif";
      } else {
        html.dir = "ltr";
        html.lang = i18n.language;
        html.style.fontFamily = "";
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      if (i18n.language === "he") {
        html.dir = "rtl";
        html.lang = "he";
        html.style.fontFamily = "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif";
      } else {
        html.dir = "ltr";
        html.lang = i18n.language;
        html.style.fontFamily = "";
      }
    }
  }, [i18n.language]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (!(isSearchOpen || isSearchClosing)) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        searchInputContainerRef.current &&
        !searchInputContainerRef.current.contains(event.target as Node)
      ) {
        handleCloseSearch();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen, isSearchClosing]);

  const handleCloseSearch = () => {
    setIsSearchClosing(true);
    setTimeout(() => {
      setIsSearchOpen(false);
      setIsSearchClosing(false);
    }, 300);
  };

  const handleLanguageSelect = (languageName: string) => {
    const lang = languages.find((l) => l.name === languageName)?.code || "en";
    setSelectedLanguage(languageName);
    i18n.changeLanguage(lang);
    setIsLanguageOpen(false);

    if (typeof window !== "undefined") {
      const html = document.documentElement;
      if (lang === "he") {
        html.dir = "rtl";
        html.lang = "he";
        html.style.fontFamily = "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif";
      } else {
        html.dir = "ltr";
        html.lang = lang;
        html.style.fontFamily = "";
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isRTL = i18n.language === "he";

  return (
    <>
      <nav className={`w-full fixed top-0 left-0 z-50 bg-[#ffffff] bg-opacity-50 backdrop-blur-md px-4 sm:px-6 py-4 flex items-center justify-between ${isRTL ? 'rtl' : 'ltr'}`}>
              <SEOHead title="LoveAi - Find Real Love with AI" url="https://www.loveai.co.il/" />

        {/* Left: Logo + Name (Right in RTL) */}
        <div className={`flex items-center space-x-2 ${isRTL ? 'mr-4 sm:mr-20' : 'ml-4 sm:ml-20'}`}>
          <a
            href="#home"
            onClick={handleNavClick("home")}
            className="hover:text-sky-600 transition-colors focus:outline-none"
          >
            <img
              src="/loveai-logo.png"
              alt="LoveAi"
              className="w-20 sm:w-24 md:w-32"
            />
          </a>
        </div>

        {/* Center: Navigation Links - Hidden on mobile */}
        <div className={`hidden lg:flex space-x-10 font-semibold text-gray-700 ${isRTL ? 'space-x-reverse' : ''}`}>
          <a
            href="#home"
            onClick={handleNavClick("home")}
            className="hover:text-sky-600 transition-colors focus:outline-none focus:ring-0"
            style={{ 
              minWidth: '40px', 
              textAlign: 'center',
              fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
            }}
          >
            {getTranslation("home")}
          </a>
          <a
            href="#features"
            onClick={handleNavClick("features")}
            className="hover:text-sky-600 transition-colors focus:outline-none focus:ring-0"
            style={{ 
              fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
            }}
          >
            {getTranslation("features")}
          </a>
          <a
            href="#matches"
            onClick={handleNavClick("matches")}
            className="hover:text-sky-600 transition-colors focus:outline-none focus:ring-0"
            style={{ 
              fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
            }}
          >
            {getTranslation("matches")}
          </a>
          <a
            href="#testimonials"
            onClick={handleNavClick("testimonials")}
            className="hover:text-sky-600 transition-colors focus:outline-none focus:ring-0"
            style={{ 
              fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
            }}
          >
            {getTranslation("testimonials")}
          </a>
          <a
            href="/pricing"
            onClick={handleNavClick("pricing")}
            className="hover:text-sky-600 transition-colors focus:outline-none focus:ring-0"
            style={{ 
              fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
            }}
          >
            {getTranslation("pricing")}
          </a>
          <a
            href="/about"
            onClick={handleNavClick("about")}
            className="hover:text-sky-600 transition-colors focus:outline-none focus:ring-0"
            style={{ 
              fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
            }}
          >
            {getTranslation("about")}
          </a>
        </div>

        {/* Right: Search, Language, Login, Register - Hidden on mobile (Left in RTL) */}
        <div className={`hidden lg:flex items-center space-x-4 relative ${isRTL ? 'space-x-reverse' : ''}`}>
          {/* Custom Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-0"
            >
              <Globe size={16} className="text-gray-500" />
              <span>{selectedLanguage}</span>
              <ChevronDown
                size={14}
                className={`text-gray-500 transition-transform duration-200 ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isLanguageOpen && (
              <div className={`absolute top-full mt-2 ${isRTL ? 'left-0' : 'right-0'} bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[160px] animate-in slide-in-from-top-2 duration-200`}>
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageSelect(language.name)}
                    className={`w-full flex items-center space-x-3 px-4 py-2 md:py-3 text-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-0 ${
                      selectedLanguage === language.name
                        ? `bg-sky-50 text-sky-600 ${isRTL ? 'border-l-2' : 'border-r-2'} border-sky-500`
                        : "text-gray-700 hover:bg-gray-50"
                    } ${isRTL ? 'space-x-reverse' : ''}`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span>{language.name}</span>
                    {selectedLanguage === language.name && (
                      <div className={`${isRTL ? 'mr-auto' : 'ml-auto'} w-2 h-2 bg-sky-500 rounded-full`}></div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* <a href="https://www.loveai.co.il/login" target="_blank">
            <button className="bg-sky-400 text-white rounded-full px-4 py-1.5 font-semibold hover:bg-sky-500 transition focus:outline-none focus:ring-0"
              style={{ 
                fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
              }}
            >
              {t("signin")}
            </button>
          </a> */}
          <a 
    href="https://www.loveai.co.il/login" 
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center"
  >
    <button 
      className="bg-sky-400 text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-sky-500 active:bg-sky-600 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-0 whitespace-nowrap"
      style={{ 
        fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit',
        minHeight: '40px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {getTranslation("signin")}
    </button>
  </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2 relative">
          {/* Mobile Search Input with End Adornment */}
          <div
            className="relative flex items-center"
            style={{ minWidth: 36 }}
            ref={searchInputContainerRef}
          >
            {!isSearchOpen && !isSearchClosing && (
              <button
                className="flex items-center focus:outline-none focus:ring-0"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
              >
                <Search className="cursor-pointer text-gray-500" size={18} />
              </button>
            )}
            {(isSearchOpen || isSearchClosing) && (
              <>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={getTranslation("search")}
                  className={`bg-white border border-gray-200 rounded-full shadow-md px-3 py-1 text-gray-700 outline-none transition-all duration-300 pr-16 focus:ring-0 focus:border-sky-400 ${
                    isSearchOpen && !isSearchClosing
                      ? "w-40 opacity-100"
                      : "w-0 opacity-0 pointer-events-none"
                  } focus:w-56 ${isRTL ? 'text-right' : 'text-left'}`}
                  style={{ 
                    zIndex: 50, 
                    position: "relative",
                    direction: isRTL ? 'rtl' : 'ltr',
                    fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
                  }}
                />
                <button
                  className={`absolute ${isRTL ? 'left-10' : 'right-10'} top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors focus:outline-none focus:ring-0`}
                  style={{ zIndex: 999 }}
                  onClick={handleCloseSearch}
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
                <button
                  className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-gray-500 hover:text-sky-600 transition-colors focus:outline-none focus:ring-0`}
                  style={{ zIndex: 999 }}
                  aria-label="Search"
                >
                  <Search size={18} />
                </button>
              </>
            )}
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-0"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside navbar container */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[9999]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            ref={mobileMenuRef}
            className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[10000]`}
            onClick={(e) => e.stopPropagation()}
            style={{ 
              direction: isRTL ? 'rtl' : 'ltr',
              fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
            }}
          >
            <div className="p-6">
              {/* Close button */}
              <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} mb-6`}>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-0"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-4 mb-8">
                <a
                  href="#home"
                  className={`block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors focus:outline-none focus:ring-0 ${isRTL ? 'text-right' : 'text-left'}`}
                  onClick={handleNavClick("home")}
                >
                  {getTranslation("home")}
                </a>
                <a
                  href="#features"
                  className={`block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors focus:outline-none focus:ring-0 ${isRTL ? 'text-right' : 'text-left'}`}
                  onClick={handleNavClick("features")}
                >
                  {getTranslation("features")}
                </a>
                <a
                  href="#matches"
                  className={`block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors focus:outline-none focus:ring-0 ${isRTL ? 'text-right' : 'text-left'}`}
                  onClick={handleNavClick("matches")}
                >
                  {getTranslation("matches")}
                </a>
                <a
                  href="#testimonials"
                  className={`block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors focus:outline-none focus:ring-0 ${isRTL ? 'text-right' : 'text-left'}`}
                  onClick={handleNavClick("testimonials")}
                >
                  {getTranslation("testimonials")}
                </a>
                <a
                  href="/pricing"
                  className={`block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors focus:outline-none focus:ring-0 ${isRTL ? 'text-right' : 'text-left'}`}
                  onClick={handleNavClick("pricing")}
                >
                  {getTranslation("pricing")}
                </a>

                <a
                  href="/about"
                  className={`block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors focus:outline-none focus:ring-0 ${isRTL ? 'text-right' : 'text-left'}`}
                  onClick={handleNavClick("about")}
                >
                  {getTranslation("about")}
                </a>
              </div>

              {/* Mobile Language Selector */}
              <div className="mb-8">
                <h3 className={`text-sm font-medium text-gray-500 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {getTranslation("language")}
                </h3>
                <div className="space-y-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageSelect(language.name)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 md:py-3 text-sm font-medium rounded-lg transition-colors duration-150 focus:outline-none focus:ring-0 ${
                        selectedLanguage === language.name
                          ? "bg-sky-50 text-sky-600 border border-sky-200"
                          : "text-gray-700 hover:bg-gray-50"
                      } ${isRTL ? 'space-x-reverse' : ''}`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span>{language.name}</span>
                      {selectedLanguage === language.name && (
                        <div className={`${isRTL ? 'mr-auto' : 'ml-auto'} w-2 h-2 bg-sky-500 rounded-full`}></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="space-y-3">
                <a
                  href="https://www.loveai.co.il/login"
                  target="_blank"
                  className="block"
                >
                  <button className="w-full text-gray-700 font-medium px-4 py-2 md:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-0"
                    style={{ 
                      fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
                    }}
                  >
                    {getTranslation("login")}
                  </button>
                </a>
                <a
                  href="https://www.loveai.co.il/login"
                  target="_blank"
                  className="block"
                >
                  <button className="w-full bg-sky-400 text-white rounded-lg px-4 py-2 md:py-3 font-semibold hover:bg-sky-500 transition focus:outline-none focus:ring-0"
                    style={{ 
                      fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
                    }}
                  >
                    {getTranslation("register")}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS to remove all focus outlines */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@400;500;600;700&display=swap');
        
        [dir="rtl"] {
          font-family: Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif !important;
        }
        
        /* Remove focus outlines globally for navigation elements */
        nav a:focus,
        nav button:focus,
        nav input:focus {
          outline: none !important;
          box-shadow: none !important;
        }
        
        /* Specifically target Tailwind's focus ring utilities */
        .focus\\:outline-none:focus {
          outline: 2px solid transparent !important;
          outline-offset: 2px !important;
        }
        
        .focus\\:ring-0:focus {
          --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
          --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
        }
        
        /* Ensure Hebrew text is properly aligned */
        [dir="rtl"] .space-x-reverse > :not([hidden]) ~ :not([hidden]) {
          --tw-space-x-reverse: 1;
          margin-right: calc(2.5rem * var(--tw-space-x-reverse));
          margin-left: calc(2.5rem * calc(1 - var(--tw-space-x-reverse)));
        }
      `}</style>
    </>
  );
}