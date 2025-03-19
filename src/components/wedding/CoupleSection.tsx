import React, { useEffect, useRef, useState } from 'react';
import WeddingSection from './WeddingLayout';
import { Heart } from 'lucide-react';
import groomImage from '@/components/assets/photo5.jpg'; // Thay thế bằng đường dẫn thực tế của ảnh chú rể
import brideImage from '@/components/assets/photo4.jpg'; // Thay thế bằng đường dẫn thực tế của ảnh cô dâu

const CoupleSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <WeddingSection id="couple" className="bg-white relative">
      <div ref={sectionRef} className="text-center mb-20">
        <h2 className={`text-3xl md:text-4xl font-serif mb-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          Cặp đôi hạnh phúc
        </h2>
        <div className={`h-0.5 w-24 bg-rose-200 mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className={`order-1 md:order-1 text-center md:text-right transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
          <h3 className="text-2xl font-serif text-gray-800 mb-2">Nguyễn Văn Trọng</h3>
          <p className="text-gray-600 italic mb-4">Chú rể</p>
          <p className="text-gray-700 mb-6 max-w-md mx-auto md:ml-auto md:mr-0">
            Sinh ra và lớn lên tại Hà Nội, Trọng là một người đam mê kinh doanh và luôn mong muốn xây dựng một gia đình hạnh phúc. Anh là người ấm áp, chu đáo và đặc biệt biết cách làm Mây mỉm cười mỗi ngày.
          </p>
        </div>
        
        <div className={`order-2 md:order-2 flex justify-center items-center mb-10 md:mb-0`}>
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="absolute -inset-2 rounded-full border-2 border-dashed border-rose-200 animate-spin-slow"></div>
            <div className="rounded-full overflow-hidden h-60 w-60 md:h-72 md:w-72 border-4 border-white shadow-lg">
              <img 
                src={groomImage} // Sử dụng biến đã import
                alt="Chú rể" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className={`order-4 md:order-3 flex justify-center items-center mb-10 md:mb-0`}>
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="absolute -inset-2 rounded-full border-2 border-dashed border-rose-200 animate-spin-slow"></div>
            <div className="rounded-full overflow-hidden h-60 w-60 md:h-72 md:w-72 border-4 border-white shadow-lg">
              <img 
                src={brideImage} // Sử dụng biến đã import
                alt="Cô dâu" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className={`order-3 md:order-4 text-center md:text-left transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
          <h3 className="text-2xl font-serif text-gray-800 mb-2">Nguyễn Thị Hồng Mây</h3>
          <p className="text-gray-600 italic mb-4">Cô dâu</p>
          <p className="text-gray-700 mb-6 max-w-md mx-auto md:mr-auto md:ml-0">
            Mây tốt nghiệp Đại học Kinh tế Quốc dân, là một người sống tình cảm, yêu thích nghệ thuật và âm nhạc. Cô luôn mang đến niềm vui và sự ngọt ngào cho mọi người xung quanh, đặc biệt là Trọng.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center mt-16">
        <div className={`text-center max-w-2xl transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-16 md:w-24 bg-rose-200"></div>
            <Heart className="h-6 w-6 text-rose-400 fill-rose-400" />
            <div className="h-[1px] w-16 md:w-24 bg-rose-200"></div>
          </div>
          <h3 className="text-2xl font-serif text-gray-800 mb-4">Câu chuyện tình yêu của chúng tôi</h3>
          <p className="text-gray-700">
            Chúng tôi gặp nhau lần đầu tại một buổi hòa nhạc vào mùa thu năm 2023. 
            Qua lời giới thiệu của bạn bè chung, chúng tôi đã có cơ hội trò chuyện và nhanh chóng nhận ra sự đồng điệu. 
            Sau 1 năm bên nhau, chia sẻ những khoảnh khắc đáng nhớ, chúng tôi quyết định gắn kết cuộc đời mình với nhau.
          </p>
        </div>
      </div>
    </WeddingSection>
  );
};

export default CoupleSection;
