"use client";

import { motion } from "framer-motion";
import { Activity, GitCommit, Users, Terminal } from "lucide-react";

const stats = [
  { label: "Total Commits", value: "2,400+", icon: <GitCommit className="text-blue-500" /> },
  { label: "Lines of Code", value: "150k+", icon: <Terminal className="text-emerald-500" /> },
  { label: "System Uptime", value: "99.9%", icon: <Activity className="text-purple-500" /> },
  { label: "Global Users Reached", value: "10k+", icon: <Users className="text-orange-500" /> },
];

export default function AnalyticsDashboard() {
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
            Engineering Metrics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400"
          >
            Real-time analytics and development activity tracking.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black border border-neutral-800 p-6 rounded-2xl flex items-center gap-4 hover:border-neutral-700 transition-colors"
            >
              <div className="p-3 bg-neutral-900 rounded-xl">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
