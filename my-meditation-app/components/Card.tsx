'use client';
import { motion } from 'framer-motion';
export default function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="border border-gray-200 p-6"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}
