
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/wedding/HeroSection';
import CoupleSection from '@/components/wedding/CoupleSection';
import TimelineSection from '@/components/wedding/TimelineSection';
import GallerySection from '@/components/wedding/GallerySection';
import WishesSection from '@/components/wedding/WishesSection';
import RsvpSection from '@/components/wedding/RsvpSection';
import WeddingFooter from '@/components/wedding/WeddingFooter';

const Wedding = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-rose-50/50 text-gray-800 font-sans overflow-x-hidden">
      <HeroSection />
      <CoupleSection />
      <TimelineSection />
      <GallerySection />
      <WishesSection />
      <RsvpSection />
      <WeddingFooter />
      
      {/* Scroll to top button */}
      <div 
        className={`fixed bottom-6 right-6 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Button 
          onClick={scrollToTop}
          className="rounded-full shadow-lg bg-rose-500 hover:bg-rose-600 text-white p-3 h-12 w-12 flex items-center justify-center"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Wedding;
