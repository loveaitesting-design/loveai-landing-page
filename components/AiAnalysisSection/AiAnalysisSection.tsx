// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import AiAnalysisAnimation from "../AiAnalysisAnimation/AiAnalysisAnimation";

// export default function AiAnalysisSection() {
//   const { t } = useTranslation();
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   return (
//     <section className="w-full bg-gradient-to-r from-[#00D4FF26] to-[#ffffff] overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="relative min-h-[460px] py-12 flex items-center flex-wrap">
//           {/* Left side (content) */}
//           <div className="relative z-10 w-full sm:w-3/5 p-6">
//             <h1 className="text-3xl sm:text-4xl font-bold text-[#00a8e8] mb-4">
//               {isMounted ? t("ai_analysis_title") : "AI Analysis"}
//             </h1>

//             <p className="text-black mb-8 leading-relaxed">
//               {isMounted ? (
//                 <>
//                   {t("ai_analysis_desc1")}{" "}
//                   <span className="text-[#ff5a5f] font-medium">LoveAi</span>{" "}
//                   {t("ai_analysis_desc2")}
//                 </>
//               ) : (
//                 "Discover your perfect match with LoveAi using advanced emotion-driven analysis."
//               )}
//             </p>
//           </div>

//           {/* Curved shape on the right */}
//           <div className="absolute right-0 top-0 h-full z-[1] w-[30%] lg:w-[40%] bg-white rounded-l-full opacity-100 flex items-center justify-center overflow-visible">
//             <div className="relative">
//               <AiAnalysisAnimation />
//             </div>
//           </div>

//           {/* Button positioned at the edge of the circular curve */}
//           <div className="absolute left-[55%] transform -translate-x-1/2 bottom-8 z-20">
//             <div className="bg-white text-black font-medium py-3 px-6 sm:pr-6 sm:pl-6 rounded-full text-sm sm:text-base">
//               {isMounted ? t("ai_analysis_cta") : "Get your AI match"}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AiAnalysisAnimation from "../AiAnalysisAnimation/AiAnalysisAnimation";

export default function AiAnalysisSection() {
  const { t, i18n } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // RTL Override Logic - inline in the same file
  const isHebrew = i18n.language === 'he';
  
  const getRTLOverrideProps = () => ({
    dir: 'ltr' as const,
    style: { direction: 'ltr' as const }
  });

  const getTextAlignmentStyle = () => ({
    textAlign: isHebrew ? 'right' as const : 'left' as const
  });

  return (
    <section 
      className="w-full bg-gradient-to-r from-[#00D4FF26] to-[#ffffff] overflow-hidden"
      {...getRTLOverrideProps()}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[460px] py-12 flex items-center flex-wrap">
          {/* Left side (content) */}
          <div 
            className="relative z-10 w-full sm:w-3/5 p-6"
            style={getTextAlignmentStyle()}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-[#00a8e8] mb-4">
              {isMounted ? t("ai_analysis_title") : "AI Analysis"}
            </h1>
            <p className="text-black mb-8 leading-relaxed">
              {isMounted ? (
                <>
                  {t("ai_analysis_desc1")}{" "}
                  <span className="text-[#ff5a5f] font-medium">LoveAi</span>{" "}
                  {t("ai_analysis_desc2")}
                </>
              ) : (
                "Discover your perfect match with LoveAi using advanced emotion-driven analysis."
              )}
            </p>
          </div>

          {/* Curved shape on the right - always stays on the right */}
          <div className="absolute right-0 top-0 h-full z-[1] w-[30%] lg:w-[40%] bg-white rounded-l-full opacity-100 flex items-center justify-center overflow-visible">
            <div className="relative">
              <AiAnalysisAnimation />
            </div>
          </div>

          {/* Button positioned at the edge of the circular curve - always in the same position */}
          <div className="absolute left-[55%] transform -translate-x-1/2 bottom-8 z-20">
            <div className="bg-white text-black font-medium py-3 px-6 sm:pr-6 sm:pl-6 rounded-full text-sm sm:text-base">
              {isMounted ? t("ai_analysis_cta") : "Get your AI match"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}