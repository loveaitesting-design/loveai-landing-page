'use client'
import TeamsComp from "@/components/TermsCommon/TeamsComp"
import PolicyLayout from '@/components/PolicyLayout';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ShieldCheck,
  Lock,
  Shield,
  AlertTriangle,
  Heart,
  Mail,
  HelpCircle,
  MessageSquare
} from "lucide-react";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import SEOHead from "@/components/seo/SEOHead";
export default function SafetyTipsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <PolicyLayout>
       <AccessibilityProvider>
                                  <AccessibilityWidget/>
                                              <SEOHead title="LoveAi - Find Real Love with AI" url="https://www.loveai.co.il/" />
                                  
      {/* <div className="pt-[72px]" style={{ background: 'linear-gradient(to right, #FFDFDF, #D5F8FF)' }}> */}
                  <div className="pt-[72px]" style={{ background: 'white' }}>

        <div className="container mx-auto px-4 py-12 max-w-6xl">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                <ShieldCheck className="w-6 h-6 text-sky-500" />
              </div>
              <span className="text-sky-500 font-medium">{t('safety.header.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-sky-400 mb-4">
              {t('safety.header.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              {t('safety.header.subtitle')}
            </p>
          </div>
          <div className="border-[20px] border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto bg-white/60 backdrop-blur-sm mt-[10px] mb-[46px]">

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Profile Verification */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-6 h-6 text-gray-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">
                  {t('safety.profileVerification.title')}
                </h2>
              </div>
              <p className="text-gray-600 mb-4">{t('safety.profileVerification.description')}</p>
              <div className="space-y-3">
                {['automaticVerification','realPhotoVerification','contentQualityControl','fakeProfilePrevention'].map((key) => (
                  <div key={key} className="flex items-center">
                    <ShieldCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{t(`safety.profileVerification.items.${key}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Protection */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-gray-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">
                  {t('safety.privacyProtection.title')}
                </h2>
              </div>
              <p className="text-gray-600 mb-4">{t('safety.privacyProtection.description')}</p>
              <div className="space-y-3">
                {['advancedEncryption','profileControl','noSharing','accountDeletion'].map((key) => (
                  <div key={key} className="flex items-center">
                    <ShieldCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{t(`safety.privacyProtection.items.${key}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Guidelines */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-gray-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">{t('safety.safetyGuidelines.title')}</h2>
              </div>
              <p className="text-gray-600 mb-4">{t('safety.safetyGuidelines.description')}</p>
              <div className="space-y-3">
                {['neverShare','firstMeetings','trustIntuition','reportSuspicious'].map((key) => (
                  <div key={key} className="flex items-center">
                    <ShieldCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{t(`safety.safetyGuidelines.items.${key}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reporting Issues */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-gray-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">{t('safety.reportingIssues.title')}</h2>
              </div>
              <p className="text-gray-600 mb-4">{t('safety.reportingIssues.description')}</p>
              <div className="space-y-3">
                {['reportButton','professionalTeam','quickResponse','blockingUsers'].map((key) => (
                  <div key={key} className="flex items-center">
                    <ShieldCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{t(`safety.reportingIssues.items.${key}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency Section */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-xl font-semibold text-red-800">{t('safety.emergency.title')}</h2>
            </div>
            <p className="text-red-700">{t('safety.emergency.description')}</p>
          </div>

          {/* Contact Us Section */}
      <div className="max-w-6xl mx-auto">
  <div className="bg-white shadow-md rounded-2xl p-6">
    {/* Contact Us Title */}
    <div className="flex items-center mb-6">
      <Heart className="w-6 h-6 text-gray-600 mr-2" />
      <h2 className="text-2xl font-semibold text-gray-800">
        {t('safety.contactUs.title')}
      </h2>
    </div>

    {/* Buttons inside the card */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <a 
        href="mailto:legal@loveai.co.il" 
        className="flex flex-col items-center justify-center px-6 py-5 bg-white border-2 border-sky-500 rounded-2xl text-sky-500 font-medium transition-all duration-200 transform hover:-translate-y-2 hover:shadow-lg hover:bg-sky-500 hover:text-white"
      >
        <Mail className="w-6 h-6 mb-2" />
        <span>{t('safety.contactUs.sendEmail')}</span>
      </a>
      
      <a 
        href="/help-center" 
        className="flex flex-col items-center justify-center px-6 py-5 bg-white border-2 border-sky-500 rounded-2xl text-sky-500 font-medium transition-all duration-200 transform hover:-translate-y-2 hover:shadow-lg hover:bg-sky-500 hover:text-white"
      >
        <HelpCircle className="w-6 h-6 mb-2" />
        <span>{t('safety.contactUs.helpCenter')}</span>
      </a>
      
      <a 
        href="/faq" 
        className="flex flex-col items-center justify-center px-6 py-5 bg-white border-2 border-sky-500 rounded-2xl text-sky-500 font-medium transition-all duration-200 transform hover:-translate-y-2 hover:shadow-lg hover:bg-sky-500 hover:text-white"
      >
        <MessageSquare className="w-6 h-6 mb-2" />
        <span>{t('safety.contactUs.faq')}</span>
      </a>
    </div>
  </div>
</div>
</div>
        </div>
      </div>
      </AccessibilityProvider>
    </PolicyLayout>
  );
}
