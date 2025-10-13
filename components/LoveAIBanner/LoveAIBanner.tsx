import { useState, useEffect } from "react";
import { Heart, Sparkles, Clock, Gift, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { endOfMonth, differenceInDays } from "date-fns";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"; // Adjust path as needed

interface LoveAIBannerProps {
  language?: "en" | "he" | "ru";
}

const LoveAIBanner = ({ language }: LoveAIBannerProps) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);
  
  // Use i18n language if no language prop is provided
  const currentLanguage = language || i18n.language as "en" | "he" | "ru";

  useEffect(() => {
    const calculateDaysRemaining = () => {
      const today = new Date();
      const endOfCurrentMonth = endOfMonth(today);
      const days = differenceInDays(endOfCurrentMonth, today);
      setDaysRemaining(days);
    };

    calculateDaysRemaining();

    // Update every hour to keep it fresh
    const interval = setInterval(calculateDaysRemaining, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const content = {
    he: {
      title: "LOVE",
      subtitle: "Ai",
      tagline: "המהפכה של האהבה החכמה כבר כאן!",
      offerTitle: "הצעה מוגבלת - חודש זה בלבד!",
      freeYear: "🎁 שנה שלמה במנוי פרימיום - בחינם לחלוטין!",
      description:
        "הצטרפו עכשיו ל-LOVEAi והתחילו למצוא את האהבה האמיתית עם הבינה המלאכותית המתקדמת ביותר. אלגוריתמים חכמים, התאמה מושלמת, ותוצאות מדהימות!",
      joinButton: "הירשמו עכשיו בחינם",
      daysLeft: `נותרו רק ${daysRemaining} ימים להצעה`,
      disclaimer: "*ללא התחייבות • ביטול בכל עת",
      features: {
        match: {
          title: "התאמה מושלמת",
          desc: "אלגוריתם AI מתקדם שמוצא את ההתאמה הטובה ביותר עבורכם",
        },
        experience: {
          title: "חוויה חכמה",
          desc: "צ'אט AI שעוזר לכם להכיר ולתקשר טוב יותר",
        },
        results: {
          title: "תוצאות מוכחות",
          desc: "96% מהמשתמשים מוצאים התאמה תוך 30 יום",
        },
      },
    },
    en: {
      title: "LOVE",
      subtitle: "Ai",
      tagline: "The smart love revolution is here!",
      offerTitle: "Limited Time - This Month Only!",
      freeYear: "🎁 Full Year Premium Subscription - Completely Free!",
      description:
        "Join LOVEAi now and start finding true love with the most advanced artificial intelligence. Smart algorithms, perfect matching, and amazing results!",
      joinButton: "Join Now For Free",
      daysLeft: `Only ${daysRemaining} days left for this offer`,
      disclaimer: "*No commitment • Cancel anytime",
      features: {
        match: {
          title: "Perfect Matching",
          desc: "Advanced AI algorithm that finds the best match for you",
        },
        experience: {
          title: "Smart Experience",
          desc: "AI chat that helps you meet and communicate better",
        },
        results: {
          title: "Proven Results",
          desc: "96% of users find a match within 30 days",
        },
      },
    },
    ru: {
      title: "LOVE",
      subtitle: "Ai",
      tagline: "Революция умной любви уже здесь!",
      offerTitle: "Ограниченное предложение - только в этом месяце!",
      freeYear: "🎁 Полный год премиум подписки - совершенно бесплатно!",
      description:
        "Присоединяйтесь к LOVEAi сейчас и начните находить настоящую любовь с самым продвинутым искусственным интеллектом. Умные алгоритмы, идеальное совпадение и потрясающие результаты!",
      joinButton: "Присоединиться бесплатно",
      daysLeft: `Осталось всего ${daysRemaining} дней для этого предложения`,
      disclaimer: "*Без обязательств • Отмена в любое время",
      features: {
        match: {
          title: "Идеальное совпадение",
          desc: "Продвинутый AI алгоритм, который найдет лучшую пару для вас",
        },
        experience: {
          title: "Умный опыт",
          desc: "AI чат, который поможет вам лучше знакомиться и общаться",
        },
        results: {
          title: "Проверенные результаты",
          desc: "96% пользователей находят пару в течение 30 дней",
        },
      },
    },
  };

  const text = content[currentLanguage];
  const isRTL = currentLanguage === "he";

  return (
    <div className="love-banner">
      <a
        href="https://www.loveai.co.il/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div
          className={`relative overflow-hidden bg-gradient-to-b from-[#D141BB] to-[#FC466B] p-8 md:p-12 rounded-0 shadow-love mx-0 my-0 ${
            isRTL ? "text-right" : "text-left"
          } cursor-pointer transition-transform duration-300 hover:scale-[1]`}
          dir={isRTL ? "rtl" : "ltr"}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-gradient-shift bg-[length:200%_100%]" />

          {/* Floating Elements */}
          <div className="absolute top-4 left-8 animate-float">
            <Heart className="w-6 h-6 text-white/40 fill-white/40" />
          </div>
          <div
            className="absolute top-8 right-12 animate-float"
            style={{ animationDelay: "1s" }}
          >
            {currentLanguage === "en" ? (
              <Star className="w-5 h-5 text-white/40" />
            ) : (
              <Sparkles className="w-5 h-5 text-white/40" />
            )}
          </div>
          <div
            className="absolute bottom-6 left-16 animate-float"
            style={{ animationDelay: "2s" }}
          >
            {currentLanguage === "en" ? (
              <Zap className="w-4 h-4 text-white/30" />
            ) : (
              <Heart className="w-4 h-4 text-white/30 fill-white/30" />
            )}
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Main Title */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                {text.title}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-pulse-soft">
                  {text.subtitle}
                </span>
              </h1>
              <div
                className={`flex items-center justify-center gap-2 mb-4 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <Gift className="w-6 h-6 text-yellow-300" />
                <p className="text-xl md:text-2xl text-white/90 font-medium">
                  {text.tagline}
                </p>
              </div>
            </div>

            {/* Special Offer Box */}
            <div
              className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 mb-8 transition-all duration-300 hover:bg-white/20 hover:shadow-glow"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`flex items-center justify-center gap-3 mb-4 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <Clock
                  className={`w-8 h-8 text-yellow-300 transition-transform duration-300 ${
                    isHovered ? "animate-pulse" : ""
                  }`}
                />
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {text.offerTitle}
                </h2>
              </div>

              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-4 rounded-xl mb-4 transform transition-transform duration-300 hover:scale-105">
                <p className="text-xl md:text-2xl font-bold">{text.freeYear}</p>
              </div>

              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                {text.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open("https://www.loveai.co.il/login", "_blank", "noopener,noreferrer");
                  }}
                >
                  <div
                    className={`flex items-center gap-2 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    {text.joinButton}
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                </Button>

                <div className="text-center">
                  <p className="text-white/80 text-sm">⏰ {text.daysLeft}</p>
                  <p className="text-white/60 text-xs mt-1">
                    {text.disclaimer}
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <h3 className="font-semibold mb-2">
                  {text.features.match.title}
                </h3>
                <p className="text-sm text-white/70">
                  {text.features.match.desc}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">
                  {text.features.experience.title}
                </h3>
                <p className="text-sm text-white/70">
                  {text.features.experience.desc}
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">
                  {text.features.results.title}
                </h3>
                <p className="text-sm text-white/70">
                  {text.features.results.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default LoveAIBanner;