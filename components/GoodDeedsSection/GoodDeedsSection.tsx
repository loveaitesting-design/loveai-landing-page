import { useTranslation } from "react-i18next";
import React from "react";

const GoodDeedsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="py-16 bg-gradient-to-r from-White-100 to-White-100 text-center">
      {/* Container with responsive width and padding */}
      <div className="max-w-screen-lg mx-auto px-4 md:px-8">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-8">
          <div className="relative inline-block mb-4">
            <h1 className="text-[36px] font-bold text-center">
              <span className="text-black">{t("good_deeds_title")}</span>
            </h1>
            {/* Left Heart */}
            <img
              src="/heartleft.png"
              alt="Heart"
              className="absolute -left-6 top-1/2 transform -translate-y-1/2"
            />

            {/* Right Heart */}
            <img
              src="/heartright.png"
              alt="Heart"
              className="absolute -right-6 top-1/2 transform -translate-y-1/2"
            />
          </div>
        </h2>

        {/* Kindness Score */}
        <div className="bg-white/50 rounded-full shadow-md inline-flex items-center gap-4 px-8 py-4 mb-10 mx-auto">
          <span className="font-semibold text-lg">
            {t("good_deeds_kindness_score", { score: 180 })}
          </span>
          <div className="flex gap-2">
            <img src="/earn.png" alt="Gold Heart" className="h-8 w-8" />
            <img src="/earn.png" alt="Gold Heart" className="h-8 w-8" />
            <img src="/earn.png" alt="Gold Heart" className="h-8 w-8" />
          </div>
        </div>

        {/* Heart Points */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          <div className="bg-white/50 rounded-full shadow-md flex items-center gap-2 px-6 py-3 mx-auto">
            <span className="font-semibold">{t("good_deeds_full_heart")}</span>
            <img src="/earn.png" alt="Full Heart" className="h-6 w-6" />
          </div>
          <div className="bg-white/50 rounded-full shadow-md flex items-center gap-2 px-6 py-3 mx-auto">
            <span className="font-semibold">{t("good_deeds_half_heart")}</span>
            <img src="/hearthalf.png" alt="Half Heart" className="h-6 w-6" />
          </div>
        </div>

        <div className="bg-white/50 rounded-full shadow-md inline-flex items-center gap-4 px-8 py-4 mb-10 mx-auto">
          <span className="font-semibold">{t("good_deeds_quarter_heart")}</span>
          <img
            src="/quarterheart.png"
            alt="Quarter Heart"
            className="h-6 w-6"
          />
        </div>

        {/* Description */}
        <div className="text-gray-700 space-y-2 max-w-xl mx-auto">
          <p>{t("good_deeds_earn_access")}</p>
          <p>{t("good_deeds_each_action")}</p>
        </div>
      </div>
    </div>
  );
};

export default GoodDeedsSection;
