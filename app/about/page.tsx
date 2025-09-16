'use client';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PolicyLayout from '@/components/PolicyLayout';
import { Code, Globe, Heart, LightbulbIcon, Medal, Server } from "lucide-react"

export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  // Fallback content that matches what server renders
  const fallbackContent = {
    about_title1: "About ",
    about_title2: "LoveAi",
    about_subtitle: "Discover how AI is revolutionizing the way we connect and find meaningful relationships",
    about_mission_title: "Our Mission",
    about_mission_p1: "We believe everyone deserves to find genuine love and meaningful connections.",
    about_mission_p2: "Our AI-powered platform goes beyond superficial matching to understand your values, interests, and relationship goals.",
    about_mission_p3: "We're building a future where technology enhances human connection rather than replacing it.",
    about_success_title: "Success Stories",
    about_success_desc: "Thousands of meaningful connections made through intelligent matching",
    about_hightech_title: "High-Tech Solutions",
    about_hightech_desc: "Advanced AI algorithms that understand compatibility beyond surface level",
    about_innovation_title: "Innovation First",
    about_innovation_desc: "Pioneering the future of digital relationships with cutting-edge technology",
    about_global_title: "Global Community",
    about_global_desc: "Connecting hearts across cultures and continents with inclusive design",
    about_privacy_title: "Privacy & Security",
    about_privacy_desc: "Your data is protected with enterprise-grade security and privacy measures",
    about_support_title: "24/7 Support",
    about_support_desc: "Dedicated team ensuring your journey to love is smooth and supported",
    about_research_title: "Continuous Research",
    about_research_desc: "Always improving our algorithms based on latest relationship science"
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Translation objects with fallbacks
  const about = {
    title: isMounted ? t('About.about.title') : 'About LoveAi',
    subtitle: isMounted ? t('About.about.subtitle') : 'Discover how AI is revolutionizing relationships',
    mission: isMounted ? t('About.about.mission') : 'Our mission is to connect hearts through intelligent technology',
    problemTitle: isMounted ? t('About.about.problemTitle') : 'The Problem We Solve',
    aiChemistryTitle: isMounted ? t('About.about.aiChemistryTitle') : 'AI Chemistry Matching',
    aiChemistryDescription: isMounted ? t('About.about.aiChemistryDescription') : 'Advanced algorithms understand compatibility',
    aiChemistrySubtitle: isMounted ? t('About.about.aiChemistrySubtitle') : 'Beyond surface-level matching',
    intelligentMatchmaking: isMounted ? t('About.about.intelligentMatchmaking') : 'Intelligent Matchmaking',
    smartAssist: isMounted ? t('About.about.smartAssist') : 'Smart Assistant',
    smartAssistDescription: isMounted ? t('About.about.smartAssistDescription') : 'AI-powered conversation guidance',
    smartAssistSubtitle: isMounted ? t('About.about.smartAssistSubtitle') : 'Making connections easier',
    safetyFirst: isMounted ? t('About.about.safetyFirst') : 'Safety First',
    safetySubtitle: isMounted ? t('About.about.safetySubtitle') : 'Secure and verified platform',
    inclusiveDesign: isMounted ? t('About.about.inclusiveDesign') : 'Inclusive Design',
    inclusiveSubtitle: isMounted ? t('About.about.inclusiveSubtitle') : 'For everyone, everywhere',
    evolvingProfiles: isMounted ? t('About.about.evolvingProfiles') : 'Evolving Profiles',
    evolvingSubtitle: isMounted ? t('About.about.evolvingSubtitle') : 'Profiles that grow with you',
    techMagicTitle: isMounted ? t('About.about.techMagicTitle') : 'The Tech Magic',
    techMagicSubtitle: isMounted ? t('About.about.techMagicSubtitle') : 'Powered by cutting-edge AI',
    realStoriesTitle: isMounted ? t('About.about.realStoriesTitle') : 'Real Stories',
    realStoriesSubtitle: isMounted ? t('About.about.realStoriesSubtitle') : 'Success stories from our users',
    missionTitle: isMounted ? t('About.about.missionTitle') : 'Our Mission',
    missionDescription: isMounted ? t('About.about.missionDescription') : 'Creating meaningful connections',
    missionSubtitle: isMounted ? t('About.about.missionSubtitle') : 'Through intelligent technology',
    comingSoonTitle: isMounted ? t('About.about.comingSoonTitle') : 'Coming Soon',
    comingSoonSubtitle: isMounted ? t('About.about.comingSoonSubtitle') : 'Exciting features ahead',
    whyWorksTitle: isMounted ? t('About.about.whyWorksTitle') : 'Why It Works',
    whyWorksSubtitle: isMounted ? t('About.about.whyWorksSubtitle') : 'Science-backed matching',
    whyWorksEndSubtitle: isMounted ? t('About.about.whyWorksEndSubtitle') : 'Proven results',
    readyTitle: isMounted ? t('About.about.readyTitle') : 'Ready to Start?',
    readyDescription: isMounted ? t('About.about.readyDescription') : 'Join thousands finding love',
    readySubtitle: isMounted ? t('About.about.readySubtitle') : 'Your journey begins here',
    readyEndDescription: isMounted ? t('About.about.readyEndDescription') : 'Start your love story today',
    finalTagline: isMounted ? t('About.about.finalTagline') : 'Find Your Perfect Match',
    finalWelcome: isMounted ? t('About.about.finalWelcome') : 'Welcome to the future of dating',
    teamTitle: isMounted ? t('About.about.teamTitle') : 'Our Team',
    teamDescription: isMounted ? t('About.about.teamDescription') : 'Passionate experts in AI and relationships',
    teamEndDescription: isMounted ? t('About.about.teamEndDescription') : 'Dedicated to your success'
  };

  const problemItems = isMounted ? [
    t('About.problemItems.0'),
    t('About.problemItems.1'),
    t('About.problemItems.2'),
    t('About.problemItems.3'),
    t('About.problemItems.4')
  ] : [
    'Endless swiping without meaningful connections',
    'Superficial matches based only on photos',
    'Time wasted on incompatible people',
    'Difficulty expressing what you really want',
    'Lack of genuine relationship guidance'
  ];

  const problemConclusion = isMounted ? t('About.problemConclusion') : 'We solve these problems with intelligent AI matching.';

  const intelligentItems = isMounted ? [
    t('About.intelligentItems.0'),
    t('About.intelligentItems.1'),
    t('About.intelligentItems.2')
  ] : [
    'Deep personality analysis',
    'Values-based compatibility',
    'Behavioral pattern recognition'
  ];

  const intelligentConclusion = isMounted ? t('About.intelligentConclusion') : 'Creating matches that truly matter.';

  const smartAssistItems = isMounted ? [
    t('About.smartAssistItems.0'),
    t('About.smartAssistItems.1'),
    t('About.smartAssistItems.2')
  ] : [
    'Conversation starters and guidance',
    'Date planning assistance',
    'Relationship coaching tips'
  ];

  const safetyItems = isMounted ? [
    t('About.safetyItems.0'),
    t('About.safetyItems.1'),
    t('About.safetyItems.2'),
    t('About.safetyItems.3')
  ] : [
    'Identity verification system',
    'AI-powered fraud detection',
    'Safe meeting recommendations',
    '24/7 support and monitoring'
  ];

  const inclusiveItems = isMounted ? [
    t('About.inclusiveItems.0'),
    t('About.inclusiveItems.1'),
    t('About.inclusiveItems.2')
  ] : [
    'All orientations and identities welcome',
    'Accessibility-first design',
    'Cultural sensitivity in matching'
  ];

  const evolvingItems = isMounted ? [
    t('About.evolvingItems.0'),
    t('About.evolvingItems.1'),
    t('About.evolvingItems.2')
  ] : [
    'Profiles adapt as you grow',
    'Learning from your interactions',
    'Continuous preference refinement'
  ];

  const techItems = isMounted ? [
    t('About.techItems.0'),
    t('About.techItems.1'),
    t('About.techItems.2'),
    t('About.techItems.3'),
    t('About.techItems.4')
  ] : [
    'Machine learning algorithms',
    'Natural language processing',
    'Behavioral analysis',
    'Predictive compatibility modeling',
    'Real-time optimization'
  ];

  const realStoriesItems = isMounted ? [
    t('About.realStoriesItems.0'),
    t('About.realStoriesItems.1'),
    t('About.realStoriesItems.2'),
    t('About.realStoriesItems.3')
  ] : [
    'Sarah and Mike found love through shared values',
    'Alex discovered their perfect match across continents',
    'Emma overcame dating anxiety with AI guidance',
    'David found his soulmate after years of searching'
  ];

  const missionItems = isMounted ? [
    t('About.missionItems.0'),
    t('About.missionItems.1'),
    t('About.missionItems.2'),
    t('About.missionItems.3')
  ] : [
    'Revolutionizing how people connect',
    'Making meaningful relationships accessible',
    'Combining technology with human emotion',
    'Creating lasting love stories'
  ];

  const missionCommitmentItems = isMounted ? [
    t('About.missionCommitmentItems.0'),
    t('About.missionCommitmentItems.1'),
    t('About.missionCommitmentItems.2')
  ] : [
    'Continuous innovation in matching technology',
    'Ethical AI development practices',
    'User privacy and data protection'
  ];

  const missionConclusion = isMounted ? t('About.missionConclusion') : 'Join us in revolutionizing love.';

  const comingSoonItems = isMounted ? [
    t('About.comingSoonItems.0'),
    t('About.comingSoonItems.1'),
    t('About.comingSoonItems.2'),
    t('About.comingSoonItems.3')
  ] : [
    'Video chat integration',
    'Virtual date experiences',
    'AI relationship counseling',
    'Advanced compatibility insights'
  ];

  const whyWorksItems = isMounted ? [
    t('About.whyWorksItems.0'),
    t('About.whyWorksItems.1'),
    t('About.whyWorksItems.2'),
    t('About.whyWorksItems.3')
  ] : [
    'Science-backed matching algorithms',
    'Continuous learning and improvement',
    'Focus on long-term compatibility',
    'Human psychology integration'
  ];

  const whyWorksBenefits = isMounted ? [
    t('About.whyWorksBenefits.0'),
    t('About.whyWorksBenefits.1'),
    t('About.whyWorksBenefits.2')
  ] : [
    'Higher quality matches',
    'Better conversation success rates',
    'Increased relationship satisfaction'
  ];

  const whyWorksConclusion = isMounted ? t('About.whyWorksConclusion') : 'Experience the difference AI makes.';

  const readyItems = isMounted ? [
    t('About.readyItems.0'),
    t('About.readyItems.1'),
    t('About.readyItems.2'),
    t('About.readyItems.3')
  ] : [
    'Create your intelligent profile',
    'Let AI find your perfect matches',
    'Start meaningful conversations',
    'Build lasting relationships'
  ];

  const teamItems = isMounted ? [
    t('About.teamItems.0'),
    t('About.teamItems.1'),
    t('About.teamItems.2'),
    t('About.teamItems.3')
  ] : [
    'AI researchers and relationship experts',
    'Data scientists and psychologists',
    'UX designers focused on human connection',
    'Engineers passionate about love technology'
  ];

const SectionCard = ({ title, children, emoji = "" }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#00000]/20 p-6 mb-6 hover:shadow-xl transition-all duration-300 hover:border-sky-400/40">
      <h2 className="text-2xl font-bold text-sky-400 mb-4 flex items-center gap-2">
        {emoji && <span className="text-2xl">{emoji}</span>}
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );

  const SubSectionCard = ({ title, children, emoji = "" }) => (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#00000]/30 p-4 mb-4">
      <h3 className="text-xl font-semibold text-sky-400 mb-3 flex items-center gap-2">
        {emoji && <span className="text-xl">{emoji}</span>}
        {title}
      </h3>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
  return (
    <PolicyLayout>
   <div id="about" className="min-h-screen bg-white px-4 py-24 ">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="relative inline-block mb-4">
                    <h1 className="text-[36px] font-bold text-center">
                        <span className="text-[#020817]">{isMounted ? t('about_title1') : fallbackContent.about_title1}</span>
                        <span className="text-[#f66767]">{isMounted ? t('about_title2') : fallbackContent.about_title2}</span>
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
                    {isMounted ? t('about_subtitle') : fallbackContent.about_subtitle}
                </p>
            </div>

            {/* Mission Section and Feature Cards Side by Side */}
            <div className="flex flex-col md:flex-row gap-8 mb-16">
                {/* Mission Section */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-[24px] font-semibold text-center mb-[30px] text-[#020817]">
                        {isMounted ? t('about_mission_title') : fallbackContent.about_mission_title}
                    </h2>

                    <div className="space-y-6 text-[#4b5563]">
                        <p>{isMounted ? t('about_mission_p1') : fallbackContent.about_mission_p1}</p>
                        <p>{isMounted ? t('about_mission_p2') : fallbackContent.about_mission_p2}</p>
                        <p>{isMounted ? t('about_mission_p3') : fallbackContent.about_mission_p3}</p>
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
                            <h3 className="text-xl font-bold mb-2 text-[#020817]">{isMounted ? t('about_success_title') : fallbackContent.about_success_title}</h3>
                            <p className="text-start text-[#4b5563]">{isMounted ? t('about_success_desc') : fallbackContent.about_success_desc}</p>
                        </div>

                        {/* High Tech Card */}
                        <div className="bg-white/50 rounded-xl p-6 shadow-sm flex flex-col items-start">
                            <div className="bg-sky-400 p-4 rounded-full mb-4">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#020817]">{isMounted ? t('about_hightech_title') : fallbackContent.about_hightech_title}</h3>
                            <p className="text-start text-[#4b5563]">{isMounted ? t('about_hightech_desc') : fallbackContent.about_hightech_desc}</p>
                        </div>

                        {/* Innovation Card */}
                        <div className="bg-white/50 rounded-xl p-6 shadow-sm flex flex-col items-start">
                            <div className="bg-sky-400 p-4 rounded-full mb-4">
                                <LightbulbIcon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#020817]">{isMounted ? t('about_innovation_title') : fallbackContent.about_innovation_title}</h3>
                            <p className="text-start text-[#4b5563]">{isMounted ? t('about_innovation_desc') : fallbackContent.about_innovation_desc}</p>
                        </div>

                        {/* Global Card */}
                        <div className="bg-white/50 rounded-xl p-6 shadow-sm flex flex-col items-start">
                            <div className="bg-[#f66767] p-4 rounded-full mb-4">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-[#020817]">{isMounted ? t('about_global_title') : fallbackContent.about_global_title}</h3>
                            <p className="text-start text-[#4b5563]">{isMounted ? t('about_global_desc') : fallbackContent.about_global_desc}</p>
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
                    <h3 className="text-xl font-bold mb-3 text-[#020817]">{isMounted ? t('about_privacy_title') : fallbackContent.about_privacy_title}</h3>
                    <p className="text-[#4b5563]">{isMounted ? t('about_privacy_desc') : fallbackContent.about_privacy_desc}</p>
                </div>

                {/* Support Section */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-sky-400 p-4 rounded-full mb-4">
                        <Medal className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#020817]">{isMounted ? t('about_support_title') : fallbackContent.about_support_title}</h3>
                    <p className="text-[#4b5563]">{isMounted ? t('about_support_desc') : fallbackContent.about_support_desc}</p>
                </div>

                {/* Research Section */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-[#f66767] p-4 rounded-full mb-4">
                        <LightbulbIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#020817]">{isMounted ? t('about_research_title') : fallbackContent.about_research_title}</h3>
                    <p className="text-[#4b5563]">{isMounted ? t('about_research_desc') : fallbackContent.about_research_desc}</p>
                </div>
            </div>
        </div>
    </div>
<div className="border-[20px] border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto bg-white/60 backdrop-blur-sm mb-8">

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-8 text-center">
            ❤️ {about.title} 🤖
          </h1>
            <div className="text-lg text-sky-400-700 mb-8">
              <div dangerouslySetInnerHTML={{ __html: about.subtitle }} />
              <br /><br />
              <div dangerouslySetInnerHTML={{ __html: about.mission }} />
            </div>
    </div>
        {/* Problem Section */}
        <SectionCard title={about.problemTitle} emoji="💔">
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
  {problemItems.map((item, idx) => (
    <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
  ))}
</ul>

        </SectionCard>

        {/* AI Chemistry Section */}
        <SectionCard title={`${about.aiChemistryTitle}`} emoji="💡🧬">
          <div className="mb-4" dangerouslySetInnerHTML={{ __html: about.aiChemistryDescription }} />
          <div dangerouslySetInnerHTML={{ __html: about.aiChemistrySubtitle }} />
          
          <div className="mt-6 grid gap-4">
            <SubSectionCard title={about.intelligentMatchmaking} emoji="🧠">
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
                {intelligentItems.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </SubSectionCard>

            <SubSectionCard title={about.smartAssist} emoji="💬">
              <div className="mb-2" dangerouslySetInnerHTML={{ __html: about.smartAssistDescription }} />
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
                {smartAssistItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="mt-2" dangerouslySetInnerHTML={{ __html: about.smartAssistSubtitle }} />
            </SubSectionCard>

            <SubSectionCard title={about.safetyFirst} emoji="🛡️">
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
                {safetyItems.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
              <div className="mt-2" dangerouslySetInnerHTML={{ __html: about.safetySubtitle }} />
            </SubSectionCard>

            <SubSectionCard title={about.inclusiveDesign} emoji="🌍">
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
                {inclusiveItems.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
              <div className="mt-2" dangerouslySetInnerHTML={{ __html: about.inclusiveSubtitle }} />
            </SubSectionCard>

            <SubSectionCard title={about.evolvingProfiles} emoji="🧾">
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
                {evolvingItems.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
              <div className="mt-2" dangerouslySetInnerHTML={{ __html: about.evolvingSubtitle }} />
            </SubSectionCard>
          </div>
        </SectionCard>

        {/* Tech Magic Section */}
        <SectionCard title={about.techMagicTitle} emoji="🔬">
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
            {techItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: about.techMagicSubtitle }} />
        </SectionCard>

        {/* Real Stories Section */}
        <SectionCard title={about.realStoriesTitle} emoji="💌">
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
            {realStoriesItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: about.realStoriesSubtitle }} />
        </SectionCard>

        {/* Mission Section */}
        <SectionCard title={about.missionTitle} emoji="🧭">
          <div className="mb-4" dangerouslySetInnerHTML={{ __html: about.missionDescription }} />
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
            {missionItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: about.missionSubtitle }} />
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
            {missionCommitmentItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: about.missionConclusion }} />
        </SectionCard>

        {/* Coming Soon Section */}
        <SectionCard title={about.comingSoonTitle} emoji="🔮">
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
            {comingSoonItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: about.comingSoonSubtitle }} />
        </SectionCard>

        {/* Why It Works Section */}
        <SectionCard title={about.whyWorksTitle} emoji="💖">
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
            {whyWorksItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: about.whyWorksSubtitle }} />
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
            {whyWorksBenefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </SectionCard>

        {/* Ready Section */}
        <SectionCard title={about.readyTitle} emoji="🚀">
          <div className="mb-2" dangerouslySetInnerHTML={{ __html: about.readyDescription }} />
          <div className="mb-2" dangerouslySetInnerHTML={{ __html: about.readySubtitle }} />
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
            {readyItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: about.readyEndDescription }} />
        </SectionCard>      

        {/* Team Section */}
        <SectionCard title={about.teamTitle} emoji="👩‍💻">
          <div className="mb-4" dangerouslySetInnerHTML={{ __html: about.teamDescription }} />
         <ul className="list-disc list-inside marker:text-sky-400 marker:text-xl pl-6 space-y-2">
            {teamItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: about.teamEndDescription }} />
        </SectionCard>

    
      </div>
      </div>
    </PolicyLayout>
  );
}