'use client';

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function IsForSection() {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    return (
        <div id='features' className="bg-white py-12">
            <div className="container mx-auto px-4 md:px-8">
                {/* Heading */}
                <div className="text-center mb-12">
                    <div className="relative inline-block mb-4">
                        <h1 className="text-2xl md:text-4xl font-bold text-center">
                            <span className="text-[#e74c3c]">LoveAi</span>
                            {isMounted && <span className="text-black"> {t('isfor_title')}</span>}
                        </h1>

                        {/* Left Heart */}
                        <img
                            src="/heartleft.png"
                            alt="Heart"
                            className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8"
                        />

                        {/* Right Heart */}
                        <img
                            src="/heartright.png"
                            alt="Heart"
                            className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8"
                        />
                    </div>

                    {isMounted && <p className="text-[#4B5563] font-medium max-w-2xl mx-auto text-sm md:text-base">
                        {t('isfor_subtitle')}
                    </p>}
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Card 1 */}
                    <div className="bg-white/50 rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                        <div className="p-6">
                            <img className="w-12 h-12 mb-4" src="/value.png" alt="Value-driven" />
                            <h2 className="text-lg md:text-xl font-semibold mb-3 text-[#1F2937]">
                                {isMounted ? t('isfor_card1_title') : 'Value-driven Individuals'}
                            </h2>
                            <p className="text-sm md:text-base">
                                {isMounted ? t('isfor_card1_desc') : 'People who prioritize meaningful connections over superficial matches and seek authentic relationships.'}
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gradient-to-b from-[#00A3E0] to-[#00D4FF] rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer text-white">
                        <div className="p-6">
                            <img className="w-12 h-12 mb-4" src="/prof.png" alt="Professionals" />
                            <h2 className="text-lg md:text-xl font-semibold mb-3">
{isMounted ? t('isfor_card2_title') : 'Busy Professionals'}
                            </h2>
                            <p className="text-sm md:text-base">
{isMounted ? t('isfor_card2_desc') : 'Working professionals who want efficient, AI-powered matching to find compatible partners despite their busy schedules.'}
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gradient-to-b from-[#00A3E0] to-[#00D4FF] rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer text-white">
                        <div className="p-6">
                            <img className="w-12 h-12 mb-4" src="/people.png" alt="Meaningful Connections" />
                            <h2 className="text-lg md:text-xl font-semibold mb-3">
{isMounted ? t('isfor_card3_title') : 'People Seeking Meaningful Connections'}
                            </h2>
                            <p className="text-sm md:text-base">
{isMounted ? t('isfor_card3_desc') : 'Individuals who value deep, genuine relationships and want to connect with like-minded people who share their values.'}
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white/50 rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                        <div className="p-6">
                            <img className="w-12 h-12 mb-4" src="/those.png" alt="Purposeful Connection" />
                            <h2 className="text-lg md:text-xl font-semibold mb-3 text-[#1F2937]">
{isMounted ? t('isfor_card4_title') : 'Those Looking for Purposeful Connection'}
                            </h2>
                            <p className="text-sm md:text-base">
{isMounted ? t('isfor_card4_desc') : 'Users who want to move beyond casual dating and find someone special for a committed, long-term relationship.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
