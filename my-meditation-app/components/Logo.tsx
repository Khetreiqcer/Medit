'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
      >
        <motion.path
          d="M 100, 10 A 90, 90 0 1, 1 99.9, 10"
          fill="none"
          stroke="#5E81AC"
          strokeWidth="15"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
        />
      </motion.svg>
    </div>
  );
}
