'use client'
import PolicyLayout from '@/components/PolicyLayout';
import React, { useState, useEffect } from 'react';
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { AccessibilityProvider } from "@/components/AccessibilityProvider";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import SEOHead from '@/components/seo/SEOHead';
function BlogPage() {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  
  // Fallback content that matches what server renders
  const fallbackBlog = {
    article1: {
      title: "The Art of Modern Dating: Finding Love in a Digital World",
      content: "In today's fast-paced digital world, dating has evolved significantly. This comprehensive guide explores the modern dating landscape and provides insights into finding meaningful connections.",
      author: "Sarah Johnson",
      tags: ["Dating", "Relationships"]
    },
    article2: {
      title: "Building Lasting Relationships: Communication Tips",
      content: "Strong relationships are built on effective communication. Learn essential communication strategies that can help you build and maintain lasting romantic relationships.",
      author: "Dr. Michael Chen",
      tags: ["Relationships"]
    },
    article3: {
      title: "Creative Date Ideas for Every Season",
      content: "Discover unique and creative date ideas that will help you create memorable experiences with your partner throughout the year.",
      author: "Emma Rodriguez",
      tags: ["Date Ideas", "Dating"]
    },
    article4: {
      title: "Understanding Love Languages in Modern Relationships",
      content: "Learn about the five love languages and how understanding them can improve your relationship communication and connection.",
      author: "Dr. Lisa Thompson",
      tags: ["Relationships"]
    },
    article5: {
      title: "Mindful Dating: Being Present in Your Love Life",
      content: "Explore the concept of mindful dating and how being present can lead to more meaningful connections and better relationship outcomes.",
      author: "James Wilson",
      tags: ["Dating", "Mindful Dating"]
    },
    common: {
      by: "By",
      related: "Related Articles"
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Create blog data using translations or fallback
  const blogData = [
    {
      id: 1,
      title: isMounted ? t('blog.article1.title') : fallbackBlog.article1.title,
      image: '/blog2.png',
      content: isMounted ? t('blog.article1.content') : fallbackBlog.article1.content,
      author: isMounted ? t('blog.article1.author') : fallbackBlog.article1.author,
      tags: isMounted ? [t('tags.dating'), t('tags.relationships')] : fallbackBlog.article1.tags
    },
    {
      id: 2,
      title: isMounted ? t('blog.article2.title') : fallbackBlog.article2.title,
      image: '/blog1.png', 
      content: isMounted ? t('blog.article2.content') : fallbackBlog.article2.content,    
      author: isMounted ? t('blog.article2.author') : fallbackBlog.article2.author,
      tags: isMounted ? [t('tags.relationships')] : fallbackBlog.article2.tags
    },
    {
      id: 3,
      title: isMounted ? t('blog.article3.title') : fallbackBlog.article3.title,
      image: '/blog3.png',
      content: isMounted ? t('blog.article3.content') : fallbackBlog.article3.content,
      author: isMounted ? t('blog.article3.author') : fallbackBlog.article3.author,
      tags: isMounted ? [t('tags.dateIdeas'), t('tags.dating')] : fallbackBlog.article3.tags
    },
    {
      id: 4,
      title: isMounted ? t('blog.article4.title') : fallbackBlog.article4.title,
       image: '/blog4.png', 
      content: isMounted ? t('blog.article4.content') : fallbackBlog.article4.content,
      author: isMounted ? t('blog.article4.author') : fallbackBlog.article4.author,
      tags: isMounted ? [t('tags.relationships')] : fallbackBlog.article4.tags
    },
    {
      id: 5,
      title: isMounted ? t('blog.article5.title') : fallbackBlog.article5.title,
       image: '/blog5.png',
      content: isMounted ? t('blog.article5.content') : fallbackBlog.article5.content,
      author: isMounted ? t('blog.article5.author') : fallbackBlog.article5.author,
      tags: isMounted ? [t('tags.dating'), t('tags.mindfulDating')] : fallbackBlog.article5.tags
    }
  ];

  const [selectedBlog, setSelectedBlog] = useState(blogData[0]);

  // Update selected blog when language changes or when mounted
  useEffect(() => {
    const updatedBlog = blogData.find(blog => blog.id === selectedBlog.id);
    if (updatedBlog) {
      setSelectedBlog(updatedBlog);
    }
  }, [t, isMounted]);

  return (
    <>
      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
    <PolicyLayout>
       <AccessibilityProvider>
                                  <AccessibilityWidget/>
                                        <SEOHead title="LoveAi - Find Real Love with AI" url="https://www.loveai.co.il/" />

      <div className="pt-[72px]" style={{ background: 'white' }}>
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-[46px] pb-[46px]">
          
          {/* Title and Tags OUTSIDE the blog container */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24 mb-6">
            {/* Title on the left */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-400 leading-tight flex-1">
              {selectedBlog.title}
            </h1>
            {/* Tags on the right with spacing */}
            <div className="flex flex-wrap gap-3 lg:flex-shrink-0 lg:mt-3 lg:ml-8">
              {selectedBlog.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-sky-400 text-black px-5 py-2 rounded-full text-lg font-bold whitespace-nowrap hover:bg-black hover:text-sky-400 transition-colors duration-300 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Blog Container with Blue Border */}
          <div className="border-[20px] border-sky-400 rounded-2xl overflow-hidden bg-white">
            
            {/* Full Width Featured Image (No Border, No Padding) */}
            <div className="w-full">
              <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
                <Image
  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content Area with Sidebar - Equal Heights */}
            <div className="flex flex-col lg:flex-row gap-8 px-6 sm:px-8 pb-6 sm:pb-8 mt-8">
              
              {/* Main Article Content - Fixed Height with Scroll */}
              <div className="flex-1 lg:w-2/3">
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                  {/* Author and Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-4 border-b border-gray-200">
                    <span className="font-medium">
                      {isMounted ? t('common.by') : fallbackBlog.common.by} {selectedBlog.author}
                    </span>
                 
                  </div>
                  
                  {/* Article Content - Scrollable with Fixed Height */}
                  <div 
                    className="text-gray-700 leading-relaxed text-base sm:text-lg overflow-y-auto hide-scrollbar"
                    style={{ 
                      height: '1200px', // Fixed height for content scrolling
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none'
                    }}
                    dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                  />
                </div>
              </div>

              {/* Related Sidebar - Shows exactly 4 blogs */}
              <div className="lg:w-1/3">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {isMounted ? t('common.related') : fallbackBlog.common.related}
                  </h2>
                  
                  {/* Fixed height container with hidden scrollbar - Shows 4 blogs exactly */}
                  <div 
                    className="overflow-y-auto hide-scrollbar" 
                    style={{ 
                      height: '1200px', // Fixed height to show exactly 4 blog cards (250px each)
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none'
                    }}
                  >
                    {/* Related articles - card-style layout with proper proportions */}
                    <div className="grid grid-cols-1 gap-6">
                      {blogData.filter(blog => blog.id !== selectedBlog.id).map((blog) => (
                        <div
                          key={blog.id}
                          onClick={() => setSelectedBlog(blog)}
                          className="cursor-pointer group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-sm mx-auto w-full"
                          style={{ minHeight: '240px' }} // Fixed height per card
                        >
                          {/* Related Article Image with proper aspect ratio */}
                          <div className="relative w-full aspect-[4/3] overflow-hidden">
                            <Image
                              src={blog.image}
                              alt={blog.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          
                          {/* Card Content */}
                          <div className="p-5">
                            {/* Related Article Title */}
                            <h3 className="font-bold text-gray-900 text-lg mb-4 group-hover:text-sky-400 transition-colors leading-tight line-clamp-2">
                              {blog.title}
                            </h3>
                            
                            {/* Tags as rounded buttons */}
                            <div className="flex flex-wrap gap-2 justify-end">
                              {blog.tags?.slice(0, 2).map((tag, index) => (
                                <button
                                  key={index}
                                  className="bg-transparent border-2 border-gray-800 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-sky-400 hover:border-sky-600 hover:text-white transition-colors duration-200"
                                >
                                  {tag}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </AccessibilityProvider>
    </PolicyLayout>
    </>
  );
}

export default BlogPage;