"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SEOHead from "../seo/SEOHead";

interface MatchData {
  name: string;
  age: string;
  distance: string;
  interests: string;
  occupation: string;
  rating: string;
  imageUrl: string;
}

export default function MatchComponent({ data }: { data: MatchData }) {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent hydration mismatch

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-72 transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
            <SEOHead title="LoveAi - Find Real Love with AI" url="https://www.loveai.co.il/" />
      <div className="relative h-96">
        {/* Background Image */}
        <img
          src={data.imageUrl}
          alt="Profile"
          className="h-full w-full object-cover"
        />

        {/* Top left dark overlay */}
        <div className="absolute top-0 left-0 w-20 h-14 bg-black bg-opacity-30 rounded-br-3xl"></div>

        {/* Top right dark overlay */}
        <div className="absolute top-0 right-0 w-16 h-14 bg-black bg-opacity-30 rounded-bl-3xl"></div>

        {/* Rating Badge */}
<div className="absolute top-2 left-2 group">
  {/* Icon */}
  <div className="inline-block relative">
    <div className="flex items-center gap-1 text-white rounded-full py-1 text-xs font-bold cursor-pointer">
      <img
        src="/earn.png"
        style={{ width: "30px", height: "30px" }}
        alt="Star"
      />
      <p className="text-[14px]">{data.rating}</p>
    </div>
    
    {/* Tooltip at bottom */}
    <div
      className="absolute top-full mt-2 ml-8  left-1/2 -translate-x-1/2
                 bg-white text-black text-sm font-medium px-3 py-1
                 rounded-xl shadow-md opacity-0 group-hover:opacity-100
                 transition-opacity duration-300 whitespace-nowrap z-50"
    >
Good Deed Points      {/* Arrow */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
    </div>
  </div>
</div>

        {/* Verified Badge */}
        <div className="absolute top-2 right-2 p-2 group">
          {/* Icon */}
          <div className="inline-block relative">
            <img
              src="/verified.png"
              alt={t("match_verified")}
              className="cursor-pointer"
            />

            {/* Tooltip at bottom */}
            <div
              className="absolute top-full mt-2 left-1 -translate-x-1/2 
                    bg-white text-black text-sm font-medium px-3 py-1 
                    rounded-xl shadow-md opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 whitespace-nowrap z-50"
            >
              Verified
              {/* Arrow */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
            </div>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-center text-white">
          <div className="flex justify-center gap-6">
            {/* Pass Button */}
            <div className="relative group">
              <button className="bg-transparent rounded-full hover:shadow-md transform hover:scale-110 transition-all duration-300 ease-in-out">
                <a
                  href="https://loveai.co.il/login"
                  target="_blank"
                >
                  <img src="/remove.png" alt={t("match_remove")} />
                </a>
              </button>
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="bg-white text-black text-sm font-medium px-3 py-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md relative">
                  Pass
                  {/* Tooltip arrow */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="relative group">
              <button className="bg-transparent rounded-full hover:shadow-md transform hover:scale-110 transition-all duration-300 ease-in-out">
                <a
                  href="https://loveai.co.il/login"
                  target="_blank"
                >
                  <img src="/save.png" alt={t("match_save")} />
                </a>
              </button>
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="bg-white text-black text-sm font-medium px-3 py-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md relative">
                  Save
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Like Button */}
            <div className="relative group">
              <button className="bg-transparent rounded-full hover:shadow-md transform hover:scale-110 transition-all duration-300 ease-in-out">
                <a
                  href="https://loveai.co.il/login"
                  target="_blank"
                >
                  <img src="/favourite.png" alt={t("match_favourite")} />
                </a>
              </button>
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="bg-white text-black text-sm font-medium px-3 py-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md relative">
                  Like
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-lg">{`${data.name}, ${data.age}, ${data.distance}`}</h3>
          <p className="text-sm text-gray-200 mt-1">
            {t("match_interests")}:{" "}
            <span className="text-white font-semibold">{data.interests}</span>
          </p>
          <p className="text-sm text-gray-200">
            {t("match_occupation")}:{" "}
            <span className="text-white font-semibold">{data.occupation}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
