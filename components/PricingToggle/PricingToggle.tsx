"use client"

import * as React from "react"
import { useTranslation } from 'react-i18next';

export default function PricingToggle({
    isYearly,
    onToggle,
}: {
    isYearly?: boolean
    onToggle?: () => void
}) {
    const { t } = useTranslation();
    return (
        <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{t('pricingtoggle_monthly')}</span>
            <div
                // onClick={() => setIsYearly(!isYearly)}
                className={`mx-2 w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
          ${'bg-gradient-to-r from-cyan-400 to-blue-500'}
        `}
            >
                <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300
            ${isYearly ? 'translate-x-7' : 'translate-x-0'}
          `}
                />
            </div>
            <span className="text-sm font-medium">{t('pricingtoggle_yearly')}</span>
        </div>
    )
}
