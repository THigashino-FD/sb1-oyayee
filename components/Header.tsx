"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'ホーム', href: '#' },
    { name: 'サービス紹介', href: '#features' },
    { name: '導入事例', href: '#case-studies' },
    { name: '料金プラン', href: '#pricing' },
    { name: 'お問い合わせ', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
          Logo
        </Link>

        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`hover:text-blue-600 hover:underline ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 px-4 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;