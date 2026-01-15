'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const DownloadSection1 = () => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="bg-gradient-to-r from-sky-400 to-cyan-500 py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {isMounted ? t('download_now_title') : 'Download Now'}
          </h2>
          <p className="text-white text-sm md:text-base max-w-md">
            {isMounted
              ? t('download_now_desc')
              : 'Get the app now and connect with meaningful relationships.'}
          </p>
        </div>

        <div className="text-center md:text-left"> <br />
          {/* Emoji Section */}
          <br />
          <h3 className="text-7xl font-extrabold">💞👫💞</h3><br />
          {/* <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
             
          </h2> */}
    
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* App Store Button */}
          <a
            href="#"
            className="bg-transparent flex items-center shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src="/apple.png"
              alt={
                isMounted ? t('download_on_app_store') : 'Download on App Store'
              }
              className="w-40 md:w-44"
            />
          </a>

          {/* Play Store Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.dating.loveai" target='_blank'
            className="bg-transparent flex items-center shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src="/play.png"
              alt={
                isMounted ? t('get_it_on_google_play') : 'Get it on Google Play'
              }
              className="w-40 md:w-44"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection1;
