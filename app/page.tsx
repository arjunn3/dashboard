// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// // Custom hook for typewriter effect
// function useTypewriter(fullText: string, speed: number = 80) {
//   const [displayed, setDisplayed] = useState('');
//   const [done, setDone] = useState(false);

//   useEffect(() => {
//     let index = 0;
//     let timeoutId: ReturnType<typeof setTimeout>;

//     const type = () => {
//       if (index < fullText.length) {
//         setDisplayed((prev) => prev + fullText[index]);
//         index += 1;
//         timeoutId = setTimeout(type, speed);
//       } else {
//         setDone(true);
//       }
//     };

//     timeoutId = setTimeout(type, speed);
//     return () => clearTimeout(timeoutId);
//   }, [fullText, speed]);

//   return { displayed, done };
// }

// export default function Home() {
//   const fullText = '“Still learning,\nstill building”';
//   const { displayed, done: typingDone } = useTypewriter(fullText, 80);

//   return (
//     <main className="min-h-screen bg-black overflow-hidden">
//       <div className="flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12 relative z-10">
//         {/* Text Section */}
//         <div className="text-center mt-16">
//           <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#e3d7b5] tracking-wide">
//             AKSHAY K
//           </h1>
//           <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-wide">
//             <span className="text-[#e3d7b5]">SOFTWARE </span>
//             <span className="text-[#86C232]">DEV</span>
//           </h2>

//           {/* Typewriter Line */}
//           <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#e3d7b5] leading-snug mt-2 whitespace-pre-line">
//             {displayed}
//             <span className="text-[#86C232] animate-pulse">|</span>
//           </h3>

//           {/* Button */}
//           {typingDone && (
//             <Link href="/dashboard">
//               <button className="btn btn-wide mt-6 text-xl md:text-2xl font-black tracking-wide text-black bg-[#86C232] hover:bg-[#e3d7b5] hover:text-black transition-all duration-300 shadow-md hover:shadow-xl">
//                 This Way
//               </button>
//             </Link>
//           )}
//         </div>

//         {/* Image Section */}
//         <div className="max-w-[350px] md:max-w-[400px] mt-8 md:mt-0">
//           <Image
//             src="/images/hero1.jpg"
//             alt="Hero Image"
//             width={400}
//             height={400}
//             className="rounded-lg object-cover w-full"
//             priority
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function useTypewriter(fullText: string, speed: number = 80) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setDisplayed((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [fullText, speed]);

  return { displayed, done };
}

export default function Home() {
  // ✅ Typo fixed, quotes removed from content
  const fullText = `Sttill learning,\nstill building`;
  const { displayed, done: typingDone } = useTypewriter(fullText, 80);

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12 relative z-10">
        {/* Text Section */}
        <div className="text-center mt-16">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#e3d7b5] tracking-wide">
            Arjun N
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-wide">
            <span className="text-[#e3d7b5]">SOFTWARE </span>
            <span className="text-[#86C232]">DEV</span>
          </h2>

          {/* Typewriter Line */}
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#e3d7b5] leading-snug mt-2 whitespace-pre-line">
            {/* Decorative quotes only visible, not typed */}
            “{displayed}
            <span className="text-[#86C232] animate-pulse">|</span>”
          </h3>

          {/* Button */}
          {typingDone && (
            <Link href="/dashboard">
              <button className="btn btn-wide mt-6 text-xl md:text-2xl font-black tracking-wide text-black bg-[#86C232] hover:bg-[#e3d7b5] hover:text-black transition-all duration-300 shadow-md hover:shadow-xl">
                Here You Go!
              </button>
            </Link>
          )}
        </div>

        {/* Image Section */}
        <div className="max-w-[350px] md:max-w-[400px] mt-8 md:mt-0">
          <Image
            src="/images/hero1.jpg"
            alt="Hero Image"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full"
            priority
          />
        </div>
      </div>
    </main>
  );
}