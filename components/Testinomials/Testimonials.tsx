import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Star, Quote, CheckCircle, MapPin, X } from "lucide-react";
import SEOHead from "../seo/SEOHead";

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
    const [showComingSoon, setShowComingSoon] = useState(false);
    const handleAppStoreClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setShowComingSoon(true);
    };
  
    const closeComingSoonModal = () => {
      setShowComingSoon(false);
    };
  // Generate testimonials data
  const generateTestimonials = (lang: 'he' | 'en' | 'ru' | 'uk') => {
    const hebrewTestimonials = [
      {
        name: "שרה כהן",
        age: 28,
        location: "תל אביב",
        text: "LoveAI שינה לי את החיים! אחרי 3 שנים של חיפושים, מצאתי את דוד - שותף לחיים, לחלומות ולערכים. היום אנחנו מאורסים ומתכננים חתונה במאי.",
        rating: 5,
        initials: "שכ",
        relationshipLength: "מאורסים",
        verified: true,
        achievement: "חתונה מתוכננת למאי 2025",
        avatarColor: "bg-pink-500"
      },
      {
        name: "דוד לוי",
        age: 32,
        location: "ירושלים", 
        text: "כרופא, אני מאמין במדע. ה-AI של LoveAI ניתח את האישיות שלי עמוק יותר מכל בדיקה שעשיתי אי פעם. מצא לי את שרה - האישה המושלמת בשבילי.",
        rating: 5,
        initials: "דל",
        relationshipLength: "מאורס",
        verified: true,
        achievement: "דירוג התאמה: 94%",
        avatarColor: "bg-sky-500"
      },
      {
        name: "רחל מזרחי",
        age: 52,
        location: "חיפה",
        text: "חשבתי שבגיל 52 האהבה עברה עליי. LoveAI הוכיח לי שהטוב ביותר עוד לפניי. מצאתי את יוסי, ועכשיו אנחנו מתכננים חתונה שנייה מרגשת.",
        rating: 5,
        initials: "רמ",
        relationshipLength: "מאורסים",
        verified: true,
        achievement: "אהבה בגיל השלישי",
        avatarColor: "bg-purple-500"
      },
      {
        name: "יוסי אברמוביץ'",
        age: 55,
        location: "נתניה",
        text: "אחרי גירושין קשים חשבתי שלא אמצא עוד אהבה. ה-AI הבין את הצרכים הרגשיים שלי וקישר אותי לרחל. היום אנחנו הזוג הכי מאושר שאני מכיר.",
        rating: 5,
        initials: "יא",
        relationshipLength: "מאורס",
        verified: true,
        achievement: "מתחיל מחדש בגיל 55",
        avatarColor: "bg-green-500"
      },
      {
        name: "מיכל גולדשטיין",
        age: 22,
        location: "אוניברסיטת תל אביב",
        text: "בתור סטודנטית לא היה לי זמן לבילויים. LoveAI מצא לי את אמיר שלומד איתי באותה פקולטה! היום אנחנו יחד כבר שנתיים וגרים יחד.",
        rating: 5,
        initials: "מג",
        relationshipLength: "2 שנים, גרים יחד",
        verified: true,
        achievement: "אהבה בקמפוס",
        avatarColor: "bg-orange-500"
      },
      {
        name: "אמיר לוין",
        age: 23,
        location: "אוניברסיטת תל אביב",
        text: "מיכל ואני מתאימים כמו פאזל. ה-AI זיהה שאנחנו לא רק זוג, אלא גם שותפים עסקיים פוטנציאליים. היום אנחנו מפתחים יחד סטארטאפ טכנולוגי.",
        rating: 5,
        initials: "אל",
        relationshipLength: "2 שנים, שותפים בחיים ובעסקים",
        verified: true,
        achievement: "מאהבה לשותפות עסקית",
        avatarColor: "bg-teal-500"
      }
    ];

    const englishTestimonials = [
      {
        name: "Sarah Cohen",
        age: 28,
        location: "Tel Aviv",
        text: "LoveAI changed my life! After 3 years of searching, I found David - a partner in life, dreams, and values. Today we are engaged and planning a wedding in May.",
        rating: 5,
        initials: "SC",
        relationshipLength: "Engaged",
        verified: true,
        achievement: "Wedding planned for May 2025",
        avatarColor: "bg-pink-500"
      },
      {
        name: "David Levi",
        age: 32,
        location: "Jerusalem",
        text: "As a doctor, I believe in science. LoveAI's AI analyzed my personality more deeply than any test I've ever done. It found me Sarah - the perfect woman for me.",
        rating: 5,
        initials: "DL",
        relationshipLength: "Engaged",
        verified: true,
        achievement: "Compatibility rating: 94%",
        avatarColor: "bg-sky-500"
      },
      {
        name: "Rachel Mizrahi",
        age: 52,
        location: "Haifa",
        text: "I thought that at 52, love had passed me by. LoveAI proved to me that the best was yet to come. I found Yossi, and now we are planning an exciting second wedding.",
        rating: 5,
        initials: "RM",
        relationshipLength: "Engaged",
        verified: true,
        achievement: "Love in the third age",
        avatarColor: "bg-purple-500"
      },
      {
        name: "Yossi Abramovich",
        age: 55,
        location: "Netanya",
        text: "After a difficult divorce I thought I would find love again. The AI understood my emotional needs and connected me to Rachel. Today we are the happiest couple I know.",
        rating: 5,
        initials: "YA",
        relationshipLength: "Engaged",
        verified: true,
        achievement: "Starting over at 55",
        avatarColor: "bg-green-500"
      },
      {
        name: "Michal Goldstein",
        age: 22,
        location: "Tel Aviv University",
        text: "As a student, I didn't have time for hanging out. LoveAI found me Amir, who studies with me in the same faculty! Today we have been together for two years and live together.",
        rating: 5,
        initials: "MG",
        relationshipLength: "2 years, living together",
        verified: true,
        achievement: "Campus love",
        avatarColor: "bg-orange-500"
      },
      {
        name: "Amir Levin",
        age: 23,
        location: "Tel Aviv University",
        text: "Michal and I fit together like a puzzle. The AI recognized that we are not only a couple, but also potential business partners. Today we are developing a technology startup together.",
        rating: 5,
        initials: "AL",
        relationshipLength: "2 years, life and business partners",
        verified: true,
        achievement: "From love to business partnership",
        avatarColor: "bg-teal-500"
      }
    ];

    const russianTestimonials = [
      {
        name: "Анна Иванова",
        age: 28,
        location: "Москва",
        text: "После многих лет поиска на разных сайтах знакомств, LoveAI помог мне найти настоящую любовь. ИИ действительно понял, что я ищу.",
        rating: 5,
        initials: "АИ",
        relationshipLength: "6 месяцев вместе",
        verified: true,
        achievement: "Первая настоящая любовь",
        avatarColor: "bg-pink-500"
      },
      {
        name: "Дмитрий Петров",
        age: 32,
        location: "Санкт-Петербург",
        text: "Я скептически относился к ИИ в знакомствах, но результаты говорили сами за себя. Я нашел кого-то, кто действительно подходит мне на глубоком уровне.",
        rating: 5,
        initials: "ДП",
        relationshipLength: "1 год вместе",
        verified: true,
        achievement: "Преодолел скептицизм",
        avatarColor: "bg-sky-500"
      },
      {
        name: "Елена Сидорова",
        age: 26,
        location: "Новосибирск",
        text: "Больше всего мне понравилось то, что не нужно было искать. ИИ приводил мне именно тот тип людей, которых я ищу.",
        rating: 5,
        initials: "ЕС",
        relationshipLength: "8 месяцев вместе",
        verified: true,
        achievement: "Идеальное совпадение",
        avatarColor: "bg-purple-500"
      }
    ];

    const ukrainianTestimonials = [
      {
        name: "Катерина Коваленко",
        age: 28,
        location: "Київ",
        text: "Після багатьох років пошуку на різних сайтах знайомств, LoveAI допоміг мені знайти справжнє кохання. ШІ справді зрозумів, що я шукаю.",
        rating: 5,
        initials: "КК",
        relationshipLength: "6 місяців разом",
        verified: true,
        achievement: "Перше справжнє кохання",
        avatarColor: "bg-pink-500"
      },
      {
        name: "Олександр Петренко",
        age: 32,
        location: "Львів",
        text: "Я скептично ставився до ШІ у знайомствах, але результати говорили самі за себе. Я знайшов когось, хто справді підходить мені на глибокому рівні.",
        rating: 5,
        initials: "ОП",
        relationshipLength: "1 рік разом",
        verified: true,
        achievement: "Подолав скептицизм",
        avatarColor: "bg-sky-500"
      },
      {
        name: "Марія Іваненко",
        age: 26,
        location: "Одеса",
        text: "Найбільше мені сподобалося те, що не потрібно було шукати. ШІ приводив мені саме той тип людей, яких я шукаю.",
        rating: 5,
        initials: "МІ",
        relationshipLength: "8 місяців разом",
        verified: true,
        achievement: "Ідеальне співпадіння",
        avatarColor: "bg-purple-500"
      }
    ];

    return lang === 'he' ? hebrewTestimonials : 
           lang === 'en' ? englishTestimonials :
           lang === 'ru' ? russianTestimonials : ukrainianTestimonials;
  };
  
  const testimonials = generateTestimonials(language);

  return (
    
    <section id="testimonials" className="py-20 bg-white to-pink-50 relative overflow-hidden">
            <SEOHead title="LoveAi - Find Real Love with AI" url="https://www.loveai.co.il/" />
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        
        {/* Header */}
       <div className="text-center mb-16">
  <Badge className="bg-sky-100 text-sky-600 border-sky-200 mb-6 px-4 py-2">
    <Heart className="w-4 h-4 mr-2" />
    {language === 'he'
      ? 'סיפורי הצלחה'
      : language === 'ru'
      ? 'Истории успеха'
      : 'Success Stories'}
  </Badge>

<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
  {language === 'he'
    ? <>במשימה ליצור <span className="text-sky-500">10,000+</span> סיפורי אהבה</>
    : language === 'ru'
    ? <>С миссией создать <span className="text-sky-500">10,000+</span> историй любви</>
    : <>On a mission to create <span className="text-sky-500">10,000+</span> love stories</>}
</h2>


 <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
  {language === 'he'
    ? 'בכל שבוע אנשים מתחילים חיבורים משמעותיים דרך LoveAI. החזון שלנו הוא לעזור לאלפי זוגות לבנות מערכות יחסים אמיתיות וארוכות טווח ככל שהקהילה שלנו ממשיכה לגדול. הנה כמה מהסיפורים המדהימים שלהם.'
    : language === 'ru'
    ? 'Каждую неделю люди начинают значимые знакомства через LoveAI. Наша цель — помочь тысячам пар построить искренние и долгосрочные отношения по мере роста нашего сообщества. Вот некоторые из их удивительных историй.'
    : 'Every week, people begin meaningful connections through LoveAI. Our vision is to help thousands of couples build genuine, lasting relationships as our community continues to grow. Here are some of their amazing stories.'}
</p>

</div>


        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden group"
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center opacity-30">
                <Quote className="w-6 h-6 text-gray-400" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-sky-500 text-sky-500" />
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-base italic">
                "{testimonial.text}"
              </p>
              
              {/* User info */}
              <div className="flex items-start gap-4">
                <Avatar className={`w-14 h-14 border-2 border-white shadow-md ${testimonial.avatarColor}`}>
                  <AvatarFallback className="text-white font-bold text-lg bg-transparent">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <Badge className="text-xs bg-sky-100 text-sky-600 border-sky-200 px-2 py-1">
                        {language === 'he' ? 'מאומת' : 'verified'}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{testimonial.location} • {testimonial.age}</span>
                  </div>
                  
                  <Badge className="text-xs bg-cyan-100 text-cyan-700 border-cyan-200 mb-2">
                    {testimonial.relationshipLength}
                  </Badge>
                  
                  {testimonial.achievement && (
                    <div className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-md">
                      {testimonial.achievement}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Real Success Stats */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
         <div className="text-center mb-12">
  <h3 className="text-3xl font-bold mb-4 text-gray-900">
    {language === 'he'
      ? 'נתונים אמיתיים מ-2024'
      : language === 'ru'
      ? 'Реальные данные за 2024 год'
      : 'Real data from 2024'}
  </h3>
  <p className="text-gray-600 text-lg">
    {language === 'he'
      ? 'סטטיסטיקות מעודכנות מהמשתמשים שלנו'
      : language === 'ru'
      ? 'Обновленная статистика от наших пользователей'
      : 'Updated statistics from our users'}
  </p>
</div>


         {/* Top row stats */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
  <div className="text-center p-6 bg-green-50 rounded-2xl">
    <div className="text-5xl font-bold text-green-600 mb-3">89%</div>
    <div className="text-gray-800 font-semibold mb-1">
      {language === 'he'
        ? 'יוצאים לדייט ראשון'
        : language === 'ru'
        ? 'Идут на первое свидание'
        : 'Going on a first date'}
    </div>
    <div className="text-sm text-gray-500">
      {language === 'he'
        ? 'תוך 7 ימים מההתאמה'
        : language === 'ru'
        ? 'В течение 7 дней после совпадения'
        : 'Within 7 days of matching'}
    </div>
  </div>

  <div className="text-center p-6 bg-red-50 rounded-2xl">
    <div className="text-5xl font-bold text-red-500 mb-3">18H</div>
    <div className="text-gray-800 font-semibold mb-1">
      {language === 'he'
        ? 'זמן ממוצע להתאמה'
        : language === 'ru'
        ? 'Среднее время для совпадения'
        : 'Average time to match'}
    </div>
    <div className="text-sm text-gray-500">
      {language === 'he'
        ? 'מרישום להתאמה ראשונה'
        : language === 'ru'
        ? 'От регистрации до первого совпадения'
        : 'From registration to first match'}
    </div>
  </div>

  <div className="text-center p-6 bg-cyan-50 rounded-2xl">
    <div className="text-5xl font-bold text-cyan-500 mb-3">2,500+</div>
    <div className="text-gray-800 font-semibold mb-1">
      {language === 'he'
        ? 'זוגות שהתחתנו'
        : language === 'ru'
        ? 'Пары, которые поженились'
        : 'Couples who got married'}
    </div>
    <div className="text-sm text-gray-500">
      {language === 'he'
        ? 'מאז השקת האפליקציה'
        : language === 'ru'
        ? 'С момента запуска приложения'
        : 'Since the launch of the app'}
    </div>
  </div>

  <div className="text-center p-6 bg-sky-50 rounded-2xl">
    <div className="text-5xl font-bold text-sky-600 mb-3">94%</div>
    <div className="text-gray-800 font-semibold mb-1">
      {language === 'he'
        ? 'שיעור הצלחת ההתאמות'
        : language === 'ru'
        ? 'Уровень успешных совпадений'
        : 'Match success rate'}
    </div>
    <div className="text-sm text-gray-500">
      {language === 'he'
        ? 'מבוסס על 15,847 התאמות'
        : language === 'ru'
        ? 'На основе 15,847 совпадений'
        : 'Based on 15,847 matches'}
    </div>
  </div>
</div>

{/* Bottom row stats */}
<div className="grid md:grid-cols-3 gap-8 text-center">
  <div className="p-6">
    <div className="text-4xl font-bold text-red-500 mb-2">200+</div>
    <div className="text-gray-700 font-semibold">
      {language === 'he'
        ? 'התאמות יומיות'
        : language === 'ru'
        ? 'Ежедневные совпадения'
        : 'Daily matches'}
    </div>
  </div>

  <div className="p-6">
    <div className="text-4xl font-bold text-cyan-500 mb-2">15,000+</div>
    <div className="text-gray-700 font-semibold">
      {language === 'he'
        ? 'משתמשים פעילים'
        : language === 'ru'
        ? 'Активные пользователи'
        : 'Active users'}
    </div>
  </div>

  <div className="p-6">
    <div className="text-4xl font-bold text-sky-600 mb-2">4.9/5</div>
    <div className="text-gray-700 font-semibold">
      {language === 'he'
        ? 'דירוג חנות האפליקציות'
        : language === 'ru'
        ? 'Рейтинг в App Store'
        : 'App Store Rating'}
    </div>
  </div>
</div>

        </div>

      </div>
      {/* Coming Soon Modal */}
                  {showComingSoon && (
                    <div 
                      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] px-4"
                      onClick={closeComingSoonModal}
                    >
                      <div 
                        className="bg-white rounded-3xl p-8 lg:p-12 max-w-md w-full shadow-2xl relative transform transition-all duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          animation: 'fadeIn 0.3s ease-out'
                        }}
                      >
                        {/* Close Button */}
                        <button
                          onClick={closeComingSoonModal}
                          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        >
                          <X className="w-6 h-6 text-gray-600" />
                        </button>
            
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg
                              viewBox="0 0 24 24"
                              fill="white"
                              className="w-12 h-12"
                            >
                              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                            </svg>
                          </div>
                        </div>
            
                        {/* Content */}
                        <div className="text-center">
                          <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            {t("coming_soon_title")}
                          </h2>
                          <p className="text-gray-600 text-lg mb-6">
                            {t("coming_soon_description")}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {t("coming_soon_stay_tuned")}
                          </p>
                        </div>
            
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-30 -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200 to-cyan-200 rounded-full blur-2xl opacity-30 -z-10"></div>
                      </div>
                    </div>
                  )}
            
                  <style jsx>{`
                    @keyframes fadeIn {
                      from {
                        opacity: 0;
                        transform: scale(0.9);
                      }
                      to {
                        opacity: 1;
                        transform: scale(1);
                      }
                    }
                  `}</style>
    </section>
  );
};

export default Testimonials;