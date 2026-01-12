"use client"

import * as React from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useTranslation } from 'react-i18next'

export default function PlanToggle({
    selectedPlan,
    onSelect,
}: {
    selectedPlan: "basic" | "standard" | "premium"
    onSelect: (value: "basic" | "standard" | "premium") => void
}) {
    const { t } = useTranslation();
    return (
        <ToggleGroup
            type="single"
            value={selectedPlan}
            onValueChange={(value) => {
                if (value) onSelect(value as "basic" | "standard" | "premium")
            }}
            className="bg-gray-100 rounded-full p-1"
        >
            <ToggleGroupItem
                value="basic"
                className="px-4 py-2 text-sm font-semibold rounded-full data-[state=on]:bg-[#00b8e6] data-[state=on]:text-white"
            >
                {t('plan_basic')}
            </ToggleGroupItem>
            <ToggleGroupItem
                value="standard"
                className="px-4 py-2 text-sm font-semibold rounded-full data-[state=on]:bg-[#ff9999] data-[state=on]:text-white"
            >
                {t('plan_standard')}
            </ToggleGroupItem>
            <ToggleGroupItem
                value="premium"
                className="px-4 py-2 text-sm font-semibold rounded-full data-[state=on]:bg-[#ff9999] data-[state=on]:text-white"
            >
                {t('plan_premium')}
            </ToggleGroupItem>
        </ToggleGroup>
    )
}
