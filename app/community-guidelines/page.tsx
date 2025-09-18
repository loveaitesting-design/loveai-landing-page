'use client';
import PolicyLayout from "@/components/PolicyLayout";
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Shield, Lock, AlertTriangle, Flag, Users } from 'lucide-react';
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
export default function Page() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // Define arrays directly to avoid the map error
  const respectItems = [
    "Treat everyone with respect and politeness",
    "Use clean and respectful language", 
    "Respect others' boundaries",
    "Don't send unwanted or harassing messages"
  ];

  const authenticityItems = [
    "Use real and recent photos of yourself",
    "Provide accurate and truthful information about yourself",
    "Don't impersonate someone else",
    "Don't post photos of other people"
  ];

  const safetyItems = [
    "Don't share sensitive personal information in chats",
    "Report suspicious or inappropriate behavior",
    "First meetings in public places only",
    "Trust your intuition"
  ];

  const prohibitedItems = [
    "Sexual harassment or inappropriate behavior",
    "Racism, hate, or discrimination",
    "Spam, advertising, or sales",
    "Sharing illegal or harmful content"
  ];

  // return (
  //   <PolicyLayout>
  //     <div
  //       className="pt-[72px] min-h-screen"
  //       style={{ background: 'white' }}
  //     >
  //       <div className="max-w-4xl mx-auto px-6 py-12">
  //         {/* Header Section */}
  //         <div className="text-center mb-12">
  //           <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
  //             <Users className="w-8 h-8 text-sky-400" />
  //           </div>
  //           <h1 className="text-4xl font-bold text-sky-400 mb-4">
  //             {t('community.title')}
  //           </h1>
  //           <p className="text-lg text-gray-600 mb-2">
  //             {t('community.subtitle')}
  //           </p>
  //           <p className="text-base text-gray-500 max-w-2xl mx-auto">
  //             {t('community.description')}
  //           </p>
  //         </div>

  //         <div className="border-[10px] border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto bg-white/60 backdrop-blur-sm mt-[46px] mb-[46px]">

  //           <div className="space-y-[40px]">
  //           {/* Section 1: Respect and Proper Behavior */}
  //           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
  //             <div className="flex items-center mb-6">
  //               <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-4">
  //                 <Heart className="w-5 h-5 text-sky-600" />
  //               </div>
  //               <h2 className="text-xl font-semibold text-gray-800">
  //                 {t('community.respect.title')}
  //               </h2>
  //             </div>
  //             <div className="space-y-3">
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.respect.item1')}</span>
  //               </div>
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.respect.item2')}</span>
  //               </div>
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.respect.item3')}</span>
  //               </div>
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.respect.item4')}</span>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Section 2: Authenticity and Truth */}
  //           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
  //             <div className="flex items-center mb-6">
  //               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
  //                 <Shield className="w-5 h-5 text-blue-600" />
  //               </div>
  //               <h2 className="text-xl font-semibold text-gray-800">
  //                 {t('community.authenticity.title')}
  //               </h2>
  //             </div>
  //             <div className="space-y-3">
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.authenticity.item1')}</span>
  //               </div>
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.authenticity.item2')}</span>
  //               </div>
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.authenticity.item3')}</span>
  //               </div>
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.authenticity.item4')}</span>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Section 3: Safety and Privacy */}
  //           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
  //             <div className="flex items-center mb-6">
  //               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
  //                 <Lock className="w-5 h-5 text-blue-600" />
  //               </div>
  //               <h2 className="text-xl font-semibold text-gray-800">
  //                 {t('community.safety.title')}
  //               </h2>
  //             </div>
  //             <div className="space-y-3">
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.safety.item1')}</span>
  //               </div>
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.safety.item2')}</span>
  //               </div>
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.safety.item3')}</span>
  //               </div>
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.safety.item4')}</span>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Section 4: Prohibited Behaviors */}
  //           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
  //             <div className="flex items-center mb-6">
  //               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
  //                 <AlertTriangle className="w-5 h-5 text-blue-600" />
  //               </div>
  //               <h2 className="text-xl font-semibold text-gray-800">
  //                 {t('community.prohibited.title')}
  //               </h2>
  //             </div>
  //             <div className="space-y-3">
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.prohibited.item1')}</span>
  //               </div>
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.prohibited.item2')}</span>
  //               </div>
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.prohibited.item3')}</span>
  //               </div>
  //               <div className="flex items-start">
  //                 <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
  //                   <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
  //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span className="text-gray-700">{t('community.prohibited.item4')}</span>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Section 5: Violations and Sanctions */}
  //           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
  //             <div className="flex items-center mb-6">
  //               <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
  //                 <AlertTriangle className="w-5 h-5 text-orange-600" />
  //               </div>
  //               <h2 className="text-xl font-semibold text-gray-800">
  //                 {t('community.violations.title')}
  //               </h2>
  //             </div>
  //             <p className="text-gray-600 mb-6">
  //               {t('community.violations.description')}
  //             </p>
              
  //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //               {/* First Warning */}
  //               <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
  //                 <div className="flex items-center mb-2">
  //                   <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
  //                   <span className="font-medium text-yellow-800">
  //                     {t('community.violations.warning.title')}
  //                   </span>
  //                 </div>
  //                 <p className="text-sm text-yellow-700">
  //                   {t('community.violations.warning.description')}
  //                 </p>
  //               </div>

  //               {/* Temporary Suspension */}
  //               <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
  //                 <div className="flex items-center mb-2">
  //                   <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
  //                   <span className="font-medium text-orange-800">
  //                     {t('community.violations.suspension.title')}
  //                   </span>
  //                 </div>
  //                 <p className="text-sm text-orange-700">
  //                   {t('community.violations.suspension.description')}
  //                 </p>
  //               </div>

  //               {/* Permanent Ban */}
  //               <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
  //                 <div className="flex items-center mb-2">
  //                   <Flag className="w-5 h-5 text-red-600 mr-2" />
  //                   <span className="font-medium text-red-800">
  //                     {t('community.violations.ban.title')}
  //                   </span>
  //                 </div>
  //                 <p className="text-sm text-red-700">
  //                   {t('community.violations.ban.description')}
  //                 </p>
  //               </div>
  //             </div>
  //           </div>

  //           {/* Section 6: How to Report */}
  //           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
  //             <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
  //               <Flag className="w-8 h-8 text-blue-600" />
  //             </div>
  //             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
  //               {t('community.report.title')}
  //             </h2>
  //             <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
  //               {t('community.report.description')}
  //             </p>
  //             <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-8 rounded-2xl transition-colors duration-200 inline-flex items-center">
  //               <Flag className="w-5 h-5 mr-2" />
  //               {t('community.report.button')}
  //             </button>
  //           </div>
  //         </div>
  //         </div>
  //       </div>
  //     </div>
  //   </PolicyLayout>
  // );
  return (
    <PolicyLayout>
       <AccessibilityProvider>
                                  <AccessibilityWidget/>
      <div
        className="pt-[72px] min-h-screen"
        style={{ background: 'white' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-sky-400" />
            </div>
            <h1 className="text-4xl font-bold text-sky-400 mb-4">
              {t('community.title')}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              {t('community.subtitle')}
            </p>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              {t('community.description')}
            </p>
          </div>

          <div className="border-[20px] border-sky-400 rounded-2xl p-8 max-w-8xl mx-auto bg-white/60 backdrop-blur-sm mt-[46px] mb-[46px]">

            <div className="space-y-[40px]">
            {/* Section 1: Respect and Proper Behavior */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-5 h-5 text-sky-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {t('community.respect.title')}
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.respect.item1')}</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.respect.item2')}</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.respect.item3')}</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.respect.item4')}</span>
                </div>
              </div>
            </div>

            {/* Section 2: Authenticity and Truth */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {t('community.authenticity.title')}
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.authenticity.item1')}</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.authenticity.item2')}</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.authenticity.item3')}</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.authenticity.item4')}</span>
                </div>
              </div>
            </div>

            {/* Section 3: Safety and Privacy */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Lock className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {t('community.safety.title')}
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.safety.item1')}</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.safety.item2')}</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.safety.item3')}</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.safety.item4')}</span>
                </div>
              </div>
            </div>

            {/* Section 4: Prohibited Behaviors */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {t('community.prohibited.title')}
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.prohibited.item1')}</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.prohibited.item2')}</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.prohibited.item3')}</span>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{t('community.prohibited.item4')}</span>
                </div>
              </div>
            </div>

            {/* Section 5: Violations and Sanctions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {t('community.violations.title')}
                </h2>
              </div>
              <p className="text-gray-600 mb-6">
                {t('community.violations.description')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* First Warning */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                    <span className="font-medium text-yellow-800">
                      {t('community.violations.warning.title')}
                    </span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    {t('community.violations.warning.description')}
                  </p>
                </div>

                {/* Temporary Suspension */}
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="font-medium text-orange-800">
                      {t('community.violations.suspension.title')}
                    </span>
                  </div>
                  <p className="text-sm text-orange-700">
                    {t('community.violations.suspension.description')}
                  </p>
                </div>

                {/* Permanent Ban */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                  <div className="flex items-center mb-2">
                    <Flag className="w-5 h-5 text-red-600 mr-2" />
                    <span className="font-medium text-red-800">
                      {t('community.violations.ban.title')}
                    </span>
                  </div>
                  <p className="text-sm text-red-700">
                    {t('community.violations.ban.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: How to Report */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Flag className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t('community.report.title')}
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                {t('community.report.description')}
              </p>
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-8 rounded-2xl transition-colors duration-200 inline-flex items-center">
                <Flag className="w-5 h-5 mr-2" />
                {t('community.report.button')}
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
      </AccessibilityProvider>
    </PolicyLayout>
  );
}