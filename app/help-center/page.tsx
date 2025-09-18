'use client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PolicyLayout from '@/components/PolicyLayout';
import { 
  MessageCircle, 
  BookOpen, 
  Users, 
  Shield, 
  CreditCard, 
  Smartphone,
  LifeBuoy,
  Search,
  X,
  HelpCircle,
  Heart, Zap, Briefcase
} from "lucide-react";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
export default function HelpCenterPage() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [activePopup, setActivePopup] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cardConfigs = [
    { 
      id: "gettingStarted", 
      icon: BookOpen, 
      popupKey: "createProfile",
      color: "text-blue-500"
    },
    { 
      id: "findingMatches", 
      icon: Users, 
      popupKey: "howAlgorithmWorks",
      color: "text-green-500"
    },
    { 
      id: "safety", 
      icon: Shield, 
      popupKey: "basicSafetyRules",
      color: "text-red-500"
    },
    { 
      id: "payments", 
      icon: CreditCard, 
      popupKey: "subscriptionTypes",
      color: "text-purple-500"
    },
    { 
      id: "technical", 
      icon: Smartphone, 
      popupKey: "appNotLoading",
      color: "text-orange-500"
    }
  ];

  const openPopup = (popupKey: string) => setActivePopup(popupKey);
  const closePopup = () => setActivePopup(null);

  return (
    <PolicyLayout>
       <AccessibilityProvider>
                                  <AccessibilityWidget/>
      <div className="pt-[72px] min-h-screen bg-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-8xl">
          <div className="flex items-center justify-center mb-6">
            <LifeBuoy className="w-12 h-12 text-sky-400 mr-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-sky-400">
              {isMounted ? t('helpCenter.title') : 'Help Center'}
            </h1>
          </div>
          
          <div className="border-[20px] border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto bg-white/60 backdrop-blur-sm">
            <p className="text-lg text-gray-700 mb-8 text-center">
              {isMounted ? t('helpCenter.subtitle') : 'Find answers to FAQs'}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400"
                  placeholder={isMounted ? t('helpCenter.searchPlaceholder') : 'Search help center...'}
                />
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {cardConfigs.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div key={card.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[280px]">
                    <div className="p-8 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center">
                          <div className="mr-4 p-2 rounded-full bg-gray-50">
                            <IconComponent className={`w-8 h-8 ${card.color}`} />
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {isMounted ? t(`cards.${card.id}.title`) : ''}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-8 flex-grow">
                        {isMounted ? t(`cards.${card.id}.description`) : ''}
                      </p>
                      <div className="mt-auto flex items-center justify-between group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                          <span className="text-gray-700">
                            {isMounted ? t(`cards.${card.id}.items.${card.popupKey}`) : ''}
                          </span>
                        </div>
                        <button
                          onClick={() => openPopup(card.popupKey)}
                          className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-sky-400 hover:text-sky-400 opacity-0 group-hover:opacity-100 transition"
                        >
                          <HelpCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact Section */}
            <div className="text-center border-t border-gray-200 pt-6">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-sky-400/10">
                  <MessageCircle size={32} className="text-sky-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {isMounted ? t("helpCenter.contact.title") : "Didn't find what you were looking for?"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {isMounted ? t("helpCenter.contact.subtitle") : "Our support team is here to help you anytime"}
                </p>
                <a href="/about" target="_blank">
                  <button className="px-6 py-2 bg-sky-400 hover:bg-sky-600 text-white rounded-xl font-semibold transition">
                    {isMounted ? t("helpCenter.contact.button") : "Contact Us"}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Popup Modal */}
        {activePopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {isMounted ? t(`popups.${activePopup}.title`) : ''}
                  </h2>
                  <button
                    onClick={closePopup}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-gray-700 mb-8 whitespace-pre-line">
                  {isMounted ? t(`popups.${activePopup}.content`) : ''}
                </div>
                <div className="flex justify-start">
                  <button
                    onClick={closePopup}
                    className="px-6 py-2 border-2 border-sky-400 text-sky-400 rounded-xl font-semibold transition-colors duration-200 hover:bg-sky-600 hover:text-white"
                  >
                    {isMounted ? t('common.close') : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </AccessibilityProvider>
    </PolicyLayout>
  );
}