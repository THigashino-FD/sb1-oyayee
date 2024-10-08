import { CheckCircle } from 'lucide-react';

const features = [
  {
    title: '効率的な設計プロセス',
    description: 'AIを活用した設計支援で、作業時間を大幅に短縮します。',
  },
  {
    title: 'リアルタイムコラボレーション',
    description: 'チームメンバーとリアルタイムで協力し、プロジェクトを迅速に進行できます。',
  },
  {
    title: '自動レポート生成',
    description: 'クライアントへの報告書を自動で作成し、コミュニケーションを円滑化します。',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          私たちのサービスが選ばれる理由
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;