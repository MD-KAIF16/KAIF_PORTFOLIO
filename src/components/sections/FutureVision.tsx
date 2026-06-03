"use client";

import { motion } from "framer-motion";

export default function FutureVision() {
  return (
    <section className="py-32 bg-neutral-950 text-white relative overflow-hidden border-t border-neutral-900">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
        >
          Building for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Next Decade</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="p-10 md:p-16 rounded-3xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-sm"
        >
          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light italic">
            "My ambition is not just to write code, but to architect technology platforms that redefine human potential. By merging enterprise-grade engineering with artificial intelligence, I am preparing to lead the next generation of global startups and technology companies."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-neutral-700" />
            <span className="font-semibold tracking-widest uppercase text-sm text-neutral-400">MD KAIF</span>
            <div className="h-px w-12 bg-neutral-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
