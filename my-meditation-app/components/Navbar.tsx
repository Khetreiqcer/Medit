'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { FaLeaf } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-lightBackground dark:bg-gray-900 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <FaLeaf className="text-primary dark:text-secondary" size={24} />
          <h1 className="text-2xl font-bold cursor-pointer text-primary dark:text-gray-100">
            Meditação
          </h1>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            Início
          </Link>
          <Link
            href="/meditar"
            className="text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            Meditações
          </Link>
          <Link
            href="/sobre"
            className="text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            className="text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            Contato
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
