import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src="/images/black.jpg" // Certifique-se de que o caminho da imagem está correto
        alt="Meditação em Natureza"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black dark:from-gray-900 dark:via-transparent dark:to-gray-900 opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        {/* Background com efeito sofisticado */}
        <div className="bg-gray-800/30 dark:bg-gray-800/30 backdrop-blur-md p-8 rounded-2xl shadow-lg inline-block">
          <h1 className="text-5xl text-gray-600 dark:text-gray-100 md:text-7xl font-bold mb-6">
            Encontre a Paz Interior
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Descubra técnicas de meditação para uma vida mais equilibrada.
          </p>
          <Link href="/meditations">
            <button className="bg-primary text-white px-8 py-3 font-semibold hover:bg-blue-700 transition">
              Comece Agora
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
