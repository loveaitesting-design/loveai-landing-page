'use client'
import TeamsComp from "@/components/TermsCommon/TeamsComp"
import PolicyLayout from '@/components/PolicyLayout';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Eye, FileText, Lock, Users, Cookie, Phone, Mail } from 'lucide-react';
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import SEOHead from "@/components/seo/SEOHead";

function Page() {
  const { t, ready } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // UNCOMMENTED: This is crucial to prevent translation key flashing
  if (!isMounted || !ready) {
    return (
      <PolicyLayout>
        <div className="pt-[72px] min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-400 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </PolicyLayout>
    );
  }

  return (
    <PolicyLayout>
      <AccessibilityProvider>
        <AccessibilityWidget/>
                    <SEOHead title="LoveAi - Find Real Love with AI" url="https://www.loveai.co.il/" />
        <div className="pt-[72px]" style={{ background: 'white' }}>
          {/* Header Section */}
          <div className="container mx-auto px-4 py-12 text-center">
            <div className="flex justify-center items-center mb-4">
              <Shield className="w-8 h-8 text-sky-400 mr-2" />
              <h1 className="text-4xl font-bold text-sky-400">{t('privacy.title')}</h1>
            </div>
            <p className="text-gray-600 text-lg mb-2">{t('privacy.subtitle')}</p>
            <p className="text-gray-500 text-sm">{t('privacy.lastUpdate')}</p>
          </div>
          
          <div className="border-[20px] border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto bg-white/60 backdrop-blur-sm mt-[1px] mb-[46px]">
            {/* Content Container */}
            <div className="container mx-auto px-6 pb-12 max-w-5xl">
              
              {/* Section 1: Information Collection */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 p-6 mt-12">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-gray-700 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{t('privacy.informationCollection.title')}</h2>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('privacy.informationCollection.subtitle')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.informationCollection.items.profile')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.informationCollection.items.contact')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.informationCollection.items.usage')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.informationCollection.items.technical')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.informationCollection.items.content')}
                  </li>
                </ul>
              </div>

              {/* Section 2: Use of Information */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-gray-700 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{t('privacy.useOfInformation.title')}</h2>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('privacy.useOfInformation.subtitle')}</h3>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.useOfInformation.items.personalized')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.useOfInformation.items.profile')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.useOfInformation.items.verification')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.useOfInformation.items.improving')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.useOfInformation.items.fraud')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.useOfInformation.items.contact')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.useOfInformation.items.compliance')}
                  </li>
                </ul>

                {/* Algorithm Explanation Box */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
                  <h4 className="font-semibold text-amber-800 mb-2">{t('privacy.algorithm.title')}</h4>
                  <p className="text-sm text-amber-700 mb-3">
                    <span className="text-amber-700">{t('privacy.algorithm.description.part1')}</span>
                    <span className="font-bold text-amber-800">{t('privacy.algorithm.description.highlight')}</span>
                    <span className="text-amber-700">{t('privacy.algorithm.description.part2')}</span>
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-amber-700">
                        {t('privacy.algorithm.items.recommendations.part1')}
                        <span className="font-bold text-amber-800">{t('privacy.algorithm.items.recommendations.highlight')}</span>
                        <span>{t('privacy.algorithm.items.recommendations.part2')}</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-amber-700">
                        {t('privacy.algorithm.items.vigilant.part1')}
                        <span className="font-bold text-amber-800">{t('privacy.algorithm.items.vigilant.highlight')}</span>
                        <span>{t('privacy.algorithm.items.vigilant.part2')}</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-amber-700">
                        {t('privacy.algorithm.items.personal.part1')}
                        <span className="font-bold text-amber-800">{t('privacy.algorithm.items.personal.highlight')}</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-amber-700">
                        {t('privacy.algorithm.items.responsible.part1')}
                        <span className="font-bold text-amber-800">{t('privacy.algorithm.items.responsible.highlight')}</span>
                        <span>{t('privacy.algorithm.items.responsible.part2')}</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Information Protection */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 p-6">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-gray-700 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{t('privacy.protection.title')}</h2>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('privacy.protection.subtitle')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.protection.items.encryption')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.protection.items.storage')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.protection.items.access')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.protection.items.monitoring')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.protection.items.filtering')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.protection.items.approval')}
                  </li>
                </ul>
              </div>

              {/* Section 4: Sharing Information */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.sharing.title')}</h2>
                
                <p className="text-gray-700 mb-4">
                  {t('privacy.sharing.description')}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.sharing.items.consent')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.sharing.items.service')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.sharing.items.legal')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.sharing.items.rights')}
                  </li>
                </ul>
              </div>

              {/* Section 5: Your Rights */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.rights.title')}</h2>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('privacy.rights.subtitle')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.rights.items.view')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.rights.items.correction')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.rights.items.deletion')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.rights.items.limit')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.rights.items.copy')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.rights.items.revoke')}
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {t('privacy.rights.items.complaint')}
                  </li>
                </ul>
              </div>

              {/* Section 6: Cookies and Tracking */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 p-6">
                <div className="flex items-center mb-4">
                  <Cookie className="w-6 h-6 text-gray-700 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{t('privacy.cookies.title')}</h2>
                </div>
                
                <p className="text-gray-700">
                  {t('privacy.cookies.description')}
                </p>
              </div>

              {/* Section 7: Contact Us */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6 p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-gray-700 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{t('privacy.contact.title')}</h2>
                </div>
                
                <p className="text-gray-700 mb-4">{t('privacy.contact.description')}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">{t('privacy.contact.email')}: legal@loveai.co.il</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-600 mr-3" />
                    <span className="text-gray-700">{t('privacy.contact.phone')}: +972-50-755-5200</span>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-gray-600 text-sm">{t('privacy.footer')}</p>
              </div>
            </div>
          </div>
        </div>
      </AccessibilityProvider>
    </PolicyLayout>
  );
}

export default Page;