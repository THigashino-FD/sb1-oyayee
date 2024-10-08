import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      <Image
        src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="住宅設計現場の様子"
        layout="fill"
        objectFit="cover"
        quality={75}
        loading="eager"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 shadow-text">
          未来の住宅設計を、この一つのツールで。
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 shadow-text">
          業務効率化で生産性を最大化。今すぐ始めましょう。
        </p>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg">
          無料トライアルを始める
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;