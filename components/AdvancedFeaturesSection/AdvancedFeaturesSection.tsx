// "use client";

// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";

// export default function AdvancedFeaturesSection() {
//   const { t } = useTranslation();
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);
//   return (
//     <div className="bg-[linear-gradient(87.72deg,_#FFDFDF_4.11%,_#D5F8FF_102.78%)] py-12">
//       <div className="container mx-auto px-4 md:px-8">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <div className="relative inline-block mb-4">
//             <h1 className="text-2xl md:text-4xl font-bold">
//               <span className="text-black">
//                 { isMounted ? t("advanced_features_title") : 'Advanced Dating Features' }
//               </span>
//             </h1>

//             {/* Left Heart */}
//             <img
//               src="/heartleft.png"
//               alt="Heart"
//               className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8"
//             />

//             {/* Right Heart */}
//             <img
//               src="/heartright.png"
//               alt="Heart"
//               className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8"
//             />
//           </div>

//           <p className="text-[#4B5563] font-medium max-w-2xl mx-auto text-sm md:text-base">
//             {isMounted ? t("advanced_features_subtitle") : 'Our platform combines romance and artificial intelligence to create the most advanced dating'}
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {/* Card 1 */}
//           <div className="bg-white/50 rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
//             <div className="p-6">
//               <div className="w-14 h-14 bg-[#ffb6c1] rounded-xl flex items-center justify-center mb-4">
//                 {/* <img src="/ai.png" alt="AI" className="w-8 h-8" /> */}✅
//               </div>
//               <h2 className="text-lg md:text-xl font-semibold mb-3 text-[#1F2937]">
//                 {isMounted ? t("advanced_features_card1_title") : "AI-Powered Matchmaking"}
//               </h2>
//               <p className="text-sm md:text-base">
//                 {isMounted ? t("advanced_features_card1_desc") : "Smart algorithms analyze your preferences and personality to find your perfect match with incredible accuracy."}
//               </p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-gradient-to-b from-[#00A3E0] to-[#00D4FF] rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer text-white">
//             <div className="p-6">
//               <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
//                 {/* <img src="/enhanced.png" alt="Enhanced" className="w-8 h-8" /> */}
//                 🔒
//               </div>
//               <h2 className="text-lg md:text-xl font-semibold mb-3">
//                 {isMounted ? t("advanced_features_card2_title") : "Enhanced Privacy & Security"}
//               </h2>
//               <p className="text-sm md:text-base">
//                 {isMounted ? t("advanced_features_card2_desc") : "Your personal information is protected with end-to-end encryption and advanced security measures."}
//               </p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white/50 rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
//             <div className="p-6">
//               <div className="w-14 h-14 bg-[#ffb6c1] rounded-xl flex items-center justify-center mb-4">
//                 {/* <img
//                   src="/smart.png"
//                   alt="Smart Communication"
//                   className="w-8 h-8"
//                 /> */}
//                 💬
//               </div>
//               <h2 className="text-lg md:text-xl font-semibold mb-3 text-[#1F2937]">
//                 {isMounted ? t("advanced_features_card3_title") : "Smart Communication Tools"}
//               </h2>
//               <p className="text-sm md:text-base">
//                 {isMounted ? t("advanced_features_card3_desc") : "Advanced messaging features including voice notes, video calls, and real-time translation for global connections."}
//               </p>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="bg-gradient-to-b from-[#00A3E0] to-[#00D4FF] rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer text-white">
//             <div className="p-6">
//               <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
//                 {/* <img
//                   src="/compatibility.png"
//                   alt="Compatibility"
//                   className="w-8 h-8"
//                 /> */}
//                 💡
//               </div>
//               <h2 className="text-lg md:text-xl font-semibold mb-3">
//                 {isMounted ? t("advanced_features_card4_title") : "Compatibility Analytics"}
//               </h2>
//               <p className="text-sm md:text-base">
//                 {isMounted ? t("advanced_features_card4_desc") : "Deep insights into relationship compatibility based on shared interests, values, and communication styles."}
//               </p>
//             </div>
//           </div>

//           {/* Card 5 */}
//           <div className="bg-white/50 rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
//             <div className="p-6">
//               <div className="w-14 h-14 bg-[#ffb6c1] rounded-xl flex items-center justify-center mb-4">
//                 {/* <img
//                   src="/community.png"
//                   alt="Community Events"
//                   className="w-8 h-8"
//                 /> */}
//                 🎉
//               </div>
//               <h2 className="text-lg md:text-xl font-semibold mb-3 text-[#1F2937]">
//                 {isMounted ? t("advanced_features_card5_title") : "Community Events & Activities"}
//               </h2>
//               <p className="text-sm md:text-base">
//                 {isMounted ? t("advanced_features_card5_desc") : "Join local meetups, virtual events, and group activities to meet like-minded people in a comfortable setting."}
//               </p>
//             </div>
//           </div>

