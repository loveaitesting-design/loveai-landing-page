// "use client";

// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import DemoComp from "../DemoComp/DemoComp";
// import Image from "next/image";
// import { useTranslation } from "react-i18next";
// import Head from 'next/head';


// export default function BannerSection() {
//   const { t } = useTranslation();
//   const [isMounted, setIsMounted] = useState(false);

//   // Fallback content that matches what server renders
//   const fallbackBanner = {
//     imageAlt: "Banner image",
//     chat: "Chat",
//     dislike: "Dislike",
//     star: "Star",
//     age: "years old",
//     awayFromYou: "away from you"
//   };

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const settings = {
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     pauseOnHover: false,
//     autoplay: true,
//     autoplaySpeed: 5000,
//   };

//   const cards = [
//     { name: "Jinkal Ka", age: null, distance: "3 KM", image: "/bnprof1.png" },
//     { name: "Vini Sen", age: 40, distance: "3 KM", image: "/bnprof2.png" },
//   ];

//   const banners = ["/h1.webp", "/h2.webp", "/h3.webp", "/h4.webp"];

//   return (
//     <>
//      <Head>
//         {/* Preload the first banner image for better LCP */}
//         <link rel="preload" href="/h1.webp" as="image" />
//       </Head>
//     <div id="home" className="relative -mb-[8px]">
//       <Slider {...settings}>
//         {banners.map((banner, index) => (
//           <div key={index} className="relative w-full h-[80vh] lg:h-screen">
//             {/* Banner Image */}
//          <div key={index} className="relative w-full h-[80vh] lg:h-screen">
//           <Image
//             src={banner}
//             alt={`Banner image ${index + 1}`}
//             fill
//             className="object-cover"
//             priority={index === 0}
//             quality={85}
//             sizes="100vw"
//           />
//         </div>
//             <DemoComp />
//           </div>
//         ))}
//       </Slider>

//       {/* Cards overlay - now outside the Slider */}
//       <div className="absolute top-1/2 right-4 lg:right-12 transform -translate-y-1/2 z-20">
//         <div className="relative w-[250px] h-[320px] lg:w-[300px] lg:h-[380px]">
//           {cards.map((card, idx) => (
//             <div
//               key={idx}
//               className={`${
//                 idx === 0
//                   ? "animate-bounce-staggered-1"
//                   : "animate-bounce-staggered-2"
//               } absolute ${
//                 idx === 0
//                   ? "top-0 left-0"
//                   : "top-32 left-8 lg:top-40 lg:left-10"
//               } bg-white shadow-lg rounded-2xl overflow-hidden w-[220px] h-[280px] lg:w-[260px] lg:h-[320px] z-${
//                 10 + idx * 10
//               }`}
//             >
//               <Image
//                 src={card.image}
//                 alt={card.name}
//                 width={260}
//                 height={320}
//                 className="w-full h-full object-cover"
//               />

//               {/* Buttons and Text */}
//               <div className="absolute top-4 left-4 flex flex-col gap-3">
//                 <button className="bg-white rounded-full shadow-md hover:bg-gray-100 transition">
//                   <Image
//                     src="/chat.png"
//                     alt={isMounted ? t("banner_chat") : fallbackBanner.chat}
//                     width={30}
//                     height={30}
//                   />
//                 </button>
//                 <button className="bg-white rounded-full shadow-md hover:bg-gray-100 transition">
//                   <Image
//                     src="/dislike.png"
//                     alt={isMounted ? t("banner_dislike") : fallbackBanner.dislike}
//                     width={30}
//                     height={30}
//                   />
//                 </button>
//               </div>

//               <div className="absolute top-4 right-4">
//                 <button className="bg-white rounded-full shadow-md hover:bg-gray-100 transition">
//                   <Image
//                     src="/star.png"
//                     alt={isMounted ? t("banner_star") : fallbackBanner.star}
//                     width={30}
//                     height={30}
//                   />
//                 </button>
//               </div>

//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 rounded-b-2xl">
//                 <div className="flex items-center justify-between">
//                   <h2 className="text-lg font-semibold">{card.name}</h2>
//                   {card.age && (
//                     <div className="flex items-center gap-1 text-sm">
//                       <span>
//                         {card.age} {isMounted ? t("banner_age") : fallbackBanner.age}
//                       </span>
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex items-center text-sm mt-2">
//                   <span>
//                     {card.distance} {isMounted ? t("banner_away_from_you") : fallbackBanner.awayFromYou}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DemoComp from "../DemoComp/DemoComp";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Head from 'next/head';

export default function BannerSection() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

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
  };

  const cards = [
    { name: "Jinkal Ka", age: null, distance: "3 KM", image: "/bnprof1.png" },
    { name: "Vini Sen", age: 40, distance: "3 KM", image: "/bnprof2.png" },
  ];

  const banners = ["/h1.webp", "/h2.webp", "/h3.webp", "/h4.webp"];

  // Blur placeholder data URL
  const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9kfaSXWUE//9k=";

  return (
    <>
      <Head>
        {/* Preload critical images for better LCP */}
        <link rel="preload" href="/h1.webp" as="image" type="image/webp" />
        <link rel="preload" href="/bnprof1.png" as="image" />
        <link rel="preload" href="/bnprof2.png" as="image" />
        <link rel="preload" href="/chat.png" as="image" />
        <link rel="preload" href="/dislike.png" as="image" />
        <link rel="preload" href="/star.png" as="image" />
      </Head>
      
      <div id="home" className="relative -mb-[8px]">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="relative w-full h-[80vh] lg:h-screen">
              {/* Banner Image with priority for first image only */}
              <Image
                src={banner}
                alt={isMounted ? t("banner_image_alt", { index: index + 1 }) : `${fallbackBanner.imageAlt} ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0} // Only first image gets priority
                loading={index === 0 ? "eager" : "lazy"} // Lazy load other images
                placeholder="blur"
                blurDataURL={blurDataURL}
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              <DemoComp />
            </div>
          ))}
        </Slider>

        {/* Cards overlay - now outside the Slider */}
        <div className="absolute top-1/2 right-4 lg:right-12 transform -translate-y-1/2 z-20">
          <div className="relative w-[250px] h-[320px] lg:w-[300px] lg:h-[380px]">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`${
                  idx === 0
                    ? "animate-bounce-staggered-1"
                    : "animate-bounce-staggered-2"
                } absolute ${
                  idx === 0
                    ? "top-0 left-0"
                    : "top-32 left-8 lg:top-40 lg:left-10"
                } bg-white shadow-lg rounded-2xl overflow-hidden w-[220px] h-[280px] lg:w-[260px] lg:h-[320px] z-${
                  10 + idx * 10
                }`}
              >
                {/* Card Profile Image */}
                <Image
                  src={card.image}
                  alt={card.name}
                  width={260}
                  height={320}
                  className="w-full h-full object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  quality={85}
                  priority={idx === 0} // Priority for first card only
                />

                {/* Chat Button */}
                <div className="absolute top-4 left-4 flex flex-col gap-3">
                  <button className="bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                    <Image
                      src="/chat.png"
                      alt={isMounted ? t("banner_chat") : fallbackBanner.chat}
                      width={30}
                      height={30}
                      quality={80}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </button>
                  
                  {/* Dislike Button */}
                  <button className="bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                    <Image
                      src="/dislike.png"
                      alt={isMounted ? t("banner_dislike") : fallbackBanner.dislike}
                      width={30}
                      height={30}
                      quality={80}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </button>
                </div>

                {/* Star Button */}
                <div className="absolute top-4 right-4">
                  <button className="bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                    <Image
                      src="/star.png"
                      alt={isMounted ? t("banner_star") : fallbackBanner.star}
                      width={30}
                      height={30}
                      quality={80}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </button>
                </div>

                {/* Card Footer */}
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