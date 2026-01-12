import { useTranslation } from "react-i18next";
import React, { useState } from "react";

const DownloadSection = () => {
  const { t } = useTranslation();
    const [showComingSoon, setShowComingSoon] = useState(false);
  
  const [isOpen, setIsOpen] = useState(false);
    const handleAppStoreClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setShowComingSoon(true);
    };
  
    const closeComingSoonModal = () => {
      setShowComingSoon(false);
    };
  return (
    <div className="bg-[rgba(233, 240, 241, 0.95)]">
      {/* Download Card */}
      <div className="max-w-4xl mx-auto p-10 bg-gradient-to-b from-[#D141BB] to-[#FC466B] rounded-3xl shadow-lg text-center mt-16 mb-12">
        <h3 className="text-5xl font-extrabold">🎖️👫🎖️</h3><br />
        <h2 className="text-2xl font-bold mb-4 text-white">
          {t("downloadsection_ready")} <br />
          {t("downloadsection_start")}
        </h2>
        <h1 className="text-4xl font-extrabold mb-8 text-white">
          {t("downloadsection_download_now")}
        </h1>

        {/* App Store Buttons */}
        <div className="flex justify-center gap-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent actual link navigation
              setIsOpen(true); // Open modal
            }}
            className="px-4 py-2 flex items-center gap-2 hover:scale-105 transition"
          >
            <img src="/apple.png" alt="Download on App Store" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.dating.loveai"
            className="px-4 py-2 flex items-center gap-2 hover:scale-105 transition"
            target="_blank"
          >
            <img src="/play.png" alt={t("get_it_on_google_play")} />
          </a>

          {/* Apple Modal */}
          {isOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  🚧 Coming Soon!
                </h3>
                <p className="text-gray-600 mb-6">
                  The app will be available on the App Store soon.
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gradient-to-b from-[#00A3E0] to-[#00D4FF] text-white rounded-3xl hover:bg-blue-600 transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
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
                            {t("coming_soon_title")}
                          </h2>
                          <p className="text-gray-600 text-lg mb-6">
                            {t("coming_soon_description")}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {t("coming_soon_stay_tuned")}
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
</div>
  );  
};

export default DownloadSection;
