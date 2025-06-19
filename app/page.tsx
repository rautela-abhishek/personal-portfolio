'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import CodingProfiles from '@/components/CodingProfiles';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Contact />
      </main>
    </div>
  );
}