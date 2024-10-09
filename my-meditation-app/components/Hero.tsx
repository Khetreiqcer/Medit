'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [phraseIndex, setPhraseIndex] = useState(0);

  const phrases = [
    'Respire fundo e encontre seu equilíbrio.',
    'Mente tranquila, vida equilibrada.',
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = (clientY / window.innerHeight) * 2 - 1;
    setOffset({ x, y });

    const newPhraseIndex = x > 0 ? 0 : 1;
    if (newPhraseIndex !== phraseIndex) {
      setPhraseIndex(newPhraseIndex);
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('Porque');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${offset.x * 10}px, ${offset.y * 10}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-200 dark:bg-blue-700 border-2 border-transparent opacity-40 transform transition-transform duration-1000 ease-out"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-red-200 dark:bg-red-600 border-2 border-transparent opacity-40 transform transition-transform duration-1000 ease-out"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-green-200 dark:bg-green-800 border-2 border-transparent opacity-40 transform transition-transform duration-1000 ease-out"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 max-w-2xl mx-auto"
      >
        <div className="bg-white/70 dark:bg-gray-800/70 p-12 rounded-none shadow-md backdrop-blur-md">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-sans tracking-wide">
            Encontre a Paz Interior
          </h1>
          <motion.p
            key={phraseIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-10 tracking-wider leading-relaxed"
          >
            "{phrases[phraseIndex]}"
          </motion.p>
          <Link href="/meditations">
            <button className="bg-gray-900 text-white px-8 py-4 font-medium uppercase rounded-none shadow hover:bg-gray-700 transition-all duration-300">
              Comece Agora
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.button
        onClick={scrollToNextSection}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
      >
        <FaChevronDown size={32} />
      </motion.button>
    </section>
  );
}
