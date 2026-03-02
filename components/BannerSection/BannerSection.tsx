"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Head from 'next/head';
import { Target, Heart } from "lucide-react";

export default function BannerSection() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Fallback content that matches what server renders
  const fallbackBanner = {
    imageAlt: "Banner image",
    chat: "Chat",
    dislike: "Dislike",
    star: "Star",
    age: "years old",
    awayFromYou: "away from you"
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  // Define content for each slide
  const slideContent = [
    {
      // Content for slide 1
      loveSmarter: "demo_slide1_love_smarter",
      liveDeeper: "demo_slide1_live_deeper",
      matchByValues: "demo_slide1_match_by_values",
      aiPlatformDesc: "demo_slide1_ai_platform_desc",
      startNow: "demo_slide1_start_now",
      learnMore: "demo_slide1_learn_more",
      matchesThisWeek: "demo_slide1_matches_this_week",
      fallback: {
        loveSmarter: "LoveAi – A serious dating app,",
        liveDeeper: "Powered by AI and shared values,",
        matchByValues: "Not endless swipes.",
        aiPlatformDesc: "Our AI-powered dating platform uses cutting-edge technology to connect you with compatible partners who share your interests, Smart Dating for Real People, AI-Powered Matching for Deeper Connections,Privacy-First. Verified Users. Real Intentions.",
        startNow: "Find your perfect match – start now!",
        learnMore: "Discover real love powered by AI",
        matchesThisWeek: "10,000+ matches this week"
      }
    },
    {
      // Content for slide 2
      loveSmarter: "demo_slide2_love_smarter",
      liveDeeper: "demo_slide2_live_deeper",
      matchByValues: "demo_slide2_match_by_values",
      aiPlatformDesc: "demo_slide2_ai_platform_desc",
      startNow: "demo_slide2_start_now",
      learnMore: "demo_slide2_learn_more",
      matchesThisWeek: "demo_slide2_matches_this_week",
      fallback: {
        loveSmarter: "Meet Your Soulmate Today,",
        liveDeeper: "Real connections, Real relationships,",
        matchByValues: "Start your love story.",
        aiPlatformDesc: "Join thousands of singles finding meaningful relationships. Our smart matching algorithm learns your preferences to connect you with the right people at the right time.",
        startNow: "Join now and find love!",
        learnMore: "See how it works",
        matchesThisWeek: "10,000+ new connections"
      }
    },
    {
      // Content for slide 3
      loveSmarter: "demo_slide3_love_smarter",
      liveDeeper: "demo_slide3_live_deeper",
      matchByValues: "demo_slide3_match_by_values",
      aiPlatformDesc: "demo_slide3_ai_platform_desc",
      startNow: "demo_slide3_start_now",
      learnMore: "demo_slide3_learn_more",
      matchesThisWeek: "demo_slide3_matches_this_week",
      fallback: {
        loveSmarter: "Your Perfect Match Awaits,",
        liveDeeper: "Where authentic people meet,",
        matchByValues: "Love without compromise.",
        aiPlatformDesc: "Experience dating reimagined. Connect with verified users who share your values, interests, and life goals. Say goodbye to ghosting and hello to genuine connections.",
        startNow: "Start your journey today!",
        learnMore: "Explore success stories",
        matchesThisWeek: "10,000+ happy couples"
      }
    },
    {
      // Content for slide 4
      loveSmarter: "demo_slide4_love_smarter",
      liveDeeper: "demo_slide4_live_deeper",
      matchByValues: "demo_slide4_match_by_values",
      aiPlatformDesc: "demo_slide4_ai_platform_desc",
      startNow: "demo_slide4_start_now",
      learnMore: "demo_slide4_learn_more",
      matchesThisWeek: "demo_slide4_matches_this_week",
      fallback: {
        loveSmarter: "Find Love That Lasts,",
        liveDeeper: "Intelligent matching for real people,",
        matchByValues: "Meaningful relationships start here.",
        aiPlatformDesc: "Built for those serious about finding love. Our platform prioritizes quality over quantity, connecting you with people who truly match your lifestyle and values.",
        startNow: "Create your profile now!",
        learnMore: "Learn about our AI matching",
        matchesThisWeek: "10,000+ active members"
      }
    }
  ];

  const cards = [
    { name: "Jinkal Ka", age: null, distance: "3 KM", image: "/bnprof1.png" },
    { name: "Vini Sen", age: 40, distance: "3 KM", image: "/bnprof2.png" },
  ];

  const banners = ["/h1.webp", "/h2.webp", "/h3.webp", "/h4.webp"];

  // Get current content based on current slide
  const currentContent = slideContent[currentSlide] || slideContent[0];

  // Blur placeholder data URL
  const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9kfaSXWUE//9k=";

  return (
    <>
      <Head>
        <link rel="preload" href="/h1.webp" as="image" type="image/webp" />
        <link rel="preload" href="/bnprof1.png" as="image" />
        <link rel="preload" href="/bnprof2.png" as="image" />
        <link rel="preload" href="/chat.png" as="image" />
        <link rel="preload" href="/dislike.png" as="image" />
        <link rel="preload" href="/star.png" as="image" />
      </Head>
      
      <div id="home" className="relative -mb-[8px]">
        <Slider {...settings} ref={sliderRef}>
          {banners.map((banner, index) => (
            <div key={index} className="relative w-full h-[80vh] lg:h-screen">
              <Image
                src={banner}
                alt={isMounted ? t("banner_image_alt", { index: index + 1 }) : `${fallbackBanner.imageAlt} ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL={blurDataURL}
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              
              {/* DemoComp Content - Changes with each slide */}
              <div className="absolute inset-0 flex flex-col items-left justify-center bg-black/30 text-left px-4">
                <h1 className="text-4xl md:text-4.5xl font-bold mb-4">
                  <span className="italic font-medium text-white">
                    {isMounted ? t(currentContent.loveSmarter) : currentContent.fallback.loveSmarter}
                  </span>{" "}
                  <br/>
                  <span className="italic font-medium text-cyan-400">
                    {isMounted ? t(currentContent.liveDeeper) : currentContent.fallback.liveDeeper}
                  </span>
                  <br />
                  <span className="text-white font-extrabold">
                    {isMounted ? t(currentContent.matchByValues) : currentContent.fallback.matchByValues}
                  </span>
                </h1>

                <p className="text-gray-300 max-w-xl mb-8">
                  {isMounted ? t(currentContent.aiPlatformDesc) : currentContent.fallback.aiPlatformDesc}
                </p>

                {/* <div className="flex gap-4 mb-8">
                  <a href="https://www.loveai.co.il/login" target="_blank" className="block">
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-110 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-500 backdrop-blur-sm border-0 animate-bounce hover:animate-pulse mb-3">
                      <Target size={30} />
                      {isMounted ? t(currentContent.startNow) : currentContent.fallback.startNow}
                      →
                    </button>
                  </a>
                </div>

                <div className="flex gap-4 mb-8">
                  <a href="https://www.loveai.co.il/login" target="_blank" className="block">
                    <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md border transition">
                      <Heart size={30} className="text-pink-500" />
                      {isMounted ? t(currentContent.learnMore) : currentContent.fallback.learnMore}
                    </button>
                  </a>
                </div> */}
<div className="flex gap-4 mb-8 flex-wrap">
  <a
    href="https://www.loveai.co.il/login"
    target="_blank"
    className="block"
  >
    <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:shadow-2xl hover:shadow-pink-500/50 hover:scale-110 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-500 backdrop-blur-sm border-0 animate-bounce hover:animate-pulse">
      <Target size={30} />
      {isMounted ? t(currentContent.startNow) : currentContent.fallback.startNow}
      →
    </button>
  </a>

  <a
    href="https://www.loveai.co.il/login"
    target="_blank"
    className="block"
  >
    <button  className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-full shadow-md border transition">
      <Heart    onClick={(e) => {
                e.preventDefault(); // Prevent immediate navigation
                localStorage.clear();
                window.open("https://www.loveai.co.il/login", "_blank"); // Open after clearing
              }}  size={30} className="text-pink-500" />
      {isMounted ? t(currentContent.learnMore) : currentContent.fallback.learnMore}
    </button>
  </a>
</div>

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
                    {isMounted ? t(currentContent.matchesThisWeek) : currentContent.fallback.matchesThisWeek}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Cards overlay */}
        <div className="absolute top-1/2 right-4 lg:right-12 transform -translate-y-1/2 z-20">
          <div className="relative w-[250px] h-[320px] lg:w-[300px] lg:h-[380px]">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`${
                  idx === 0 ? "animate-bounce-staggered-1" : "animate-bounce-staggered-2"
                } absolute ${
                  idx === 0 ? "top-0 left-0" : "top-32 left-8 lg:top-40 lg:left-10"
                } bg-white shadow-lg rounded-2xl overflow-hidden w-[220px] h-[280px] lg:w-[260px] lg:h-[320px] z-${10 + idx * 10}`}
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  width={260}
                  height={320}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  quality={85}
                  priority={idx === 0}
                />

                <div className="absolute top-4 left-4 flex flex-col gap-3">
                  <button className="bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                    <Image
                      src="/chat.png"
                      alt={isMounted ? t("banner_chat") : fallbackBanner.chat}
                      width={30}
                      height={30}
                      quality={80}
                    />
                  </button>
                  
                  <button className="bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                    <Image
                      src="/dislike.png"
                      alt={isMounted ? t("banner_dislike") : fallbackBanner.dislike}
                      width={30}
                      height={30}
                      quality={80}
                    />
                  </button>
                </div>

                <div className="absolute top-4 right-4">
                  <button className="bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                    <Image
                      src="/star.png"
                      alt={isMounted ? t("banner_star") : fallbackBanner.star}
                      width={30}
                      height={30}
                      quality={80}
                    />
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-2xl">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{card.name}</h2>
                    {card.age && (
                      <div className="flex items-center gap-1 text-sm">
                        <span>
                          {card.age} {isMounted ? t("banner_age") : fallbackBanner.age}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-sm mt-2">
                    <span>
                      {card.distance} {isMounted ? t("banner_away_from_you") : fallbackBanner.awayFromYou}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}