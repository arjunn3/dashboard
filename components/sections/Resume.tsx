'use client';

import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

export default function Resume() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const link = document.createElement('a');
    link.href = '/ArjunN_resume.pdf';
    link.download = 'ArjunN_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Downloading resume...');
  }, []);

  return null;
}