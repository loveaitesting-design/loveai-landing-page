export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LoveAi",
  url: "https://www.loveai.co.il",
  logo: "https://www.loveai.co.il/logo.png",
  sameAs: [
    "https://www.facebook.com/LoveAiApp",
    "https://www.instagram.com/loveaiapp",
    "https://www.linkedin.com/company/loveaiapp"
  ]
};

export const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "LoveAi Dating App",
  operatingSystem: "iOS, Android",
  applicationCategory: "Dating",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1245"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is LoveAi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LoveAi is an AI-powered dating app that helps you find compatible matches using advanced personality analysis and behavioral AI."
      }
    },
    {
      "@type": "Question",
      name: "Is LoveAi free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, LoveAi offers free sign-up with premium features available for subscribers."
      }
    }
  ]
};
