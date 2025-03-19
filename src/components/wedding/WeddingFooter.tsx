
import React from 'react';
import { Heart } from 'lucide-react';

const WeddingFooter = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white py-16 border-t border-rose-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-serif text-rose-500 mb-2">Minh & Hương</h3>
          <p className="text-gray-500">26.10.2024</p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-rose-500 transition-colors">
              Trang chủ
            </button>
            <button onClick={() => scrollToSection('couple')} className="text-gray-600 hover:text-rose-500 transition-colors">
              Cặp đôi
            </button>
            <button onClick={() => scrollToSection('timeline')} className="text-gray-600 hover:text-rose-500 transition-colors">
              Sự kiện
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-rose-500 transition-colors">
              Album ảnh
            </button>
            <button onClick={() => scrollToSection('wishes')} className="text-gray-600 hover:text-rose-500 transition-colors">
              Lời chúc
            </button>
            <button onClick={() => scrollToSection('rsvp')} className="text-gray-600 hover:text-rose-500 transition-colors">
              RSVP
            </button>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm flex flex-col md:flex-row items-center justify-center gap-2">
          <span>© 2024 Văn Trọng & Hồng Mây</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center">
            Thiết kế với <Heart size={14} className="mx-1 text-rose-400 fill-rose-400" /> bởi ChucDEV
          </span>
        </div>
      </div>
    </footer>
  );
};

export default WeddingFooter;
