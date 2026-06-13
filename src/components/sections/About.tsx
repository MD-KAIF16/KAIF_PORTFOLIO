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
              <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-[0.3em] mb-4">Professional Identity</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Business Value.</span>
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
                I am <span className="text-white font-medium">MD KAIF</span>, a software engineer specialized in building scalable, high-performance enterprise applications and intelligent systems.
              </p>
              <p>
                Extensively trained by <span className="text-white font-medium">HCLTech</span>, I bring deep expertise in the <span className="text-white font-medium">ASP.NET Core</span> ecosystem, <span className="text-white font-medium">Angular</span> frontend development, and rigorous <span className="text-white font-medium">SQL Server</span> database architecture. My foundation in core computer science is reinforced by solving over 100+ complex DSA problems.
              </p>
              <p>
                I am actively seeking roles where I can leverage my full stack architecture and AI deep learning skills to ship mission-critical software. I don't just write code—I engineer resilient solutions that drive immediate business impact.
              </p>
            </motion.div>
          </div>

          {/* Right: Glassmorphism Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            {[
              { icon: <Terminal />, title: "Enterprise Full Stack", desc: "ASP.NET Core, Angular, SQL Server" },
              { icon: <Cpu />, title: "AI & Deep Learning", desc: "ResNet101, Python, TensorFlow" },
              { icon: <Code />, title: "Proven Problem Solver", desc: "100+ DSA Solutions, Clean Architecture" },
              { icon: <Globe />, title: "Immediate Impact", desc: "HCLTech Trained, Ready to Ship" }
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
