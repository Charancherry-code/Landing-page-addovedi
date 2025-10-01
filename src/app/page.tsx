"use client";

import { Canvas } from '@react-three/fiber';
import Footer from '@/components/Footer';
import SceneManager from '@/components/SceneManager';

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen">
        <Canvas camera={{ position: [5, 5, 15], fov: 75 }}>
          <SceneManager />
        </Canvas>
      </div>

      <div className="relative z-10">
        <div id="hero-section" className="h-screen flex justify-center items-center text-center px-4">
          <div>
            {/* Responsive Font Sizes: smaller on mobile, larger on desktop */}
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold"><span className="text-accent">ADDOVEDI</span> TECH FEST</h1>
            <p className="text-accent text-lg sm:text-2xl md:text-4xl font-bold mt-2">2025</p>
          </div>
        </div>

        <div id="events-section" className="h-screen flex justify-center items-center text-center opacity-0 px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8">Featured <span className="text-accent">Events</span></h2>
            {/* Grid now collapses to 1 column on mobile, 3 on medium screens and up */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-primary/50 p-4 rounded-lg border border-accent/50">
                <h3 className="text-accent text-lg md:text-xl font-bold">Quantum AI</h3>
                <p className="text-sm">Exploring the synergy of AI and quantum computing.</p>
              </div>
              <div className="bg-primary/50 p-4 rounded-lg border border-accent/50">
                <h3 className="text-accent text-lg md:text-xl font-bold">CyberSec CTF</h3>
                <p className="text-sm">A competitive ethical hacking challenge.</p>
              </div>
              <div className="bg-primary/50 p-4 rounded-lg border border-accent/50">
                <h3 className="text-accent text-lg md:text-xl font-bold">Web3 & Metaverse</h3>
                <p className="text-sm">Building the next generation of the internet.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="sponsors-section" className="h-screen flex justify-center items-center text-center opacity-0 px-4">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8">Our <span className="text-accent">Sponsors</span></h2>
            <div className="flex gap-8 md:gap-16 items-center justify-center">
              <p className="text-lg sm:text-2xl font-bold opacity-50">Sponsor A</p>
              <p className="text-2xl sm:text-4xl font-bold opacity-80">Sponsor B</p>
              <p className="text-lg sm:text-2xl font-bold opacity-50">Sponsor C</p>
            </div>
          </div>
        </div>
        
        <div id="cta-section" className="h-screen flex justify-center items-center text-center opacity-0 px-4">
          <button className="text-lg md:text-2xl px-6 py-3 md:px-8 md:py-4 bg-accent text-background font-bold uppercase rounded-md hover:bg-white hover:text-accent transition-colors duration-300 pointer-events-auto">
            Register Now
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}