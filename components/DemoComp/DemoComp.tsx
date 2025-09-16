'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Heart } from "lucide-react";

export default function DemoComp() {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    // Fallback content that matches what server renders
    const fallbackDemo = {
        loveSmarter: "LoveAi – A serious dating app,",
        liveDeeper: "Powered by AI and shared values,",
        matchByValues: "MNot endless swipes.",
        aiPlatformDesc: "Our AI-powered dating platform uses cutting-edge technology to connect you with compatible partners who share your interests, Smart Dating for Real People, AI-Powered Matching for Deeper Connections,Privacy-First. Verified Users. Real Intentions.",
        startNow: "🎯 Find your perfect match – start now!",
        learnMore: "❤️ Discover real love powered by AI",
        matchesThisWeek: "10,000+ matches this week"
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <div className="absolute inset-0 flex flex-col items-left justify-center bg-black/30 text-left px-4">
            <h1 className="text-4xl md:text-4.5xl font-bold mb-4">
                <span className="italic font-medium text-white">
                    {isMounted ? t('demo_love_smarter') : fallbackDemo.loveSmarter}
                </span>{" "}
                <br/>
                <span className="italic font-medium text-cyan-400">
                    {isMounted ? t('demo_live_deeper') : fallbackDemo.liveDeeper}
                </span>
                <br />
                <span className="text-white font-extrabold">
                    {isMounted ? t('demo_match_by_values') : fallbackDemo.matchByValues}
                </span>
            </h1>

            <p className="text-gray-300 max-w-xl mb-8">
                {isMounted ? t('demo_ai_platform_desc') : fallbackDemo.aiPlatformDesc}
            </p>

           <div className="flex gap-4 mb-8">
  <a
    href="https://www.loveai.co.il/signup"
    target="_blank"
    className="block"
  >
    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-110 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-500 backdrop-blur-sm border-0 animate-bounce hover:animate-pulse mb-3">
      <Target size={30} />
      {isMounted ? t("demo_start_now") : fallbackDemo.startNow}
      →
    </button>
  </a>
</div>

<div className="flex gap-4 mb-8">
  <a
    href="https://www.loveai.co.il/signup"
    target="_blank"
    className="block"
  >
    <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md border transition">
      <Heart size={30} className="text-pink-500" />
      {isMounted ? t("demo_learn_more") : fallbackDemo.learnMore}
    </button>
  </a>
</div>


            {/* Example avatars section */}
            <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center font-bold text-white">
                        JE
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-400 flex items-center justify-center font-bold text-white">
                        SL
                    </div>
                    <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center font-bold text-white">
                        AN
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-700">
                        +
                    </div>
                </div>
                <p className="text-gray-300 text-sm ml-4">
                    {isMounted ? t('demo_matches_this_week') : fallbackDemo.matchesThisWeek}
                </p>
            </div>
        </div>
    )
}
