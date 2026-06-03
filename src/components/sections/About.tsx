"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Code, Cpu, Globe } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={containerRef} className="relative py-40 text-white overflow-hidden">
      <motion.div style={{ opacity, y }} className="container mx-auto px-6 relative z-10">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Cinematic Text Reveal */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-[0.3em] mb-4">Initialize Identity</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Future.</span>
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6 text-neutral-400 text-lg md:text-xl font-light leading-relaxed"
            >
              <p>
                I am <span className="text-white font-medium">MD KAIF</span>, a Computer Science Engineering student driven by an obsession with scalable architecture and artificial intelligence.
              </p>
              <p>
                As a <span className="text-white font-medium">.NET Full Stack Developer</span> and <span className="text-white font-medium">AI Engineer</span>, I bridge the gap between robust backend systems and intelligent algorithmic models. I don't just write code; I engineer solutions designed to scale, adapt, and perform under pressure.
              </p>
              <p>
                My ultimate goal? To lead technology at top-tier companies and eventually found a startup that reshapes how we interact with software.
              </p>
            </motion.div>
          </div>

          {/* Right: Glassmorphism Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            {[
              { icon: <Terminal />, title: "Full Stack", desc: ".NET, C#, Angular, SQL" },
              { icon: <Cpu />, title: "AI & ML", desc: "Deep Learning, CNN, Python" },
              { icon: <Code />, title: "Algorithms", desc: "100+ DSA Problems Solved" },
              { icon: <Globe />, title: "Ambition", desc: "Future Startup Founder" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                className="group p-6 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-medium text-white mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
