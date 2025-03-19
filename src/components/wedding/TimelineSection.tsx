
import React, { useEffect, useRef, useState } from 'react';
import WeddingSection from './WeddingLayout';
import { Calendar, Clock, MapPin, Church, GlassWater } from 'lucide-react';
import { Button } from '../ui/button';

const TimelineSection = () => {
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
    <WeddingSection id="timeline" className="bg-rose-50">
      <div ref={sectionRef} className="text-center mb-16">
        <h2 className={`text-3xl md:text-4xl font-serif mb-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          Sự kiện cưới
        </h2>
        <div className={`h-0.5 w-24 bg-rose-200 mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        <p className={`mt-6 text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Chúng tôi rất vui mừng được chia sẻ những khoảnh khắc đặc biệt này cùng bạn
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-20">
        {/* Lễ ăn hỏi */}
        <div className={`bg-white p-8 rounded-lg shadow-md transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-full bg-rose-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto md:mx-0">
            <Church className="h-8 w-8 text-rose-500" />
          </div>

          <h3 className="text-2xl font-serif text-center md:text-left text-gray-800 mb-6">Lễ ăn hỏi</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-rose-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Ngày</p>
                <p className="text-gray-600">Thứ bảy, 01 tháng 11, 2024</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-rose-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Thời gian</p>
                <p className="text-gray-600">8:00 - 10:30</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-rose-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Địa điểm</p>
                <p className="text-gray-600">Nhà cô dâu Hồng Mây</p>
                <p className="text-gray-600">Số 1, Ngõ 1, Xóm Trầm, Liên Châu, Thanh Oai, Hà Nội</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button
              variant="outline"
              className="w-full border-rose-200 text-rose-500 hover:bg-rose-50"
              onClick={() => window.open('https://maps.app.goo.gl/YDgZow8PnesmJTeN6', '_blank')}
            >
              <MapPin className="mr-2 h-4 w-4" />
              Xem trên Google Maps
            </Button>
          </div>
        </div>

        {/* Tiệc cưới */}
        <div className={`bg-white p-8 rounded-lg shadow-md transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="rounded-full bg-rose-100 w-16 h-16 flex items-center justify-center mb-6 mx-auto md:mx-0">
            <GlassWater className="h-8 w-8 text-rose-500" />
          </div>

          <h3 className="text-2xl font-serif text-center md:text-left text-gray-800 mb-6">Tiệc cưới</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <Calendar className="h-5 w-5 text-rose-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Ngày</p>
                <p className="text-gray-600">Chủ nhật, 02 tháng 11, 2024</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-rose-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Thời gian</p>
                <p className="text-gray-600">10:00 - 14:00</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-rose-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium">Địa điểm</p>
                <p className="text-gray-600">Nhà chú rể Văn Trọng </p>
                <p className="text-gray-600">Nhà 1, Nghiêm Xuyên, Thường Tín, Hà Nội</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button
              variant="outline"
              className="w-full border-rose-200 text-rose-500 hover:bg-rose-50"
              onClick={() => window.open('https://maps.app.goo.gl/WnBeh9uRqUpMA4G18', '_blank')}
            >
              <MapPin className="mr-2 h-4 w-4" />
              Xem trên Google Maps
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className={`aspect-video rounded-lg overflow-hidden shadow-lg transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13500.025622946592!2d105.84077260000001!3d20.81136585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135b5334163434b%3A0x3f7c512f8f535a49!2zQsOhbmggR2nDsiBOw7NuZyBUdeG6pW4gxJBp4buHcA!5e1!3m2!1svi!2s!4v1742401486698!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Wedding Venue Map"
          ></iframe>
        </div>
      </div>
    </WeddingSection>
  );
};

export default TimelineSection;
