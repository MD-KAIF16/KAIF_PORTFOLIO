"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Code2, Database } from "lucide-react";

const highlights = [
  { label: "DSA Problem Solving", value: "100+", icon: <Code2 className="text-blue-500" /> },
  { label: "End-to-End Projects", value: "4 Major", icon: <CheckCircle2 className="text-emerald-500" /> },
  { label: "Computer Science", value: "Engineering Student", icon: <GraduationCap className="text-purple-500" /> },
  { label: "HCLTech Full Stack", value: "Training Completed", icon: <Database className="text-orange-500" /> },
  { label: "Core Java Training", value: "Completed", icon: <CheckCircle2 className="text-rose-500" /> },
  { label: "Tech Stack Focus", value: "ASP.NET Core + Angular", icon: <Code2 className="text-cyan-500" /> },
  { label: "Database Experience", value: "SQL Server", icon: <Database className="text-yellow-500" /> },
  { label: "AI Integration", value: "Medical Image Classification", icon: <CheckCircle2 className="text-teal-500" /> },
];

export default function ProfessionalHighlights() {
  return (
    <section className="py-32 bg-neutral-950 text-white border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Highlights</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400"
          >
            A truthful and verified track record of my engineering capabilities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black border border-neutral-800 p-6 rounded-2xl flex items-center gap-4 hover:border-neutral-700 transition-colors group cursor-default"
            >
              <div className="p-3 bg-neutral-900 rounded-xl group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div>
                <p className="text-lg font-bold leading-tight mb-1">{stat.value}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
