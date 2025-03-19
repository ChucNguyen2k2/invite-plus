
import React, { useEffect, useRef, useState } from 'react';
import WeddingSection from './WeddingLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Send, MessageSquare } from 'lucide-react';

const initialWishes = [
  {
    id: 1,
    name: 'Anh Tuấn',
    message: 'Chúc mừng hai bạn! Mong rằng cuộc sống hôn nhân sẽ tràn đầy niềm vui và hạnh phúc!',
    date: new Date('2024-10-10')
  },
  {
    id: 2,
    name: 'Chị Hà',
    message: 'Chúc hai bạn trăm năm hạnh phúc! Rất tiếc mình không thể tham dự được, nhưng sẽ gửi quà sau nhé!',
    date: new Date('2024-09-10')
  },
  {
    id: 3,
    name: 'Gia đình nhà Minh',
    message: 'Chúc mừng cháu và vợ! Chúc hai cháu sống với nhau đến đầu bạc răng long, con đàn cháu đống!',
    date: new Date('2024-10-31')
  }
];

const WishesSection = () => {
  const [wishes, setWishes] = useState(initialWishes);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      toast({
        title: "Thông tin chưa đầy đủ",
        description: "Vui lòng nhập tên và lời chúc của bạn",
        variant: "destructive"
      });
      return;
    }
    
    const newWish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: new Date()
    };
    
    setWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
    
    toast({
      title: "Cảm ơn bạn!",
      description: "Lời chúc của bạn đã được gửi đến cô dâu và chú rể.",
    });
  };

  return (
    <WeddingSection id="wishes" className="bg-rose-50">
      <div ref={sectionRef} className="text-center mb-16">
        <h2 className={`text-3xl md:text-4xl font-serif mb-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          Lời chúc phúc
        </h2>
        <div className={`h-0.5 w-24 bg-rose-200 mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        <p className={`mt-6 text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Hãy để lại những lời chúc tốt đẹp nhất của bạn cho cặp đôi
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10">
        {/* Form gửi lời chúc */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-serif text-gray-800 mb-6 flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-rose-400" />
              Gửi lời chúc của bạn
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Tên của bạn
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên của bạn"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Lời chúc
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Nhập lời chúc của bạn cho cặp đôi"
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Gửi lời chúc
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Hiển thị lời chúc */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="bg-white p-8 rounded-lg shadow-md max-h-[500px] overflow-y-auto">
            <h3 className="text-xl font-serif text-gray-800 mb-6">Lời chúc từ bạn bè & gia đình</h3>
            
            <div className="space-y-6">
              {wishes.map((wish) => (
                <div key={wish.id} className="border-b border-gray-100 pb-4 last:border-none">
                  <p className="font-medium text-gray-800">{wish.name}</p>
                  <p className="text-gray-600 mt-1">{wish.message}</p>
                  <p className="text-gray-400 text-sm mt-2">
                    {wish.date.toLocaleDateString('vi-VN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WeddingSection>
  );
};

export default WishesSection;
