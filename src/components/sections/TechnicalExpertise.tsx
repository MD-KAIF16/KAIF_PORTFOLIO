"use client";

import { motion } from "framer-motion";
import { Server, BrainCircuit, Rocket, Activity, Github, ArrowUpRight, Globe } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const caseStudies = [
  {
    title: "Full Stack Hotel Booking System",
    category: "Enterprise Software Architecture",
    statusBadge: "Completed",
    statusColor: "emerald",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    border: "border-blue-500/20",
    icon: <Server className="w-6 h-6" />,
    overview: "Designed and developed a complete hotel booking platform using modern .NET technologies and relational database architecture.",
    engineering: [
      "ASP.NET Core Backend",
      "Angular Frontend",
      "SQL Server Database",
      "Entity Framework",
      "REST APIs",
      "Authentication System"
    ],
    architecture: [
      "Layered Architecture",
      "Database Normalization",
      "API Integration",
      "Booking Workflow Automation",
      "Secure Data Handling"
    ],
    technologies: ["ASP.NET Core", "Angular", "SQL Server", "Entity Framework", "REST APIs"],
    github: "",
    liveDemo: ""
  },
  {
    title: "AI-Powered Lung Disease Detection",
    category: "Deep Learning & Medical AI",
    statusBadge: "Completed",
    statusColor: "emerald",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    border: "border-emerald-500/20",
    icon: <BrainCircuit className="w-6 h-6" />,
    overview: "Built a deep learning solution capable of identifying lung diseases from medical imaging using explainable AI techniques.",
    engineering: [
      "Medical Image Processing",
      "Deep Learning Pipeline",
      "Explainable AI",
      "Model Evaluation",
      "Prediction Visualization"
    ],
    architecture: [
      "ResNet101 Model",
      "Grad-CAM Explainability",
      "Image Classification Pipeline",
      "Dataset Processing",
      "Inference Workflow"
    ],
    technologies: ["Python", "TensorFlow", "ResNet101", "Grad-CAM", "Deep Learning"],
    github: "",
    liveDemo: ""
  },
  {
    title: "PlacementPilot AI",
    category: "EdTech Platform Engineering",
    statusBadge: "Featured Project",
    statusColor: "blue",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    border: "border-violet-500/20",
    icon: <Activity className="w-6 h-6" />,
    overview: "Developed a complete placement preparation ecosystem that combines DSA preparation, aptitude tracking, progress analytics, and readiness assessment into one platform.",
    engineering: [
      "Authentication System",
      "Analytics Dashboard",
      "Progress Tracking",
      "DSA Management",
      "Aptitude Preparation Modules",
      "State Management"
    ],
    architecture: [
      "NextAuth Authentication",
      "Prisma ORM",
      "Server Actions",
      "Zustand State Management",
      "Modular Component Design",
      "Scalable Folder Structure"
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "Prisma", "NextAuth", "Zustand", "SQLite"],
    github: "https://github.com/MD-KAIF16/PlacementPilot",
    liveDemo: ""
  },
  {
    title: "Prayag Hype",
    category: "Production Marketing Platform",
    statusBadge: "Live Production Project",
    statusColor: "amber",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    border: "border-amber-500/20",
    icon: <Rocket className="w-6 h-6" />,
    overview: "Designed and deployed a premium business promotion platform helping local businesses improve visibility through storytelling, campaigns, and digital discovery experiences.",
    engineering: [
      "SEO Architecture",
      "Performance Optimization",
      "Animation Systems",
      "Conversion Focused UI",
      "Responsive Design",
      "Production Deployment"
    ],
    architecture: [
      "App Router Architecture",
      "GSAP Animations",
      "Framer Motion",
      "Lenis Smooth Scroll",
      "Dynamic Components",
      "Reusable UI System"
    ],
    technologies: ["Next.js 15", "React 19", "TypeScript", "GSAP", "Framer Motion", "Lenis", "Tailwind CSS"],
    github: "https://github.com/MD-KAIF16/prayag-hype",
    liveDemo: "https://prayag-hype.vercel.app"
  }
];

export default function TechnicalExpertise() {
  return (
    <section id="expertise" className="relative py-40 text-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-24">
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
            className="text-neutral-400 max-w-3xl mx-auto text-xl font-light"
          >
            Real-world software engineering, AI development, product architecture, and scalable system design demonstrated through practical projects.
          </motion.p>
        </div>

        {/* 2x2 Case Study Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden hover:border-white/25 transition-all duration-700 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
            >
              {/* Hover Gradient Reveal */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative p-8 md:p-10 flex flex-col h-full space-y-7">
                
                {/* Header: Category + Status */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/[0.05] text-xs text-neutral-300 font-mono tracking-wide">
                    {study.category}
                  </span>
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono tracking-wide ${
                    study.statusColor === "emerald" 
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400" 
                      : study.statusColor === "blue"
                      ? "border-blue-500/20 bg-blue-500/10 text-blue-400"
                      : "border-amber-500/20 bg-amber-500/10 text-amber-400"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      study.statusColor === "emerald" ? "bg-emerald-400" : study.statusColor === "blue" ? "bg-blue-400" : "bg-amber-400"
                    }`} />
                    {study.statusBadge}
                  </span>
                </div>

                {/* Title + Icon */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-500 shrink-0">
                    {study.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white/90">{study.title}</h3>
                </div>

                {/* Overview */}
                <p className="text-neutral-400 leading-relaxed font-light text-base">
                  {study.overview}
                </p>

                {/* Engineering Work + Architecture in two columns */}
                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div>
                    <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">Engineering Work</h4>
                    <ul className="space-y-2">
                      {study.engineering.map(item => (
                        <li key={item} className="text-sm text-neutral-300 font-light flex items-start gap-2">
                          <span className="text-neutral-600 mt-1 shrink-0">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-3">Architecture</h4>
                    <ul className="space-y-2">
                      {study.architecture.map(item => (
                        <li key={item} className="text-sm text-neutral-300 font-light flex items-start gap-2">
                          <span className="text-neutral-600 mt-1 shrink-0">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-6 border-t border-white/5 mt-auto">
                  <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map(tech => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-neutral-400 font-mono transition-colors hover:bg-white/[0.1] hover:text-white cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {(study.github || study.liveDemo) && (
                  <div className="flex flex-wrap gap-3 pt-4">
                    {study.github && (
                      <MagneticButton 
                        onClick={() => window.open(study.github, '_blank')}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/[0.1] transition-colors"
                      >
                        <Github className="w-4 h-4" /> Source Code
                      </MagneticButton>
                    )}
                    {study.liveDemo && (
                      <MagneticButton 
                        onClick={() => window.open(study.liveDemo, '_blank')}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium"
                      >
                        <Globe className="w-4 h-4" /> Live Demo <ArrowUpRight className="w-3 h-3" />
                      </MagneticButton>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
