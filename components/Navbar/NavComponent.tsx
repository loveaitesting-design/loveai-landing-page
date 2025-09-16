// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { Search, ChevronDown, Globe, Menu, X } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import i18n from "../../i18n";
// import { useRouter, usePathname } from "next/navigation";

// export default function NavComponent() {
//   const { t } = useTranslation();
//   const [isMounted, setIsMounted] = useState(false);
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("English");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isSearchClosing, setIsSearchClosing] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const mobileMenuRef = useRef<HTMLDivElement>(null);
//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const searchInputContainerRef = useRef<HTMLDivElement>(null);

//   const router = useRouter();
//   const pathname = usePathname();

//   // // Handler for navigation links
//   // const handleNavClick = (section: string) => (e: React.MouseEvent) => {
//   //   e.preventDefault();
//   //   if (pathname !== "/") {
//   //     router.push("/#" + section);
//   //   } else {
//   //     const el = document.getElementById(section);
//   //     if (el) {
//   //       el.scrollIntoView({ behavior: "smooth" });
//   //     }
//   //   }
//   //   setIsMobileMenuOpen(false); // Also close mobile menu if open
//   // };
//   const handleNavClick = (section: string) => (e: React.MouseEvent) => {
//     e.preventDefault();

//     if (section === "pricing") {
//       // For Pricing → go to new page
//       router.push("/pricing");
//     }
//     if (section === "about") {
//       // For Pricing → go to new page
//       router.push("/about");
//     } else {
//       // For all others → existing single-page behavior
//       if (pathname !== "/") {
//         router.push("/#" + section);
//       } else {
//         const el = document.getElementById(section);
//         if (el) {
//           el.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//     }

//     setIsMobileMenuOpen(false);
//   };

//   const languages = [
//     { code: "en", name: "English", flag: "🇺🇸" },
//     { code: "he", name: "עברית", flag: "🇮🇱" },
//     { code: "ru", name: "Русский", flag: "🇷🇺" },
//   ];

//   // Fallback content that matches what server renders
//   const fallbackNav = {
//     home: "Home",
//     features: "Features",
//     matches: "Matches",
//     testimonials: "Testimonials",
//     pricing: "Pricing",
//     about: "About",
//     search: "Search...",
//     login: "Login",
//     register: "Register",
//     language: "Language",
//   };

//   useEffect(() => {
//     const currentLang = languages.find((lang) => lang.code === i18n.language);
//     setSelectedLanguage(currentLang ? currentLang.name : "English");
//     setIsMounted(true);
//     // Set initial RTL direction based on current language
//     if (typeof window !== "undefined") {
//       if (i18n.language === "he") {
//         document.documentElement.dir = "rtl";
//       } else {
//         document.documentElement.dir = "ltr";
//       }
//     }
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsLanguageOpen(false);
//       }
//       if (
//         mobileMenuRef.current &&
//         !mobileMenuRef.current.contains(event.target as Node)
//       ) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     // Focus search input when opened
//     if (isSearchOpen && searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [isSearchOpen]);

//   // Close search input when clicking outside
//   useEffect(() => {
//     if (!(isSearchOpen || isSearchClosing)) return;
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         searchInputContainerRef.current &&
//         !searchInputContainerRef.current.contains(event.target as Node)
//       ) {
//         handleCloseSearch();
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isSearchOpen, isSearchClosing]);

//   // Smooth close handler
//   const handleCloseSearch = () => {
//     setIsSearchClosing(true);
//     setTimeout(() => {
//       setIsSearchOpen(false);
//       setIsSearchClosing(false);
//     }, 300); // match transition duration
//   };

//   const handleLanguageSelect = (languageName: string) => {
//     const lang = languages.find((l) => l.name === languageName)?.code || "en";
//     setSelectedLanguage(languageName);
//     i18n.changeLanguage(lang);
//     setIsLanguageOpen(false);

//     // Apply RTL for Hebrew (client-side only)
//     if (typeof window !== "undefined") {
//       if (lang === "he") {
//         document.documentElement.dir = "rtl";
//       } else {
//         document.documentElement.dir = "ltr";
//       }
//     }
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <nav className="w-full fixed top-0 left-0 z-50 bg-[#ffffff] bg-opacity-50 backdrop-blur-md px-4 sm:px-6 py-4 flex items-center justify-between">
//         {/* Left: Logo + Name */}
//         <div className="flex items-center space-x-2 ml-4 sm:ml-20">
//           <a
//             href="#home"
//             onClick={handleNavClick("home")}
//             className="hover:text-sky-600 transition-colors"
//           >
//             <img
//               src="/loveai-logo.png"
//               alt="LoveAi"
//               className="w-20 sm:w-24 md:w-32"
//             />
//           </a>
//         </div>

