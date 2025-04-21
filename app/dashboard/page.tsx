'use client';

import React, { useState, useCallback, memo } from 'react';
import { useRouter } from 'next/navigation';
import { VT323 } from 'next/font/google';
import WorkExperienceModal from '../../components/sections/WorkExp';
import InterestsModal from '../../components/sections/Interests';
import Connect from '../../components/sections/Connect';
import Resume from '../../components/sections/Resume';
import SkillsModal from '../../components/sections/Skills';
import ProfileModal from '../../components/sections/Profile';
import { Toaster } from 'react-hot-toast';

const vt323 = VT323({ subsets: ['latin'], weight: ['400'], display: 'swap' });

// memoized card so it only re-renders if title or onClick change
const SectionCard = memo(({ title, onClick }: { title: string; onClick?: () => void }) => (
  <>
    <div
      onClick={onClick}
      className={`
        w-full
        card bg-base-300 rounded-box grid h-20 place-items-center
        ${vt323.className} text-3xl cursor-pointer
        transform transition-all duration-200
        hover:scale-105 hover:bg-[#86C232] hover:text-black hover:shadow-xl
      `}
    >
      {title}
    </div>
    <div className="divider my-1" />
  </>
));

export default function Dashboard() {
  const router = useRouter();
  const [showWorkExp, setShowWorkExp] = useState(false);
  const [showInterests, setShowInterests] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const openProfile = useCallback(() => setShowProfile(true), []);
  const openInterests = useCallback(() => setShowInterests(true), []);
  const openWorkExp = useCallback(() => setShowWorkExp(true), []);
  const openSkills = useCallback(() => setShowSkills(true), []);
  const openResume = useCallback(() => setShowResume(true), []);
  const goToProjects = useCallback(() => router.push('/projects'), [router]);

  // group cards by column
  const columns = [
    [
      { title: 'PROFILE',     onClick: openProfile },
      { title: 'Interests',   onClick: openInterests },
    ],
    [
      { title: 'My Experiments', onClick: goToProjects },
      { title: 'WORK EXPERIENCE', onClick: openWorkExp },
    ],
    [
      { title: 'Skills',       onClick: openSkills },
      { title: 'RESUME',       onClick: openResume },
    ],
  ];

  return (
    <div className="hero bg-black min-h-screen text-white">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="hero-content flex flex-col items-center justify-center text-center w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <h1 className={`text-6xl md:text-7xl font-bold text-[#86C232] mb-10 ${vt323.className}`}>
          <span className="block text-5xl md:text-6xl">Accessing my</span>
          Terminal..<span className="blink">_</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-1">
              {col.map((card) => (
                <SectionCard key={card.title} title={card.title} onClick={card.onClick} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Connect />
        </div>
      </div>

      {/* modals */}
      <ProfileModal show={showProfile} onClose={() => setShowProfile(false)} />
      <WorkExperienceModal show={showWorkExp} onClose={() => setShowWorkExp(false)} />
      <InterestsModal show={showInterests} onClose={() => setShowInterests(false)} />
      <SkillsModal show={showSkills} onClose={() => setShowSkills(false)} />

      {/* Resume */}
      {showResume && <Resume />}
    </div>
  );
}
