'use client';
import { useEffect, useState } from 'react';

interface Meditation {
  titulo: string;
  descricao: string;
  categoria: string;
  duracao: number;
  arquivoAudio: string;
}

export default function MeditationsPage() {
  const [meditations, setMeditations] = useState<Meditation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeditations = async () => {
      try {
        const response = await fetch('http://localhost:3800/meditations');
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
            key={meditation.titulo} // Use a unique key like 'titulo'
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {meditation.titulo}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {meditation.descricao}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Categoria: {meditation.categoria}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Duração: {meditation.duracao} minutos
            </p>
            {/* Placeholder for audio player */}
            <audio controls className="w-full mt-4">
              <source src={meditation.arquivoAudio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}
