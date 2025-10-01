// src/app/layout.tsx
import './globals.css';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });
export const metadata = { title: 'Addovedi Tech Fest' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={orbitron.className}>{children}</body>
    </html>
  );
}