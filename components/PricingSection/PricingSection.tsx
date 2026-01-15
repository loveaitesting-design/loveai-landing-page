import { Check, X } from "lucide-react";
import PricingToggle from "@/components/PricingToggle/PricingToggle";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PricingPage() {
  const [isYearly, setIsYearly] = React.useState(false);
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-r from-White-100 to-White-100">
      <h1 className="font-bold text-[32px] mx-auto w-full text-center">
        {t("or")}
      </h1>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Container added here */}
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">
            <div className="relative inline-block mb-4">
              <h1 className="text-[36px] font-bold text-center">
                <span className="text-black">{t("pricing_choose_plan")}</span>
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

          <div className="flex justify-center mb-16">
            <div className="bg-white rounded-full shadow-lg inline-flex">
              <div className="flex items-center bg-white p-4 rounded-full shadow-md w-[220px] justify-between">
                <span
                  className={`text-sm font-semibold ${
                    !isYearly ? "text-pink-400" : "text-black"
                  }`}
                >
                  {t("pricingtoggle_yearly")}
                </span>

                {/* Toggle Switch */}
                <div
                  onClick={() => setIsYearly(!isYearly)}
                  className={`mx-2 w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
         ${"bg-gradient-to-r from-cyan-400 to-blue-500"}`}
                >
                  <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300
           ${isYearly ? "translate-x-7" : "translate-x-0"}`}
                  />
                </div>

                {/* Monthly */}
                <span
                  className={`text-sm font-semibold ${
                    isYearly ? "text-pink-400" : "text-black"
                  }`}
                >
                  {t("pricingtoggle_monthly")}
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-center text-[#00b8e6] mb-2">
                  {t("plan_basic")}
                </h2>
                <p className="text-[#ff5757] text-center mb-6">
                  {t("pricing_basic_desc")}
                </p>

                <div className="bg-[#00b8e6] text-white p-6 rounded-2xl">
                  <p className="text-center mb-2">{t("pricing_basic_save")}</p>
                  <p className="text-center font-bold mb-4">
                    {t("pricing_basic_price")}
                  </p>
                  <div className="flex justify-center">
                    <PricingToggle />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00b8e6] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_basic_feature_1")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00b8e6] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_basic_feature_2")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00b8e6] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_basic_feature_3")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00b8e6] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_basic_feature_4")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00b8e6] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_basic_feature_5")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#00b8e6] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_basic_feature_6")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff5757] flex items-center justify-center">
                      <X className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_basic_feature_7")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff5757] flex items-center justify-center">
                      <X className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_basic_feature_8")}
                    </p>
                  </div>
                </div>

                <button className="mt-8 w-full bg-[#00b8e6] text-white py-3 px-4 rounded-xl font-bold">
                  {t("pricing_basic_get_started")}
                </button>

                <p className="text-center mt-4">
                  {t("pricing_basic_unlock_kindness")}
                </p>
                <p className="text-center text-[#ff5757] text-sm mt-2">
                  {t("pricing_basic_cancel_anytime")}
                </p>
              </div>
            </div>

            {/* Repeat for Standard and Premium Plans */}
            {/* Standard Plan */}
            <div className="relative bg-white ring-2 ring-[#ff9999] rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md capitalize">
                    Best value
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-center text-[#ff9999] mb-2">
                  {t("pricing_standard_title")}
                </h2>
                <p className="text-[#00b8e6] text-center mb-6">
                  {t("pricing_standard_subtitle")}
                </p>

                <div className="bg-[#ff9999] text-white p-6 rounded-2xl">
                  <p className="text-center mb-2">
                    {t("pricing_standard_save_yearly")}
                  </p>
                  <p className="text-center font-bold mb-4">
                    {t("pricing_standard_price")}
                  </p>
                  <div className="flex justify-center">
                    <PricingToggle />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_standard_feature_1")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_standard_feature_2")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_standard_feature_3")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_standard_feature_4")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_standard_feature_5")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_standard_feature_6")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_standard_feature_7")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_standard_feature_8")}
                    </p>
                  </div>
                </div>

                <button className="mt-8 w-full bg-[#ff9999] text-white py-3 px-4 rounded-xl font-bold">
                  {t("pricing_basic_get_started")}
                </button>

                <p className="text-center mt-4">
                  {t("pricing_basic_unlock_kindness")}
                </p>
                <p className="text-center text-[#00b8e6] text-sm mt-2">
                  {t("pricing_basic_cancel_anytime")}
                </p>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-center text-[#ff9999] mb-2">
                  {t("pricing_premium_title")}
                </h2>
                <p className="text-[#00b8e6] text-center mb-6">
                  {t("pricing_premium_subtitle")}
                </p>

                <div className="bg-[#ff9999] text-white p-6 rounded-2xl">
                  <p className="text-center mb-2">
                    {t("pricing_premium_save_yearly")}
                  </p>
                  <p className="text-center font-bold mb-4">
                    {t("pricing_premium_price")}
                  </p>
                  <div className="flex justify-center">
                    <PricingToggle />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_premium_feature_1")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_premium_feature_2")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_premium_feature_3")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_premium_feature_4")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_premium_feature_5")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_premium_feature_6")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_premium_feature_7")}
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ff9999] flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="ml-3 text-base">
                      {t("pricing_premium_feature_8")}
                    </p>
                  </div>
                </div>

                <button className="mt-8 w-full bg-[#ff9999] text-white py-3 px-4 rounded-xl font-bold">
                  {t("pricing_basic_get_started")}
                </button>

                <p className="text-center mt-4">
                  {t("pricing_basic_unlock_kindness")}
                </p>
                <p className="text-center text-[#00b8e6] text-sm mt-2">
                  {t("pricing_basic_cancel_anytime")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
