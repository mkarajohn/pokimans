import { CurrentPageParam } from '@/app/providers/CurrentPageParam';
import Search from '@/components/client/Search';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const pokimonFont = localFont({
  src: '../../public/fonts/Pokemon_Classic.ttf',
  display: 'swap',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pokimonFont.className} min-h-screen px-24 py-12`}>
        <CurrentPageParam>
          <nav>
            <label className="mb-12 flex flex-col items-center justify-center gap-4">
              <div>Search by name or Pokiman ID</div>
              <Search />
            </label>
          </nav>
          <main className="flex flex-col items-center justify-between gap-4">
            {children}
            {modal}
          </main>
        </CurrentPageParam>
      </body>
    </html>
  );
}
