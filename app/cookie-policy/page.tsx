'use client'

import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import PolicyLayout from '@/components/PolicyLayout';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, CircleSlash, Settings,Mail, Phone ,Cookie,Zap,BarChart2,Megaphone} from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import AccessibilityWidget from "@/components/AccessibilityWidget";

export default function CookiePolicyPage() {
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation();

  // Toggle states for each cookie type
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Always true and can't be changed
    functional: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getTranslatedText = (key: string, fallback: string = '') => {
    return isMounted ? t(key, { defaultValue: fallback }) : fallback;
  };

  // Toggle handler function
  const handleToggle = (cookieType: string) => {
    if (cookieType === 'essential') return; // Essential cookies can't be toggled
    
    setCookieSettings(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType]
    }));
  };

  return (
    <PolicyLayout>
      <AccessibilityProvider>
              <AccessibilityWidget/>
            <SEOHead title="LoveAi - Find Real Love with AI" url="https://www.loveai.co.il/" />
      <div className="pt-[72px]" style={{ background: 'white' }}>
        {/* Header Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           {/* Title and Last Updated */}
            <div className="text-center mb-12 mt-6">
              <h1 className="text-sky-400 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[60px] mb-4">
                {getTranslatedText('cookie_policy.title', 'Cookie Policy')}
              </h1>
              <p className="text-gray-600 text-lg">
                {getTranslatedText('cookie_policy.last_updated_label', 'Last updated:')} {getTranslatedText('cookie_policy.last_updated_date', 'August 22, 2025')}
              </p>
            </div>
          <div className="border-[20px] border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto bg-white/60 backdrop-blur-sm mt-[46px] mb-[46px]">

            <div className="space-y-[40px]">
              {/* Introduction Box */}
              <div className="border border-gray-200 rounded-xl p-6 bg-white/80">
                <p className="text-black font-normal text-base sm:text-lg md:text-[20px] leading-relaxed">
                  {getTranslatedText('cookie_policy.intro.main', 'LoveAI website uses cookies to improve your browsing experience, provide personalized functionality, and analyze website usage. This page explains what cookies are, how we use them, and how you can manage them.')}
                </p>
              </div>

              {/* What are cookies section */}
              <div className="border border-gray-200 rounded-xl p-6 bg-white/80">
<div className="flex items-center gap-3 mb-4">
  <div className="w-8 h-8 rounded-full flex items-center justify-center">
    <Cookie size={20} className="text-black" />
  </div>
  <h2 className="text-black font-bold text-xl sm:text-2xl md:text-[28px]">
    {getTranslatedText('cookie_policy.section1.title', 'What are cookies?')}
  </h2>
</div>

                <p className="text-black font-normal text-base sm:text-lg md:text-[18px] leading-relaxed">
                  {getTranslatedText('cookie_policy.section1.description', 'Cookies are small text files stored on your device when you visit websites. They help websites remember your information and provide a personalized experience.')}
                </p>
              </div>

              {/* Manage Cookie Settings */}
              <div className="space-y-6">
                <h2 className="text-black text-center font-bold text-2xl md:text-[30px] mb-8">
                  {getTranslatedText('cookie_policy.manage_title', 'Manage Cookie Settings')}
                </h2>

                {/* Essential Cookies Card */}
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
               
<div className="flex items-center gap-3">
  <div className="text-#27D3F5]">
    <Zap size={22} strokeWidth={2.5} />
  </div>
  <h3 className="text-black font-bold text-lg md:text-xl">
    {getTranslatedText('cookie_policy.essential.title', 'Essential Cookies')}
  </h3>
  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
    {getTranslatedText('cookie_policy.essential.required', 'Required')}
  </span>
</div>

                    <div 
                      className={`w-12 h-6 ${cookieSettings.essential ? 'bg-sky-400' : 'bg-gray-300'} rounded-full relative cursor-not-allowed`}
                      onClick={() => handleToggle('essential')}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute ${cookieSettings.essential ? 'right-0.5' : 'left-0.5'} top-0.5 shadow transition-all duration-200`}></div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    {getTranslatedText('cookie_policy.essential.description', 'These cookies are necessary for the basic functionality of the website')}
                  </p>
                  <ul className="space-y-2">
                    {[
                      getTranslatedText('cookie_policy.essential.list1', 'Login session memory'),
                      getTranslatedText('cookie_policy.essential.list2', 'Language preferences'),
                      getTranslatedText('cookie_policy.essential.list3', 'Shopping cart and security'),
                      getTranslatedText('cookie_policy.essential.list4', 'Preventing security attacks')
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-lg text-black-600">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Functional Cookies Card */}
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                 
<div className="flex items-center gap-3">
  <div className="text-#27D3F5]">
    <Settings size={22} strokeWidth={2.5} />
  </div>
  <h3 className="text-black font-bold text-lg md:text-xl">
    {getTranslatedText('cookie_policy.functional.title', 'Functional Cookies')}
  </h3>
  <span className="bg-sky-400 text-white px-2 py-1 rounded text-xs font-medium">
    {getTranslatedText('cookie_policy.functional.optional', 'Optional')}
  </span>
</div>

                    <div 
                      className={`w-12 h-6 ${cookieSettings.functional ? 'bg-sky-400' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
                      onClick={() => handleToggle('functional')}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute ${cookieSettings.functional ? 'right-0.5' : 'left-0.5'} top-0.5 shadow transition-all duration-200`}></div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    {getTranslatedText('cookie_policy.functional.description', 'Cookies that enhance website functionality and customize it for you')}
                  </p>
                  <ul className="space-y-2">
                    {[
                      getTranslatedText('cookie_policy.functional.list1', 'Personal preference memory'),
                      getTranslatedText('cookie_policy.functional.list2', 'User convenience settings'),
                      getTranslatedText('cookie_policy.functional.list3', 'Search history'),
                      getTranslatedText('cookie_policy.functional.list4', 'Personalized recommendations')
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-lg text-black-600">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Analytics Cookies Card */}
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                  
<div className="flex items-center gap-3">
  <div className="text-#27D3F5]">
    <BarChart2 size={22} strokeWidth={2.5} />
  </div>
  <h3 className="text-black font-bold text-lg md:text-xl">
    {getTranslatedText('cookie_policy.analytics.title', 'Analytics Cookies')}
  </h3>
  <span className="bg-sky-400 text-white px-2 py-1 rounded text-xs font-medium">
    {getTranslatedText('cookie_policy.analytics.optional', 'Optional')}
  </span>
</div>

                    <div 
                      className={`w-12 h-6 ${cookieSettings.analytics ? 'bg-sky-400' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
                      onClick={() => handleToggle('analytics')}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute ${cookieSettings.analytics ? 'right-0.5' : 'left-0.5'} top-0.5 shadow transition-all duration-200`}></div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    {getTranslatedText('cookie_policy.analytics.description', 'Cookies that help us understand how users use the website')}
                  </p>
                  <ul className="space-y-2">
                    {[
                      getTranslatedText('cookie_policy.analytics.list1', 'Website traffic measurement'),
                      getTranslatedText('cookie_policy.analytics.list2', 'User behavior analysis'),
                      getTranslatedText('cookie_policy.analytics.list3', 'Website performance improvement'),
                      getTranslatedText('cookie_policy.analytics.list4', 'Feature effectiveness testing')
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-lg text-black-600">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Marketing Cookies Card */}
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">

<div className="flex items-center gap-3">
  <div className="text-black-500">
    <Megaphone size={22} strokeWidth={2.5} />
  </div>
  <h3 className="text-black font-bold text-lg md:text-xl">
    {getTranslatedText('cookie_policy.marketing.title', 'Marketing Cookies')}
  </h3>
  <span className="bg-sky-400 text-white px-2 py-1 rounded text-xs font-medium">
    {getTranslatedText('cookie_policy.marketing.optional', 'Optional')}
  </span>
</div>

                    <div 
                      className={`w-12 h-6 ${cookieSettings.marketing ? 'bg-sky-400' : 'bg-gray-300'} rounded-full relative cursor-pointer`}
                      onClick={() => handleToggle('marketing')}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full absolute ${cookieSettings.marketing ? 'right-0.5' : 'left-0.5'} top-0.5 shadow transition-all duration-200`}></div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-4">
                    {getTranslatedText('cookie_policy.marketing.description', 'Cookies used to display relevant advertisements')}
                  </p>
                  <ul className="space-y-2">
                    {[
                      getTranslatedText('cookie_policy.marketing.list1', 'Personalized advertising'),
                      getTranslatedText('cookie_policy.marketing.list2', 'Campaign effectiveness tracking'),
                      getTranslatedText('cookie_policy.marketing.list3', 'Social media sharing'),
                      getTranslatedText('cookie_policy.marketing.list4', 'Remarketing')
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-lg text-black-600">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cookie Settings Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-6">
  {/* Accept All */}
  <button 
    className="flex items-center gap-2 bg-sky-400 text-white px-8 py-3 rounded-2xl font-medium hover:bg-sky-600 transition-colors"
    onClick={() => setCookieSettings({
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    })}
  >
    <CheckCircle2 className="w-5 h-5" />
    {getTranslatedText('cookie_policy.buttons.accept_all', 'Accept All')}
  </button>

  {/* Reject Optional */}
  <button 
    className="flex items-center gap-2 border-2 border-sky-400 text-sky-400 px-8 py-3 rounded-2xl font-medium hover:bg-sky-600 hover:text-white transition-colors"
    onClick={() => setCookieSettings({
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    })}
  >
    <CircleSlash className="w-5 h-5" />
    {getTranslatedText('cookie_policy.buttons.reject_optional', 'Reject Optional')}
  </button>

  {/* Save Settings */}
  <button 
    className="flex items-center gap-2 bg-[#AEEBFF] text-[#027D9D] px-8 py-3 rounded-2xl font-medium hover:bg-sky-600 hover:text-white transition-colors"
    onClick={() => {
      // Here you would typically save the settings to localStorage or send to server
      console.log('Saving cookie settings:', cookieSettings);
    }}
  >
    <Settings className="w-5 h-5" />
    {getTranslatedText('cookie_policy.buttons.save_settings', 'Save Settings')}
  </button>
</div>


            {/* Section 6 + Section 7 side by side */}
{/* Section 6 + Section 7 side by side */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
  {/* Section 6: Third-Party Cookies */}
  <div className="flex flex-col flex-1">
    <div className="border border-gray-200 rounded-xl bg-white flex flex-col h-full">
      <h2 className="text-black font-bold leading-[120%] text-xl sm:text-2xl md:text-[26px] p-6 pb-2">
        {getTranslatedText('cookie_policy.section6.title', 'Third-Party Cookies')}
      </h2>
      <div className="p-6 pt-2 flex-1">
        <p className="text-black font-normal text-base sm:text-lg md:text-[18px] leading-relaxed mb-4">
          {getTranslatedText('cookie_policy.section6.description', 'We use third-party services that may place cookies on your device:')}
        </p>
        <ul className="space-y-2">
          {[
            getTranslatedText('cookie_policy.section6.list1', 'Google Analytics - for traffic analysis'),
            getTranslatedText('cookie_policy.section6.list2', 'Facebook Pixel - for targeted advertising'),
            getTranslatedText('cookie_policy.section6.list3', 'Stripe - for payment processing'),
            getTranslatedText('cookie_policy.section6.list4', 'Supabase - for database services')
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-lg text-black-600">
              <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* Section 7: Cookie Retention Period */}
  <div className="flex flex-col flex-1">
    <div className="border border-gray-200 rounded-xl bg-white flex flex-col h-full">
      <h2 className="text-black font-bold leading-[120%] text-xl sm:text-2xl md:text-[26px] p-6 pb-2">
        {getTranslatedText('cookie_policy.section7.title', 'Cookie Retention Period')}
      </h2>
      <div className="p-6 pt-2 flex-1">
        <p className="text-black font-normal text-base sm:text-lg md:text-[18px] leading-relaxed mb-4">
          {getTranslatedText('cookie_policy.section7.description', 'The duration cookies are stored on your device depends on the cookie type:')}
        </p>
        <ul className="space-y-2">
          {[
            getTranslatedText('cookie_policy.section7.list1', 'Session cookies: Deleted when browser is closed'),
            getTranslatedText('cookie_policy.section7.list2', 'Persistent cookies: Stored for a defined period (usually up to one year)'),
            getTranslatedText('cookie_policy.section7.list3', 'Security cookies: Stored for session duration or until user logs out')
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-lg text-black-600">
              <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>

{/* Section 8: Your Rights */}
<div className="flex flex-col">
  <div className="border border-gray-200 rounded-xl bg-white flex flex-col">
    <h2 className="text-black font-bold leading-[120%] text-xl sm:text-2xl md:text-[26px] p-6 pb-2">
      {getTranslatedText('cookie_policy.section8.title', 'Your Rights')}
    </h2>
    <div className="p-6 pt-2">
      <ul className="space-y-2">
        {[
          getTranslatedText('cookie_policy.section8.list1', 'Right to know which cookies are used on the site'),
          getTranslatedText('cookie_policy.section8.list2', 'Right to choose which cookies to allow'),
          getTranslatedText('cookie_policy.section8.list3', 'Right to delete existing cookies'),
          getTranslatedText('cookie_policy.section8.list4', 'Right to receive explanation about cookie usage'),
          getTranslatedText('cookie_policy.section8.list5', 'Right to change settings at any time')
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-lg text-black-600">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

{/* Section 10: Contact Us */}
<div className="flex flex-col">
  <div className="border border-gray-200 rounded-xl bg-white flex flex-col">
    <h2 className="text-black font-bold leading-[120%] text-xl sm:text-2xl md:text-[26px] p-6 pb-2">
      {getTranslatedText('cookie_policy.section10.title', 'Contact Us')}
    </h2>
    <div className="p-6 pt-2">
      <p className="text-black font-normal text-base sm:text-lg md:text-[18px] leading-relaxed mb-4">
        {getTranslatedText('cookie_policy.section10.description', 'For questions about cookie policy:')}
      </p>
     <div className="space-y-2">
  <p className="text-black font-normal text-base sm:text-lg md:text-[18px] flex items-center gap-2">
    <Mail size={20} className="text-sky-400" />
    <a
      href="mailto:cookies@loveai.co.il"
      className="text-sky-400 underline hover:text-sky-600"
    >
      {getTranslatedText('cookie_policy.section10.email', 'cookies@loveai.co.il')}
    </a>
  </p>

  <p className="text-black font-normal text-base sm:text-lg md:text-[18px] flex items-center gap-2">
    <Phone size={20} className="text-sky-400" />
    <a
      href="tel:+972-3-123-4567"
      className="text-sky-400 underline hover:text-sky-600"
    >
      {getTranslatedText('cookie_policy.section10.phone', '+972-3-123-4567')}
    </a>
  </p>
</div>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
      </AccessibilityProvider>
    </PolicyLayout>
  )
}

// 'use client'

// import React, { useState, useEffect } from 'react';
// import { CheckCircle2, CircleSlash, Settings, Mail, Phone, Cookie, Zap, BarChart2, Megaphone } from "lucide-react";
// import PolicyLayout from '@/components/PolicyLayout';
// import { AccessibilityProvider } from "@/components/AccessibilityProvider";
// import { AccessibilityWidget } from "@/components/AccessibilityWidget";
// export default function CookiePolicyPage() {
//   const [isMounted, setIsMounted] = useState(false);
  
//   // Cookie settings state
//   const [cookieSettings, setCookieSettings] = useState({
//     essential: true, // Always true and can't be changed
//     functional: true,
//     analytics: false,
//     marketing: false
//   });

//   useEffect(() => {
//     setIsMounted(true);
    
//     // Load saved settings from memory (you can replace this with your preferred storage method)
//     const savedSettings = loadCookieSettings();
//     if (savedSettings) {
//       setCookieSettings(prev => ({
//         ...prev,
//         ...savedSettings,
//         essential: true // Essential always stays true
//       }));
//     }
//   }, []);

//   // Simple in-memory storage (replace with your preferred method)
//   const saveCookieSettings = (settings) => {
//     // In a real app, you might save to a database or use a different storage method
//     window.cookieSettings = settings;
//     console.log('Cookie settings saved:', settings);
//   };

//   const loadCookieSettings = () => {
//     return window.cookieSettings || null;
//   };

//   const handleToggle = (cookieType) => {
//     if (cookieType === 'essential') return; // Can't toggle essential cookies
    
//     setCookieSettings(prev => {
//       const newSettings = {
//         ...prev,
//         [cookieType]: !prev[cookieType]
//       };
//       saveCookieSettings(newSettings);
//       return newSettings;
//     });
//   };

//   const handleAcceptAll = () => {
//     const newSettings = {
//       essential: true,
//       functional: true,
//       analytics: true,
//       marketing: true
//     };
//     setCookieSettings(newSettings);
//     saveCookieSettings(newSettings);
//   };

//   const handleRejectOptional = () => {
//     const newSettings = {
//       essential: true,
//       functional: false,
//       analytics: false,
//       marketing: false
//     };
//     setCookieSettings(newSettings);
//     saveCookieSettings(newSettings);
//   };

//   const handleSaveSettings = () => {
//     saveCookieSettings(cookieSettings);
//     alert('Cookie settings saved successfully!');
//   };

//   const getTranslatedText = (key, fallback = '') => {
//     // Simplified translation function - replace with your actual implementation
//     const translations = {
//       'cookie_policy.title': 'Cookie Policy',
//       'cookie_policy.last_updated_label': 'Last updated:',
//       'cookie_policy.last_updated_date': 'August 22, 2025',
//       'cookie_policy.intro.main': 'LoveAI website uses cookies to improve your browsing experience, provide personalized functionality, and analyze website usage. This page explains what cookies are, how we use them, and how you can manage them.',
//       'cookie_policy.section1.title': 'What are cookies?',
//       'cookie_policy.section1.description': 'Cookies are small text files stored on your device when you visit websites. They help websites remember your information and provide a personalized experience.',
//       'cookie_policy.manage_title': 'Manage Cookie Settings',
//       'cookie_policy.essential.title': 'Essential Cookies',
//       'cookie_policy.essential.required': 'Required',
//       'cookie_policy.essential.description': 'These cookies are necessary for the basic functionality of the website',
//       'cookie_policy.essential.list1': 'Login session memory',
//       'cookie_policy.essential.list2': 'Language preferences',
//       'cookie_policy.essential.list3': 'Shopping cart and security',
//       'cookie_policy.essential.list4': 'Preventing security attacks',
//       'cookie_policy.functional.title': 'Functional Cookies',
//       'cookie_policy.functional.optional': 'Optional',
//       'cookie_policy.functional.description': 'Cookies that enhance website functionality and customize it for you',
//       'cookie_policy.functional.list1': 'Personal preference memory',
//       'cookie_policy.functional.list2': 'User convenience settings',
//       'cookie_policy.functional.list3': 'Search history',
//       'cookie_policy.functional.list4': 'Personalized recommendations',
//       'cookie_policy.analytics.title': 'Analytics Cookies',
//       'cookie_policy.analytics.optional': 'Optional',
//       'cookie_policy.analytics.description': 'Cookies that help us understand how users use the website',
//       'cookie_policy.analytics.list1': 'Website traffic measurement',
//       'cookie_policy.analytics.list2': 'User behavior analysis',
//       'cookie_policy.analytics.list3': 'Website performance improvement',
//       'cookie_policy.analytics.list4': 'Feature effectiveness testing',
//       'cookie_policy.marketing.title': 'Marketing Cookies',
//       'cookie_policy.marketing.optional': 'Optional',
//       'cookie_policy.marketing.description': 'Cookies used to display relevant advertisements',
//       'cookie_policy.marketing.list1': 'Personalized advertising',
//       'cookie_policy.marketing.list2': 'Campaign effectiveness tracking',
//       'cookie_policy.marketing.list3': 'Social media sharing',
//       'cookie_policy.marketing.list4': 'Remarketing',
//       'cookie_policy.buttons.accept_all': 'Accept All',
//       'cookie_policy.buttons.reject_optional': 'Reject Optional',
//       'cookie_policy.buttons.save_settings': 'Save Settings',
//       'cookie_policy.section6.title': 'Third-Party Cookies',
//       'cookie_policy.section6.description': 'We use third-party services that may place cookies on your device:',
//       'cookie_policy.section6.list1': 'Google Analytics - for traffic analysis',
//       'cookie_policy.section6.list2': 'Facebook Pixel - for targeted advertising',
//       'cookie_policy.section6.list3': 'Stripe - for payment processing',
//       'cookie_policy.section6.list4': 'Supabase - for database services',
//       'cookie_policy.section7.title': 'Cookie Retention Period',
//       'cookie_policy.section7.description': 'The duration cookies are stored on your device depends on the cookie type:',
//       'cookie_policy.section7.list1': 'Session cookies: Deleted when browser is closed',
//       'cookie_policy.section7.list2': 'Persistent cookies: Stored for a defined period (usually up to one year)',
//       'cookie_policy.section7.list3': 'Security cookies: Stored for session duration or until user logs out',
//       'cookie_policy.section8.title': 'Your Rights',
//       'cookie_policy.section8.list1': 'Right to know which cookies are used on the site',
//       'cookie_policy.section8.list2': 'Right to choose which cookies to allow',
//       'cookie_policy.section8.list3': 'Right to delete existing cookies',
//       'cookie_policy.section8.list4': 'Right to receive explanation about cookie usage',
//       'cookie_policy.section8.list5': 'Right to change settings at any time',
//       'cookie_policy.section10.title': 'Contact Us',
//       'cookie_policy.section10.description': 'For questions about cookie policy:',
//       'cookie_policy.section10.email': 'cookies@loveai.co.il',
//       'cookie_policy.section10.phone': '+972-3-123-4567'
//     };
    
//     return isMounted ? translations[key] || fallback : fallback;
//   };

//   // Toggle component
//   const Toggle = ({ isOn, onToggle, disabled = false }) => (
//     <div 
//       className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${
//         isOn ? 'bg-sky-400' : 'bg-gray-300'
//       } ${disabled ? 'cursor-not-allowed opacity-70' : ''}`}
//       onClick={disabled ? undefined : onToggle}
//     >
//       <div 
//         className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-transform ${
//           isOn ? 'right-0.5' : 'left-0.5'
//         }`}
//       ></div>
//     </div>
//   );

//   return (
//     <PolicyLayout>
//        <AccessibilityProvider>
//                                   <AccessibilityWidget/>
//     <div className="min-h-screen bg-white">
//       <div className="pt-[72px]" style={{ background: 'white' }}>
//         {/* Header Section */}
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Title and Last Updated */}
//           <div className="text-center mb-12 mt-6">
//             <h1 className="text-sky-400 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[60px] mb-4">
//               {getTranslatedText('cookie_policy.title', 'Cookie Policy')}
//             </h1>
//             <p className="text-gray-600 text-lg">
//               {getTranslatedText('cookie_policy.last_updated_label', 'Last updated:')} {getTranslatedText('cookie_policy.last_updated_date', 'August 22, 2025')}
//             </p>
//           </div>
//           <div className="border-[20px] border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto bg-white/60 backdrop-blur-sm mt-[46px] mb-[46px]">

//             <div className="space-y-[40px]">
//               {/* Introduction Box */}
//               <div className="border border-gray-200 rounded-xl p-6 bg-white/80">
//                 <p className="text-black font-normal text-base sm:text-lg md:text-[20px] leading-relaxed">
//                   {getTranslatedText('cookie_policy.intro.main', 'LoveAI website uses cookies to improve your browsing experience, provide personalized functionality, and analyze website usage. This page explains what cookies are, how we use them, and how you can manage them.')}
//                 </p>
//               </div>

//               {/* What are cookies section */}
//               <div className="border border-gray-200 rounded-xl p-6 bg-white/80">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="w-8 h-8 rounded-full flex items-center justify-center">
//                     <Cookie size={20} className="text-black" />
//                   </div>
//                   <h2 className="text-black font-bold text-xl sm:text-2xl md:text-[28px]">
//                     {getTranslatedText('cookie_policy.section1.title', 'What are cookies?')}
//                   </h2>
//                 </div>

//                 <p className="text-black font-normal text-base sm:text-lg md:text-[18px] leading-relaxed">
//                   {getTranslatedText('cookie_policy.section1.description', 'Cookies are small text files stored on your device when you visit websites. They help websites remember your information and provide a personalized experience.')}
//                 </p>
//               </div>

//               {/* Manage Cookie Settings */}
//               <div className="space-y-6">
//                 <h2 className="text-black text-center font-bold text-2xl md:text-[30px] mb-8">
//                   {getTranslatedText('cookie_policy.manage_title', 'Manage Cookie Settings')}
//                 </h2>

//                 {/* Essential Cookies Card */}
//                 <div className="border border-gray-200 rounded-xl p-6 bg-white">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <div className="text-sky-400">
//                         <Zap size={22} strokeWidth={2.5} />
//                       </div>
//                       <h3 className="text-black font-bold text-lg md:text-xl">
//                         {getTranslatedText('cookie_policy.essential.title', 'Essential Cookies')}
//                       </h3>
//                       <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
//                         {getTranslatedText('cookie_policy.essential.required', 'Required')}
//                       </span>
//                     </div>

//                     <Toggle 
//                       isOn={cookieSettings.essential} 
//                       onToggle={() => handleToggle('essential')}
//                       disabled={true}
//                     />
//                   </div>
//                   <p className="text-gray-700 text-lg mb-4">
//                     {getTranslatedText('cookie_policy.essential.description', 'These cookies are necessary for the basic functionality of the website')}
//                   </p>
//                   <ul className="space-y-2">
//                     {[
//                       getTranslatedText('cookie_policy.essential.list1', 'Login session memory'),
//                       getTranslatedText('cookie_policy.essential.list2', 'Language preferences'),
//                       getTranslatedText('cookie_policy.essential.list3', 'Shopping cart and security'),
//                       getTranslatedText('cookie_policy.essential.list4', 'Preventing security attacks')
//                     ].map((item, index) => (
//                       <li key={index} className="flex items-center gap-2 text-lg text-black-600">
//                         <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Functional Cookies Card */}
//                 <div className="border border-gray-200 rounded-xl p-6 bg-white">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <div className="text-sky-400">
//                         <Settings size={22} strokeWidth={2.5} />
//                       </div>
//                       <h3 className="text-black font-bold text-lg md:text-xl">
//                         {getTranslatedText('cookie_policy.functional.title', 'Functional Cookies')}
//                       </h3>
//                       <span className="bg-sky-400 text-white px-2 py-1 rounded text-xs font-medium">
//                         {getTranslatedText('cookie_policy.functional.optional', 'Optional')}
//                       </span>
//                     </div>

//                     <Toggle 
//                       isOn={cookieSettings.functional} 
//                       onToggle={() => handleToggle('functional')}
//                     />
//                   </div>
//                   <p className="text-gray-700 text-lg mb-4">
//                     {getTranslatedText('cookie_policy.functional.description', 'Cookies that enhance website functionality and customize it for you')}
//                   </p>
//                   <ul className="space-y-2">
//                     {[
//                       getTranslatedText('cookie_policy.functional.list1', 'Personal preference memory'),
//                       getTranslatedText('cookie_policy.functional.list2', 'User convenience settings'),
//                       getTranslatedText('cookie_policy.functional.list3', 'Search history'),
//                       getTranslatedText('cookie_policy.functional.list4', 'Personalized recommendations')
//                     ].map((item, index) => (
//                       <li key={index} className="flex items-center gap-2 text-lg text-black-600">
//                         <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Analytics Cookies Card */}
//                 <div className="border border-gray-200 rounded-xl p-6 bg-white">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <div className="text-sky-400">
//                         <BarChart2 size={22} strokeWidth={2.5} />
//                       </div>
//                       <h3 className="text-black font-bold text-lg md:text-xl">
//                         {getTranslatedText('cookie_policy.analytics.title', 'Analytics Cookies')}
//                       </h3>
//                       <span className="bg-sky-400 text-white px-2 py-1 rounded text-xs font-medium">
//                         {getTranslatedText('cookie_policy.analytics.optional', 'Optional')}
//                       </span>
//                     </div>

//                     <Toggle 
//                       isOn={cookieSettings.analytics} 
//                       onToggle={() => handleToggle('analytics')}
//                     />
//                   </div>
//                   <p className="text-gray-700 text-lg mb-4">
//                     {getTranslatedText('cookie_policy.analytics.description', 'Cookies that help us understand how users use the website')}
//                   </p>
//                   <ul className="space-y-2">
//                     {[
//                       getTranslatedText('cookie_policy.analytics.list1', 'Website traffic measurement'),
//                       getTranslatedText('cookie_policy.analytics.list2', 'User behavior analysis'),
//                       getTranslatedText('cookie_policy.analytics.list3', 'Website performance improvement'),
//                       getTranslatedText('cookie_policy.analytics.list4', 'Feature effectiveness testing')
//                     ].map((item, index) => (
//                       <li key={index} className="flex items-center gap-2 text-lg text-black-600">
//                         <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Marketing Cookies Card */}
//                 <div className="border border-gray-200 rounded-xl p-6 bg-white">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <div className="text-black-500">
//                         <Megaphone size={22} strokeWidth={2.5} />
//                       </div>
//                       <h3 className="text-black font-bold text-lg md:text-xl">
//                         {getTranslatedText('cookie_policy.marketing.title', 'Marketing Cookies')}
//                       </h3>
//                       <span className="bg-sky-400 text-white px-2 py-1 rounded text-xs font-medium">
//                         {getTranslatedText('cookie_policy.marketing.optional', 'Optional')}
//                       </span>
//                     </div>

//                     <Toggle 
//                       isOn={cookieSettings.marketing} 
//                       onToggle={() => handleToggle('marketing')}
//                     />
//                   </div>
//                   <p className="text-gray-700 text-lg mb-4">
//                     {getTranslatedText('cookie_policy.marketing.description', 'Cookies used to display relevant advertisements')}
//                   </p>
//                   <ul className="space-y-2">
//                     {[
//                       getTranslatedText('cookie_policy.marketing.list1', 'Personalized advertising'),
//                       getTranslatedText('cookie_policy.marketing.list2', 'Campaign effectiveness tracking'),
//                       getTranslatedText('cookie_policy.marketing.list3', 'Social media sharing'),
//                       getTranslatedText('cookie_policy.marketing.list4', 'Remarketing')
//                     ].map((item, index) => (
//                       <li key={index} className="flex items-center gap-2 text-lg text-black-600">
//                         <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* Cookie Settings Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-6">
//                 {/* Accept All */}
//                 <button 
//                   onClick={handleAcceptAll}
//                   className="flex items-center gap-2 bg-sky-400 text-white px-8 py-3 rounded-2xl font-medium hover:bg-sky-600 transition-colors"
//                 >
//                   <CheckCircle2 className="w-5 h-5" />
//                   {getTranslatedText('cookie_policy.buttons.accept_all', 'Accept All')}
//                 </button>

//                 {/* Reject Optional */}
//                 <button 
//                   onClick={handleRejectOptional}
//                   className="flex items-center gap-2 border-2 border-sky-400 text-sky-400 px-8 py-3 rounded-2xl font-medium hover:bg-sky-600 hover:text-white transition-colors"
//                 >
//                   <CircleSlash className="w-5 h-5" />
//                   {getTranslatedText('cookie_policy.buttons.reject_optional', 'Reject Optional')}
//                 </button>

//                 {/* Save Settings */}
//                 <button 
//                   onClick={handleSaveSettings}
//                   className="flex items-center gap-2 bg-[#AEEBFF] text-[#027D9D] px-8 py-3 rounded-2xl font-medium hover:bg-sky-600 hover:text-white transition-colors"
//                 >
//                   <Settings className="w-5 h-5" />
//                   {getTranslatedText('cookie_policy.buttons.save_settings', 'Save Settings')}
//                 </button>
//               </div>

//               {/* Section 6 + Section 7 side by side */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
//                 {/* Section 6: Third-Party Cookies */}
//                 <div className="flex flex-col flex-1">
//                   <div className="border border-gray-200 rounded-xl bg-white flex flex-col h-full">
//                     <h2 className="text-black font-bold leading-[120%] text-xl sm:text-2xl md:text-[26px] p-6 pb-2">
//                       {getTranslatedText('cookie_policy.section6.title', 'Third-Party Cookies')}
//                     </h2>
//                     <div className="p-6 pt-2 flex-1">
//                       <p className="text-black font-normal text-base sm:text-lg md:text-[18px] leading-relaxed mb-4">
//                         {getTranslatedText('cookie_policy.section6.description', 'We use third-party services that may place cookies on your device:')}
//                       </p>
//                       <ul className="space-y-2">
//                         {[
//                           getTranslatedText('cookie_policy.section6.list1', 'Google Analytics - for traffic analysis'),
//                           getTranslatedText('cookie_policy.section6.list2', 'Facebook Pixel - for targeted advertising'),
//                           getTranslatedText('cookie_policy.section6.list3', 'Stripe - for payment processing'),
//                           getTranslatedText('cookie_policy.section6.list4', 'Supabase - for database services')
//                         ].map((item, index) => (
//                           <li key={index} className="flex items-center gap-2 text-lg text-black-600">
//                             <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Section 7: Cookie Retention Period */}
//                 <div className="flex flex-col flex-1">
//                   <div className="border border-gray-200 rounded-xl bg-white flex flex-col h-full">
//                     <h2 className="text-black font-bold leading-[120%] text-xl sm:text-2xl md:text-[26px] p-6 pb-2">
//                       {getTranslatedText('cookie_policy.section7.title', 'Cookie Retention Period')}
//                     </h2>
//                     <div className="p-6 pt-2 flex-1">
//                       <p className="text-black font-normal text-base sm:text-lg md:text-[18px] leading-relaxed mb-4">
//                         {getTranslatedText('cookie_policy.section7.description', 'The duration cookies are stored on your device depends on the cookie type:')}
//                       </p>
//                       <ul className="space-y-2">
//                         {[
//                           getTranslatedText('cookie_policy.section7.list1', 'Session cookies: Deleted when browser is closed'),
//                           getTranslatedText('cookie_policy.section7.list2', 'Persistent cookies: Stored for a defined period (usually up to one year)'),
//                           getTranslatedText('cookie_policy.section7.list3', 'Security cookies: Stored for session duration or until user logs out')
//                         ].map((item, index) => (
//                           <li key={index} className="flex items-center gap-2 text-lg text-black-600">
//                             <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Section 8: Your Rights */}
//               <div className="flex flex-col">
//                 <div className="border border-gray-200 rounded-xl bg-white flex flex-col">
//                   <h2 className="text-black font-bold leading-[120%] text-xl sm:text-2xl md:text-[26px] p-6 pb-2">
//                     {getTranslatedText('cookie_policy.section8.title', 'Your Rights')}
//                   </h2>
//                   <div className="p-6 pt-2">
//                     <ul className="space-y-2">
//                       {[
//                         getTranslatedText('cookie_policy.section8.list1', 'Right to know which cookies are used on the site'),
//                         getTranslatedText('cookie_policy.section8.list2', 'Right to choose which cookies to allow'),
//                         getTranslatedText('cookie_policy.section8.list3', 'Right to delete existing cookies'),
//                         getTranslatedText('cookie_policy.section8.list4', 'Right to receive explanation about cookie usage'),
//                         getTranslatedText('cookie_policy.section8.list5', 'Right to change settings at any time')
//                       ].map((item, index) => (
//                         <li key={index} className="flex items-center gap-2 text-lg text-black-600">
//                           <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               {/* Section 10: Contact Us */}
//               <div className="flex flex-col">
//                 <div className="border border-gray-200 rounded-xl bg-white flex flex-col">
//                   <h2 className="text-black font-bold leading-[120%] text-xl sm:text-2xl md:text-[26px] p-6 pb-2">
//                     {getTranslatedText('cookie_policy.section10.title', 'Contact Us')}
//                   </h2>
//                   <div className="p-6 pt-2">
//                     <p className="text-black font-normal text-base sm:text-lg md:text-[18px] leading-relaxed mb-4">
//                       {getTranslatedText('cookie_policy.section10.description', 'For questions about cookie policy:')}
//                     </p>
//                     <div className="space-y-2">
//                       <p className="text-black font-normal text-base sm:text-lg md:text-[18px] flex items-center gap-2">
//                         <Mail size={20} className="text-sky-400" />
//                         <a
//                           href="mailto:cookies@loveai.co.il"
//                           className="text-sky-400 underline hover:text-sky-600"
//                         >
//                           {getTranslatedText('cookie_policy.section10.email', 'cookies@loveai.co.il')}
//                         </a>
//                       </p>

//                       <p className="text-black font-normal text-base sm:text-lg md:text-[18px] flex items-center gap-2">
//                         <Phone size={20} className="text-sky-400" />
//                         <a
//                           href="tel:+972-3-123-4567"
//                           className="text-sky-400 underline hover:text-sky-600"
//                         >
//                           {getTranslatedText('cookie_policy.section10.phone', '+972-3-123-4567')}
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </AccessibilityProvider>
//     </PolicyLayout>
//   );
// }

