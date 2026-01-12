import React from 'react';

import { Share2} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AdvanceDatingFeatures = () => {
  const { i18n } = useTranslation();

  // Get current language from i18n, with fallback
  const getCurrentLanguage = (): 'en' | 'he' | 'ru' | 'uk' => {
    const currentLang = i18n.language;
    if (['en', 'he', 'ru', 'uk'].includes(currentLang)) {
      return currentLang as 'en' | 'he' | 'ru' | 'uk';
    }
    return 'he'; // Default fallback
  };

  const currentLanguage = getCurrentLanguage();

  // Multi-language content
  const content = {
    he: {
      title: 'צילומי מסך מהאפליקציה',
      subtitle: 'ראו איך נראית האפליקציה בפועל',
      screenshots: {
        opening: {
          title: 'מסך פתיחה',
          description: 'עיצוב מושך ומזמין'
        },
        aiMatching: {
          title: 'התאמות AI',
          description: 'טכנולוגיה מתקדמת למציאת זוגיות'
        },
        start: {
          title: 'מסך התחלה',
          description: 'התחילו את המסע לאהבה'
        },
        advanced: {
          title: 'התאמות מתקדמות',
          description: 'חיפוש והתאמה חכמה'
        }
      },
    
      toast: {
        copySuccess: 'הועתק ללוח!',
        copyError: 'שגיאה בהעתקה',
        downloadSuccess: 'הורדת {filename} - פונקציה זו דורשת התקנת html2canvas',
        downloadError: 'שגיאה בהורדה',
        elementNotFound: 'לא נמצא האלמנט להורדה'
      }
    },
    en: {
      title: 'App Screenshots',
      subtitle: 'See how the app looks in action',
      screenshots: {
        opening: {
          title: 'Welcome Screen',
          description: 'Attractive and inviting design'
        },
        aiMatching: {
          title: 'AI Matching',
          description: 'Advanced technology for finding relationships'
        },
        start: {
          title: 'Getting Started',
          description: 'Begin your journey to love'
        },
        advanced: {
          title: 'Advanced Matching',
          description: 'Smart search and matching'
        }
      },
   
      toast: {
        copySuccess: 'Copied to clipboard!',
        copyError: 'Copy error',
        downloadSuccess: 'Download {filename} - This function requires html2canvas installation',
        downloadError: 'Download error',
        elementNotFound: 'Element not found for download'
      }
    },
    ru: {
      title: 'Скриншоты приложения',
      subtitle: 'Посмотрите, как выглядит приложение в действии',
      screenshots: {
        opening: {
          title: 'Экран приветствия',
          description: 'Привлекательный и приглашающий дизайн'
        },
        aiMatching: {
          title: 'ИИ подбор',
          description: 'Передовые технологии для поиска отношений'
        },
        start: {
          title: 'Начало работы',
          description: 'Начните свой путь к любви'
        },
        advanced: {
          title: 'Продвинутый подбор',
          description: 'Умный поиск и подбор'
        }
      },
     
      toast: {
        copySuccess: 'Скопировано в буфер обмена!',
        copyError: 'Ошибка копирования',
        downloadSuccess: 'Скачать {filename} - Эта функция требует установки html2canvas',
        downloadError: 'Ошибка загрузки',
        elementNotFound: 'Элемент для загрузки не найден'
      }
    },
    uk: {
      title: 'Скріншоти додатку',
      subtitle: 'Подивіться, як виглядає додаток у дії',
      screenshots: {
        opening: {
          title: 'Екран привітання',
          description: 'Привабливий та запрошуючий дизайн'
        },
        aiMatching: {
          title: 'ШІ підбір',
          description: 'Передові технології для пошуку стосунків'
        },
        start: {
          title: 'Початок роботи',
          description: 'Почніть свій шлях до кохання'
        },
        advanced: {
          title: 'Розширений підбір',
          description: 'Розумний пошук та підбір'
        }
      },
      
      toast: {
        copySuccess: 'Скопійовано до буфера обміну!',
        copyError: 'Помилка копіювання',
        downloadSuccess: 'Завантажити {filename} - Ця функція потребує встановлення html2canvas',
        downloadError: 'Помилка завантаження',
        elementNotFound: 'Елемент для завантаження не знайдено'
      }
    }
  };

  const text = content[currentLanguage];

  
  return (
    <div 
      className="bg-white py-12"
      dir={currentLanguage === 'he' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        
      

        {/* App Screenshots Section */}
        <div >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {text.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {text.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-xl hover:scale-105 transition-transform duration-300">
                <img 
                  src="/b2204114-c124-4f19-ba81-b973cb78bbae.png" 
                  alt={`${text.screenshots.opening.title} - LoveAI`} 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">
                {text.screenshots.opening.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {text.screenshots.opening.description}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-xl hover:scale-105 transition-transform duration-300">
                <img 
                  src="/add31d61-315b-4dd8-b3d5-2cd6d8524ebc.png" 
                  alt={`${text.screenshots.aiMatching.title} - LoveAI`} 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">
                {text.screenshots.aiMatching.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {text.screenshots.aiMatching.description}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-xl hover:scale-105 transition-transform duration-300">
                <img 
                  src="/89d4a7df-468b-4757-8720-4049c89c81bc.png" 
                  alt={`${text.screenshots.start.title} - LoveAI`} 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">
                {text.screenshots.start.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {text.screenshots.start.description}
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-xl hover:scale-105 transition-transform duration-300">
                <img 
                  src="/e8df8872-2f97-4650-aafa-60ad850b1a46.png" 
                  alt={`${text.screenshots.advanced.title} - LoveAI`} 
                  className="w-full h-auto rounded-2xl"
              />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-4">
                {text.screenshots.advanced.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {text.screenshots.advanced.description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdvanceDatingFeatures;