'use client';

import { useState, useEffect } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      // Anunciar o término do timer para leitores de tela
      const message = 'Tempo esgotado!';
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
      } else {
        console.log(message); // Caso a síntese de voz não seja suportada
      }
    }
    return () => clearTimeout(timer);
  }, [isActive, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Space' || event.code === 'Enter') {
      setIsActive(!isActive);
      event.preventDefault(); // Previne o comportamento padrão da tecla
    }
  };

  return (
    <div className="text-center" onKeyDown={handleKeyPress} tabIndex={0}>
      <div className="text-6xl font-bold" aria-live="assertive">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <button
        onClick={() => setIsActive(!isActive)}
        className="mt-4 bg-black text-white px-6 py-2 font-semibold hover:bg-gray-800"
        aria-label="Iniciar/Pausar" // Descrição mais completa
      >
        {isActive ? 'Pausar' : 'Iniciar'}
      </button>
    </div>
  );
}