//         {/* Center: Navigation Links - Hidden on mobile */}
//         <div className="hidden lg:flex space-x-10 font-semibold text-gray-700">
//           <a
//             href="#home"
//             onClick={handleNavClick("home")}
//             className="hover:text-sky-600 transition-colors"
//           >
//             {isMounted ? t("home") : fallbackNav.home}
//           </a>
//           <a
//             href="#features"
//             onClick={handleNavClick("features")}
//             className="hover:text-sky-600 transition-colors"
//           >
//             {isMounted ? t("features") : fallbackNav.features}
//           </a>
//           <a
//             href="#matches"
//             onClick={handleNavClick("matches")}
//             className="hover:text-sky-600 transition-colors"
//           >
//             {isMounted ? t("matches") : fallbackNav.matches}
//           </a>
//           <a
//             href="#testimonials"
//             onClick={handleNavClick("testimonials")}
//             className="hover:text-sky-600 transition-colors"
//           >
//             {isMounted ? t("testimonials") : fallbackNav.testimonials}
//           </a>
//           <a
//             href="/pricing"
//             onClick={handleNavClick("pricing")}
//             className="hover:text-sky-600 transition-colors"
//           >
//             {isMounted ? t("pricing") : fallbackNav.pricing}
//           </a>
//           <a
//             href="/about"
//             onClick={handleNavClick("about")}
//             className="hover:text-sky-600 transition-colors"
//           >
//             {isMounted ? t("about") : fallbackNav.about}
//           </a>
//         </div>

//         {/* Right: Search, Language, Login, Register - Hidden on mobile */}
//         <div className="hidden lg:flex items-center space-x-4 relative">
//           {/* Search Input with End Adornment */}
//           {/* <div
//             className="relative flex items-center"
//             style={{ minWidth: 36 }}
//             ref={searchInputContainerRef}
//           >
//             {!isSearchOpen && !isSearchClosing && (
//               <button
//                 className="flex items-center focus:outline-none"
//                 onClick={() => setIsSearchOpen(true)}
//                 aria-label="Open search"
//               >
//                 <Search className="cursor-pointer text-gray-500" size={18} />
//               </button>
//             )}
//             {(isSearchOpen || isSearchClosing) && (
//               <>
//                 <input
//                   ref={searchInputRef}
//                   type="text"
//                   placeholder={
//                     isMounted ? t("search") || "Search..." : fallbackNav.search
//                   }
//                   className={`bg-white border border-gray-200 rounded-full shadow-md px-3 py-1 text-gray-700 outline-none transition-all duration-300 pr-16 ${
//                     isSearchOpen && !isSearchClosing
//                       ? "w-48 opacity-100"
//                       : "w-0 opacity-0 pointer-events-none"
//                   } focus:w-64`}
//                   style={{ zIndex: 50, position: "relative" }}
//                 />
//                 <button
//                   className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
//                   style={{ zIndex: 999 }}
//                   onClick={handleCloseSearch}
//                   aria-label="Close search"
//                 >
//                   <X size={18} />
//                 </button>
//                 <button
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-sky-600 transition-colors"
//                   style={{ zIndex: 999 }}
//                   aria-label="Search"
//                 >
//                   <Search size={18} />
//                 </button>
//               </>
//             )}
//           </div> */}

