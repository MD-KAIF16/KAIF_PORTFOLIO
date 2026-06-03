"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Subtle floating glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="space-y-8 max-w-5xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md text-sm text-neutral-300 font-mono mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            System Status: Online & Ready
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-neutral-500">
              MD KAIF
            </span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-lg md:text-2xl text-neutral-400 font-light tracking-wide">
            <span>Software Engineer</span>
            <span className="hidden md:inline text-neutral-700">•</span>
            <span className="text-white/80">.NET Full Stack Developer</span>
            <span className="hidden md:inline text-neutral-700">•</span>
            <span>AI Engineer</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12"
          >
            <MagneticButton 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-white text-black rounded-full font-medium w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-shadow duration-500"
              glowColor="rgba(0, 0, 0, 0.1)"
            >
              View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <MagneticButton 
              onClick={() => {
                const a = document.createElement('a');
                a.href = "/MD_KAIF_Resume.pdf";
                a.download = "MD_KAIF_Resume.pdf";
                a.click();
              }}
              className="px-8 py-4 rounded-full font-medium border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] w-full sm:w-auto text-white transition-colors duration-500"
            >
              <Download className="w-4 h-4" /> Download Resume
            </MagneticButton>

            <MagneticButton 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-full font-medium border border-transparent hover:border-white/10 w-full sm:w-auto text-neutral-400 hover:text-white transition-colors duration-500"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[10px] text-neutral-500 uppercase tracking-[0.3em] hover:text-white transition-colors duration-500">Scroll to Explore</span>
        <div className="w-[1px] h-[40px] relative overflow-hidden bg-white/10">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
