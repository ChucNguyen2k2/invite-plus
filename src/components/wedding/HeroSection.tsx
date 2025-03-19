
import React, { useEffect, useState, useRef } from 'react';
import { Heart, Calendar, ArrowDown, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import photobg from '@/components/asset/photo6.jpg';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const namesRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'couple', label: 'Cặp đôi' },
    { id: 'timeline', label: 'Sự kiện' },
    { id: 'gallery', label: 'Album ảnh' },
    { id: 'wishes', label: 'Lời chúc' },
    { id: 'rsvp', label: 'Tham dự' },
  ];

  // Parallax effect for names
  useEffect(() => {
    if (namesRef.current) {
      namesRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
  }, [scrollY]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Floating navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <NavigationMenu className="glass-card px-4 py-1 rounded-full shadow-lg bg-white/70 backdrop-blur-sm">
          <NavigationMenuList className="space-x-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink
                  className="text-rose-600 hover:text-rose-800 px-3 py-2 text-sm font-medium transition-colors rounded-full hover:bg-rose-50"
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Decorative elements */}
      <div className={`absolute top-16 right-16 text-rose-200 opacity-0 ${isLoaded ? 'animate-fade-in animate-delay-700' : ''}`}>
        <Sparkles className="h-16 w-16" />
      </div>
      <div className={`absolute bottom-36 left-20 text-rose-200 opacity-0 ${isLoaded ? 'animate-fade-in animate-delay-800' : ''}`}>
        <Sparkles className="h-12 w-12" />
      </div>

      {/* Parallax Background Images - Layered for depth */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url('${photobg}')`,
          transform: `translateY(${scrollY * 0.3}px)`,
          filter: 'brightness(0.8)',
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-blue-900/30"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Content */}
      <div className="container relative z-10 text-center px-4 pt-16">
        <div
          className={cn(
            "inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-rose-500 mb-6 scale-0",
            isLoaded ? "animate-scale-in animate-delay-500" : ""
          )}
        >
          <Calendar className="h-4 w-4" />
          <span className="font-medium">02.11.2024</span>
        </div>

        <div className="relative">
          <h1
            ref={namesRef}
            className={`text-6xl md:text-7xl font-serif font-light text-white mb-6 opacity-0 ${isLoaded ? 'animate-fade-in' : ''}`}
            style={{
              textShadow: "0 0 20px rgba(159, 11, 11, 0.3), 0 0 60px rgba(255,255,255,0.2)"
            }}
          >
            Văn Trọng & Hồng Mây
          </h1>

          {/* Decorative elements around names */}
          <div className={`absolute -top-10 -left-8 md:-left-16 text-rose-300 opacity-0 ${isLoaded ? 'animate-fade-in animate-delay-300' : ''}`}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <div className={`absolute -bottom-10 -right-8 md:-right-16 text-rose-300 opacity-0 ${isLoaded ? 'animate-fade-in animate-delay-400' : ''}`}>
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 md:gap-8 mb-12 opacity-0 animate-fade-in animate-delay-300">
          <div className="h-[1px] w-16 md:w-32 bg-white/70"></div>
          <Heart className="h-8 w-8 text-rose-300 fill-rose-300 animate-pulse" />
          <div className="h-[1px] w-16 md:w-32 bg-white/70"></div>
        </div>

        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-400 font-serif">
          Trân trọng kính mời bạn tới dự buổi lễ thành hôn của chúng tôi ❤️❤️❤️
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Button
            className="rounded-full bg-rose-500 hover:bg-rose-600 text-white border-none shadow-md opacity-0 animate-fade-in animate-delay-500 px-8 py-6"
            size="lg"
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Xác nhận tham dự
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-red text-red-500 bg-white hover:bg-white/80 transition-all duration-300 opacity-0 animate-fade-in animate-delay-600 px-8"
            size="lg"
            onClick={() => document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Xem lời mời
          </Button>

        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-700">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full animate-bounce"
            onClick={() => document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
