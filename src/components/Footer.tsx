// src/components/Footer.tsx
"use client";

import { ArrowUp } from 'lucide-react'; // Remember to install: npm install lucide-react

export default function Footer() { // <-- MAKE SURE 'default' IS HERE
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary border-t border-accent/20 py-12 px-8 text-center">
      <div className="container mx-auto">
        <p className="mb-4">&copy; 2025 Addovedi Tech Fest. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
        </div>
        <button 
          onClick={scrollToTop}
          className="group mx-auto flex items-center justify-center w-12 h-12 rounded-full border border-accent/50
                     hover:bg-accent hover:shadow-glow-md transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-accent group-hover:text-background" />
        </button>
      </div>
    </footer>
  );
}