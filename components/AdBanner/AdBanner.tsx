// import React from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ExternalLink, MessageCircle, Mail } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

// const AdBanner = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="flex justify-center p-4 bg-white">
// <Card className="max-w-6xl w-full border border-sky-200 border-dotted bg-white rounded-3xl shadow-lg">
//         <CardContent className="p-6">
//           {/* Header */}
//           <div className="flex items-center justify-center mb-4">
//             <Badge variant="secondary" className="bg-sky-100 text-sky-800">
//               <ExternalLink className="w-3 h-3 mr-1" />
//               {t('advertisement')}
//             </Badge>
//           </div>

//           {/* Content */}
//           <div className="space-y-4 text-center">
//             {/* Title */}
//             <h3 className="font-bold text-lg text-sky-800">
//               {t('your_advertisement_can_appear_here')}
//             </h3>

//             {/* Description */}
//             <p className="text-sm text-gray-700">
//               {t('reach_audience')}
//             </p>

//             {/* Action Buttons */}
//             <div className="flex gap-2 justify-center">
//               <Button size="sm" className="bg-sky-600 hover:bg-sky-700 text-white">
//                 <MessageCircle className="w-4 h-4 mr-2" />
//                 {t('whatsapp')}
//               </Button>
//               <Button size="sm" variant="outline" className="border-sky-300 text-sky-700">
//                 <Mail className="w-4 h-4 mr-2" />
//                 {t('send_email')}
//               </Button>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AdBanner;

"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Clock } from "lucide-react";

import { useTranslation } from "react-i18next";

// Default ad to use if API returns null
const DEFAULT_AD = {
  title: "DemoDemo",
  description: "Demo Description",
  image_url: "https://www.google.com/imgres?q=online%20image%20editor&imgurl=https%3A%2F%2Fd2qp0siotla746.cloudfront.net%2Fimg%2Ffeatures%2Fphoto-editor%2Fhero.png&imgrefurl=https%3A%2F%2Fsnappa.com%2Ffeatures%2Fphoto-editor&docid=YGg6svtiWVz55M&tbnid=F-1srdyE9lNQlM&vet=12ahUKEwj-1omSotuPAxWvgK8BHejSINsQM3oECBEQAA..i&w=1800&h=1100&hcb=2&ved=2ahUKEwj-1omSotuPAxWvgK8BHejSINsQM3oECBEQAA",
  target_url: "https://www.youtube.com/",
  company_name: "Demo",
};


const AdBanner = ({ position = "header" }) => {
  const [ad, setAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Translation fallbacks (you can integrate with your i18n)
  const t = (key) => {
    const translations = {
      loading: "Loading",
      advertisement: "Advertisement",
      sponsored: "Sponsored",
      visit_now: "Visit Now",
      learn_more: "Learn More",
      your_advertisement_can_appear_here: "Your Advertisement Can Appear Here"
    };
    return translations[key] || key;
  };

  useEffect(() => {
    const fetchAd = async () => {
      try {
        // Simulating API delay for demo
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const res = await fetch("https://loveaiapi.vrajtechnosys.in/ads", {
          headers: { accept: "application/json" },
        });

        const data = await res.json();

        console.log("Full API Response:", data);
        console.log("Position requested:", position);
        console.log("Ad data for position:", data?.[position]);

        if (data && data[position]) {
          setAd(data[position]);
        } else {
          // Fallback to default ad
          setAd(DEFAULT_AD);
        }
      } catch (err) {
        console.error("Failed to fetch ads", err);
        setAd(DEFAULT_AD); // Show default ad on error
      } finally {
        setLoading(false);
      }
    };

    fetchAd();
  }, [position]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  if (loading) {
    return (
      <div className="flex justify-center p-6">
        <Card className="max-w-4xl w-full">
          <CardContent className="p-8">
            <div className="animate-pulse space-y-4">
              <div className="flex justify-center">
                <div className="h-6 bg-gray-200 rounded-full w-32"></div>
              </div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
              <div className="h-40 bg-gray-200 rounded-lg"></div>
              <div className="flex justify-center space-x-2">
                <div className="h-8 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!ad) {
    return null;
  }

  return (
    <div className="flex justify-center p-4 bg-white">
      <Card className="max-w-4xl w-full border-2 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-0 overflow-hidden">
  

          <div className="p-8">
            {/* Content Layout */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                {/* Title */}
                <h2 className="font-bold text-2xl md:text-3xl text-gray-900 leading-tight">
                  {ad.title || t("your_advertisement_can_appear_here")}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {ad.description}
                </p>

                {/* Company Name */}
                {ad.company_name && (
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Eye className="w-4 h-4" />
                    <span>By {ad.company_name}</span>
                  </div>
                )}

                {/* Action Buttons */}
                {ad.target_url && (
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-sky-600 to-sky-600 hover:from-sky-700 hover:to-sky-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open(ad.target_url, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t("visit_now")}
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-sky-200 text-sky-700 hover:bg-sky-50 font-semibold px-8 py-3 rounded-xl transition-all duration-300"
                      onClick={() => window.open(ad.target_url, "_blank")}
                    >
                      {t("learn_more")}
                    </Button>
                  </div>
                )}
              </div>

              {/* Right Column - Image */}
              <div className="relative">
                {ad.image_url && !imageError && (
                  <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-100">
                    <img
                      src={ad.image_url}
                      alt={ad.title}
                      className={`w-full h-64 md:h-80 object-cover transition-all duration-500 ${
                        imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                      }`}
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                    />
                    
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-600"></div>
                      </div>
                    )}

                    {/* Overlay gradient for better text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                {/* Fallback for broken images */}
                {(imageError || !ad.image_url) && (
                  <div className="w-full h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                        <Eye className="w-8 h-8" />
                      </div>
                      <p className="text-sm font-medium">Image Preview</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center text-xs text-gray-400">
                <Clock className="w-3 h-3 mr-1" />
                <span>Premium advertising space</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdBanner;
