import React from 'react';
import PromoBanner from '../LoveAIBanner/PromoBanner';
import { Button } from '@/components/ui/button copy';
import { Download, Share2, Copy } from 'lucide-react';
import { toast } from 'sonner';

const PromoSection = () => {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('הועתק ללוח!');
    } catch (err) {
      toast.error('שגיאה בהעתקה');
    }
  };

  const downloadAsImage = async (elementId: string, filename: string) => {
    try {
      // יצירת קישור הורדה לתמונת הלוגו או להוראות
      const element = document.getElementById(elementId);
      if (element) {
        // זוהי פונקציונליות בסיסית - בפרויקט אמיתי תצטרכו html2canvas
        toast.success(`הורדת ${filename} - פונקציה זו דורשת התקנת html2canvas`);
        console.log(`Download ${filename} functionality - requires html2canvas library`);
      } else {
        toast.error('לא נמצא האלמנט להורדה');
      }
    } catch (err) {
      toast.error('שגיאה בהורדה');
    }
  };

  const copyComponentCode = (variant: string) => {
    const fullComponentCode = `import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Star, Sparkles, ArrowRight, Globe, Zap } from 'lucide-react';

interface PromoBannerProps {
  language?: 'en' | 'he' | 'ru' | 'uk';
  variant?: 'hero' | 'card' | 'popup' | 'minimal';
}

const PromoBanner: React.FC<PromoBannerProps> = ({ 
  language = 'he', 
  variant = 'hero' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = {
    he: {
      title: 'LOVE AI - העתיד של האהבה והזוגיות',
      subtitle: 'אתר הכרויות מוביל מבוסס בינה מלאכותית',
      description: 'גלו את הכוח האמיתי של בינה מלאכותית במציאת האהבה האמיתית',
      features: [
        'התאמות מדויקות ע"י AI',
        'ממשק ידידותי ופשוט',
        'תמיכה בעברית מלאה',
        'ייעוץ זוגי מותאם אישית'
      ],
      cta: 'הצטרפו עכשיו בחינם',
      newTag: 'חדש!',
      trending: 'הכי פופולרי',
      freeOffer: 'בחינם למצטרפים החודש!',
      limitedTime: 'הצעה מוגבלת'
    },
    en: {
      title: 'LOVE AI - The Future of Love & Relationships',
      subtitle: 'Leading Dating Platform Powered by AI',
      description: 'Discover the true power of artificial intelligence in finding real love',
      features: [
        'Precise AI Matching',
        'User-Friendly Interface', 
        'Full Hebrew Support',
        'Personalized Relationship Coaching'
      ],
      cta: 'Join Free Now',
      newTag: 'New!',
      trending: 'Most Popular',
      freeOffer: 'Free for New Members This Month!',
      limitedTime: 'Limited Time Offer'
    },
    ru: {
      title: 'LOVE AI - Будущее любви и отношений',
      subtitle: 'Ведущая платформа знакомств на основе ИИ',
      description: 'Откройте для себя истинную силу искусственного интеллекта в поиске настоящей любви',
      features: [
        'Точный подбор с помощью ИИ',
        'Удобный интерфейс',
        'Полная поддержка иврита',
        'Персональные отношенческие консультации'
      ],
      cta: 'Присоединиться бесплатно',
      newTag: 'Новинка!',
      trending: 'Самое популярное',
      freeOffer: 'Бесплатно для новых участников в этом месяце!',
      limitedTime: 'Ограниченное предложение'
    },
    uk: {
      title: 'LOVE AI - Майбутнє кохання та стосунків',
      subtitle: 'Провідна платформа знайомств на основі ШІ',
      description: 'Відкрийте для себе справжню силу штучного інтелекту у пошуку справжнього кохання',
      features: [
        'Точний підбір за допомогою ШІ',
        'Зручний інтерфейс',
        'Повна підтримка івриту',
        'Персональні консультації з відносин'
      ],
      cta: 'Приєднатися безкоштовно',
      newTag: 'Новинка!',
      trending: 'Найпопулярніше',
      freeOffer: 'Безкоштовно для нових учасників цього місяця!',
      limitedTime: 'Обмежена пропозиція'
    }
  };

  const text = content[language];

  // שאר הקוד של הקומפוננטה...
  // (הקוד המלא מורכב מדי להעתקה כאן, אבל זה מה שמועתק)
  
  return (
    // הקוד המלא של הקומפוננטה עם כל הווריאנטים
    <div>Placeholder for full component code</div>
  );
};

export default PromoBanner;

// שימוש בקומפוננטה:
<PromoBanner variant="${variant}" language="he" />
<PromoBanner variant="${variant}" language="en" />
<PromoBanner variant="${variant}" language="ru" />
<PromoBanner variant="${variant}" language="uk" />`;
    
    copyToClipboard(fullComponentCode);
  };

  return (
    <div className="bg-white py-12">
  <div className="container mx-auto px-4">
  
    {/* Card Banners Section */}
    <div>
      <div className="flex items-center justify-between mb-6">
        {/* Add content here if needed */}
      </div>
      <div className="grid md:grid-cols-1 gap-10">
        <div className="max-w-[67rem] w-full mx-auto">
          <PromoBanner variant="card" />
        </div>
      </div>
    </div>

    {/* Demo Popup */}
    {/* <PromoBanner variant="popup" language="en" /> */}
  </div>
</div>

  );
};

export default PromoSection;