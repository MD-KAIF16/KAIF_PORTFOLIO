"use client";

import { motion } from "framer-motion";

export default function FutureVision() {
  return (
    <section className="relative py-40 text-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-12"
        >
          Building for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Next Decade.</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="p-10 md:p-16 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        >
          <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light italic">
            "My ambition is not just to write code, but to architect technology platforms that solve real-world problems at scale. By merging enterprise-grade engineering with artificial intelligence, I am preparing to build the next generation of intelligent software systems."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-white/10" />
            <span className="font-semibold tracking-widest uppercase text-sm text-neutral-400">MD KAIF</span>
            <div className="h-px w-12 bg-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
