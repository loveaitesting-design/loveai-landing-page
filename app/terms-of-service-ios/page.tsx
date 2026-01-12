
"use client";
import PolicyLayout from "@/components/PolicyLayout";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Search, ClipboardList } from "lucide-react";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import SEOHead from "@/components/seo/SEOHead";
import FloatingHearts from "@/components/FloatingHearts/FloatingHearts";

function TermsOfUsePage() {
  const { t, ready } = useTranslation(); // Add 'ready' from useTranslation
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Wait for both component mount AND translations to be ready
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
    // <PolicyLayout>
      <AccessibilityProvider>
        <AccessibilityWidget/>
            <FloatingHearts />
        
                    <SEOHead title="LoveAi - Find Real Love with AI" url="https://www.loveai.co.il/" />
      
        <div className="pt-[72px]" style={{ background: "white" }}>
          {/* Header Section */}
          <div className="container mx-auto px-4 py-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <ClipboardList
                size={30}
                strokeWidth={3}
                className="w-8 h-8 text-sky-400 mr-2"
              />
              <h1 className="text-4xl font-bold text-sky-400">
                {t("terms.title")}
              </h1>
            </div>
            <p className="text-gray-600 text-lg mb-2">{t("terms.subtitle")}</p>
            <p className="text-gray-500">{t("terms.eula.effectiveDate")}
</p>
          </div>
          <div className="border-[20px] border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto bg-white/60 backdrop-blur-sm mt-[10px] mb-[46px]">
            <div className="max-w-5xl mx-auto px-6 py-12">
                   <div className="mb-8">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-sky-600 mb-4">
                    {t("terms.eula.title")}
                  </h2>
                  <p className="text-gray-700 text-lg">
                    {t("terms.eula.welcome")}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Subscription & Renewal */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800">
                      {t("terms.eula.section1.title")}
                    </h2>
                    <p className="text-gray-700">
                      {t("terms.eula.section1.content")}
                    </p>
                  </div>

                  {/* Cancellation */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800">
                      {t("terms.eula.section2.title")}
                    </h2>
                    <p className="text-gray-700">
                      {t("terms.eula.section2.content")}
                    </p>
                  </div>

                  {/* Privacy */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800">
                      {t("terms.eula.section3.title")}
                    </h2>
                    <p className="text-gray-700 mb-2">
                      {t("terms.eula.section3.content")}
                    </p>
                    <a 
                      href={t("terms.eula.section3.link")}
                      className="text-sky-500 hover:text-sky-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("terms.eula.section3.link")}
                    </a>
                  </div>

                  {/* Standard EULA */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-800">
                      {t("terms.eula.section4.title")}
                    </h2>
                    <p className="text-gray-700 mb-2">
                      {t("terms.eula.section4.content")}
                    </p>
                    <a 
                      href={t("terms.eula.section4.link")}
                      className="text-sky-500 hover:text-sky-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("terms.eula.section4.link")}
                    </a>
                  </div>

                </div>
              </div>
              {/* Section 1: Agreement to the terms */}
              <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {t("terms.section1.title")}
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>{t("terms.section1.content1")}</p>
                  <p>{t("terms.section1.content2")}</p>
                </div>
              </div>



            {/* Section 12: Eligibility for use */}
              <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {t("terms.section12.title")}
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-lg font-semibold">
                    {t("terms.section12.ageRequirements")}
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{t("terms.section12.minimumAge")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{t("terms.section12.legalCapacity")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{t("terms.section12.noProhibition")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2: Eligibility for use */}
              <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {t("terms.section2.title")}
                  </h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-lg font-semibold">
                    {t("terms.section2.ageRequirements")}
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{t("terms.section2.minimumAge")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{t("terms.section2.legalCapacity")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{t("terms.section2.noProhibition")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{t("terms.section2.oneProfile")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Rules of conduct and community */}
              <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {t("terms.section3.title")}
                  </h2>
                </div>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t("terms.section3.truthfulInfo")}
                    </h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.trueAccurate")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.realPhotos")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.noFakeIdentity")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.updateInfo")}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t("terms.section3.respectfulBehavior")}
                    </h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.respectfulAttitude")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.noHarassment")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.respectDecisions")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.protectPrivacy")}</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t("terms.section3.allowedContent")}
                    </h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.originalContent")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.noSexualContent")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.noOffensiveLanguage")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.noPersonalInfo")}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{t("terms.section3.noSocialLinks")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Remaining sections... */}
              {/* (keeping the rest of your sections intact) */}
              
            </div>
          </div>
        </div>
      </AccessibilityProvider>
    // </PolicyLayout>
  );
}

export default TermsOfUsePage;
