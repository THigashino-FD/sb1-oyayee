import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Logo</h2>
            <p className="text-sm">
              未来の住宅設計を、この一つのツールで。
              業務効率化で生産性を最大化します。
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400">ホーム</Link></li>
              <li><Link href="#features" className="hover:text-blue-400">サービス紹介</Link></li>
              <li><Link href="#case-studies" className="hover:text-blue-400">導入事例</Link></li>
              <li><Link href="#pricing" className="hover:text-blue-400">料金プラン</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400">お問い合わせ</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">法的情報</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-blue-400">利用規約</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400">プライバシーポリシー</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">フォローする</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook /></a>
              <a href="#" className="hover:text-blue-400"><Twitter /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin /></a>
              <a href="#" className="hover:text-blue-400"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © 2024 会社名. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;