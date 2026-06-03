"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-neutral-400 py-12 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-black text-white tracking-tighter mb-2">MD KAIF</span>
            <p className="text-sm">Architecting the future. One line of code at a time.</p>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">System Status</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>&copy; {new Date().getFullYear()} MD KAIF. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Built with Next.js 15, React 19 & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
