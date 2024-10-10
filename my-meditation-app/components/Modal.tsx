'use client';

import { useState } from 'react';

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary text-white px-6 py-2 font-semibold hover:bg-blue-600"
        aria-label="Saiba Mais"
      >
        Saiba Mais
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Informações Adicionais
            </h2>
            <p className="text-gray-700 mb-6">
              Aqui você pode adicionar informações detalhadas sobre seus
              serviços ou ofertas.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-black text-white px-6 py-2 font-semibold hover:bg-gray-800"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
