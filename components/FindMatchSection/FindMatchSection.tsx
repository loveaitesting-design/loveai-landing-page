'use client';

import React, { useState, useEffect } from 'react';
import MatchComponent from '../MatchComponent/MatchComponent';
import { useTranslation } from 'react-i18next';

export default function FindMatchSection() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const matchData = [
    { name: 'Noa', age: '38Yr', distance: '2 miles away', interests: 'Traveling, Cooking', occupation: 'Product designer', rating: '3.5', imageUrl: '/match1.png' },
    { name: 'Shira', age: '26Yr', distance: '1.2 miles away', interests: 'Dance', occupation: 'Medical Student', rating: '5.0', imageUrl: '/2.jpg' },
    { name: 'Sarah', age: '55Yr', distance: '5 miles away', interests: 'Football, Music', occupation: 'Software Engineer', rating: '3.5', imageUrl: '/3.png' },
    { name: 'Tamar', age: '27Yr', distance: '2.2 miles away', interests: 'Design, Exhibitions', occupation: 'Architect', rating: '4.0', imageUrl: '/4.jpg' },
    { name: 'Yehuda', age: '29Yr', distance: '3 miles away', interests: 'Nature hikes, Movies', occupation: 'App developer', rating: '5.0', imageUrl: '/5.jpg' },
    { name: 'Yael', age: '33Yr', distance: '3.3 miles away', interests: 'Football, Music', occupation: 'Teacher', rating: '0', imageUrl: '/6.png' },
    { name: 'Rachel', age: '51Yr', distance: '2 miles away', interests: 'Football, Music', occupation: 'Teacher', rating: '4.0', imageUrl: '/7.png' },
    { name: 'Michel Ben', age: '22Yr', distance: '4 miles away', interests: 'Football, Music', occupation: 'Teacher', rating: '4.2', imageUrl: '/8.jpg' },
    // { name: 'Dalia', age: '31Yr', distance: '2 miles away', interests: 'Movie, Music', occupation: 'Tech entrepreneur', rating: '2.2', imageUrl: '/9.jpg' },
    // { name: 'Naomi', age: '61Yr', distance: '0.5 miles away', interests: 'Nature, Discovering new places', occupation: 'Yoga instructor', rating: '1.9', imageUrl: '/10.png' },
    // { name: 'Raphael', age: '34Yr', distance: '5 miles away', interests: 'Cooking, Travel', occupation: 'Chef and Restaurant owner', rating: '3.1', imageUrl: '/11.jpg' },
    // { name: 'Rivka', age: '45Yr', distance: '1.3 miles away', interests: 'Running, Swimming', occupation: 'Doctor', rating: '3.3', imageUrl: '/12.png' }
  ];

  return (
    <div id='matches' className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* Title */}
        <div className="relative inline-block mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            {isMounted ? t('findmatch_title') : 'Find your match'}
          </h1>

          <img
            src="/heartleft.png"
            alt="Heart"
            className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 md:w-8"
          />
          <img
            src="/heartright.png"
            alt="Heart"
            className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 md:w-8"
          />
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          {isMounted ? t('findmatch_subtitle') : 'Explore profiles near you and make a connection.'}
        </p>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <input
            type="text"
            placeholder={isMounted ? t('findmatch_search_placeholder') : 'Search for matches...'}
            className="w-full md:w-64 px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-200 text-sm"
          />

          <div className="flex flex-wrap gap-2">
            <button className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 flex items-center gap-1 text-sm">
              <img src="/everyone.png" alt="Everyone" className="w-4 h-4" />
              {isMounted ? t('findmatch_filter_everyone') : 'Everyone'}
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 flex items-center gap-1 text-sm">
              <img src="/men.png" alt="Men" className="w-4 h-4" />
              {isMounted ? t('findmatch_filter_men') : 'Men'}
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 flex items-center gap-1 text-sm">
              <img src="/women.png" alt="Women" className="w-4 h-4" />
              {isMounted ? t('findmatch_filter_women') : 'Women'}
            </button>
          </div>
        </div>

        {/* Showing text */}
        <p className="text-gray-500 mb-6 text-sm">
          {isMounted ? t('findmatch_showing', { count: 12 }) : 'Showing 12 matches'}
          <br/>
          <br/>
          {isMounted ? t('findmatch_showing_demo') : ''}
          </p>
        {/* Match Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-8">
            {matchData.map((data, index) => (
              <MatchComponent key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
