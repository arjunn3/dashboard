import { Titillium_Web } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import Head from 'next/head'; // ⬅️ Import Head from next/head

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arjun N Portfolio',
  description: 'Personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* ✅ Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={titilliumWeb.className}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
