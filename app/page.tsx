// "use client";
// import dynamic from "next/dynamic";
// import React from "react";
// import NavComponent from "@/components/Navbar/NavComponent";
// import BannerSection from "@/components/BannerSection/BannerSection";
// import LoveAIBanner from "@/components/LoveAIBanner/LoveAIBanner";
// import AiAnalysisSection from "@/components/AiAnalysisSection/AiAnalysisSection";
// import IsForSection from "@/components/IsForSection/IsForSection";
// import AdvancedFeaturesSection from "@/components/AdvancedFeaturesSection/AdvancedFeaturesSection";
// import AdvanceDatingFeatures from "@/components/AdvancedFeaturesSection/AdvanceDatingFeatures";
// import AboutSection from "@/components/AboutSection/AboutSection";
// import FindMatchSection from "@/components/FindMatchSection/FindMatchSection";
// import SuccessStoriesSection from "@/components/SuccessStoriesSection/SuccessStoriesSection";
// import KindnessJourneySection from "@/components/KindnessJourneySection/KindnessJourneySection";
// import GoodDeedsSection from "@/components/GoodDeedsSection/GoodDeedsSection";
// import PricingPage from "@/components/PricingSection/PricingSection";
// import DownloadSection from "@/components/DownloadSection/DownloadSection";
// import DownloadSection1 from "@/components/DownloadSection1/DownloadSection1";
// import Footer from "@/components/Footer/Footer";
// import PromoSection from "@/components/DownloadSection1/PromoSection";
// import Promo from "@/components/LoveAIBanner/Promo";
// import FloatingHearts from "@/components/FloatingHearts/FloatingHearts";
// import { useTranslation } from "react-i18next";
// import "../i18n";

// export default function LoveAiLanding() {
//   const { t } = useTranslation();
//   return (
//     <div className="max-w-[100dvw] overflow-hidden mx-auto">
//       <NavComponent />
//       <FloatingHearts />
//       <BannerSection />
//       <Promo/>
//       <AiAnalysisSection />
//       <IsForSection />
//       <AdvancedFeaturesSection />
//       <AdvanceDatingFeatures/>
//       <PromoSection />
//       <FindMatchSection />
//       <SuccessStoriesSection />
//       <DownloadSection />
//       <Footer />
//     </div>
//   );
// }

"use client"; // ❌ remove this if whole page doesn't need to be client-side

import dynamic from "next/dynamic";
import React from "react";
import NavComponent from "@/components/Navbar/NavComponent"; // keep nav static (needed immediately)
import { useTranslation } from "react-i18next";
import "../i18n";

// ✅ Lazy load below-the-fold components
const BannerSection = dynamic(
  () => import("@/components/BannerSection/BannerSection")
);
const AiAnalysisSection = dynamic(
  () => import("@/components/AiAnalysisSection/AiAnalysisSection")
);
const IsForSection = dynamic(
  () => import("@/components/IsForSection/IsForSection")
);
const AdvancedFeaturesSection = dynamic(
  () => import("@/components/AdvancedFeaturesSection/AdvancedFeaturesSection")
);
const AdvanceDatingFeatures = dynamic(
  () => import("@/components/AdvancedFeaturesSection/AdvanceDatingFeatures")
);
const FindMatchSection = dynamic(
  () => import("@/components/FindMatchSection/FindMatchSection")
);
const SuccessStoriesSection = dynamic(
  () => import("@/components/SuccessStoriesSection/SuccessStoriesSection")
);
const DownloadSection = dynamic(
  () => import("@/components/DownloadSection/DownloadSection")
);
const Footer = dynamic(() => import("@/components/Footer/Footer"));
const PromoSection = dynamic(
  () => import("@/components/DownloadSection1/PromoSection")
);
const Promo = dynamic(() => import("@/components/LoveAIBanner/Promo"));
const FloatingHearts = dynamic(
  () => import("@/components/FloatingHearts/FloatingHearts"),
  {
    ssr: false, // ❗ animations should only run client-side
  }
);
const Features = dynamic(() => import("@/components/Features/Features"));
const Testimonials = dynamic(
  () => import("@/components/Testinomials/Testimonials")
);
const CaseStudies = dynamic(
  () => import("@/components/CaseStudies/CaseStudies")
);
const CTA = dynamic(() => import("@/components/CTA/CTA"));
const AdBanner = dynamic(() => import("@/components/AdBanner/AdBanner"));
export default function LoveAiLanding() {
  const { t } = useTranslation();

  return (
    <div className="max-w-[100dvw] overflow-hidden mx-auto">
      <NavComponent />
      <FloatingHearts />
      <BannerSection />
      <Promo />
      {/* <AiAnalysisSection /> */}
<AdBanner position="header" />
      <FindMatchSection />
      <AdvancedFeaturesSection />
      <AdBanner position="footer"/>

      {/* <Features /> */}
      <Testimonials />
      <CaseStudies />
      <CTA />
      {/* <AdvanceDatingFeatures /> */}
      <PromoSection />
      {/* <FindMatchSection /> */}
      <SuccessStoriesSection />
      {/* <DownloadSection /> */}
      <Footer />
    </div>
  );
}
