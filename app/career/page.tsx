'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PolicyLayout from '@/components/PolicyLayout';
import { 
  MessageCircle, 
  BookOpen, 
  Users, 
  Shield, 
  CreditCard, 
  Smartphone,
  LifeBuoy,
  Search,
  X,
  HelpCircle,
  Heart, 
  Zap, 
  UserCheck, 
  TrendingUp,
  Check
} from "lucide-react";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import SEOHead from '@/components/seo/SEOHead';
export default function CareerPage() {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Fallback content that matches what server renders
  const fallbackCareer = {
    title: "Join Our Team",
    subtitle: "Build the future of AI-powered connections with us. We're looking for passionate individuals who want to make meaningful impact.",
    openPositions: "Open Positions",
    applyNow: "Apply Now",
    applyButton: "Apply Now",
    thankYouMessage: "Thank you for your application! We'll get back to you soon.",
    fullName: "Full Name",
    email: "Email",
    position: "Position",
    selectPosition: "Select a position",
    uploadCV: "Upload CV",
    coverLetter: "Cover Letter",
    coverLetterPlaceholder: "Tell us why you're interested in this position...",
    submitApplication: "Submit Application",
    requirements: "Requirements",
    location: "Location"
  };

  const fallbackJobs = [
    {
      title: "Frontend Developer",
      location: "Remote / San Francisco",
      description: "Build beautiful, responsive user interfaces for our AI-powered dating platform using React, Next.js, and modern web technologies.",
      requirements: [
        "3+ years experience with React and TypeScript",
        "Experience with modern CSS frameworks (Tailwind preferred)",
        "Knowledge of responsive design and mobile-first development"
      ],
    },
    {
      title: "AI/ML Engineer",
      location: "Remote / New York",
      description: "Develop and optimize our matching algorithms and recommendation systems using machine learning and AI technologies.",
      requirements: [
        "Master's degree in Computer Science, AI, or related field",
        "Experience with Python, TensorFlow/PyTorch",
        "Strong background in machine learning and data science"
      ],
    },
    {
      title: "Community Manager",
      location: "Remote",
      description: "Build and nurture our user community, manage social media presence, and create engaging content for our platform.",
      requirements: [
        "3+ years experience in community management or social media",
        "Excellent written and verbal communication skills",
        "Experience with social media platforms and analytics tools"
      ],
    },
  ];
const whyWorkWithUsCards = [
    {
      id: "purpose",
      icon: Heart,
      color: "text-cyan-400"
    },
    {
      id: "innovation", 
      icon: Zap,
      color: "text-cyan-400"
    },
    {
      id: "greatTeam",
      icon: UserCheck,
      color: "text-cyan-400"
    },
    {
      id: "growth",
      icon: TrendingUp,
      color: "text-cyan-400"
    }
  ];

  const benefitsList = [
    "competitiveSalary",
    "flexibleHours", 
    "trainingBudget",
    "familyAtmosphere",
    "healthInsurance",
    "hybridWork",
    "officeMeals"
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Translation objects with fallbacks
  const career = {
    title: isMounted ? t('Career.career.title') : fallbackCareer.title,
    subtitle: isMounted ? t('Career.career.subtitle') : fallbackCareer.subtitle,
    openPositions: isMounted ? t('Career.career.openPositions') : fallbackCareer.openPositions,
    applyNow: isMounted ? t('Career.career.applyNow') : fallbackCareer.applyNow,
    applyButton: isMounted ? t('Career.career.applyButton') : fallbackCareer.applyButton,
    thankYouMessage: isMounted ? t('Career.career.thankYouMessage') : fallbackCareer.thankYouMessage,
    fullName: isMounted ? t('Career.career.fullName') : fallbackCareer.fullName,
    email: isMounted ? t('Career.career.email') : fallbackCareer.email,
    position: isMounted ? t('Career.career.position') : fallbackCareer.position,
    selectPosition: isMounted ? t('Career.career.selectPosition') : fallbackCareer.selectPosition,
    uploadCV: isMounted ? t('Career.career.uploadCV') : fallbackCareer.uploadCV,
    coverLetter: isMounted ? t('Career.career.coverLetter') : fallbackCareer.coverLetter,
    coverLetterPlaceholder: isMounted ? t('Career.career.coverLetterPlaceholder') : fallbackCareer.coverLetterPlaceholder,
    submitApplication: isMounted ? t('Career.career.submitApplication') : fallbackCareer.submitApplication,
    requirements: isMounted ? t('Career.career.requirements') : fallbackCareer.requirements,
    location: isMounted ? t('Career.career.location') : fallbackCareer.location
  };

  const jobs = isMounted ? [
    {
      title: t('Career.jobs.frontend.title'),
      location: t('Career.jobs.frontend.location'),
      description: t('Career.jobs.frontend.description'),
      requirements: [
        t('Career.jobs.frontend.requirements.0'),
        t('Career.jobs.frontend.requirements.1'),
        t('Career.jobs.frontend.requirements.2'),
      ],
    },
    {
      title: t('Career.jobs.aiml.title'),
      location: t('Career.jobs.aiml.location'),
      description: t('Career.jobs.aiml.description'),
      requirements: [
        t('Career.jobs.aiml.requirements.0'),
        t('Career.jobs.aiml.requirements.1'),
        t('Career.jobs.aiml.requirements.2'),
      ],
    },
    {
      title: t('Career.jobs.community.title'),
      location: t('Career.jobs.community.location'),
      description: t('Career.jobs.community.description'),
      requirements: [
        t('Career.jobs.community.requirements.0'),
        t('Career.jobs.community.requirements.1'),
        t('Career.jobs.community.requirements.2'),
      ],
    },
  ] : fallbackJobs;

  // Handle form submit (dummy, no backend)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (formRef.current) formRef.current.reset();
  };

  return (
    <PolicyLayout>
       <AccessibilityProvider>
                                  <AccessibilityWidget/>
                                        <SEOHead title="LoveAi - Find Real Love with AI" url="https://www.loveai.co.il/" />
      <div className="pt-[72px] min-h-screen bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-9xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-sky-400 mb-6 text-center">
            🚀 {career.title}
          </h1>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-4xl mx-auto">
            {career.subtitle}
          </p>
          <div className="border-[20px] border-sky-400 rounded-2xl p-6 max-w-6xl mx-auto bg-white/60 backdrop-blur-sm">

        

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-sky-400 mb-6">{career.openPositions}</h2>
            {/* Grid layout for job cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-sky-400 h-full flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{job.title}</h3>
                    <div className="text-sm text-gray-500 mb-3 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {job.location}
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">{career.requirements}:</h4>
                      <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className="mt-auto bg-sky-400 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-2xl transition-colors duration-200 text-sm">
                    {career.applyButton}
                  </button>
                </div>
              ))}
            </div>
          </div>
   {/* Why Work With Us Section */}
            <div className="mb-12 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                {isMounted ? t('whyWorkWithUs.title') : 'Why work with us?'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyWorkWithUsCards.map((card) => {
                  const IconComponent = card.icon;
                  return (
                    <div key={card.id} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full bg-cyan-50">
                          <IconComponent className={`w-8 h-8 ${card.color}`} />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {isMounted ? t(`whyWorkWithUs.cards.${card.id}.title`) : ''}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {isMounted ? t(`whyWorkWithUs.cards.${card.id}.description`) : ''}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>


            <div className="mb-8 bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                {isMounted ? t('benefitsConditions.title') : 'Benefits & Conditions'}
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefitsList.map((benefit, index) => (
                    <div key={benefit} className="flex items-center">
                      <div className="mr-4 p-1 rounded-full bg-cyan-50">
                        <Check className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-gray-700">
                        {isMounted ? t(`benefitsConditions.benefits.${benefit}`) : ''}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          <div className="mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-sky-400 mb-6 text-center">{career.applyNow}</h2>
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center">
                {career.thankYouMessage}
              </div>
            ) : null}
            <form
              ref={formRef}
              className="bg-white rounded-xl shadow-lg p-6 space-y-5"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div>
                <label className="block font-medium mb-1" htmlFor="name">
                  {career.fullName} <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="email">
                  {career.email} <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="position">
                  {career.position} <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  id="position"
                  name="position"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {career.selectPosition}
                  </option>
                  {jobs.map((job, idx) => (
                    <option key={idx} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="cv">
                  {career.uploadCV} <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="message">
                  {career.coverLetter}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  placeholder={career.coverLetterPlaceholder}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-sky-400 hover:bg-sky-600 text-white font-semibold py-3 rounded-2xl transition-colors duration-200"
              >
                {career.submitApplication}
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
      </AccessibilityProvider>
    </PolicyLayout>
  );
}