//           {/* Custom Language Selector */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={() => setIsLanguageOpen(!isLanguageOpen)}
//               className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md"
//             >
//               <Globe size={16} className="text-gray-500" />
//               <span>{selectedLanguage}</span>
//               <ChevronDown
//                 size={14}
//                 className={`text-gray-500 transition-transform duration-200 ${
//                   isLanguageOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* Dropdown Menu */}
//             {isLanguageOpen && (
//               <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[160px] animate-in slide-in-from-top-2 duration-200">
//                 {languages.map((language) => (
//                   <button
//                     key={language.code}
//                     onClick={() => handleLanguageSelect(language.name)}
//                     className={`w-full flex items-center space-x-3 px-4 py-2 md:py-3 text-sm font-medium transition-colors duration-150 ${
//                       selectedLanguage === language.name
//                         ? "bg-sky-50 text-sky-600 border-r-2 border-sky-500"
//                         : "text-gray-700 hover:bg-gray-50"
//                     }`}
//                   >
//                     <span className="text-lg">{language.flag}</span>
//                     <span>{language.name}</span>
//                     {selectedLanguage === language.name && (
//                       <div className="ml-auto w-2 h-2 bg-sky-500 rounded-full"></div>
//                     )}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           <a href="https://www.loveai.co.il/login" target="_blank">
//             <button className="text-gray-700 font-medium hover:text-sky-600 transition-colors">
//               {isMounted ? t("login") : fallbackNav.login}
//             </button>
//           </a>

//           <a href="https://www.loveai.co.il/signup" target="_blank">
//             <button className="bg-sky-400 text-white rounded-full px-4 py-1.5 font-semibold hover:bg-sky-500 transition">
//               {isMounted ? t("register") : fallbackNav.register}
//             </button>
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden flex items-center space-x-2 relative">
//           {/* Mobile Search Input with End Adornment */}
//           <div
//             className="relative flex items-center"
//             style={{ minWidth: 36 }}
//             ref={searchInputContainerRef}
//           >
//             {!isSearchOpen && !isSearchClosing && (
//               <button
//                 className="flex items-center focus:outline-none"
//                 onClick={() => setIsSearchOpen(true)}
//                 aria-label="Open search"
//               >
//                 <Search className="cursor-pointer text-gray-500" size={18} />
//               </button>
//             )}
//             {(isSearchOpen || isSearchClosing) && (
//               <>
//                 <input
//                   ref={searchInputRef}
//                   type="text"
//                   placeholder={
//                     isMounted ? t("search") || "Search..." : fallbackNav.search
//                   }
//                   className={`bg-white border border-gray-200 rounded-full shadow-md px-3 py-1 text-gray-700 outline-none transition-all duration-300 pr-16 ${
//                     isSearchOpen && !isSearchClosing
//                       ? "w-40 opacity-100"
//                       : "w-0 opacity-0 pointer-events-none"
//                   } focus:w-56`}
//                   style={{ zIndex: 50, position: "relative" }}
//                 />
//                 <button
//                   className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
//                   style={{ zIndex: 999 }}
//                   onClick={handleCloseSearch}
//                   aria-label="Close search"
//                 >
//                   <X size={18} />
//                 </button>
//                 <button
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-sky-600 transition-colors"
//                   style={{ zIndex: 999 }}
//                   aria-label="Search"
//                 >
//                   <Search size={18} />
//                 </button>
//               </>
//             )}
//           </div>
//           <button
//             onClick={toggleMobileMenu}
//             className="p-2 rounded-md hover:bg-gray-100 transition-colors"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay - Outside navbar container */}
//       {isMobileMenuOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[9999]"
//           onClick={() => setIsMobileMenuOpen(false)}
//         >
//           <div
//             ref={mobileMenuRef}
//             className="absolute top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[10000]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="p-6">
//               {/* Close button */}
//               <div className="flex justify-end mb-6">
//                 <button
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="p-2 rounded-md hover:bg-gray-100 transition-colors"
//                 >
//                   <X size={24} />
//                 </button>
//               </div>

//               {/* Mobile Navigation Links */}
//               <div className="space-y-4 mb-8">
//                 <a
//                   href="#home"
//                   className="block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors"
//                   onClick={handleNavClick("home")}
//                 >
//                   {isMounted ? t("home") : fallbackNav.home}
//                 </a>
//                 <a
//                   href="#features"
//                   className="block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors"
//                   onClick={handleNavClick("features")}
//                 >
//                   {isMounted ? t("features") : fallbackNav.features}
//                 </a>
//                 <a
//                   href="#matches"
//                   className="block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors"
//                   onClick={handleNavClick("matches")}
//                 >
//                   {isMounted ? t("matches") : fallbackNav.matches}
//                 </a>
//                 <a
//                   href="#testimonials"
//                   className="block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors"
//                   onClick={handleNavClick("testimonials")}
//                 >
//                   {isMounted ? t("testimonials") : fallbackNav.testimonials}
//                 </a>
//                 <a
//                   href="/pricing"
//                   className="block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors"
//                   onClick={handleNavClick("pricing")}
//                 >
//                   {isMounted ? t("pricing") : fallbackNav.pricing}
//                 </a>

