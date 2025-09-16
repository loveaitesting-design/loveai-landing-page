"use client"
import { Code, Globe, Heart, LightbulbIcon, Medal, Server } from "lucide-react"
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
    const { t } = useTranslation();
    return (
        <div id="about" className="min-h-screen bg-[rgba(255, 255, 255, 1)] px-4 py-12 ">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="relative inline-block mb-4">
                        <h1 className="text-[36px] font-bold text-center">
                            <span className="text-[#020817]">{t('about_title1')}</span>
                            <span className="text-[#f66767]">{t('about_title2')}</span>
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
                    <p className="text-[#4B5563] font-medium max-w-3xl mx-auto text-[16px]">
                        {t('about_subtitle')}
                    </p>
                </div>

                {/* Mission Section and Feature Cards Side by Side */}
                <div className="flex flex-col md:flex-row gap-8 mb-16">
                    {/* Mission Section */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-[24px] font-semibold text-center mb-[30px] text-[#020817]">
                            {t('about_mission_title')}
                        </h2>

                        <div className="space-y-6 text-[#4b5563]">
                            <p>{t('about_mission_p1')}</p>
                            <p>{t('about_mission_p2')}</p>
                            <p>{t('about_mission_p3')}</p>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="w-full md:w-1/2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                            {/* Success Card */}
                            <div className="bg-white/50 rounded-xl p-6 shadow-sm flex flex-col items-start">
                                <div className="bg-[#f66767] p-4 rounded-full mb-4">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-[#020817]">{t('about_success_title')}</h3>
                                <p className="text-start text-[#4b5563]">{t('about_success_desc')}</p>
                            </div>

                            {/* High Tech Card */}
                            <div className="bg-white/50 rounded-xl p-6 shadow-sm flex flex-col items-start">
                                <div className="bg-[#00d4ff] p-4 rounded-full mb-4">
                                    <Code className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-[#020817]">{t('about_hightech_title')}</h3>
                                <p className="text-start text-[#4b5563]">{t('about_hightech_desc')}</p>
                            </div>

                            {/* Innovation Card */}
                            <div className="bg-white/50 rounded-xl p-6 shadow-sm flex flex-col items-start">
                                <div className="bg-[#00d4ff] p-4 rounded-full mb-4">
                                    <LightbulbIcon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-[#020817]">{t('about_innovation_title')}</h3>
                                <p className="text-start text-[#4b5563]">{t('about_innovation_desc')}</p>
                            </div>

                            {/* Global Card */}
                            <div className="bg-white/50 rounded-xl p-6 shadow-sm flex flex-col items-start">
                                <div className="bg-[#f66767] p-4 rounded-full mb-4">
                                    <Globe className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-[#020817]">{t('about_global_title')}</h3>
                                <p className="text-start text-[#4b5563]">{t('about_global_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Features */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Privacy Section */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-[#f66767] p-4 rounded-full mb-4">
                            <Server className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#020817]">{t('about_privacy_title')}</h3>
                        <p className="text-[#4b5563]">{t('about_privacy_desc')}</p>
                    </div>

                    {/* Support Section */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-[#00d4ff] p-4 rounded-full mb-4">
                            <Medal className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#020817]">{t('about_support_title')}</h3>
                        <p className="text-[#4b5563]">{t('about_support_desc')}</p>
                    </div>

                    {/* Research Section */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-[#f66767] p-4 rounded-full mb-4">
                            <LightbulbIcon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#020817]">{t('about_research_title')}</h3>
                        <p className="text-[#4b5563]">{t('about_research_desc')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
