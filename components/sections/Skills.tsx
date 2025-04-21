'use client';

import { useEffect } from 'react';
import { VT323 } from 'next/font/google';
import { FaJava, FaReact, FaDocker, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiC, SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql, SiSupabase, SiHono } from 'react-icons/si';

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function SkillsModal({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (show) {
      const modal = document.getElementById('skills-modal') as HTMLDialogElement;
      modal?.showModal();
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] text-[#86C232] border border-[#86C232] rounded-xl shadow-2xl w-full max-w-xl min-h-[350px] p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-[#86C232] text-2xl hover:text-white"
        >
          ×
        </button>

        {/* Tech Skills */}
        <div className="mb-6">
          <h4 className={`text-2xl mb-4 ${vt323.className}`}>{'> '}Tech Skills</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
            {[
              { icon: <SiC className="text-white" />, name: 'C' },
              { icon: <FaJava className="text-white" />, name: 'Java' },
              { icon: <SiTypescript className="text-white" />, name: 'TypeScript' },
              { icon: <SiHono className="text-white" />, name: 'Hono APIs' },
              { icon: <SiPostgresql className="text-white" />, name: 'PostgreSQL' },
              { icon: <FaDocker className="text-white" />, name: 'Docker' },
              { icon: <FaHtml5 className="text-white" />, name: 'HTML' },
              { icon: <FaCss3Alt className="text-white" />, name: 'CSS' },
              { icon: <SiJavascript className="text-white" />, name: 'JavaScript' },
              { icon: <FaReact className="text-white" />, name: 'React' },
              { icon: <FaGithub className="text-white" />, name: 'GitHub' },
              { icon: <SiTailwindcss className="text-white" />, name: 'Tailwind' },
              { icon: <SiNextdotjs className="text-white" />, name: 'Next.js' },
              { icon: <FaNodeJs className="text-white" />, name: 'Node.js' },
              { icon: <SiSupabase className="text-white" />, name: 'Supabase' },
              { icon: <div className="text-lg font-bold text-white">DBMS</div>, name: 'DBMS' },
              { icon: <div className="text-lg font-bold text-white">AZURE</div>, name: 'AZURE' },
              { icon: <div className="text-lg font-bold text-white">OS</div>, name: 'OS' },
            ].map(({ icon, name }) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <div className="text-3xl">{icon}</div>
                <div className="text-sm">{name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h4 className={`text-2xl mb-4 ${vt323.className}`}>{'> '}Soft Skills</h4>
          <div className="flex flex-wrap gap-4">
            {[
              'Hardworking',
              'Creative',
              'Analytical Thinking',
              'Communication',
              'Problem-Solving',
              'Time management',
              'Curious',
            ].map((skill) => (
              <div key={skill} className="badge badge-outline text-black bg-[#86C232] text-sm p-4">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
