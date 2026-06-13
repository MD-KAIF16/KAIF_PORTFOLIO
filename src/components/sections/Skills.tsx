"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const skillsData = [
  { name: "C#", category: "Language", size: 80, color: "from-purple-500 to-indigo-600" },
  { name: "ASP.NET Core", category: "Backend", size: 90, color: "from-blue-500 to-cyan-500" },
  { name: "Java", category: "Language", size: 70, color: "from-red-500 to-orange-500" },
  { name: "JavaScript", category: "Language", size: 75, color: "from-yellow-400 to-amber-500" },
  { name: "TypeScript", category: "Language", size: 85, color: "from-blue-400 to-indigo-500" },
  { name: "Angular", category: "Frontend", size: 80, color: "from-red-600 to-pink-600" },
  { name: "React", category: "Frontend", size: 85, color: "from-cyan-400 to-blue-500" },
  { name: "SQL Server", category: "Database", size: 75, color: "from-red-400 to-rose-600" },
  { name: "Entity Framework", category: "Backend", size: 80, color: "from-emerald-400 to-teal-500" },
  { name: "Web API", category: "Backend", size: 85, color: "from-violet-500 to-purple-600" },
  { name: "DSA", category: "Concept", size: 90, color: "from-zinc-400 to-zinc-600" },
  { name: "OOP", category: "Concept", size: 85, color: "from-zinc-400 to-zinc-600" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative py-32 bg-black overflow-hidden" ref={containerRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Universe</span>
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
          An interconnected ecosystem of technologies, languages, and concepts that power my engineering capabilities.
        </p>
      </div>

      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        {dimensions.width > 0 && skillsData.map((skill, index) => {
          // Distribute nodes roughly in a circle/galaxy shape
          const angle = (index / skillsData.length) * Math.PI * 2;
          const radius = Math.random() * (dimensions.width > 768 ? 250 : 120) + 100;
          const initialX = Math.cos(angle) * radius;
          const initialY = Math.sin(angle) * radius;

          return (
            <motion.div
              key={skill.name}
              className="absolute flex flex-col items-center justify-center cursor-pointer group"
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              whileInView={{ x: initialX, y: initialY, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 50,
              }}
            >
              <div 
                className={`relative flex items-center justify-center rounded-full bg-gradient-to-br ${skill.color} shadow-lg shadow-black/50 p-[1px] transition-transform duration-300 group-hover:scale-110 group-hover:z-50`}
                style={{ width: skill.size, height: skill.size }}
              >
                <div className="absolute inset-0 bg-black/40 rounded-full backdrop-blur-sm group-hover:bg-transparent transition-colors duration-300" />
                <span className="relative z-10 text-white font-semibold text-center text-xs sm:text-sm px-2">
                  {skill.name}
                </span>
                
                {/* Orbital rings */}
                <div className="absolute inset-[-10px] border border-white/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-300 pointer-events-none" />
                <div className="absolute inset-[-20px] border border-white/5 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-reverse-spin transition-opacity duration-300 pointer-events-none" />
              </div>
              <span className="absolute -bottom-6 text-[10px] uppercase tracking-wider text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {skill.category}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
