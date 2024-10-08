import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_JP, Roboto } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: '未来の住宅設計を、この一つのツールで。',
    template: '%s | 住宅業界向けSaaSサービス'
  },
  description: '住宅業界向けSaaSサービス - 業務効率化で生産性を最大化',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: '未来の住宅設計を、この一つのツールで。',
    description: '住宅業界向けSaaSサービス - 業務効率化で生産性を最大化',
    url: 'https://example.com',
    siteName: '会社名',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '未来の住宅設計を、この一つのツールで。',
    description: '住宅業界向けSaaSサービス - 業務効率化で生産性を最大化',
    images: ['https://example.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} ${roboto.className}`}>{children}</body>
    </html>
  );
}