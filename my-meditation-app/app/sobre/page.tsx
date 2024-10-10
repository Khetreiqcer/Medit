export const metadata = {
  title: 'Sobre Nós - Meditação Moderna',
  description: 'Saiba mais sobre a Meditação Moderna e nossa missão.',
};

export default function Sobre() {
  return (
    <div className="container mx-auto py-40 px-4 lg:px-8">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        Sobre Nós
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
        A Meditação Moderna é dedicada a ajudar indivíduos a encontrar paz
        interior por meio de técnicas contemporâneas de meditação.
      </p>
      <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
        Nossa missão é tornar a prática da meditação acessível e relevante para
        todos, integrando métodos tradicionais com abordagens modernas.
      </p>
    </div>
  );
}
