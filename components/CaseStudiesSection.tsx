"use client"

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: '山田 太郎',
    company: 'ABC住宅株式会社',
    position: '設計部長',
    comment: 'このツールを導入してから、設計プロセスが劇的に効率化されました。チームの生産性が50%以上向上し、クライアントの満足度も大幅に上がりました。',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    name: '佐藤 花子',
    company: 'XYZホーム',
    position: '営業マネージャー',
    comment: '顧客へのプレゼンテーションが格段に向上しました。3Dビジュアライゼーション機能のおかげで、成約率が30%増加しています。',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
];

const CaseStudiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="case-studies" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          導入事例とお客様の声
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600">{testimonials[currentIndex].company} - {testimonials[currentIndex].position}</p>
              </div>
            </div>
            <p className="text-lg mb-6">"{testimonials[currentIndex].comment}"</p>
            <div className="flex justify-between">
              <Button variant="outline" onClick={prevTestimonial}>
                <ChevronLeft className="mr-2" /> 前へ
              </Button>
              <Button variant="outline" onClick={nextTestimonial}>
                次へ <ChevronRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;