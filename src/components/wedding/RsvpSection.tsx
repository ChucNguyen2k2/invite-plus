
import React, { useEffect, useRef, useState } from 'react';
import WeddingSection from './WeddingLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { CalendarCheck, Users, Heart } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
  email: z.string().email('Email không hợp lệ'),
  phone: z.string().min(10, 'Số điện thoại phải có ít nhất 10 số'),
  attendance: z.enum(['yes', 'no']),
  guests: z.string().refine(
    (val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 5, 
    { message: 'Số khách đi cùng phải từ 0-5 người' }
  ),
});

type FormValues = z.infer<typeof formSchema>;

const RsvpSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      attendance: 'yes',
      guests: '0',
    },
  });
  
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
  
  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    
    toast({
      title: "Đã gửi xác nhận thành công!",
      description: "Cảm ơn bạn đã xác nhận tham dự. Chúng tôi rất mong được gặp bạn trong ngày trọng đại!",
    });
    
    setIsSubmitted(true);
    form.reset();
  };

  return (
    <WeddingSection id="rsvp" className="bg-white">
      <div ref={sectionRef} className="text-center mb-16">
        <h2 className={`text-3xl md:text-4xl font-serif mb-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          Xác nhận tham dự
        </h2>
        <div className={`h-0.5 w-24 bg-rose-200 mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
        <p className={`mt-6 text-gray-700 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Vui lòng xác nhận sự tham dự của bạn trước ngày 15/10/2024
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className={`bg-white border border-rose-100 p-8 md:p-10 rounded-lg shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {!isSubmitted ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Họ và tên</FormLabel>
                      <FormControl>
                        <Input placeholder="Nhập họ và tên của bạn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Số điện thoại</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập số điện thoại" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="attendance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bạn sẽ tham dự?</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn phản hồi" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="yes">Có, tôi sẽ tham dự</SelectItem>
                            <SelectItem value="no">Rất tiếc, tôi không thể tham dự</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Số người đi cùng</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                          disabled={form.watch('attendance') === 'no'}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn số người" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="0">0 người</SelectItem>
                            <SelectItem value="1">1 người</SelectItem>
                            <SelectItem value="2">2 người</SelectItem>
                            <SelectItem value="3">3 người</SelectItem>
                            <SelectItem value="4">4 người</SelectItem>
                            <SelectItem value="5">5 người</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white py-6"
                  size="lg"
                >
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Gửi xác nhận
                </Button>
              </form>
            </Form>
          ) : (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-100 rounded-full mb-6">
                <Heart className="h-10 w-10 text-rose-500 fill-rose-500" />
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Cảm ơn bạn!</h3>
              <p className="text-gray-600 mb-8">
                Chúng tôi đã nhận được xác nhận tham dự của bạn. 
                Rất mong được gặp bạn trong ngày trọng đại của chúng tôi!
              </p>
              <Button 
                variant="outline" 
                className="border-rose-200 text-rose-500 hover:bg-rose-50"
                onClick={() => setIsSubmitted(false)}
              >
                Gửi xác nhận khác
              </Button>
            </div>
          )}
        </div>
      </div>
    </WeddingSection>
  );
};

export default RsvpSection;
