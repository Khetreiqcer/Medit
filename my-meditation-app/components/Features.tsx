import { FaLeaf, FaSmile, FaCloud } from 'react-icons/fa';

export default function FeatureSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white tracking-wide">
        Nossos Recursos
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <FaLeaf size={50} className="text-green-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
            Meditação Guiada
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Aproveite uma jornada guiada para uma mente tranquila.
          </p>
        </div>
        <div className="text-center">
          <FaSmile size={50} className="text-yellow-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
            Práticas para Todos
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Sessões para todos os níveis, do iniciante ao avançado.
          </p>
        </div>
        <div className="text-center">
          <FaCloud size={50} className="text-blue-500 mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
            Acesso Online
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Medite em qualquer lugar com acesso completo online.
          </p>
        </div>
      </div>
    </section>
  );
}
