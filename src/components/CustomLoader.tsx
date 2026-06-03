"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const loadingSteps = [
  "System Initializing...",
  "Loading Neural Network...",
  "Loading Engineering Portfolio...",
  "Loading AI Modules...",
  "Ready."
];

export default function CustomLoader({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < loadingSteps.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, i === loadingSteps.length - 1 ? 400 : 300));
        setCurrentStep(i);
      }
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800); // Allow fade out
      }, 500);
    };
    sequence();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center relative z-10"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500"
              initial={{ letterSpacing: "0.2em" }}
              animate={{ letterSpacing: "0em" }}
              transition={{ duration: 1.5, ease: "circOut" }}
            >
              MD KAIF
            </motion.h1>

            <div className="h-6 overflow-hidden relative mb-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="text-neutral-400 font-mono text-sm uppercase tracking-widest"
                >
                  {loadingSteps[currentStep]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="w-64 h-[1px] bg-neutral-800 mx-auto relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white to-transparent w-1/2"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
