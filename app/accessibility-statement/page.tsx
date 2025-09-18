'use client'

import PolicyLayout from '@/components/PolicyLayout';
import React, { useState, useEffect } from 'react';
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useTranslation } from 'react-i18next';
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
// Define the type for our fallback content
type FallbackContent = {
  [key: string]: string;
  title: string;
  effective_date: string;
  effective_date_value: string;
  intro1: string;
  intro2: string;
  intro3: string;
  intro4: string;
  intro5: string;
  intro6: string;
  intro7: string;
  commitment_title: string;
  commitment_subtitle1: string;
  commitment_subtitle2: string;
  commitment_subtitle3: string;
  commitment_subtitle4: string;
  commitment_subtitle5: string;
  commitment_subtitle6: string;
  commitment_list1: string;
  commitment_list2: string;
  commitment_list3: string;
  commitment_list4: string;
  commitment_list5: string;
  commitment_list6: string;
  assistive_title: string;
  assistive_subtitle: string;
  assistive_list1: string;
  assistive_list2: string;
  assistive_list3: string;
  assistive_list4: string;
  improvements_title: string;
  improvements_subtitle: string;
  improvements_list1: string;
  improvements_list2: string;
  improvements_list3: string;
  improvements_list4: string;
  help_title: string;
  help_subtitle: string;
  help_email: string;
  help_location: string;
  help_response: string;
  legal_title: string;
  legal_subtitle: string;
  legal_list1: string;
  legal_list2: string;
  legal_list3: string;
  legal_list4: string;
  review_title: string;
  review_text1: string;
  review_text2: string;
  review_text3: string;
  review_text4: string;
};

