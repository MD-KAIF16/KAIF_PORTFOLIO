"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Database, Server, BrainCircuit, Flag, Briefcase } from "lucide-react";

const timelineData = [
  {
    year: "June 2026 – Present",
    title: "AI & Digital Twin Intern — DoppelIQ",
    role: "AI Intern",
    icon: <Briefcase className="w-5 h-5" />,
    description: (
      <>
        Working on AI-driven Consumer Twin and Digital Twin technologies, exploring enterprise AI solutions, decision intelligence systems, client research, business analysis, and real-world AI applications.
        <div className="mt-4">
          <span className="font-semibold text-white/80">Key Areas:</span>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-400">
            <li>Consumer Twin Technology</li>
            <li>Digital Twin Systems</li>
            <li>Enterprise AI</li>
            <li>Business Intelligence</li>
            <li>Decision Intelligence</li>
            <li>Research & Analysis</li>
          </ul>
        </div>
      </>
    )
  },
  {
    year: "May 2026",
    title: "B.Tech Graduation",
    role: "Computer Science Engineer",
    icon: <GraduationCap className="w-5 h-5" />,
    description: "Successfully completed Bachelor of Technology in Computer Science Engineering with strong foundations in software development, problem solving, full stack development, and artificial intelligence."
  },
  {
    year: "November 2025 – February 2026",
    title: "HCLTech Full Stack Training",
    role: "Trainee Engineer",
    icon: <Server className="w-5 h-5" />,
    description: (
      <>
        Successfully completed an intensive, industry-grade program focused on building highly scalable, secure, and performant enterprise applications using ASP.NET Core and Angular.
        <div className="mt-4">
          <span className="font-semibold text-white/80">Key Learning Areas:</span>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-neutral-400">
            <li>ASP.NET Core</li>
            <li>Angular</li>
            <li>REST APIs</li>
            <li>SQL Server</li>
            <li>Authentication & Authorization</li>
            <li>Enterprise Architecture</li>
            <li>Clean Code Principles</li>
            <li>Full Stack Development</li>
          </ul>
        </div>
      </>
    )
  },
  {
    year: "2022",
    title: "Bachelor of Technology (Computer Science Engineering)",
    role: "B.Tech Student",
    icon: <Code className="w-5 h-5" />,
    description: "Started Bachelor of Technology in Computer Science Engineering, building foundations in programming, algorithms, software engineering, databases, and system design."
  }
];

export default function Timeline() {
  return (
    <section className="relative py-40 overflow-hidden text-white">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Journey.</span>
          </motion.h2>
        </div>

        <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-20">
          {timelineData.map((item, index) => (
            <motion.div 
              key={`${item.year}-${index}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-neutral-400 group-hover:border-white group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500">
                {item.icon}
              </div>

              <div className="p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 group-hover:bg-white/[0.04] transition-colors duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <span className="text-sm font-mono text-neutral-500 mb-2 block">{item.year}</span>
                <h3 className="text-2xl font-semibold mb-1 text-white/90">{item.title}</h3>
                <h4 className="text-neutral-400 mb-4">{item.role}</h4>
                <div className="text-neutral-300 leading-relaxed font-light">
                  {item.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
