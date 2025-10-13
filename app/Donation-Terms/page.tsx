'use client'
import PolicyLayout from '@/components/PolicyLayout';
import React, { useMemo, useState, useEffect } from 'react';
import { Heart, Crown } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import SEOHead from '@/components/seo/SEOHead';
interface TimelineStep {
  id: number;
  icon: string;
  titleKey: string;
  descKey: string;
}

interface Charity {
  id: number;
  logo: string;
  nameKey: string;
  descKey: string;
  points: number;
  donationUrl: string;
}

const timelineSteps: TimelineStep[] = [
  { 
    id: 1, 
    icon: '/createprof.png', 
    titleKey: 'kindnessJourney.howItWorks.steps.createProfile.title', 
    descKey: 'kindnessJourney.howItWorks.steps.createProfile.description' 
  },
  { 
    id: 2, 
    icon: '/dosome.png', 
    titleKey: 'kindnessJourney.howItWorks.steps.doGood.title', 
    descKey: 'kindnessJourney.howItWorks.steps.doGood.description' 
  },
  { 
    id: 3, 
    icon: '/prof.png', 
    titleKey: 'kindnessJourney.howItWorks.steps.uploadProof.title', 
    descKey: 'kindnessJourney.howItWorks.steps.uploadProof.description' 
  },
  { 
    id: 4, 
    icon: '/earn.png', 
    titleKey: 'kindnessJourney.howItWorks.steps.earnHeart.title', 
    descKey: 'kindnessJourney.howItWorks.steps.earnHeart.description' 
  },
];

const charities: Charity[] = [
  { 
    id: 1, 
    logo: '/ch1.png', 
    nameKey: 'kindnessJourney.charities.list.magenDavid.name', 
    descKey: 'kindnessJourney.charities.list.magenDavid.description', 
    points: 60,
    donationUrl: 'https://www.ufis.org.il/donation-he/'
  },
  { 
    id: 2, 
    logo: '/ch2.png', 
    nameKey: 'kindnessJourney.charities.list.latet.name', 
    descKey: 'kindnessJourney.charities.list.latet.description', 
    points: 60,
    donationUrl:  "https://zaka.org.il/donation/",
  },
  { 
    id: 3, 
    logo: '/ch3.png', 
    nameKey: 'kindnessJourney.charities.list.saveChild.name', 
    descKey: 'kindnessJourney.charities.list.saveChild.description', 
    points: 60,
    donationUrl: 'https://www.mdais.org/donation'
  },
  { 
    id: 4, 
    logo: '/ch4.png', 
    nameKey: 'kindnessJourney.charities.list.yadSarah.name', 
    descKey: 'kindnessJourney.charities.list.yadSarah.description', 
    points: 60,
    donationUrl: 'https://secured.israelgives.org/he/pay/makeawish1'
  },
  { 
    id: 5, 
    logo: '/ch5.png', 
    nameKey: 'kindnessJourney.charities.list.eranIL.name', 
    descKey: 'kindnessJourney.charities.list.eranIL.description', 
    points: 60,
    donationUrl: 'https://donation.asakimerp.com/Campaing/?CampaingID=51492'
  },
  { 
    id: 6, 
    logo: '/ch6.png', 
    nameKey: 'kindnessJourney.charities.list.pitchonLev.name', 
    descKey: 'kindnessJourney.charities.list.pitchonLev.description', 
    points: 60,
    donationUrl: 'https://www.latet.org.il/pesach2025/'
  },
  { 
    id: 7, 
    logo: '/ch7.png', 
    nameKey: 'kindnessJourney.charities.list.mesila.name', 
    descKey: 'kindnessJourney.charities.list.mesila.description', 
    points: 60,
    donationUrl: 'https://aleh.org/heb-donation/'
  },
];

interface Props {
  kindnessScore?: number;
}

