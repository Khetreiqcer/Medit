// components/Timer.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [isActive, timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center">
      <div className="text-6xl font-bold">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
      <button
        onClick={() => setIsActive(!isActive)}
        className="mt-4 bg-black text-white px-6 py-2 font-semibold hover:bg-gray-800"
      >
        {isActive ? 'Pausar' : 'Iniciar'}
      </button>
    </div>
  );
}
