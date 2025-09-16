import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from "react";

const KindnessJourneySection = () => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const steps = [
    {
      icon: "/createprof.png",
      title: isMounted ? t('kindness_step_create_profile') : "Create Profile",
    },
    {
      icon: "/dosome.png",
      title: isMounted ? t('kindness_step_do_good') : "Do Good",
    },
    {
      icon: "/earn.png",
      title: isMounted ? t('kindness_step_earn_heart') : "Earn Hearts",
    },
  ];

  const charities = [
    {
      name: "Charity 1",
      image: "/ch1.png",
      link: "https://www.ufis.org.il/donation-he/",
    },
    {
      name: "Charity 2",
      image: "/ch2.png",
      link: "https://zaka.org.il/donation/",
    },
    {
      name: "Charity 3",
      image: "/ch3.png",
      link: "https://www.mdais.org/donation",
    },
    {
      name: "Charity 4",
      image: "/ch4.png",
      link: "https://secured.israelgives.org/he/pay/makeawish1",
    },
    {
      name: "Charity 5",
      image: "ch5.png",
      link: "https://donation.asakimerp.com/Campaing/?CampaingID=51492",
    },
    {
      name: "Charity 6",
      image: "/ch6.png",
      link: "https://www.latet.org.il/pesach2025/",
    },
    {
      name: "Charity 7",
      image: "/ch7.png",
      link: "https://aleh.org/heb-donation/",
    },
  ];

  return (
    <div id="pricing" className="py-16 bg-gradient-to-r from-White-100 to-White-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Your Kindness Journey */}
        <h2 className="text-center text-3xl font-bold mb-8">
          <div className="relative inline-block mb-4">
            <h1 className="text-[36px] font-bold text-center">
              <span className="text-black">
                {isMounted ? t('kindness_journey_title') : "Your Kindness Journey"}
              </span>
            </h1>
            <img src="/heartleft.png" alt="Heart" className="absolute -left-6 top-1/2 transform -translate-y-1/2" />
            <img src="/heartright.png" alt="Heart" className="absolute -right-6 top-1/2 transform -translate-y-1/2" />
          </div>
        </h2>

        {/* Progress Bar */}
        <div className="flex justify-center mb-12">
          <div className="relative w-3/4 md:w-1/2 h-2 bg-gray-300 rounded-full">
            <div className="absolute top-0 left-0 h-full bg-blue-400 w-1/2"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-white border-4 border-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex justify-center gap-8 mb-20 flex-wrap">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/50 rounded-2xl shadow-md p-3 w-60 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <img className="w-[36px] h-[36px] mb-4" src={step.icon} alt="Step icon" />
              <h3 className="font-semibold text-gray-700">{step.title}</h3>
            </div>
          ))}
        </div>

        {/* LoveAi Charities */}
        <h2 className="text-center text-3xl font-bold mb-8">
          <div className="relative inline-block mb-4">
            <h1 className="text-[36px] font-bold text-center">
              <span className="text-black">
                {isMounted ? t('kindness_charities_title') : "LoveAi Charities"}
              </span>
            </h1>
            <img src="/heartleft.png" alt="Heart" className="absolute -left-6 top-1/2 transform -translate-y-1/2" />
            <img src="/heartright.png" alt="Heart" className="absolute -right-6 top-1/2 transform -translate-y-1/2" />
          </div>
        </h2>

        {/* Charity Logos */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-items-center">
            {charities.map((charity, index) => (
              <a
                href={charity.link}
                target="_blank"
                key={index}
                className="flex justify-center"
                rel="noreferrer"
              >
                <div className="bg-white/50 rounded-2xl shadow-md p-4 w-24 h-24 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                  <img
                    src={charity.image || "/placeholder.svg"}
                    alt={charity.name}
                    className="object-contain h-16"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KindnessJourneySection;
