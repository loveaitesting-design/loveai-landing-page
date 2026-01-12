import { useTranslation } from "react-i18next";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { Heart, Shield, Award, Lock, Globe, X } from "lucide-react";
import SEOHead from "../seo/SEOHead";

const Footer = () => {
  const { t, ready } = useTranslation();
  const [showComingSoon, setShowComingSoon] = useState(false);

  // Fallback text while translations load
  const fallbackText = useMemo(
    () => ({
      footer_description:
        "Connect with your perfect match through AI-powered dating",
      footer_company: "Company",
      footer_about_us: "About Us",
      footer_careers: "Careers",
      footer_blog: "Blog",
      footer_resources: "Resources",
      footer_help_center: "Help Center",
      footer_dating_tips: "Dating Tips",
      footer_safety_tips: "Safety Tips",
      footer_verified_profiles_only: "Verified Profiles",
      footer_contact: "Contact",
      footer_legal: "Legal",
      footer_terms_of_service: "Terms of Service",
      footer_privacy_policy: "Privacy Policy",
      footer_community_guidelines: "Community Guidelines",
      footer_cookie_policy: "Cookie Policy",
      footer_accessibility_statement: "Accessibility",
      footer_donation_terms: "Donation Terms",
      footer_cta: "Ready to find love?",
      footer_join_now: "Join Now",
      footer_start_connecting: "Start connecting today",
      footer_rights_reserved: "All rights reserved",
      coming_soon_title: "Coming Soon!",
      coming_soon_description: "Our iOS app is under development and will be available on the App Store soon.",
      coming_soon_stay_tuned: "Stay tuned for updates! 🚀"
    }),
    []
  );

  // Helper function to get text with fallback
  const getText = (key: string) => {
    if (!ready) return fallbackText[key] || "";
    return t(key);
  };

  const handleAppStoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComingSoon(true);
  };

  const closeComingSoonModal = () => {
    setShowComingSoon(false);
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <SEOHead
          title="LoveAi - Find Real Love with AI"
          url="https://www.loveai.co.il/"
        />

        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Logo and Description - Takes 2 columns on large screens */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="/loveai-logo.png"
                    alt="LoveAi"
                    className="h-12 w-auto"
                  />
                </div>

                <p className="text-gray-600 text-base leading-relaxed max-w-md">
                  {getText("footer_description")}
                </p>

                {/* App Store Buttons */}
                <div className="space-y-4 mt-3">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* App Store Button */}
                    <button
                      onClick={handleAppStoreClick}
                      className="group flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-4 rounded-2xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[180px]"
                    >
                      <div className="w-8 h-8 flex-shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-full h-full"
                        >
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs opacity-70 font-medium">
                          Download on
                        </div>
                        <div className="font-bold text-lg">App Store</div>
                      </div>
                    </button>

                    {/* Google Play Button */}
                    <a
                      href="https://play.google.com/store/apps/details?id=com.dating.loveai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-4 rounded-2xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-w-[180px]"
                    >
                      <div className="w-8 h-8 flex-shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-full h-full"
                        >
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <div className="text-xs opacity-70 font-medium">
                          Get it on
                        </div>
                        <div className="font-bold text-lg">Google Play</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-gray-900 border-b-2 border-blue-200 pb-2 inline-block">
                  {getText("footer_company")}
                </h4>
                <ul className="space-y-3">
                  {[
                    { href: "/about", key: "footer_about_us" },
                    { href: "/career", key: "footer_careers" },
                    { href: "/blog", key: "footer_blog" },
                  ].map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center group"
                        prefetch={true}
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                        {getText(item.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-gray-900 border-b-2 border-purple-200 pb-2 inline-block">
                  {getText("footer_resources")}
                </h4>
                <ul className="space-y-3">
                  {[
                    { href: "/help-center", key: "footer_help_center" },
                    { href: "/dating-tips", key: "footer_dating_tips" },
                    { href: "/safety-tips", key: "footer_safety_tips" },
                    {
                      href: "/Verified-Profiles-Only",
                      key: "footer_verified_profiles_only",
                    },
                    { href: "/contact", key: "footer_contact" },
                  ].map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        className="text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center group"
                        prefetch={true}
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-purple-600 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                        {getText(item.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-gray-900 border-b-2 border-pink-200 pb-2 inline-block">
                  {getText("footer_legal")}
                </h4>
                <ul className="space-y-3">
                  {[
                    { href: "/terms-of-service", key: "footer_terms_of_service" },
                    { href: "/privacy-policy", key: "footer_privacy_policy" },
                    {
                      href: "/community-guidelines",
                      key: "footer_community_guidelines",
                    },
                    { href: "/cookie-policy", key: "footer_cookie_policy" },
                    {
                      href: "/accessibility-statement",
                      key: "footer_accessibility_statement",
                    },
                    { href: "/Donation-Terms", key: "footer_donation_terms" },
                  ].map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center group"
                        prefetch={true}
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-pink-600 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                        {getText(item.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-4">
              {/* Social Images */}
              <div className="text-center">
                <div className="flex justify-center items-center gap-4 flex-wrap">
                  {["/f2.jpg", "/f3.jpg", "/f4.jpg", "/f1.jpg"].map(
                    (src, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={src}
                          alt={`Success story ${index + 1}`}
                          className="w-20 h-20 object-cover rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Heart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-5 md:my-8 mx-6"></div>

        {/* Bottom Row */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 mb-6">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            {getText("footer_cta")}{" "}
            <a
              href="https://www.loveai.co.il/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              {getText("footer_join_now")}
            </a>
            . {getText("footer_start_connecting")}
          </p>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <p>© 2025 LoveAI. {getText("footer_rights_reserved")}</p>
          </div>
        </div>
      </footer>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] px-4"
          onClick={closeComingSoonModal}
        >
          <div 
            className="bg-white rounded-3xl p-8 lg:p-12 max-w-md w-full shadow-2xl relative transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeComingSoonModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-12 h-12"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {getText("coming_soon_title")}
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                {getText("coming_soon_description")}
              </p>
              <p className="text-gray-500 text-sm">
                {getText("coming_soon_stay_tuned")}
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200 to-cyan-200 rounded-full blur-2xl opacity-30 -z-10"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default Footer;