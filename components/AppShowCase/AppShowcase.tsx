
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTranslation } from 'react-i18next';
import { Heart, Calendar, MapPin, Star, Users, TrendingUp, Smartphone } from "lucide-react";
import AdvanceDatingFeatures from "@/components/AdvancedFeaturesSection/AdvanceDatingFeatures";
// AppShowcase component using JSON translations
const AppShowcase = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language || 'en';

  return (
    <section className="py-12 mb-16">
      <div className="text-center mb-12">
        <Badge className="bg-sky-100 text-sky-600 border-sky-200 mb-6">
          <Smartphone className="w-4 h-4 mr-2" />
          {t('appShowcase.badge')}
        </Badge>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
            {t('appShowcase.title')}
          </span>
        </h2>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          {t('appShowcase.subtitle')}
        </p>
        
        {/* App Store Download Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
  {/* App Store Button */}
  <a
    href="https://apps.apple.com/"  // Replace with real App Store link
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-colors duration-300 min-w-[200px]"
  >
    <div className="w-8 h-8">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
      </svg>
    </div>
    <div className="text-left">
      <div className="text-xs opacity-80">{t('appShowcase.downloadFrom')}</div>
      <div className="font-semibold">{t('app_store')}</div>
    </div>
  </a>

  {/* Google Play Button */}
  <a
    href="https://play.google.com/store/apps/details?id=com.dating.loveai"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition-colors duration-300 min-w-[200px]"
  >
    <div className="w-8 h-8">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
      </svg>
    </div>
    <div className="text-left">
      <div className="text-xs opacity-80">{t('appShowcase.downloadFrom')}</div>
      <div className="font-semibold">{t('google_play')}</div>
    </div>
  </a>
</div>

      </div>

      <AdvanceDatingFeatures />

      {/* Features Highlight */}
      <div className="bg-white rounded-3xl p-8 md:p-12 border">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">
            {t('appShowcase.whyDifferent')}
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-red-500" />
            </div>
            <h4 className="font-bold mb-2">
              {t('appShowcase.features.highSuccess.title')}
            </h4>
            <p className="text-gray-600 text-sm">
              {t('appShowcase.features.highSuccess.description')}
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-sky-500" />
            </div>
            <h4 className="font-bold mb-2">
              {t('appShowcase.features.safeCommunity.title')}
            </h4>
            <p className="text-gray-600 text-sm">
              {t('appShowcase.features.safeCommunity.description')}
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-cyan-500" />
            </div>
            <h4 className="font-bold mb-2">
              {t('appShowcase.features.smartMatching.title')}
            </h4>
            <p className="text-gray-600 text-sm">
              {t('appShowcase.features.smartMatching.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AppShowcase;