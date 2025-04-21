'use client';

import { useEffect } from 'react';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function ProfileModal({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (show) {
      const modal = document.getElementById('profile-modal') as HTMLDialogElement;
      modal?.showModal();
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] text-[#86C232] border border-[#86C232] rounded-xl shadow-2xl w-full max-w-4xl min-h-[300px] p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-[#86C232] text-2xl hover:text-white"
        >
          ×
        </button>

        <div className="space-y-6">
          {/* Name */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}Name</h4>
            <p className="text-white text-lg">Arjun N</p>
          </div>

          {/* About */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}About</h4>
            <p className="text-white text-lg">
              Hello! I'm Arjun, a Computer Science Engineering student passionate about AI, Machine Learning, and cutting-edge technology. With a background as a national and international Taekwondo medalist and a deep interest in developing AI-driven projects, I bring both discipline and creativity to my work. I strive to solve real-world problems through tech while pushing my limits both on the mat and in code.
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}Education</h4>
            <p className="text-white text-lg">Bachelor's in Computer Science - SIT, Tumkur</p>
          </div>

          {/* Personality */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}Personality</h4>
            <p className="text-white text-lg">
              Curious, creative, and always ready for a challenge
            </p>
          </div>

          {/* Current Role */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}Current Role</h4>
            <p className="text-white text-lg">Full Stack AI Developer Intern at StackLane</p>
          </div>

          {/* Goal */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}Goal</h4>
            <p className="text-white text-lg">
              To build innovative tech that makes a real impact
            </p>
          </div>

          {/* Fun Fact */}
          <div>
            <h4 className={`text-3xl font-semibold ${vt323.className}`}>{'> '}Fun Fact</h4>
            <p className="text-white text-lg">
              Go check out my interests to know more about me!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
