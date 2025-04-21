'use client';

import { useState } from 'react';
import { VT323 } from 'next/font/google';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export default function Connect() {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleInstagramClick = () => {
    const text = 'no time for scrolling..!';
    setMessage('');
    setShowMessage(true);
    let idx = 0;

    const interval = setInterval(() => {
      idx++;
      setMessage(text.slice(0, idx));
      if (idx === text.length) {
        clearInterval(interval);
        // hide message after 3 seconds
        setTimeout(() => setShowMessage(false), 3000);
      }
    }, 100);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Typing message above icons */}
      {showMessage && (
        <p className={`mb-4 text-3xl text-[#86C232] ${vt323.className}`}>
          {message}
        </p>
      )}

      {/* Icon row */}
      <div className="flex justify-center gap-8">
        {/* Instagram (no link) */}
        <div
          onClick={handleInstagramClick}
          className="cursor-pointer text-3xl text-[#333] hover:text-[#6cc644] transition-all duration-300"
        >
          <FaInstagram />
        </div>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/arjun-n-b99b95249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#333] hover:text-[#6cc644] transition-all duration-300"
        >
          <FaLinkedin />
        </a>

        {/* Gmail (opens email app to start a new message) */}
       {/* Gmail */}
       <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=4si21cs051@sit.ac.in.com&su=Want%20to%20connect%20with%20you&body=Hi%20there%2C"
  target="_blank"
  rel="noopener noreferrer"
  className="text-3xl text-[#333] hover:text-[#6cc644] transition-all duration-300"
>
  <MdEmail />
</a>



        {/* GitHub */}
        <a
          href="https://github.com/arjunn3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-[#333] hover:text-[#6cc644] transition-all duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
