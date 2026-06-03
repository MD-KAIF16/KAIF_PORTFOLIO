"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Database, Server, BrainCircuit, Flag } from "lucide-react";

const timelineData = [
  {
    year: "2026",
    title: "B.Tech Graduation",
    role: "Future Goal: Software Engineer | AI Engineer | Technology Builder",
    icon: <Flag className="w-5 h-5" />,
    description: "Preparing to graduate and lead technology at top-tier companies while building the software solutions of the future."
  },
  {
    year: "2025",
    title: "HCLTech .NET Full Stack Training",
    role: "Trainee",
    icon: <Server className="w-5 h-5" />,
    description: "Completed an intensive, industry-grade engineering program mastering the modern .NET ecosystem."
  },
  {
    year: "2025",
    title: "AI-Powered Lung Disease Detection System",
    role: "AI Engineer",
    icon: <BrainCircuit className="w-5 h-5" />,
    description: "Built an advanced medical imaging pipeline using Python, Deep Learning, ResNet101, and Grad-CAM."
  },
  {
    year: "2025",
    title: "Full Stack Hotel Booking System",
    role: "Full Stack Developer",
    icon: <Code className="w-5 h-5" />,
    description: "Engineered a scalable enterprise web application using ASP.NET Core, Angular, SQL Server, and Entity Framework."
  },
  {
    year: "2024",
    title: "Core Computer Science Fundamentals",
    role: "Engineering Student",
    icon: <Database className="w-5 h-5" />,
    description: "Focused heavily on mastering Data Structures and Algorithms (DSA), DBMS, Operating Systems, and Computer Networks."
  },
  {
    year: "2023",
    title: "Core Java Training",
    role: "Trainee",
    icon: <Code className="w-5 h-5" />,
    description: "Built a robust programming foundation in Object-Oriented Programming (OOP), Collections, Java Programming, and advanced problem-solving."
  },
  {
    year: "2022",
    title: "B.Tech in Computer Science & Engineering",
    role: "United College of Engineering & Research",
    icon: <GraduationCap className="w-5 h-5" />,
    description: "Commenced formal engineering education, setting the foundation for a career in software engineering and artificial intelligence."
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
                <p className="text-neutral-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
