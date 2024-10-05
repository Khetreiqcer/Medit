// app/page.tsx
import BenefitCard from '@/components/BenefitCard';
import Card from '../components/Card';
import Image from 'next/image';
import { FaBrain, FaHeart, FaLeaf } from 'react-icons/fa';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Newsletter from '@/components/News';
import Modal from '@/components/Modal';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      {/* Seção Hero Melhorada */}
      <Hero />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Por que Meditar?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard
            icon={<FaBrain size={50} />}
            title="Clareza Mental"
            description="Melhore sua concentração e foco com práticas diárias."
          />
          <BenefitCard
            icon={<FaHeart size={50} />}
            title="Bem-Estar Emocional"
            description="Reduza o estresse e a ansiedade, promovendo a felicidade."
          />
          <BenefitCard
            icon={<FaLeaf size={50} />}
            title="Equilíbrio Interior"
            description="Alinhe corpo e mente para uma vida mais harmoniosa."
          />
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          O que nossos usuários dizem
        </h2>
        <TestimonialCarousel />
      </section>
      <Newsletter />
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Quer saber mais?</h2>
        <Modal />
      </section>
      <Footer />
    </div>
  );
}
