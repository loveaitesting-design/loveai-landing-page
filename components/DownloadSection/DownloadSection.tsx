import { useTranslation } from "react-i18next";
import React, { useState } from "react";

const DownloadSection = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
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
</div>
  );  
};

export default DownloadSection;
