"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Clock, MessageCircle, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const AdBanner = ({ position = "header" }) => {
  const [ads, setAds] = useState([]);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const { t, i18n, ready } = useTranslation();
  const currentLanguage = i18n.language || 'en';

  // Multilingual fallback translations
  const fallbackTranslations = useMemo(() => ({
    en: {
      loading: "Loading",
      advertisement: "Advertisement",
      sponsored: "Sponsored",
      visit_now: "Visit Now",
      learn_more: "Learn More",
      whatsapp: "WhatsApp",
      send_email: "Send Email",
      default_ad_title: "Your advertisement can appear here!",
      default_ad_description: "Reach out to an intelligent and high-quality audience of professionals and educated people from all over the country. A leading dating site with the best of the Israeli public.",
      default_company_name: "Premium Advertising",
      by: "By",
      premium_ad_space: "Premium advertising space",
      of: "of"
    },
    he: {
      loading: "טוען",
      advertisement: "פרסומת",
      sponsored: "ממומן",
      visit_now: "בקר עכשיו",
      learn_more: "למד עוד",
      whatsapp: "וואטסאפ",
      send_email: "שלח אימייל",
      default_ad_title: "!הפרסומת שלך יכולה להופיע כאן",
      default_ad_description: "פנה לקהל אינטליגנטי ואיכותי של אנשי מקצוע ואנשים משכילים מכל רחבי הארץ. אתר היכרויות מוביל עם הטובים שבציבור הישראלי.",
      default_company_name: "פרסום פרימיום",
      by: "על ידי",
      premium_ad_space: "שטח פרסום פרימיום",
      of: "מתוך"
    },
    ru: {
      loading: "Загрузка",
      advertisement: "Реклама",
      sponsored: "Спонсируется",
      visit_now: "Посетить сейчас",
      learn_more: "Узнать больше",
      whatsapp: "WhatsApp",
      send_email: "Отправить Email",
      default_ad_title: "Ваша реклама может появиться здесь!",
      default_ad_description: "Обратитесь к интеллектуальной и качественной аудитории профессионалов и образованных людей со всей страны. Ведущий сайт знакомств с лучшими представителями израильской публики.",
      default_company_name: "Премиум реклама",
      by: "От",
      premium_ad_space: "Премиум рекламное место",
      of: "из"
    }
  }), []);

  // Get translation with fallback
  const getText = (key) => {
    if (!ready) {
      return fallbackTranslations[currentLanguage]?.[key] || fallbackTranslations['en'][key] || key;
    }
    return t(key);
  };

  // Default ad with multilingual support
  const DEFAULT_AD = useMemo(() => ({
    title: getText('default_ad_title'),
    description: getText('default_ad_description'),
    image_url: null,
    target_url: null,
    company_name: getText('default_company_name'),
    priority: "",
    whatsapp: "+972507555200",
    email: "info@loveai.co.il"
  }), [currentLanguage, ready]);

  // Handle WhatsApp click
  const handleWhatsAppClick = (phoneNumber) => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;
    window.open(whatsappUrl, '_blank');
  };

  // Handle email click
  const handleEmailClick = (email) => {
    const mailtoUrl = `mailto:${email}?subject=${getText('advertisement')} ${getText('sponsored')}&body=${getText('learn_more')}`;
    window.location.href = mailtoUrl;
  };

  // Sort ads by priority (lower number = higher priority)
  const sortAdsByPriority = (adsArray) => {
    return adsArray.sort((a, b) => (a.priority || 999) - (b.priority || 999));
  };

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await fetch("https://loveaiapi.vrajtechnosys.in/ads", {
          headers: { accept: "application/json" },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Full API Response:", data);

        let adsArray = [];
        
        // Check if data exists and has the position property
        if (data && data.hasOwnProperty(position)) {
          const positionData = data[position];
          
          // Handle null/undefined values - use default ad
          if (positionData === null || positionData === undefined) {
            console.log(`Position "${position}" is null/undefined, using default ad`);
            adsArray = [DEFAULT_AD];
          } else if (Array.isArray(positionData)) {
            // If position returns array of ads
            if (positionData.length > 0) {
              // Filter out null/undefined items from array
              const filteredAds = positionData.filter(ad => ad !== null && ad !== undefined);
              adsArray = filteredAds.length > 0 ? filteredAds : [DEFAULT_AD];
            } else {
              adsArray = [DEFAULT_AD];
            }
          } else if (typeof positionData === 'object') {
            // If position returns single ad object
            adsArray = [positionData];
          } else {
            // Fallback to default ad for any other data type
            console.log(`Position "${position}" has unexpected data type:`, typeof positionData);
            adsArray = [DEFAULT_AD];
          }
        } else {
          // Position doesn't exist in response, use default
          console.log(`Position "${position}" not found in API response`);
          adsArray = [DEFAULT_AD];
        }

        // Validate and clean up the ads array - replace null/invalid ads with default
        const validAds = adsArray.map(adItem => {
          // If ad is null, undefined, or doesn't have required properties, use default
          if (!adItem || typeof adItem !== 'object' || (!adItem.title && !adItem.titleKey)) {
            return DEFAULT_AD;
          }
          return adItem;
        });

        // Sort by priority and set ads
        const sortedAds = sortAdsByPriority(validAds);
        setAds(sortedAds);
        
      } catch (err) {
        console.error("Failed to fetch ads", err);
        setAds([DEFAULT_AD]); // Show default ad on error
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, [position, DEFAULT_AD]);

  // Auto-scroll functionality
  useEffect(() => {
    if (ads.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
      setImageLoaded(false);
      setImageError(false);
    }, 5000); // Change ad every 5 seconds

    return () => clearInterval(interval);
  }, [ads.length]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const handlePrevAd = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
    setImageLoaded(false);
    setImageError(false);
  };

  const handleNextAd = () => {
    setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    setImageLoaded(false);
    setImageError(false);
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
                <div className="h-8 bg-gray-200 rounded w-24"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!ads || ads.length === 0) {
    return null;
  }

  const currentAd = ads[currentAdIndex];

  // Safety check to ensure currentAd exists
  if (!currentAd) {
    console.error("Current ad is undefined at index:", currentAdIndex);
    return null;
  }

  return (
    <div className="flex justify-center p-8 bg-white relative">
      <Card className="w-full max-w-[78vw] border-2 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-0 overflow-hidden">
          <div className="p-8">
            {/* Priority Badge */}
            {currentAd.priority && currentAd.priority !== 0 && (
              <div className="flex justify-center mb-4">
                <Badge variant="outline" className="bg-sky-50 text-sky-600 border-sky-200">
                  Priority {currentAd.priority}
                </Badge>
              </div>
            )}

            {/* Content Layout */}
            {/* Check if it's a default ad (no image_url or image failed) */}
            {(!currentAd.image_url || imageError) ? (
              /* Default Banner - Centered Layout without image */
              <div className="text-center space-y-6 max-w-2xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h2 className="font-bold text-2xl md:text-3xl text-gray-900 leading-tight">
                  {currentAd.title || (currentAd.titleKey ? getText(currentAd.titleKey) : DEFAULT_AD.title)}
                </h2>

                <p className="text-gray-600 text-base leading-relaxed">
                  {currentAd.description || (currentAd.descriptionKey ? getText(currentAd.descriptionKey) : DEFAULT_AD.description)}
                </p>

                {currentAd.company_name && (
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Eye className="w-4 h-4" />
                    <span>{getText('by')} {currentAd.companyKey ? getText(currentAd.companyKey) : currentAd.company_name}</span>
                  </div>
                )}

                {/* Action Buttons for Default Banner */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
                  {/* WhatsApp Button */}
                  <Button
                    size="lg"
                    className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => handleWhatsAppClick(currentAd.whatsapp || DEFAULT_AD.whatsapp)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {getText("whatsapp1")}
                  </Button>
                  
                  {/* Email Button */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-sky-200 text-sky-700 hover:bg-sky-50 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                    onClick={() => handleEmailClick(currentAd.email || DEFAULT_AD.email)}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {getText("send_email")}
                  </Button>
                </div>
              </div>
            ) : (
              /* Regular Ad with Image - Two Column Layout */
              <div className="grid md:grid-cols-2 gap-8 items-center">
                
                {/* Left Column - Text */}
                <div className="space-y-6">
                  <h2 className="font-bold text-2xl md:text-3xl text-gray-900 leading-tight">
                    {currentAd.title || DEFAULT_AD.title}
                  </h2>

                  <p className="text-gray-600 text-base leading-relaxed">
                    {currentAd.description || DEFAULT_AD.description}
                  </p>

                  {currentAd.company_name && (
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Eye className="w-4 h-4" />
                      <span>{getText('by')} {currentAd.company_name}</span>
                    </div>
                  )}

                  {/* Action Buttons for Regular Ads */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {/* Show WhatsApp and Email buttons if provided in the ad */}
                    {(currentAd.whatsapp || currentAd.email) ? (
                      <>
                        {/* WhatsApp Button - only if whatsapp number exists */}
                        {currentAd.whatsapp && (
                          <Button
                            size="lg"
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            onClick={() => handleWhatsAppClick(currentAd.whatsapp)}
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            {getText("whatsapp")}
                          </Button>
                        )}
                        
                        {/* Email Button - only if email exists */}
                        {currentAd.email && (
                          <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-sky-200 text-sky-700 hover:bg-sky-50 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                            onClick={() => handleEmailClick(currentAd.email)}
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            {getText("send_email")}
                          </Button>
                        )}

                        {/* Visit Now Button (if target_url also exists) */}
                        {currentAd.target_url && (
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-sky-600 to-sky-600 hover:from-sky-700 hover:to-sky-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            onClick={() => window.open(currentAd.target_url, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {getText("visit_now")}
                          </Button>
                        )}
                      </>
                    ) : (
                      /* Show Visit Now and Learn More buttons when no whatsapp/email */
                      currentAd.target_url && (
                        <>
                          {/* Visit Now Button */}
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-sky-600 to-sky-600 hover:from-sky-700 hover:to-sky-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            onClick={() => window.open(currentAd.target_url, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {t("visit_now")}
                          </Button>
                          
                          {/* Learn More Button */}
                          <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-sky-200 text-sky-700 hover:bg-sky-50 font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                            onClick={() => window.open(currentAd.target_url, "_blank")}
                          >
                            {getText("learn_more")}
                          </Button>
                        </>
                      )
                    )}
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-100">
                    <img
                      src={currentAd.image_url}
                      alt={currentAd.title || getText('advertisement')}
                      className={`w-full aspect-[21/9] object-cover transition-all duration-500 ${
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
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Info Bar */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-gray-400">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{getText('premium_ad_space')}</span>
                </div>
                
                {/* Ad Counter */}
                {ads.length > 1 && (
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">
                      {currentAdIndex + 1} {getText('of')} {ads.length}
                    </span>
                    <div className="flex space-x-1">
                      {ads.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentAdIndex ? 'bg-sky-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>

        {/* Navigation Arrows (only show if multiple ads) */}
        {ads.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2"
              onClick={handlePrevAd}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2"
              onClick={handleNextAd}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </>
        )}
      </Card>
    </div>
  );
};

export default AdBanner;