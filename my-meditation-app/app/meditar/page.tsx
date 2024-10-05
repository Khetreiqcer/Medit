'use client';
import { useEffect, useState } from 'react';

interface Meditation {
  id: string;
  title: string;
  description: string;
  duration: number;
}

export default function MeditationsPage() {
  const [meditations, setMeditations] = useState<Meditation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeditations = async () => {
      try {
        const response = await fetch('http://seu-backend-url/api/meditations');
        if (!response.ok) {
          throw new Error('Erro ao buscar meditações');
        }
        const data = await response.json();
        setMeditations(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMeditations();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Carregando meditações...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-600">Erro: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Meditações Disponíveis
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {meditations.map((meditation) => (
          <div
            key={meditation.id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {meditation.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {meditation.description}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Duração: {meditation.duration} minutos
            </p>
            <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 w-full">
              Iniciar Meditação
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
