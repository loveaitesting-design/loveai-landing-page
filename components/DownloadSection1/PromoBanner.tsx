import React, { useState } from 'react';
import { Button } from '@/components/ui/button copy';
import { Heart, Star, Sparkles, ArrowRight, Globe, Zap } from 'lucide-react';
import logo1 from '@@/../public/lovable-uploads/25fd88da-47e3-4865-98fd-93bee6bcdbbc.png';
import AppStoreBadge from '@/../public/app-store-badge.svg';
import googleplaybadge from '@@/../public/google-play-badge.svg';
import logo from '@@/../public/25fd88da-47e3-4865-98fd-93bee6bcdbbc.png';
import { useTranslation } from 'react-i18next';
interface PromoBannerProps {
  language?: 'en' | 'he' | 'ru' | 'uk';
  variant?: 'hero' | 'card' | 'popup' | 'minimal' | 'futuristic' | 'modern' | 'premium';
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

  if (variant === 'hero') {
    return (
      <div 
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 p-8 text-white shadow-2xl transition-all duration-500 animate-fade-in ${isHovered ? 'scale-105 animate-glow' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        dir={language === 'he' ? 'rtl' : 'ltr'}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 animate-gradient-shift" />
        
        {/* Floating Elements */}
        <div className="absolute top-4 right-4 animate-float">
          <Heart className="w-8 h-8 text-pink-300 animate-pulse" />
        </div>
        <div className="absolute bottom-4 left-4 animate-float delay-300">
          <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse delay-500" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-float delay-700">
          <Heart className="w-4 h-4 text-red-300 animate-ping" />
        </div>
        
        <div className="relative z-10">
          {/* Logo - Made larger */}
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/25fd88da-47e3-4865-98fd-93bee6bcdbbc.png" 
              alt="LoveAI Logo" 
              className="w-20 h-20 animate-float"
            />
            {/* Free Offer Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 backdrop-blur-sm rounded-full px-4 py-2 animate-pulse-soft">
              <Star className="w-4 h-4 text-white animate-spin" />
              <span className="text-sm font-bold text-white">{text.freeOffer}</span>
            </div>
          </div>
          
          {/* Limited Time Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce">
            <Star className="w-4 h-4 text-yellow-300 animate-spin" />
            <span className="text-sm font-medium">{text.limitedTime}</span>
          </div>
          
          {/* Main Content */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-pink-200 to-yellow-200 bg-clip-text text-transparent animate-scale-in">
            {text.title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 text-white/90 animate-fade-in delay-300">
            {text.subtitle}
          </p>
          
          <p className="text-lg mb-8 text-white/80 max-w-2xl animate-fade-in delay-500">
            {text.description}
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {text.features.map((feature, index) => (
              <div key={index} className={`flex items-center gap-2 text-white/90 animate-slide-in-right`} style={{animationDelay: `${(index + 1) * 200}ms`}}>
                <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <a href="https://www.loveai.co.il" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="modern"
              size="lg"
              className="bg-white text-purple-800 hover:bg-white/90 shadow-xl group animate-bounce hover:animate-pulse font-bold mb-6"
            >
              {text.cta}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform animate-pulse text-purple-800" />
            </Button>
          </a>
          
          {/* App Store Badges */}
          <div className="flex gap-4 items-center mt-6">
            <a 
              href="https://play.google.com/store/search?q=love%20ai&c=apps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300 animate-fade-in delay-700"
            >
              <img 
                src="/google-play-badge.svg" 
                alt="הורידו מ-Google Play" 
                className="h-14 w-auto"
              />
            </a>
            <a 
              href="https://apps.apple.com/search?term=love%20ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300 animate-fade-in delay-800"
            >
              <img 
                src="/app-store-badge.svg" 
                alt="הורידו מ-App Store" 
                className="h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div 
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 p-6 text-white shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in hover:animate-glow"
        dir={language === 'he' ? 'rtl' : 'ltr'}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-teal-600/20 animate-gradient-shift" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4 animate-slide-in-right">
            <img 
              src="/25fd88da-47e3-4865-98fd-93bee6bcdbbc.png" 
              alt="LoveAI Logo" 
              className="w-12 h-12 animate-float"
            />
            <Globe className="w-6 h-6 text-cyan-300 animate-spin" />
            <span className="text-sm font-medium bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-3 py-1 animate-pulse-soft">
              {text.freeOffer}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 animate-scale-in">{text.title}</h3>
          <p className="text-white/90 mb-4 animate-fade-in delay-300">{text.subtitle}</p>
          
          <a href="https://www.loveai.co.il" target="_blank" rel="noopener noreferrer">
            <Button variant="futuristic" size="sm" className="w-full animate-bounce hover:animate-pulse mb-4">
              {text.cta}
              <Heart className="w-4 h-4 ml-2 animate-pulse" />
            </Button>
          </a>
          
          {/* App Store Badges */}
          <div className="flex gap-2 items-center justify-center">
            <a 
              href="https://play.google.com/store/search?q=love%20ai&c=apps"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/google-play-badge.svg" 
                alt="הורידו מ-Google Play" 
                className="h-10 w-auto"
              />
            </a>
            <a 
              href="https://apps.apple.com/search?term=love%20ai"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/app-store-badge.svg" 
                alt="הורידו מ-App Store" 
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div 
        className="flex items-center gap-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800 animate-fade-in hover:animate-scale-in"
        dir={language === 'he' ? 'rtl' : 'ltr'}
      >
        <div className="flex items-center gap-3">
          <img 
            src="/25fd88da-47e3-4865-98fd-93bee6bcdbbc.png" 
            alt="LoveAI Logo" 
            className="w-10 h-10 animate-float"
          />
          <Heart className="w-8 h-8 text-purple-600 animate-float" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 animate-slide-in-right">{text.title}</h4>
          <p className="text-sm text-purple-700 dark:text-purple-300 animate-fade-in delay-300">{text.subtitle}</p>
          <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full animate-pulse">
            {text.freeOffer}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <a href="https://www.loveai.co.il" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="border-purple-300 text-purple-700 hover:bg-purple-50 animate-bounce hover:animate-pulse w-full">
              {text.cta}
            </Button>
          </a>
          
          {/* App Store Badges */}
          <div className="flex gap-1">
            <a 
              href="https://play.google.com/store/search?q=love%20ai&c=apps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/google-play-badge.svg" 
                alt="הורידו מ-Google Play" 
                className="h-8 w-auto"
              />
            </a>
            <a 
              href="https://apps.apple.com/search?term=love%20ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/app-store-badge.svg" 
                alt="הורידו מ-App Store" 
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // popup variant
  return (
    <div 
      className="fixed bottom-4 right-4 z-50 max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 animate-slide-up hover:animate-scale-in"
      dir={language === 'he' ? 'rtl' : 'ltr'}
    >
      <div className="flex items-start gap-3">
        <div className="flex items-center gap-2">
          <img 
            src="/25fd88da-47e3-4865-98fd-93bee6bcdbbc.png" 
            alt="LoveAI Logo" 
            className="w-10 h-10 animate-float"
          />
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-2 animate-pulse">
            <Heart className="w-5 h-5 text-white animate-float" />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1 animate-fade-in">{text.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 animate-fade-in delay-300">{text.description}</p>
          <div className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full inline-block mb-3 animate-pulse">
            {text.freeOffer}
          </div>
          <a href="https://www.loveai.co.il" target="_blank" rel="noopener noreferrer">
            <Button variant="premium" size="sm" className="w-full animate-bounce hover:animate-pulse mb-3">
              {text.cta}
            </Button>
          </a>
          
          {/* App Store Badges */}
          <div className="flex gap-2 items-center justify-center">
            <a 
              href="https://play.google.com/store/search?q=love%20ai&c=apps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/google-play-badge.svg" 
                alt="הורידו מ-Google Play" 
                className="h-8 w-auto"
              />
            </a>
            <a 
              href="https://apps.apple.com/search?term=love%20ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/app-store-badge.svg" 
                alt="הורידו מ-App Store" 
                className="h-8 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
