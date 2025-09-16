import React from 'react';
import PromoBanner from './PromoBanner';
import { Button } from '@/components/ui/button';
import { Download, Share2, Copy } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

const Promo = () => {
  const { i18n } = useTranslation();
  
  // Get current language from i18n, fallback to 'he' if not supported
  const getCurrentLanguage = (): 'en' | 'he' | 'ru' | 'uk' => {
    const currentLang = i18n.language;
    if (['en', 'he', 'ru', 'uk'].includes(currentLang)) {
      return currentLang as 'en' | 'he' | 'ru' | 'uk';
    }
    return 'he'; // Default fallback
  };

  const currentLanguage = getCurrentLanguage();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('הועתק ללוח!');
    } catch (err) {
      toast.error('שגיאה בהעתקה');
    }
  };


  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">

        {/* Hero Banner Section - Only show current language */}
        <div >
          <div id="hero-banner">
            <PromoBanner variant="hero" />
          </div>
        </div>


        {/* Demo Popup - Only show current language */}
        {/* <PromoBanner variant="popup" /> */}

      </div>
     </div>
  );
};

export default Promo;