"use client";

import { useState } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Timeline from "@/components/sections/Timeline";
import TechnicalExpertise from "@/components/sections/TechnicalExpertise";
import FutureVision from "@/components/sections/FutureVision";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import CustomLoader from "@/components/CustomLoader";
import StarfieldBackground from "@/components/StarfieldBackground";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-transparent selection:bg-white selection:text-black relative">
      <StarfieldBackground />
      <CustomCursor />
      
      {isLoading && <CustomLoader onComplete={() => setIsLoading(false)} />}
      
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"}`}>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <TechnicalExpertise />
        <FutureVision />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
