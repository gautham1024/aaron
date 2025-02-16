'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo" width={100} height={80} className="w-[100px] h-[80px]" />
         
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-gray-700 font-medium hover:text-blue-800 transition"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-blue-800 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-8 w-8 text-blue-800" />
          ) : (
            <Menu className="h-8 w-8 text-blue-800" />
          )}
        </button>

      </nav>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden shadow-lg`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="h-8 w-8 text-gray-700" />
          </button>
        </div>
        
        <nav className="flex flex-col items-center space-y-6 mt-10">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-lg font-semibold text-gray-800 hover:text-blue-800 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </nav>
      </div>

    </header>
  );
}
