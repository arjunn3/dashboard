'use client';

import React from 'react';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

interface InterestsProps {
  show: boolean;
  onClose: () => void;
}

const Interests: React.FC<InterestsProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div
        className={`bg-[#1a1a1a] border border-[#86C232] rounded-lg shadow-xl w-full max-w-2xl min-h-[260px] p-10 relative ${vt323.className}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-[#86C232] hover:text-white text-2xl"
        >
          ×
        </button>
        <p className="text-2xl text-[#e3d7b5] leading-relaxed whitespace-pre-wrap">
          <span className="text-[#86C232] text-3xl">&gt;</span>{' '}
          I'm all about tech—curious, hands-on, and always exploring what's next. I game hard, ride fast, read thrillers that keep me up all night, and love random trips. Oh, and I totally dismantle electronics for fun — no reason, just vibes
          <span className="blink">_</span>
        </p>
      </div>
    </div>
  );
};

export default Interests;