//                 <a
//                   href="/about"
//                   className="block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors"
//                   onClick={handleNavClick("about")}
//                 >
//                   {isMounted ? t("about") : fallbackNav.about}
//                 </a>
//               </div>

//               {/* Mobile Language Selector */}
//               <div className="mb-8">
//                 <h3 className="text-sm font-medium text-gray-500 mb-3">
//                   {isMounted ? t("language") : fallbackNav.language}
//                 </h3>
//                 <div className="space-y-2">
//                   {languages.map((language) => (
//                     <button
//                       key={language.code}
//                       onClick={() => handleLanguageSelect(language.name)}
//                       className={`w-full flex items-center space-x-3 px-4 py-2 md:py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
//                         selectedLanguage === language.name
//                           ? "bg-sky-50 text-sky-600 border border-sky-200"
//                           : "text-gray-700 hover:bg-gray-50"
//                       }`}
//                     >
//                       <span className="text-lg">{language.flag}</span>
//                       <span>{language.name}</span>
//                       {selectedLanguage === language.name && (
//                         <div className="ml-auto w-2 h-2 bg-sky-500 rounded-full"></div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Mobile Auth Buttons */}
//               <div className="space-y-3">
//                 <a
//                   href="https://www.loveai.co.il/login"
//                   target="_blank"
//                   className="block"
//                 >
//                   <button className="w-full text-gray-700 font-medium px-4 py-2 md:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                     {isMounted ? t("login") : fallbackNav.login}
//                   </button>
//                 </a>
//                 <a
//                   href="https://www.loveai.co.il/signup"
//                   target="_blank"
//                   className="block"
//                 >
//                   <button className="w-full bg-sky-400 text-white rounded-lg px-4 py-2 md:py-3 font-semibold hover:bg-sky-500 transition">
//                     {isMounted ? t("register") : fallbackNav.register}
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Remove previous fade-in-slide animation, not needed for this effect */}
//       <style jsx global>{`
//         /* No extra keyframes needed, handled by tailwind/transition-all */
//       `}</style>
//     </>
//   );
// }
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Globe, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useRouter, usePathname } from "next/navigation";

