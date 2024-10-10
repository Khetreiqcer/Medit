'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const scrollToNextSection = () => {
  const nextSection = document.getElementById('Porque');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Hero() {
  return (
    <section className="relative h-[100vh] flex flex-col items-center justify-center pt-8 light:bg-lightBackground dark:bg-darkBackground overflow-hidden">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 200 200"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      >
        <motion.path
          d="M 100, 10 A 90, 90 0 1, 1 99.9, 10"
          fill="none"
          stroke="#5E81AC"
          strokeWidth="20"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="130"
          cy="60"
          r="20"
          fill="#5E81AC"
          className="dark:fill-[#5E81AC]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        />
        <motion.circle
          cx="70"
          cy="140"
          r="20"
          fill="#FF0000"
          className="dark:fill-[#FFFFFF]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        />
      </motion.svg>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Encontre a Paz Interior
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Descubra técnicas de meditação para uma vida mais equilibrada.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="text-center"
      >
        <Link href="/meditar">
          <button className="bg-primary px-6 py-3 font-semibold rounded-full hover:bg-primary-dark transition-transform transform hover:scale-105">
            Medite Agora
          </button>
        </Link>
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