//           {/* Card 6 */}
//           <div className="bg-gradient-to-b from-[#00A3E0] to-[#00D4FF] rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer text-white">
//             <div className="p-6">
//               <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
//                 {/* <img
//                   src="/relationship.png"
//                   alt="Relationship Coaching"
//                   className="w-8 h-8"
//                 /> */}
//                 <span className="text-[#ffb6c1] text-xl">❤</span>
//               </div>
//               <h2 className="text-lg md:text-xl font-semibold mb-3">
//                 {isMounted ? t("advanced_features_card6_title") : "Relationship Coaching"}
//               </h2>
//               <p className="text-sm md:text-base">
//                 {isMounted ? t("advanced_features_card6_desc") : "Expert guidance and personalized advice to help you build stronger, healthier relationships that last."}
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
// AdvancedFeaturesSection.jsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { FaHeart } from "react-icons/fa"; // Added for SVG icons to replace images
import { Brain, Heart, PartyPopper, Lightbulb, MessageCircle, Shield } from "lucide-react";

export default function AdvancedFeaturesSection() {
  const { t } = useTranslation(["advanced_features"]);

  return (
    // <div className="bg-[linear-gradient(87.72deg,_#FFDFDF_4.11%,_#D5F8FF_102.78%)] py-12">
          <div id="features" className="bg-white py-12">

      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-4">
            <h1 className="text-2xl md:text-4xl font-bold">
              <span className="text-black">
                {t("advanced_features_title", { defaultValue: 'Advanced Dating Features' })}
              </span>
            </h1>

            {/* Left Heart - Replaced with SVG icon */}
            {/* <FaHeart className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 text-pink-300" /> */}

            {/* Right Heart - Replaced with SVG icon */}
            {/* <FaHeart className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 text-pink-300" /> */}
          </div>

          <p className="text-[#4B5563] font-medium max-w-2xl mx-auto text-sm md:text-base">
            {t("advanced_features_subtitle", { defaultValue: 'Our platform combines romance and artificial intelligence to create the most advanced dating' })}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
        <div className="bg-white/50 rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-sky-400/50 hover:shadow-[0_25px_50px_-12px_rgba(56,189,248,0.5)] cursor-pointer">
      <div className="p-6">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-4 shadow-lg">
          <Brain className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
       <h2 className="text-lg md:text-xl font-semibold mb-3 text-[
#1F2937]">
{t("advanced_features_card1_title", { defaultValue: "AI-Powered Matchmaking" })}
</h2>
<p className="text-sm md:text-base">
{t("advanced_features_card1_desc", { defaultValue: "Smart algorithms analyze your preferences and personality to find your perfect match with incredible accuracy." })}
</p>
      </div>
    </div>
          {/* Card 2 */}
          <div className="bg-gradient-to-b from-[#00A3E0] to-[#00D4FF] rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-sky-400/50 hover:shadow-[0_25px_50px_-12px_rgba(56,189,248,0.5)] cursor-pointer text-white">
            <div className="p-6">
             <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
          <Shield className="w-7 h-7 text-[#00A3E0]" strokeWidth={2} />
        </div>
              <h2 className="text-lg md:text-xl font-semibold mb-3">
                {t("advanced_features_card2_title", { defaultValue: "Enhanced Privacy & Security" })}
              </h2>
              <p className="text-sm md:text-base">
                {t("advanced_features_card2_desc", { defaultValue: "Your personal information is protected with end-to-end encryption and advanced security measures." })}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/50 rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <div className="p-6">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-4 shadow-lg">
          <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
              <h2 className="text-lg md:text-xl font-semibold mb-3 text-[#1F2937]">
                {t("advanced_features_card3_title", { defaultValue: "Smart Communication Tools" })}
              </h2>
              <p className="text-sm md:text-base">
                {t("advanced_features_card3_desc", { defaultValue: "Advanced messaging features including voice notes, video calls, and real-time translation for global connections." })}
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-b from-[#00A3E0] to-[#00D4FF] rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-sky-400/50 hover:shadow-[0_25px_50px_-12px_rgba(56,189,248,0.5)] cursor-pointer text-white">
            <div className="p-6">
             <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
          <Lightbulb className="w-7 h-7 text-[#00A3E0]" strokeWidth={2} />
        </div>
              <h2 className="text-lg md:text-xl font-semibold mb-3">
                {t("advanced_features_card4_title", { defaultValue: "Compatibility Analytics" })}
              </h2>
              <p className="text-sm md:text-base">
                {t("advanced_features_card4_desc", { defaultValue: "Deep insights into relationship compatibility based on shared interests, values, and communication styles." })}
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white/50 rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer">
            <div className="p-6">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-4 shadow-lg">
          <PartyPopper className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
              <h2 className="text-lg md:text-xl font-semibold mb-3 text-[#1F2937]">
                {t("advanced_features_card5_title", { defaultValue: "Community Events & Activities" })}
              </h2>
              <p className="text-sm md:text-base">
                {t("advanced_features_card5_desc", { defaultValue: "Join local meetups, virtual events, and group activities to meet like-minded people in a comfortable setting." })}
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-gradient-to-b from-[#00A3E0] to-[#00D4FF] rounded-xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-sky-400/50 hover:shadow-[0_25px_50px_-12px_rgba(56,189,248,0.5)] cursor-pointer text-white">
            <div className="p-6">
             <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
          <Heart className="w-7 h-7 text-[#00A3E0]" strokeWidth={2} />
        </div>
              <h2 className="text-lg md:text-xl font-semibold mb-3">
                {t("advanced_features_card6_title", { defaultValue: "Relationship Coaching" })}
              </h2>
              <p className="text-sm md:text-base">
                {t("advanced_features_card6_desc", { defaultValue: "Expert guidance and personalized advice to help you build stronger, healthier relationships that last." })}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}