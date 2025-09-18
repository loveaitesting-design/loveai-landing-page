"use client";
import PolicyLayout from "@/components/PolicyLayout";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Search, ClipboardList } from "lucide-react";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
function TermsOfUsePage() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

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
      {/* <div className="pt-[72px]" style={{ background: 'linear-gradient(to right, #FFDFDF, #D5F8FF)' }}> */}
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
          <p className="text-gray-500">{t("terms.lastUpdate")}</p>
        </div>
        <div className="border-[20px] border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto bg-white/60 backdrop-blur-sm mt-[10px] mb-[46px]">
          <div className="max-w-5xl mx-auto px-6 py-12">
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

            {/* Section 4: Prohibitions of use */}
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-red-500 text-xl">⚠️</div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {t("terms.section4.title")}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-semibold">
                  {t("terms.section4.prohibitedActions")}
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{" "}
                    <span>{t("terms.section4.multipleProfiles")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{" "}
                    <span>{t("terms.section4.multipleProfiles")}</span>
                    <span>{t("terms.section4.commercialUse")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{" "}
                    <span>{t("terms.section4.multipleProfiles")}</span>
                    <span>{t("terms.section4.collectingInfo")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{" "}
                    <span>{t("terms.section4.multipleProfiles")}</span>
                    <span>{t("terms.section4.bypassSecurity")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{" "}
                    <span>{t("terms.section4.multipleProfiles")}</span>
                    <span>{t("terms.section4.spamMessages")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{" "}
                    <span>{t("terms.section4.multipleProfiles")}</span>
                    <span>{t("terms.section4.automatedTools")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{" "}
                    <span>{t("terms.section4.multipleProfiles")}</span>
                    <span>{t("terms.section4.copyingContent")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5: The Golden Points and Hearts System */}
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {t("terms.section5.title")}
              </h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-semibold">
                  {t("terms.section5.systemRules")}
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                    <span>{t("terms.section5.goodDeeds12")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                    <span>{t("terms.section5.goldenHeart60")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                    <span>{t("terms.section5.oneThird240")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                    <span>{t("terms.section5.twoThirds480")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                    <span>{t("terms.section5.approvalRequired")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                    <span>{t("terms.section5.changeRights")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                    <span>{t("terms.section5.notTransferable")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 6: Matching algorithm and limited liability */}
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Search size={22} strokeWidth={2.5} />{" "}
                <h2 className="text-2xl font-bold text-gray-800">
                  {t("terms.section6.title")}
                </h2>
              </div>
              <div className="space-y-6 text-gray-700">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
                  <h3 className="text-lg font-semibold text-orange-800 mb-3">
                    {t("terms.section6.explanationTitle")}
                  </h3>
                  <p className="text-orange-700">
                    {t("terms.section6.algorithmExplanation")}
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-yellow-600 text-xl">⚠️</span>
                    <h3 className="text-lg font-semibold text-yellow-800">
                      {t("terms.section6.importantExplanation")}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-yellow-700">
                    <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                      <span>{t("terms.section6.recommendationsOnly")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                      <span>{t("terms.section6.userResponsibility")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                      <span>{t("terms.section6.finalResponsibility")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                      <span>{t("terms.section6.useDiscretion")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                      <span>{t("terms.section6.safetyFirst")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7: Liability and indemnity */}
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {t("terms.section7.title")}
              </h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    {t("terms.section7.limitationTitle")}
                  </h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                                          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>

                      <span>{t("terms.section7.serviceAsIs")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                                          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                      <span>{t("terms.section7.notResponsible")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                                          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                      <span>{t("terms.section7.noGuarantee")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                                          <span className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>                  <span>{t('terms.section4.multipleProfiles')}</span>
                      <span>{t("terms.section7.noServiceGuarantee")}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    {t("terms.section7.indemnityTitle")}
                  </h3>
                  <p>{t("terms.section7.indemnityText")}</p>
                </div>
              </div>
            </div>

            {/* Section 8: Enforcement and sanctions */}
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {t("terms.section8.title")}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-lg font-semibold">
                  {t("terms.section8.possibleSanctions")}
                </h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{" "}
                    <span>{t("terms.section4.multipleProfiles")}</span>
                    <span>{t("terms.section8.warningAlert")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{" "}
                    <span>{t("terms.section4.multipleProfiles")}</span>
                    <span>{t("terms.section8.restrictFunctionality")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{" "}
                    <span>{t("terms.section4.multipleProfiles")}</span>
                    <span>{t("terms.section8.tempSuspension")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{" "}
                    <span>{t("terms.section4.multipleProfiles")}</span>
                    <span>{t("terms.section8.permanentBlock")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>{" "}
                    <span>{t("terms.section4.multipleProfiles")}</span>
                    <span>{t("terms.section8.reportAuthorities")}</span>
                  </li>
                </ul>
                <p className="mt-4">{t("terms.section8.siteReserves")}</p>
              </div>
            </div>

            {/* Section 9: Intellectual property */}
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {t("terms.section9.title")}
              </h2>
              <p className="text-gray-700">{t("terms.section9.content")}</p>
            </div>

            {/* Section 10: Law and jurisdiction */}
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {t("terms.section10.title")}
              </h2>
              <p className="text-gray-700">{t("terms.section10.content")}</p>
            </div>

            {/* Section 11: Contact us */}
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {t("terms.section11.title")}
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>{t("terms.section11.intro")}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-sky-400" />
                    <span>
                      {t("terms.section11.email")}: legal@loveai.co.il
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-sky-400" />
                    <span>{t("terms.section11.phone")}: +972-50-755-5200</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final message */}
            <div className="text-center bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <p className="text-gray-700">{t("terms.finalMessage")}</p>
            </div>
          </div>
        </div>
      </div>
      </AccessibilityProvider>
    </PolicyLayout>
  );
}

export default TermsOfUsePage;
