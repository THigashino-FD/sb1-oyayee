"use client"

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'サービスの無料トライアル期間はありますか？',
    answer: 'はい、14日間の無料トライアル期間をご用意しています。この期間中に、すべての機能を制限なくお試しいただけます。',
  },
  {
    question: 'プランの変更や解約はいつでも可能ですか？',
    answer: 'はい、プランの変更や解約はいつでも可能です。変更は即時反映され、解約の場合は次の請求サイクルから適用されます。',
  },
  {
    question: 'データのセキュリティはどのように確保されていますか？',
    answer: '最新の暗号化技術を使用し、定期的なセキュリティ監査を実施しています。また、データセンターは24時間体制で監視されています。',
  },
  {
    question: 'カスタマーサポートの対応時間は？',
    answer: '平日の9:00から18:00まで、電話とメールでのサポートを提供しています。プロフェッショナルプラン以上では、優先サポートをご利用いただけます。',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">よくあるご質問</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white rounded-b-lg shadow-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;