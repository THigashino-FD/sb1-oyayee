import { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'ホーム',
  description: '未来の住宅設計を、この一つのツールで。業務効率化で生産性を最大化します。',
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <CaseStudiesSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </main>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "住宅設計SaaSツール",
            "applicationCategory": "DesignApplication",
            "offers": {
              "@type": "Offer",
              "price": "9800",
              "priceCurrency": "JPY"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1000"
            }
          })
        }}
      />
    </>
  );
}