function Page() {
  const { t, ready } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fallback content for server-side rendering with type annotation
  const fallbackContent: FallbackContent = {
    title: "Accessibility Statement",
    effective_date: "Effective Date: ",
    effective_date_value: "January 1, 2023",
    intro1: "At LoveAI, we are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to guarantee we provide equal access to all users.",
    intro2: "Conformance status",
    intro3: ": The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. Our platform ",
    intro4: "partially conforms",
    intro5: " to ",
    intro6: "WCAG 2.1 Level AA",
    intro7: " standards.",
    commitment_title: "Our Commitment",
    commitment_subtitle1: "We believe in ",
    commitment_subtitle2: "inclusive design",
    commitment_subtitle3: " and are working to make our platform accessible to all users, including those with ",
    commitment_subtitle4: "visual, auditory, physical, speech, cognitive, and neurological disabilities",
    commitment_subtitle5: ".",
    commitment_subtitle6: "Our ongoing accessibility efforts include:",
    commitment_list1: "Regular accessibility audits of our platform",
    commitment_list2: "Training our team on accessibility best practices",
    commitment_list3: "Implementing accessibility features based on user feedback",
    commitment_list4: "Maintaining compliance with WCAG guidelines",
    commitment_list5: "Testing with screen readers and other assistive technologies",
    commitment_list6: "Continuous improvement of our accessibility features",
    assistive_title: "Assistive Technologies",
    assistive_subtitle: "Our platform is designed to be compatible with the following assistive technologies:",
    assistive_list1: "Screen readers like JAWS, NVDA, and VoiceOver",
    assistive_list2: "Keyboard navigation",
    assistive_list3: "Text-to-speech software",
    assistive_list4: "Zoom and magnification tools",
    improvements_title: "Areas for Improvement",
    improvements_subtitle: "We recognize some areas still need improvement for full accessibility:",
    improvements_list1: "Alternative text for all images",
    improvements_list2: "Improved color contrast in some sections",
    improvements_list3: "More consistent heading structure",
    improvements_list4: "Enhanced form labeling",
    help_title: "Need Help or Have Feedback?",
    help_subtitle: "We welcome your feedback on the accessibility of our platform. Please contact us if you:",
    help_email: "legal@loveai.co.il",
    help_location: "123 Accessibility Lane, Tech City, TC 12345",
    help_response: "We aim to respond to accessibility feedback within 5 business days.",
    legal_title: "Legal Compliance",
    legal_subtitle: "We are committed to compliance with accessibility laws including:",
    legal_list1: "Americans with Disabilities Act (ADA)",
    legal_list2: "Section 508 of the Rehabilitation Act",
    legal_list3: "Accessibility for Ontarians with Disabilities Act (AODA)",
    legal_list4: "EU Web Accessibility Directive",
    review_title: "Review Process",
    review_text1: "This statement was last reviewed on ",
    review_text2: "June 15, 2023",
    review_text3: " and will be updated regularly as we make improvements.",
    review_text4: "We conduct quarterly accessibility reviews of our platform."
  };

  // Type-safe content getter function
  const getContent = (key: keyof FallbackContent): string => {
    return (ready && isMounted) ? t(`accessibility.${key}`) : fallbackContent[key];
  };

  return (
    <PolicyLayout>
       <AccessibilityProvider>
                            <AccessibilityWidget/>
      <div className="pt-[72px]" style={{ background: 'white' }}>
        {/* Header Section */}
          <div className="text-center mb-12 mt-6">
              <h1 className="text-sky-400 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[60px] mb-4">
              {getContent('title')}
              </h1>
              </div>
             
        {/* <div className="flex items-center justify-center h-[150px] py-[35px]" style={{ background: 'linear-gradient(to right, #00D4FF, #00A3E0)' }}>
          <div className="flex items-center sm:block sm:relative w-full py-6 container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={'/'} className="sm:absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer z-10">
              <ChevronLeft className="text-white w-6 h-6 sm:w-10 sm:h-10" />
            </Link>
            <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[60px] text-center">
              {getContent('title')}
            </h1>
          </div>
        </div> */}
          <div className="border-[20px] border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto bg-white/60 backdrop-blur-sm mt-[46px] mb-[46px]">

        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-[46px] pb-[46px] space-y-6">
            
            {/* Intro */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
              <p>
                <span className='font-medium'>{getContent('effective_date')}</span>
                <span>{getContent('effective_date_value')}</span>
              </p>
              <p>
                <span>{getContent('intro1')}</span>
                <span className='font-medium'>{getContent('intro2')}</span>
                <span>{getContent('intro3')}</span>
                <span className='font-medium'>{getContent('intro4')}</span>
                <span>{getContent('intro5')}</span>
                <span className='font-medium'>{getContent('intro6')}</span>
                <span>{getContent('intro7')}</span>
              </p>
            </div>

            {/* Commitment */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
              <h2 className="text-sky-600 font-bold text-2xl">{getContent('commitment_title')}</h2>
              <h3>
                {getContent('commitment_subtitle1')}<span className="font-medium">{getContent('commitment_subtitle2')}</span>{getContent('commitment_subtitle3')}<span className="font-medium">{getContent('commitment_subtitle4')}</span>{getContent('commitment_subtitle5')}
              </h3>
              <h3>{getContent('commitment_subtitle6')}</h3>
<ul className="list-disc list-inside marker:text-sky-400 marker:text-3xl space-y-2">
                <li>{getContent('commitment_list1')}</li>
                <li>{getContent('commitment_list2')}</li>
                <li>{getContent('commitment_list3')}</li>
                <li>{getContent('commitment_list4')}</li>
                <li>{getContent('commitment_list5')}</li>
                <li>{getContent('commitment_list6')}</li>
              </ul>
            </div>

            {/* Assistive */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
              <h2 className="text-sky-600 font-bold text-2xl">{getContent('assistive_title')}</h2>
              <h3>{getContent('assistive_subtitle')}</h3>
<ul className="list-disc list-inside marker:text-sky-400 marker:text-3xl space-y-2">
                <li>{getContent('assistive_list1')}</li>
                <li>{getContent('assistive_list2')}</li>
                <li>{getContent('assistive_list3')}</li>
                <li>{getContent('assistive_list4')}</li>
              </ul>
            </div>

            {/* Improvements */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
              <h2 className="text-sky-600 font-bold text-2xl">{getContent('improvements_title')}</h2>
              <h3>{getContent('improvements_subtitle')}</h3>
<ul className="list-disc list-inside marker:text-sky-400 marker:text-3xl space-y-2">
                <li>{getContent('improvements_list1')}</li>
                <li>{getContent('improvements_list2')}</li>
                <li>{getContent('improvements_list3')}</li>
                <li>{getContent('improvements_list4')}</li>
              </ul>
            </div>

            {/* Help */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
              <h2 className="text-sky-600 font-bold text-2xl">{getContent('help_title')}</h2>
              <h3>{getContent('help_subtitle')}</h3>
              <div className="space-y-2">
                <a href="mailto:legal@loveai.co.il" className="text-sky-500 underline">{getContent('help_email')}</a>
                <p>{getContent('help_location')}</p>
              </div>
              <h3>{getContent('help_response')}</h3>
            </div>

            {/* Legal */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
              <h2 className="text-sky-600 font-bold text-2xl">{getContent('legal_title')}</h2>
              <h3>{getContent('legal_subtitle')}</h3>
<ul className="list-disc list-inside marker:text-sky-400 marker:text-3xl space-y-2">
                <li>{getContent('legal_list1')}</li>
                <li>{getContent('legal_list2')}</li>
                <li>{getContent('legal_list3')}</li>
                <li>{getContent('legal_list4')}</li>
              </ul>
            </div>

            {/* Review */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
              <h2 className="text-sky-600 font-bold text-2xl">{getContent('review_title')}</h2>
              <p>
                {getContent('review_text1')}<span className="font-medium">{getContent('review_text2')}</span>{getContent('review_text3')}
              </p>
              <p>
                <span className="font-medium">{getContent('review_text4')}</span>
              </p>
            </div>

          </div>
        </div>
        </div>
      </div>
      </AccessibilityProvider>
    </PolicyLayout>
  )
}

export default Page;
