import { Check, X } from "lucide-react";
import PricingToggle from "@/components/PricingToggle/PricingToggle";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PricingPage() {
  const [isYearly, setIsYearly] = React.useState(false);
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-r from-white-100 to-white-100">
      <h1 className="font-bold text-[32px] mx-auto w-full text-center">
        {t("or")}
      </h1>
      
    </div>
  );
}
