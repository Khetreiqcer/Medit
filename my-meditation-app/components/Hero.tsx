'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = (clientY / window.innerHeight) * 2 - 1;
    setOffset({ x, y });
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
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${offset.x * 20}px, ${offset.y * 20}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300 dark:bg-blue-700 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-300 dark:bg-red-700 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-300 dark:bg-green-700 rounded-full opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <div className="bg-white/70 dark:bg-gray-800/70 p-6 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Encontre a Paz Interior
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Descubra técnicas de meditação para uma vida mais equilibrada.
          </p>
          <Link href="/meditations">
            <button className="bg-black text-white px-6 py-3 font-semibold rounded hover:bg-gray-800 transition-transform transform hover:scale-105">
              Comece Agora
            </button>
          </Link>
        </div>
      </div>
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-10 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
      >
        <FaChevronDown size={32} />
      </button>
    </section>
  );
}