export default function KindnessJourneyPage({ kindnessScore = 48 }: Props) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he';
  const [isMounted, setIsMounted] = useState(false);

  // Fallback content that matches what server renders
  const fallbackContent = {
    title: "Your Kindness Journey",
    subtitle: "Track your good deeds, earn hearts, and make a difference in the world",
    joinButton: "Join Now and Start Earning Hearts",
    animationNote: "Watch hearts fill as you perform acts of kindness",
    howItWorksTitle: "How It Works",
    progressTitle: "Your Heart Points Progress",
    yourScore: "Your Score:",
    points: "points",
    points1:"48 pts",
    progressDescription: "Every act of kindness earns you heart points",
    charitiesTitle: "Approved Charities",
    donateButton: "Donate",
    secureText: "Secure donation",
    whyKindnessTitle: "Why Kindness Matters",
    whyKindnessContent: "Studies show that performing acts of kindness not only helps others but also increases your own happiness and well-being. Our platform makes it easy to track and celebrate your positive impact.",
    whyKindnessQuote: "Kindness is a language which the deaf can hear and the blind can see.",
    leaderboardTitle: "Top Kind Hearts",
    seeAll: "See all",
    heartsEarned: "Hearts earned:",
    finalCtaTitle: "Ready to Start Your Kindness Journey?",
    finalCtaSubtitle: "Join thousands of users making the world a better place, one act of kindness at a time.",
    finalCtaJoinButton: "Start Your Journey Today",
    steps: {
      createProfile: {
        title: "Create Profile",
        description: "Sign up and create your kindness profile"
      },
      doGood: {
        title: "Do Good",
        description: "Perform acts of kindness in your community"
      },
      uploadProof: {
        title: "Upload Proof",
        description: "Share photos or stories of your good deeds"
      },
      earnHeart: {
        title: "Earn Hearts",
        description: "Collect heart points for verified acts of kindness"
      }
    },
    charities: {
      magenDavid: {
        name: "Magen David Adom",
        description: "Emergency medical services"
      },
      latet: {
        name: "Latet",
        description: "Fighting poverty and hunger"
      },
      saveChild: {
        name: "Save a Child",
        description: "Child welfare organization"
      },
      yadSarah: {
        name: "Yad Sarah",
        description: "Medical equipment lending"
      },
      eranIL: {
        name: "ERAN",
        description: "Emotional support hotline"
      },
      pitchonLev: {
        name: "Pitchon Lev",
        description: "Food security organization"
      },
      mesila: {
        name: "Mesila",
        description: "Financial guidance center"
      }
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const hearts = useMemo(() => {
    // build heart thresholds and how many full hearts to show
    const thresholds = [0, 12, 24, 48, 60, 72, 84, 96];
    const fullCount = Math.floor(kindnessScore / 60); // example: one full heart per 60 points
    const leftover = kindnessScore % 60;
    return { thresholds, fullCount, leftover };
  }, [kindnessScore]);

  const leaderboardUsers = [
    { name: 'Noa S.', hearts: 12 },
    { name: 'Avi K.', hearts: 9 },
    { name: 'Liat R.', hearts: 7 },
  ];

  return (
    <>
      <style jsx global>{`
        /* Floating hearts throughout page */
        .floating-heart {
          position: absolute;
          width: 32px;
          height: 32px;
          opacity: 0.9;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.08));
        }
        .floating-heart-small {
          position: absolute;
          width: 24px;
          height: 24px;
          opacity: 0.7;
          filter: drop-shadow(0 4px 10px rgba(0,0,0,0.06));
        }
        .floating-heart-tiny {
          position: absolute;
          width: 16px;
          height: 16px;
          opacity: 0.5;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.04));
        }
        /* Progress heart fill animation */
        .heart-shape { display: inline-block; width: 40px; height: 40px; position: relative; }
        .heart-fill { position: absolute; inset:0; display:flex; align-items:center; justify-content:center; }
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0.95); opacity: 0.9; }
          50% { transform: translateY(-18px) scale(1.05); opacity: 1; }
          100% { transform: translateY(-36px) scale(0.98); opacity: 0.85; }
        }
        @keyframes floatUpSmall {
          0% { transform: translateY(0) scale(0.9) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-12px) scale(1.1) rotate(5deg); opacity: 0.9; }
          100% { transform: translateY(-24px) scale(0.95) rotate(-3deg); opacity: 0.6; }
        }
        @keyframes floatUpTiny {
          0% { transform: translateY(0) scale(0.8) rotate(0deg); opacity: 0.5; }
          50% { transform: translateY(-8px) scale(1.2) rotate(-8deg); opacity: 0.8; }
          100% { transform: translateY(-16px) scale(0.9) rotate(4deg); opacity: 0.4; }
        }
        @keyframes driftLeft {
          0% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateX(-20px) translateY(-15px) rotate(10deg); opacity: 0.9; }
          100% { transform: translateX(-40px) translateY(-30px) rotate(-5deg); opacity: 0.4; }
        }
        @keyframes driftRight {
          0% { transform: translateX(0) translateY(0) rotate(0deg); opacity: 0.6; }
          50% { transform: translateX(20px) translateY(-15px) rotate(-10deg); opacity: 0.9; }
          100% { transform: translateX(40px) translateY(-30px) rotate(5deg); opacity: 0.4; }
        }
        .float-anim { animation: floatUp 4.5s ease-in-out infinite; }
        .float-anim-small { animation: floatUpSmall 3.8s ease-in-out infinite; }
        .float-anim-tiny { animation: floatUpTiny 3.2s ease-in-out infinite; }
        .drift-left { animation: driftLeft 6s ease-in-out infinite; }
        .drift-right { animation: driftRight 5.5s ease-in-out infinite; }
      `}</style>

      <PolicyLayout>
         <AccessibilityProvider>
                                    <AccessibilityWidget/>
                                                <SEOHead title="LoveAi - Find Real Love with AI" url="https://www.loveai.co.il/" />
                                    
        {/* Page wrapper: single consistent gentle background with floating hearts */}
        <div className={`pt-[72px] min-h-screen bg-gradient-to-b from-pink-50 via-sky-50 to-pink-50 relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
          
          {/* Global floating hearts scattered throughout the ENTIRE page - LOTS MORE! */}
          <div className="fixed inset-0 pointer-events-none z-[1]">
            {/* TOP ROW - More hearts across the top */}
            <motion.div className="absolute left-[3%] top-[5%] float-anim" animate={{ y: [0, -40, 0] }} transition={{ duration: 6, repeat: Infinity }}>
              <Heart className="floating-heart text-yellow-400" />
            </motion.div>
           
            <motion.div className="absolute left-[92%] top-[13%] drift-right" animate={{ x: [0, 15, 0], y: [0, -16, 0] }} transition={{ duration: 4.2, repeat: Infinity, delay: 2.5 }}>
              <Heart className="floating-heart-tiny text-pink-300" />
            </motion.div>

            {/* UPPER-MIDDLE ROW */}
            <motion.div className="absolute left-[7%] top-[18%] drift-left" animate={{ x: [0, -20, 0], y: [0, -20, 0] }} transition={{ duration: 5.5, repeat: Infinity, delay: 0.7 }}>
              <Heart className="floating-heart-small text-red-400" />
            </motion.div>
            <motion.div className="absolute left-[18%] top-[22%] float-anim-tiny" animate={{ y: [0, -18, 0] }} transition={{ duration: 4.2, repeat: Infinity, delay: 1.4 }}>
              <Heart className="floating-heart-tiny text-pink-300" />
            </motion.div>
           
            <motion.div className="absolute left-[88%] top-[25%] float-anim-small" animate={{ y: [0, -22, 0] }} transition={{ duration: 4.4, repeat: Infinity, delay: 2.8 }}>
              <Heart className="floating-heart-small text-rose-400" />
            </motion.div>

            {/* MIDDLE ROW */}
            <motion.div className="absolute left-[2%] top-[32%] float-anim-tiny" animate={{ y: [0, -16, 0] }} transition={{ duration: 3.7, repeat: Infinity, delay: 1.9 }}>
              <Heart className="floating-heart-tiny text-yellow-300" />
            </motion.div>
            <motion.div className="absolute left-[15%] top-[35%] drift-right" animate={{ x: [0, 18, 0], y: [0, -21, 0] }} transition={{ duration: 5.3, repeat: Infinity, delay: 0.4 }}>
              <Heart className="floating-heart-small text-pink-300" />
            </motion.div>
            <motion.div className="absolute left-[25%] top-[38%] float-anim" animate={{ y: [0, -38, 0] }} transition={{ duration: 6.8, repeat: Infinity, delay: 1.6 }}>
              <Heart className="floating-heart text-rose-300" />
            </motion.div>
            <motion.div className="absolute left-[38%] top-[33%] float-anim-small" animate={{ y: [0, -24, 0] }} transition={{ duration: 4.6, repeat: Infinity, delay: 2.4 }}>
              <Heart className="floating-heart-small text-red-400" />
            </motion.div>
            <motion.div className="absolute left-[50%] top-[37%] drift-left" animate={{ x: [0, -22, 0], y: [0, -17, 0] }} transition={{ duration: 5.7, repeat: Infinity, delay: 0.8 }}>
              <Heart className="floating-heart-tiny text-yellow-400" />
            </motion.div>
            <motion.div className="absolute left-[63%] top-[34%] float-anim-tiny" animate={{ y: [0, -13, 0] }} transition={{ duration: 3.6, repeat: Infinity, delay: 1.3 }}>
              <Heart className="floating-heart-tiny text-pink-400" />
            </motion.div>
         
            <motion.div className="absolute left-[94%] top-[40%] float-anim-small" animate={{ y: [0, -27, 0] }} transition={{ duration: 4.9, repeat: Infinity, delay: 1.5 }}>
              <Heart className="floating-heart-small text-pink-300" />
            </motion.div>

            {/* Additional floating hearts for visual density */}
            <motion.div className="absolute left-[37%] top-[94%] float-anim-tiny" animate={{ y: [0, -14, 0] }} transition={{ duration: 3.7, repeat: Infinity, delay: 0.5 }}>
              <Heart className="floating-heart-tiny text-rose-400" />
            </motion.div>
            <motion.div className="absolute left-[49%] top-[96%] float-anim" animate={{ y: [0, -40, 0] }} transition={{ duration: 7.4, repeat: Infinity, delay: 1.9 }}>
              <Heart className="floating-heart text-red-300" />
            </motion.div>
            <motion.div className="absolute left-[61%] top-[92%] drift-right" animate={{ x: [0, 27, 0], y: [0, -29, 0] }} transition={{ duration: 6.9, repeat: Infinity, delay: 2.8 }}>
              <Heart className="floating-heart-small text-yellow-300" />
            </motion.div>
            <motion.div className="absolute left-[73%] top-[97%] float-anim-small" animate={{ y: [0, -32, 0] }} transition={{ duration: 5.6, repeat: Infinity, delay: 0.3 }}>
              <Heart className="floating-heart-small text-pink-400" />
            </motion.div>
            <motion.div className="absolute left-[85%] top-[94%] float-anim-tiny" animate={{ y: [0, -18, 0] }} transition={{ duration: 4.8, repeat: Infinity, delay: 1.4 }}>
              <Heart className="floating-heart-tiny text-rose-300" />
            </motion.div>
          </div>
          
          {/* ====== HERO ====== */}
          <section className="relative py-20 z-[2]">
            {/* Additional hero-specific floating hearts for extra density */}
            <motion.div className="absolute left-[20%] top-[20%] float-anim" animate={{ y: [0, -45, 0] }} transition={{ duration: 7.2, repeat: Infinity, delay: 0.5 }}>
              <Heart className="floating-heart text-yellow-400" />
            </motion.div>
            <motion.div className="absolute right-[25%] top-[30%] drift-left" animate={{ x: [0, -35, 0], y: [0, -20, 0] }} transition={{ duration: 5.8, repeat: Infinity, delay: 1.4 }}>
              <Heart className="floating-heart-small text-pink-300" />
            </motion.div>
            <motion.div className="absolute left-[65%] top-[15%] float-anim-small" animate={{ y: [0, -30, 0] }} transition={{ duration: 4.3, repeat: Infinity, delay: 2.2 }}>
              <Heart className="floating-heart-tiny text-rose-300" />
            </motion.div>

            {/* hero content - standardized container */}
            <div className="relative z-10 max-w-6xl mx-auto px-6">
              <div className={`text-center max-w-4xl mx-auto ${isRTL ? 'rtl' : 'ltr'}`}>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: .7 }} 
                  className="text-4xl md:text-5xl font-extrabold text-gray-900"
                >
                  {isMounted ? t('kindnessJourney.title') : fallbackContent.title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: .15, duration: .6 }} 
                  className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
                >
                  {isMounted ? t('kindnessJourney.subtitle') : fallbackContent.subtitle}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: .4, duration: .6 }} 
                  className="mt-8 flex justify-center"
                >
                  <Link href="https://www.loveai.co.il/login" className="inline-block">
                    <motion.button
                      whileHover={{ scale: 1.04, boxShadow: "0 8px 30px rgba(0,162,224,0.18)" }}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-110 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg"
                      aria-label="Join Now and Start Earning Hearts"
                    >
                      <Heart className="w-5 h-5 text-white" />
                      <span className="text-white">{isMounted ? t('kindnessJourney.joinButton') : fallbackContent.joinButton}</span>
                    </motion.button>
                  </Link>
                </motion.div>

                <p className="mt-4 text-sm text-gray-500">{isMounted ? t('kindnessJourney.animationNote') : fallbackContent.animationNote}</p>
              </div>
            </div>
          </section>

          {/* ====== Step-by-step timeline (horizontal desktop, vertical mobile) ====== */}
          <section className="py-10 relative z-[2]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 relative">
                {/* Section-specific floating hearts */}
                <motion.div className="absolute -top-4 left-[10%] float-anim-small" animate={{ y: [0, -20, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.8 }}>
                  <Heart className="floating-heart-tiny text-yellow-300" />
                </motion.div>
                <motion.div className="absolute -top-2 right-[15%] drift-right" animate={{ x: [0, 15, 0], y: [0, -15, 0] }} transition={{ duration: 5.2, repeat: Infinity, delay: 1.6 }}>
                  <Heart className="floating-heart-tiny text-pink-300" />
                </motion.div>
                <h2 className="text-2xl font-bold text-center mb-8">{isMounted ? t('kindnessJourney.howItWorks.title') : fallbackContent.howItWorksTitle}</h2>

                {/* timeline container */}
                <div className="hidden md:block relative">
                  <div className="flex items-start justify-between gap-6">
                    {/* golden connecting line */}
                    <div className="absolute left-0 right-0 top-10 h-1 bg-gradient-to-r from-rose-300 to-pink-500 opacity-60 rounded-full z-0" />
                    {timelineSteps.map((it, idx) => (
                      <motion.div key={it.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 * idx }}>
                        <div className="relative z-10 flex flex-col items-center w-full max-w-48">
                          <div className="w-20 h-20 rounded-full bg-white border-2 border-rose-200 flex items-center justify-center shadow-md">
                            <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center">
                              <Image src={it.icon} alt={isMounted ? t(it.titleKey) : fallbackContent.steps.createProfile.title} width={44} height={44} className="object-contain" />
                            </div>
                          </div>

                          <h3 className="mt-4 font-semibold text-center">
                            {isMounted ? t(it.titleKey) : fallbackContent.steps[it.id === 1 ? 'createProfile' : it.id === 2 ? 'doGood' : it.id === 3 ? 'uploadProof' : 'earnHeart'].title}
                          </h3>
                          <p className="mt-2 text-sm text-gray-600 text-center">
                            {isMounted ? t(it.descKey) : fallbackContent.steps[it.id === 1 ? 'createProfile' : it.id === 2 ? 'doGood' : it.id === 3 ? 'uploadProof' : 'earnHeart'].description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* mobile timeline (vertical) */}
                <div className="md:hidden flex flex-col gap-6">
                  {timelineSteps.map((it, idx) => (
                    <motion.div key={it.id} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * .08 }} className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-rose-200 flex items-center justify-center shadow-sm flex-shrink-0">
                        <Image src={it.icon} alt={isMounted ? t(it.titleKey) : fallbackContent.steps.createProfile.title} width={36} height={36} />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {isMounted ? t(it.titleKey) : fallbackContent.steps[it.id === 1 ? 'createProfile' : it.id === 2 ? 'doGood' : it.id === 3 ? 'uploadProof' : 'earnHeart'].title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {isMounted ? t(it.descKey) : fallbackContent.steps[it.id === 1 ? 'createProfile' : it.id === 2 ? 'doGood' : it.id === 3 ? 'uploadProof' : 'earnHeart'].description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ====== Heart Points Progress Tracker ====== */}
          <section className="py-8 relative z-[2]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 relative">
                {/* Section-specific floating hearts */}
                <motion.div className="absolute -top-6 left-[20%] float-anim-tiny" animate={{ y: [0, -12, 0] }} transition={{ duration: 3.8, repeat: Infinity, delay: 1.2 }}>
                  <Heart className="floating-heart-tiny text-rose-300" />
                </motion.div>
                <motion.div className="absolute -right-4 top-[30%] drift-left" animate={{ x: [0, -20, 0], y: [0, -18, 0] }} transition={{ duration: 4.9, repeat: Infinity, delay: 0.7 }}>
                  <Heart className="floating-heart-small text-pink-400" />
                </motion.div>
                <h3 className="text-xl font-bold mb-6">{isMounted ? t('kindnessJourney.progress.title'):fallbackContent.progressTitle}</h3>

                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  {/* hearts progress (visual row) */}
                  <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                    {Array.from({ length: 6 }).map((_, i) => {
                      const filled = i < hearts.fullCount;
                      const partial = i === hearts.fullCount && hearts.leftover > 0;
                      return (
                        <div key={i} className="flex flex-col items-center">
                          <motion.div initial={{ scale: .95 }} whileInView={{ scale: 1 }} className="heart-shape">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${filled ? 'bg-rose-400' : 'bg-white'} shadow-md border border-gray-100`}>
                              <Heart className={`${filled ? 'text-white' : 'text-rose-400'} w-5 h-5`} />
                            </div>
                          </motion.div>
                          <span className="text-xs text-gray-500 mt-2">{i * 60}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* score details */}
                  <div className="flex-1">
                    <p className="text-lg font-semibold">
                      {isMounted ? t('kindnessJourney.progress.yourScore') : fallbackContent.yourScore} <span className="text-rose-600">{kindnessScore} {isMounted ? t('kindnessJourney.progress.points') : fallbackContent.points}</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{isMounted ? t('kindnessJourney.progress.description'): fallbackContent.progressDescription}</p>

                    <div className="mt-4">
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        
                        <div style={{ width: `${Math.min((kindnessScore / 300) * 100, 100)}%` }} className="h-2 bg-gradient-to-r from-rose-400 to-rose-500 transition-all" />
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-gray-500">
                        <span>0</span><span>12</span><span>24</span><span>48</span><span>60</span><span>72</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ====== Approved Charities Grid ====== */}
          <section className="py-10 relative z-[2]">
            <div className="max-w-6xl mx-auto px-6 relative">
              {/* Section-specific floating hearts */}
              <motion.div className="absolute -top-8 left-[30%] float-anim" animate={{ y: [0, -35, 0] }} transition={{ duration: 6.5, repeat: Infinity, delay: 1.5 }}>
                <Heart className="floating-heart-small text-yellow-400" />
              </motion.div>
              <motion.div className="absolute top-[20%] -right-6 drift-right" animate={{ x: [0, 25, 0], y: [0, -20, 0] }} transition={{ duration: 5.1, repeat: Infinity, delay: 2.3 }}>
                <Heart className="floating-heart-tiny text-red-300" />
              </motion.div>
              <h3 className="text-2xl font-bold text-center mb-8">{isMounted ? t('kindnessJourney.charities.title'): fallbackContent.charitiesTitle}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {charities.map(c => (
                  <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl shadow p-5">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                        <Image src={c.logo} alt={t(c.nameKey)} width={56} height={56} className="object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base mb-2">{t(c.nameKey)}</h4>
                        <p className="text-sm text-gray-600 mb-4">{t(c.descKey)}</p>
                        <div className="flex flex-col gap-3">
                          <Link href={c.donationUrl} target="_blank" rel="noopener noreferrer">
                            <motion.button 
                              whileHover={{ scale: 1.02 }}
                              className="w-full px-4 py-2 bg-gradient-to-r from-sky-400 to-sky-500 rounded-full text-white text-sm shadow-sm hover:shadow-md transition-shadow"
                            >
                              {isMounted ? t('kindnessJourney.charities.donateButton') : fallbackContent.donateButton}{c.points}{isMounted ? t('kindnessJourney.progress.points') : fallbackContent.points1}
                            </motion.button>
                          </Link>
                          <span className="text-xs text-gray-500">{isMounted ? t('kindnessJourney.charities.secureText'):fallbackContent.secureText}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ====== Why Kindness Matters (two-column) ====== */}
          <section className="py-12 relative z-[2]">
            <div className="max-w-6xl mx-auto px-6 relative">
              {/* Section-specific floating hearts */}
              <motion.div className="absolute -top-4 left-[15%] drift-left" animate={{ x: [0, -30, 0], y: [0, -25, 0] }} transition={{ duration: 5.8, repeat: Infinity, delay: 0.9 }}>
                <Heart className="floating-heart-small text-pink-300" />
              </motion.div>
              <motion.div className="absolute top-[60%] -right-8 float-anim-tiny" animate={{ y: [0, -15, 0] }} transition={{ duration: 4.2, repeat: Infinity, delay: 1.8 }}>
                <Heart className="floating-heart-tiny text-rose-400" />
              </motion.div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden lg:flex">
                <div className="lg:w-1/2 relative h-64 lg:h-auto">
                  <Image src="/blog2.png" alt="Couples holding hands" fill className="object-cover" />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{isMounted ? t('kindnessJourney.whyKindness.title') : fallbackContent.whyKindnessTitle}</h3>
                  <p className="text-gray-700 mb-6">{isMounted ? t('kindnessJourney.whyKindness.content'): fallbackContent.whyKindnessTitle}</p>
                  <blockquote className="italic text-rose-600 font-medium text-lg">
                    "{isMounted ? t('kindnessJourney.whyKindness.quote') : fallbackContent.whyKindnessQuote}"
                  </blockquote>
                </div>
              </div>
            </div>
          </section>

          {/* ====== Leaderboard (optional) ====== */}
          <section className="py-8 relative z-[2]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 relative">
                {/* Section-specific floating hearts */}
                <motion.div className="absolute -top-3 right-[25%] float-anim-small" animate={{ y: [0, -22, 0] }} transition={{ duration: 4.7, repeat: Infinity, delay: 1.1 }}>
                  <Heart className="floating-heart-tiny text-pink-300" />
                </motion.div>
                <motion.div className="absolute top-[40%] -left-5 drift-right" animate={{ x: [0, 18, 0], y: [0, -16, 0] }} transition={{ duration: 5.3, repeat: Infinity, delay: 2.1 }}>
                  <Heart className="floating-heart-tiny text-pink-400" />
                </motion.div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">{t('kindnessJourney.leaderboard.title')}</h3>
                  <Link href="/leaderboard" className="text-sm text-sky-600 hover:text-sky-700 transition-colors">
                    {isMounted ? t('kindnessJourney.leaderboard.seeAll') : fallbackContent.seeAll}
                  </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {leaderboardUsers.map((u, i) => (
                    <div key={u.name} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                        {i === 0 ? <Crown className="text-pink-500 w-5 h-5" /> : <Heart className="text-pink-400 w-5 h-5" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium">{u.name}</div>
                        <div className="text-xs text-gray-500">{isMounted ? t('kindnessJourney.leaderboard.heartsEarned') : fallbackContent.heartsEarned}</div>
                      </div>
                      <div className="text-sm text-gray-700 font-semibold">{u.hearts} ❤</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ====== Final CTA ====== */}
          <section className="py-12 relative z-[2]">
            <div className="max-w-6xl mx-auto px-6 relative">
              {/* Section-specific floating hearts */}
              <motion.div className="absolute -top-10 left-[40%] float-anim" animate={{ y: [0, -40, 0] }} transition={{ duration: 6.8, repeat: Infinity, delay: 0.6 }}>
                <Heart className="floating-heart text-pink-400" />
              </motion.div>
              <motion.div className="absolute top-[30%] -right-10 drift-left" animate={{ x: [0, -28, 0], y: [0, -22, 0] }} transition={{ duration: 5.6, repeat: Infinity, delay: 1.9 }}>
                <Heart className="floating-heart-small text-rose-300" />
              </motion.div>
              <motion.div className="absolute bottom-[10%] left-[20%] float-anim-tiny" animate={{ y: [0, -18, 0] }} transition={{ duration: 3.9, repeat: Infinity, delay: 2.4 }}>
                <Heart className="floating-heart-tiny text-pink-400" />
              </motion.div>
              <div className="bg-gradient-to-r from-pink-200 via-rose-200 to-sky-100 rounded-2xl shadow-lg p-8 text-center">
                <motion.div initial={{ scale: .98, opacity: .95 }} whileHover={{ scale: 1.02 }} className="inline-block mb-6">
                  <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-xl">
                    <Heart className="w-10 h-10 text-rose-500" />
                  </div>
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3">{isMounted ? t('kindnessJourney.finalCta.title') : fallbackContent.finalCtaTitle}</h2>
                <p className="text-gray-700 mb-8">{isMounted ? t('kindnessJourney.finalCta.subtitle') : fallbackContent.finalCtaSubtitle}</p>

                <div>
                  <Link href="https://www.loveai.co.il/login">
                    <motion.button 
                      whileHover={{ scale: 1.04 }} 
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  hover:shadow-pink-500/50 hover:scale-110 rounded-full font-semibold shadow-lg text-white hover:shadow-xl transition-shadow"
                    >
                      {isMounted ? t('kindnessJourney.finalCta.joinButton') : fallbackContent.joinButton}

                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
        </AccessibilityProvider>
      </PolicyLayout>
    </>
  );
}