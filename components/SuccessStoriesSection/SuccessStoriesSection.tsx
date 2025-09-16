'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import Slider from 'react-slick'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useTranslation } from 'react-i18next'


const SuccessStoriesSection = () => {
  const { t } = useTranslation()
  const sliderRef = useRef<any>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // ✅ Use `useMemo` to avoid hydration mismatch
  const testimonials = useMemo(() => [
    {
      name: t('success_story_1_name'),
      date: t('success_story_1_date'),
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      story: t('success_story_1_story'),
    },
    {
      name: t('success_story_2_name'),
      date: t('success_story_2_date'),
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      story: t('success_story_2_story'),
    },
    {
      name: t('success_story_3_name'),
      date: t('success_story_3_date'),
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      story: t('success_story_3_story'),
    },
  ], [t])

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 1,
    className: 'center-mode-slider',
    beforeChange: (_: any, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: '200px',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '100px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots: any) => (
      <div className="custom-dots-container">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="custom-arrow prev-arrow mr-2"
          aria-label="Previous slide"
        >
          <ArrowLeft size={22} />
        </button>
        <ul className="slick-dots flex items-center">{dots}</ul>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="custom-arrow next-arrow ml-2"
          aria-label="Next slide"
        >
          <ArrowRight size={22} />
        </button>
      </div>
    ),
  }

  return (
    <section id="testimonials" className="pt-16 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="relative inline-block mb-4">
            <h1 className="text-[36px] font-bold text-center">
              {isMounted ? t('success_stories_title') : 'Success Stories'}
            </h1>
            <img src="/heartleft.png" alt="Heart" className="absolute -left-6 top-1/2 transform -translate-y-1/2" />
            <img src="/heartright.png" alt="Heart" className="absolute -right-6 top-1/2 transform -translate-y-1/2" />
          </div>
          <p className="text-[#4B5563] font-medium max-w-3xl mx-auto text-[16px]">
            {t('success_stories_subtitle')}
          </p>
        </div>

        <div className="testimonial-slider-container">
          <style jsx global>{`
            .center-mode-slider .slick-slide {
              transition: all 0.3s ease;
              transform: scale(0.85);
              opacity: 0.6;
              filter: blur(2px);
            }
            .center-mode-slider .slick-center {
              transform: scale(1.05);
              opacity: 1;
              filter: blur(0);
              z-index: 10;
            }
            .center-mode-slider .slick-slide > div {
              padding: 15px;
            }
            .custom-dots-container {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 20px;
            }
            .custom-arrow {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              cursor: pointer;
              transition: all 0.2s ease;
            }
            .slick-dots {
              position: static;
              display: flex !important;
              align-items: center;
              justify-content: center;
              margin: 0;
              padding: 60px 0 0 0;
              width: unset;
            }
            .slick-dots ul {
              padding: 0 !important;
            }
            .slick-dots li {
              margin: 0 5px;
              width: 14px;
              height: 14px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .slick-dots li button {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .slick-dots li button:before {
              font-size: 12px;
              color: #4a4a4a;
              opacity: 0.5;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              background: #4a4a4a;
              content: '';
              display: block;
            }
            .slick-dots li.slick-active button:before {
              width: 14px;
              height: 14px;
              border-radius: 50%;
              background: radial-gradient(circle, #00cfff 0%, #00b4e6 60%, #009fcc 100%);
              opacity: 1;
              color: transparent;
            }
          `}</style>

          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((item, index) => (
              <div key={index}>
                <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[250px] flex flex-col items-start justify-center transition-all duration-300">
                  <div className="flex items-center mb-4 gap-4">
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-pink-300"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-400">{item.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{item.story}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default SuccessStoriesSection

