'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-lightBackground dark:bg-gray-900 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 200 200"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          >
            <motion.path
              d="M 100, 10 A 90, 90 0 1, 1 99.9, 10"
              fill="none"
              stroke="#5E81AC"
              strokeWidth="10"
              strokeLinecap="round"
              initial={{ pathLength: 1 }}
            />
            <motion.circle
              cx="130"
              cy="60"
              r="10"
              fill="#5E81AC"
              className="dark:fill-[#5E81AC]"
              initial={{ opacity: 1 }}
            />
            <motion.circle
              cx="70"
              cy="140"
              r="10"
              fill="#FF0000"
              className="dark:fill-[#FFFFFF]"
              initial={{ opacity: 1 }}
            />
          </motion.svg>
          <h1 className="text-2xl font-bold text-primary dark:text-secondary">
            Medit
          </h1>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6`}
        >
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
          <Link
            href="/login"
            className="text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            Login
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
