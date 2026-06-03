"use client";

import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, MonitorSmartphone, Server, ShieldCheck } from "lucide-react";

const skills = [
  {
    category: "Backend & Architecture",
    icon: <Server className="w-6 h-6" />,
    items: ["C#", "ASP.NET Core", "Entity Framework", "RESTful APIs", "Microservices", "CQRS"],
    gradient: "from-blue-500/20 to-transparent"
  },
  {
    category: "AI & Deep Learning",
    icon: <BrainCircuit className="w-6 h-6" />,
    items: ["Python", "TensorFlow", "Keras", "CNNs", "Computer Vision", "Grad-CAM"],
    gradient: "from-emerald-500/20 to-transparent"
  },
  {
    category: "Frontend Development",
    icon: <MonitorSmartphone className="w-6 h-6" />,
    items: ["Angular", "React.js", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
    gradient: "from-purple-500/20 to-transparent"
  },
  {
    category: "Database & Cloud",
    icon: <Database className="w-6 h-6" />,
    items: ["SQL Server", "MySQL", "PostgreSQL", "Database Design", "Caching", "Optimization"],
    gradient: "from-amber-500/20 to-transparent"
  },
  {
    category: "Core Computer Science",
    icon: <Code2 className="w-6 h-6" />,
    items: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Design Patterns"],
    gradient: "from-rose-500/20 to-transparent"
  },
  {
    category: "Engineering Practices",
    icon: <ShieldCheck className="w-6 h-6" />,
    items: ["Git/GitHub", "Agile Methodologies", "Clean Architecture", "Unit Testing", "CI/CD"],
    gradient: "from-cyan-500/20 to-transparent"
  }
];

export default function TechnicalExpertise() {
  return (
    <section id="skills" className="relative py-40 text-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Arsenal.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto text-xl font-light"
          >
            A comprehensive stack bridging enterprise backend systems and cutting-edge artificial intelligence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/80 group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span 
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-sm text-neutral-300 group-hover:bg-white/[0.08] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
