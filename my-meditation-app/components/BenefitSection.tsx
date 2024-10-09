'use client';
import { motion } from 'framer-motion';
import BenefitCard from '@/components/BenefitCard';
import { FaBrain, FaHeart, FaLeaf } from 'react-icons/fa';

export default function BenefitSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-16"
      id="Porque"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white tracking-wide">
        Por que Meditar?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="transition-transform duration-300"
        >
          <BenefitCard
            icon={<FaBrain size={50} className="text-blue-500" />}
            title="CLAREZA MENTAL"
            description="Melhore sua concentração e foco com práticas diárias."
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="transition-transform duration-300"
        >
          <BenefitCard
            icon={<FaHeart size={50} className="text-red-500" />}
            title="BEM-ESTAR EMOCIONAL"
            description="Reduza o estresse e a ansiedade, promovendo a felicidade."
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="transition-transform duration-300"
        >
          <BenefitCard
            icon={<FaLeaf size={50} className="text-green-500" />}
            title="EQUILÍBRIO INTERIOR"
            description="Alinhe corpo e mente para uma vida mais harmoniosa."
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
