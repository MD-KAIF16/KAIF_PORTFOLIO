"use client";

import { motion } from "framer-motion";
import { Award, Brain, Code, Rocket, BookOpen } from "lucide-react";

const milestones = [
  {
    icon: <Rocket />,
    title: "HCLTech Full Stack Training",
    desc: "Rigorous industry-grade engineering program ensuring enterprise readiness.",
    delay: 0.1
  },
  {
    icon: <Code />,
    title: "100+ DSA Problems",
    desc: "Proven algorithmic problem-solving ability via LeetCode & HackerRank.",
    delay: 0.2
  },
  {
    icon: <BookOpen />,
    title: "Core Java Specialization",
    desc: "Deep understanding of advanced Object-Oriented principles and architecture.",
    delay: 0.3
  },
  {
    icon: <Brain />,
    title: "AI Model Deployment",
    desc: "Delivered near-human performance in medical imaging pipelines.",
    delay: 0.4
  }
];

export default function Achievements() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white"
          >
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Milestones.</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: item.delay }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden text-center hover:border-white/30 transition-all duration-500"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-white/5 blur-[50px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-6">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