export default function NavComponent() {
  const { t, ready } = useTranslation(); // Add 'ready' to check if translations are loaded
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

  // Enhanced fallback content
  const fallbackNav = {
    home: "Home",
    features: "Features",
    matches: "Matches",
    testimonials: "Testimonials",
    pricing: "Pricing",
    about: "About",
    search: "Search...",
    login: "Login",
    register: "Register",
    language: "Language",
  };

  // Hebrew fallback for debugging
  const hebrewFallback = {
    home: "בית",
    features: "תכונות",
    matches: "התאמות",
    testimonials: "המלצות",
    pricing: "תמחור",
    about: "אודות",
    search: "חיפוש...",
    login: "התחברות",
    register: "הרשמה",
    language: "שפה",
  };

  // Helper function to get translated text with fallback
  const getTranslation = (key: string): string => {
    if (!ready || !isMounted) {
      // If translations aren't ready, use appropriate fallback
      if (i18n.language === "he") {
        return hebrewFallback[key as keyof typeof hebrewFallback] || fallbackNav[key as keyof typeof fallbackNav];
      }
      return fallbackNav[key as keyof typeof fallbackNav];
    }
    
    const translation = t(key);
    
    // Debug: Log the translation result
    console.log(`Translation for '${key}' in '${i18n.language}':`, translation);
    
    // If translation returns the key itself (meaning no translation found), use fallback
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
    
    // Set initial RTL direction based on current language
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      if (i18n.language === "he") {
        html.dir = "rtl";
        html.lang = "he";
        // Add Hebrew font support
        html.style.fontFamily = "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif";
      } else {
        html.dir = "ltr";
        html.lang = i18n.language;
        html.style.fontFamily = "";
      }
    }
  }, []);

  // Add effect to handle language changes
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

    // Apply RTL for Hebrew (client-side only)
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

  // Get current language direction
  const isRTL = i18n.language === "he";

  return (
    <>
      <nav className={`w-full fixed top-0 left-0 z-50 bg-[#ffffff] bg-opacity-50 backdrop-blur-md px-4 sm:px-6 py-4 flex items-center justify-between ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Left: Logo + Name (Right in RTL) */}
        <div className={`flex items-center space-x-2 ${isRTL ? 'mr-4 sm:mr-20' : 'ml-4 sm:ml-20'}`}>
          <a
            href="#home"
            onClick={handleNavClick("home")}
            className="hover:text-sky-600 transition-colors"
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
            className="hover:text-sky-600 transition-colors"
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
            className="hover:text-sky-600 transition-colors"
            style={{ 
              fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
            }}
          >
            {getTranslation("features")}
          </a>
          <a
            href="#matches"
            onClick={handleNavClick("matches")}
            className="hover:text-sky-600 transition-colors"
            style={{ 
              fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
            }}
          >
            {getTranslation("matches")}
          </a>
          <a
            href="#testimonials"
            onClick={handleNavClick("testimonials")}
            className="hover:text-sky-600 transition-colors"
            style={{ 
              fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
            }}
          >
            {getTranslation("testimonials")}
          </a>
          <a
            href="/pricing"
            onClick={handleNavClick("pricing")}
            className="hover:text-sky-600 transition-colors"
            style={{ 
              fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
            }}
          >
            {getTranslation("pricing")}
          </a>
          <a
            href="/about"
            onClick={handleNavClick("about")}
            className="hover:text-sky-600 transition-colors"
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
              className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md"
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
                    className={`w-full flex items-center space-x-3 px-4 py-2 md:py-3 text-sm font-medium transition-colors duration-150 ${
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

          <a href="https://www.loveai.co.il/login" target="_blank">
            <button className="text-gray-700 font-medium hover:text-sky-600 transition-colors"
              style={{ 
                fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
              }}
            >
              {getTranslation("login")}
            </button>
          </a>

          <a href="https://www.loveai.co.il/signup" target="_blank">
            <button className="bg-sky-400 text-white rounded-full px-4 py-1.5 font-semibold hover:bg-sky-500 transition"
              style={{ 
                fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
              }}
            >
              {getTranslation("register")}
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
                className="flex items-center focus:outline-none"
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
                  className={`bg-white border border-gray-200 rounded-full shadow-md px-3 py-1 text-gray-700 outline-none transition-all duration-300 pr-16 ${
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
                  className={`absolute ${isRTL ? 'left-10' : 'right-10'} top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors`}
                  style={{ zIndex: 999 }}
                  onClick={handleCloseSearch}
                  aria-label="Close search"
                >
                  <X size={18} />
                </button>
                <button
                  className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-gray-500 hover:text-sky-600 transition-colors`}
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
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
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
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-4 mb-8">
                <a
                  href="#home"
                  className={`block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                  onClick={handleNavClick("home")}
                >
                  {getTranslation("home")}
                </a>
                <a
                  href="#features"
                  className={`block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                  onClick={handleNavClick("features")}
                >
                  {getTranslation("features")}
                </a>
                <a
                  href="#matches"
                  className={`block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                  onClick={handleNavClick("matches")}
                >
                  {getTranslation("matches")}
                </a>
                <a
                  href="#testimonials"
                  className={`block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                  onClick={handleNavClick("testimonials")}
                >
                  {getTranslation("testimonials")}
                </a>
                <a
                  href="/pricing"
                  className={`block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
                  onClick={handleNavClick("pricing")}
                >
                  {getTranslation("pricing")}
                </a>

                <a
                  href="/about"
                  className={`block py-3 text-lg font-semibold text-gray-700 hover:text-sky-600 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
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
                      className={`w-full flex items-center space-x-3 px-4 py-2 md:py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
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
                  <button className="w-full text-gray-700 font-medium px-4 py-2 md:py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    style={{ 
                      fontFamily: isRTL ? "Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif" : 'inherit'
                    }}
                  >
                    {getTranslation("login")}
                  </button>
                </a>
                <a
                  href="https://www.loveai.co.il/signup"
                  target="_blank"
                  className="block"
                >
                  <button className="w-full bg-sky-400 text-white rounded-lg px-4 py-2 md:py-3 font-semibold hover:bg-sky-500 transition"
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

      {/* Add Hebrew font support via CSS */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@400;500;600;700&display=swap');
        
        [dir="rtl"] {
          font-family: Arial, 'Noto Sans Hebrew', 'David Libre', sans-serif !important;
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