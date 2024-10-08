import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'スタンダード',
    price: '¥9,800',
    features: [
      '基本的な設計ツール',
      'クラウドストレージ 50GB',
      'チームコラボレーション（最大5人）',
      '基本サポート',
    ],
  },
  {
    name: 'プロフェッショナル',
    price: '¥19,800',
    features: [
      '高度な設計ツール',
      'クラウドストレージ 200GB',
      'チームコラボレーション（無制限）',
      '優先サポート',
      'AIアシスタント',
    ],
  },
  {
    name: 'エンタープライズ',
    price: 'お問い合わせ',
    features: [
      'カスタム設計ツール',
      'クラウドストレージ 1TB',
      'チームコラボレーション（無制限）',
      '24/7専門サポート',
      'AIアシスタント（高度な機能）',
      'オンサイトトレーニング',
    ],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">料金プラン</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/月</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                このプランを選択
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;