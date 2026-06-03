"use client";

import { motion } from "framer-motion";
import { FlaskConical, Network, Microchip, DatabaseZap } from "lucide-react";

const researchAreas = [
  { title: "Neuro-Symbolic AI", desc: "Exploring the intersection of neural networks and symbolic reasoning.", icon: <Network /> },
  { title: "Distributed Consensus", desc: "Optimizing state synchronization across global microservices.", icon: <DatabaseZap /> },
  { title: "Quantum Computing", desc: "Researching algorithm applications for post-quantum cryptography.", icon: <Microchip /> },
  { title: "Bio-Computation", desc: "Interfacing silicon systems with biological data structures.", icon: <FlaskConical /> }
];

export default function InnovationLab() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden border-t border-neutral-900">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Innovation <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Lab</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            Research areas and experimental technologies currently under exploration.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {researchAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-900 transition-colors group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black rounded-xl border border-neutral-800 text-purple-400 group-hover:scale-110 transition-transform">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{area.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
