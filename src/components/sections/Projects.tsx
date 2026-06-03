"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Database, Layout, Server, BrainCircuit, Activity, Layers, Code2, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import MagneticButton from "@/components/MagneticButton";

const projects = [
  {
    title: "Full Stack Hotel Booking System",
    type: "Enterprise Architecture",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    border: "border-blue-500/20",
    glow: "bg-blue-500/30",
    github: "https://github.com/MD-KAIF16",
    features: [
      { icon: <Layout />, title: "Architecture", desc: "Clean Architecture with CQRS pattern" },
      { icon: <Database />, title: "Database", desc: "SQL Server with Entity Framework Core" },
      { icon: <Server />, title: "Backend", desc: "ASP.NET Core Web API, JWT Authentication" },
    ],
    content: {
      problem: "Traditional hotel booking systems suffer from monolithic constraints, resulting in poor performance under high-traffic seasons and rigid scalability.",
      solution: "Engineered a highly available, microservices-ready distributed architecture using the .NET ecosystem. Implemented robust caching layers and a frictionless booking engine.",
      technologies: ["C#", "ASP.NET Core", "Angular", "SQL Server", "Entity Framework", "JWT"]
    }
  },
  {
    title: "AI-Powered Lung Disease Detection",
    type: "Deep Learning Pipeline",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    border: "border-emerald-500/20",
    glow: "bg-emerald-500/30",
    github: "https://github.com/MD-KAIF16",
    features: [
      { icon: <BrainCircuit />, title: "Model", desc: "Custom ResNet101 Deep Learning Architecture" },
      { icon: <Activity />, title: "Pipeline", desc: "Automated image preprocessing & augmentation" },
      { icon: <Layers />, title: "Explainability", desc: "Grad-CAM visualization for medical trust" },
    ],
    content: {
      problem: "Early medical imaging diagnosis is heavily bottlenecked by human review constraints and prone to high false-negative rates in initial scans.",
      solution: "Developed an advanced computer vision pipeline that analyzes chest X-rays with near-human accuracy. Integrated Grad-CAM to output heatmaps, preventing black-box AI behavior.",
      technologies: ["Python", "Deep Learning", "ResNet101", "Grad-CAM", "TensorFlow", "NumPy"]
    }
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="projects" ref={containerRef} className="relative py-40 text-white overflow-hidden">
      <motion.div style={{ opacity }} className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Excellence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto text-xl font-light"
          >
            Complex problems solved through elegant architecture and advanced implementation.
          </motion.p>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Premium Glow Behind Card */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 blur-[120px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${project.glow}`} />

              <div className={`relative rounded-[2.5rem] bg-white/[0.02] backdrop-blur-2xl border ${project.border} overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]`}>
                <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-50`} />
                
                <div className="relative grid lg:grid-cols-12 gap-8 p-8 md:p-16">
                  
                  {/* Content Column */}
                  <div className="lg:col-span-7 space-y-12">
                    <div>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/[0.05] text-sm text-neutral-300 font-mono mb-6"
                      >
                        {project.type}
                      </motion.div>
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                        {project.title}
                      </h3>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-3">The Challenge</h4>
                          <p className="text-neutral-300 text-lg leading-relaxed font-light">{project.content.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-3">The Architecture</h4>
                          <p className="text-neutral-300 text-lg leading-relaxed font-light">{project.content.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-8">
                      <MagneticButton 
                        onClick={() => window.open(project.github, '_blank')}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium"
                      >
                        <Github className="w-4 h-4" /> View Source <ArrowUpRight className="w-4 h-4" />
                      </MagneticButton>
                    </div>
                  </div>

                  {/* Tech Specs Column */}
                  <div className="lg:col-span-5 relative">
                    <div className="h-full rounded-3xl bg-black/40 border border-white/5 p-8 flex flex-col justify-between backdrop-blur-md">
                      <div>
                        <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-8">System Components</h4>
                        <div className="space-y-6">
                          {project.features.map((feature, i) => (
                            <motion.div 
                              key={feature.title}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-4 group/feature"
                            >
                              <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 text-neutral-400 group-hover/feature:text-white group-hover/feature:bg-white/[0.1] group-hover/feature:border-white/20 transition-all">
                                {feature.icon}
                              </div>
                              <div>
                                <h5 className="font-semibold text-white/90 mb-1">{feature.title}</h5>
                                <p className="text-neutral-500 text-sm leading-relaxed">{feature.desc}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-12 mt-12 border-t border-white/5">
                        <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.content.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-neutral-400 font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
