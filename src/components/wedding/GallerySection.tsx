import React, { useEffect, useRef, useState } from 'react';
import WeddingSection from './WeddingLayout';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import photo1 from '@/components/asset/photo1.jpg'; // Thay thế bằng đường dẫn thực tế của ảnh
import photo2 from '@/components/asset/photo17.jpg'; // Thay thế bằng đường dẫn thực tế của ảnh
import photo3 from '@/components/asset/photo8.jpg'; // Thay thế bằng đường dẫn thực tế của ảnh
import photo4 from '@/components/asset/photo15.jpg'; // Thay thế bằng đường dẫn thực tế của ảnh
import photo5 from '@/components/asset/photo7.jpg'; // Thay thế bằng đường dẫn thực tế của ảnh
import photo6 from '@/components/asset/photo16.jpg'; // Thay thế bằng đường dẫn thực tế của ảnh

const photos = [
  {
    id: 1,
    url: photo1,
    alt: 'Cô dâu và chú rể'
  },
  {
    id: 2,
    url: photo2,
    alt: 'Cặp đôi nắm tay'
  },
  {
    id: 3,
    url: photo3,
    alt: 'Ảnh cưới lãng mạn'
  },
  {
    id: 4,
    url: photo4,
    alt: 'Ảnh cưới ngoài trời'
  },
  {
    id: 5,
    url: photo5,
    alt: 'Cô dâu xinh đẹp'
  },
  {
    id: 6,
    url: photo6,
    alt: 'Bó hoa cưới'
  },
];

const GallerySection = () => {
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
    <WeddingSection id="gallery" className="bg-white">
      <div ref={sectionRef} className="text-center mb-16">
        <h2 className={`text-3xl md:text-4xl font-serif mb-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          Album ảnh cưới
        </h2>
        <div className={`h-0.5 w-24 bg-rose-200 mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        <p className={`mt-6 text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Những khoảnh khắc hạnh phúc của chúng tôi
        </p>
      </div>
      
      {/* Desktop Gallery Grid */}
      <div className={`hidden md:grid grid-cols-3 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 delay-${index * 100} hover:shadow-2xl`}
          >
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src={photo.url} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-lg font-semibold">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile Carousel */}
      <div className={`md:hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Carousel className="w-full max-w-md mx-auto">
          <CarouselContent>
            {photos.map((photo) => (
              <CarouselItem key={photo.id}>
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg shadow-lg aspect-square">
                    <img 
                      src={photo.url} 
                      alt={photo.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 hover:bg-black/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                      <p className="text-white text-lg font-semibold">{photo.alt}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </WeddingSection>
  );
};

export default GallerySection;
