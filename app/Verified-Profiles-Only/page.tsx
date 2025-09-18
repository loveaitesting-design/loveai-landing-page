// 'use client';

// import PolicyLayout from '@/components/PolicyLayout';
// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import Image from 'next/image';

// function Verify() {
//   const { t } = useTranslation();

//   const verify = {
//   title: t('Verify.verify.title'),
//   image: t('Verify.verify.image'),
//   content: t('Verify.verify.content'),
//   tag: [t('tag.safety'), t('tag.trust'), t('tag.profileTips')]
// };


//   return (
//     <>
//       <style jsx>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>

//       <PolicyLayout>
//         <div className="pt-[72px]" style={{ background: 'linear-gradient(to right, #FFDFDF, #D5F8FF)' }}>
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[46px] pb-[46px]">
//             <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24 mb-6">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-400 leading-tight flex-1">
//                 {verify.title}
//               </h1>
//               <div className="flex flex-wrap gap-3 lg:flex-shrink-0 lg:mt-3 lg:ml-8">
//                 {verify.tag.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="bg-sky-400 text-White px-5 py-2 rounded-full text-lg font-bold whitespace-nowrap transition-colors duration-300 cursor-pointer"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="border-[10px] border-[#27D3F5] rounded-2xl overflow-hidden bg-white">
//               <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
//                 <Image
//                   src="/VerifedProfileBlog.png"
//                   alt={verify.title}
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>

//               <div className="flex flex-col lg:flex-row gap-8 px-6 sm:px-8 pb-6 sm:pb-8 mt-8">
//                 <div className="flex-1 lg:w-2/3">
//                   <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                   
//                     <div
//                       className="text-gray-700 leading-relaxed text-base sm:text-lg overflow-y-auto hide-scrollbar"
//                       style={{
//                         height: '1200px',
//                         scrollbarWidth: 'none',
//                         msOverflowStyle: 'none'
//                       }}
//                       dangerouslySetInnerHTML={{ __html: verify.content }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </PolicyLayout>
//     </>
//   );
// }

// export default Verify;

'use client';
import PolicyLayout from '@/components/PolicyLayout';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
function Verify() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  
  // Fallback content that matches what server renders
  const fallbackVerify = {
    title: "Profile Verification: Building Trust in Online Dating",
    image: "/VerifedProfileBlog.png",
    content: `
      <h2>Why Profile Verification Matters</h2>
      <p>In the world of online dating, trust is everything. Profile verification helps create a safer, more authentic dating environment where users can connect with confidence.</p>
      
      <h3>Benefits of Verified Profiles</h3>
      <p>Verified profiles receive more matches and engagement because they demonstrate authenticity and commitment to genuine connections. Users feel more comfortable reaching out to verified members.</p>
      
      <h3>How to Get Verified</h3>
      <p>Our verification process is simple and secure. Upload a government-issued ID and take a real-time selfie to confirm your identity. The process typically takes 24-48 hours.</p>
      
      <h3>Safety First</h3>
      <p>Verification is just one part of our comprehensive safety features. We also offer photo verification, background checks, and advanced reporting tools to keep our community safe.</p>
      
      <h3>Tips for Success</h3>
      <ul>
        <li>Use recent, clear photos that show your face</li>
        <li>Complete your profile with genuine information</li>
        <li>Engage authentically with other verified members</li>
        <li>Report any suspicious activity immediately</li>
      </ul>
      
      <p>Join thousands of verified users who have found meaningful connections through our platform. Your verification badge shows others that you're serious about finding real love.</p>
    `,
    tag: ["Safety", "Trust", "Profile Tips"]
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const verify = {
    title: isMounted ? t('Verify.verify.title') : fallbackVerify.title,
    image: isMounted ? t('Verify.verify.image') : fallbackVerify.image,
    content: isMounted ? t('Verify.verify.content') : fallbackVerify.content,
    tag: isMounted ? [t('tag.safety'), t('tag.trust'), t('tag.profileTips')] : fallbackVerify.tag
  };

  return (
    <>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <PolicyLayout>
         <AccessibilityProvider>
                                    <AccessibilityWidget/>
        <div className="pt-[72px]" style={{ background: 'white' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[46px] pb-[46px]">
            <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24 mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-400 leading-tight flex-1">
                {verify.title}
              </h1>
              <div className="flex flex-wrap gap-3 lg:flex-shrink-0 lg:mt-3 lg:ml-8">
                {verify.tag.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-sky-400 text-white px-5 py-2 rounded-full text-lg font-bold whitespace-nowrap transition-colors duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-[20px] border-[#27D3F5] rounded-2xl overflow-hidden bg-white">
              <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
                <Image
                  src="/VerifedProfileBlog.png"
                  alt={verify.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="flex flex-col lg:flex-row gap-8 px-6 sm:px-8 pb-6 sm:pb-8 mt-8">
                <div className="flex-1 lg:w-2/3">
                  <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                    <div
                      className="text-gray-700 leading-relaxed text-base sm:text-lg overflow-y-auto hide-scrollbar"
                      style={{
                        height: '1200px',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                      }}
                      dangerouslySetInnerHTML={{ __html: verify.content }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </AccessibilityProvider>
      </PolicyLayout>
    </>
  );
}

export default Verify;
