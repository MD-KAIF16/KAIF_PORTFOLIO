"use client";

import { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function MagneticButton({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.1)",
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });

    const mouseX = clientX - left;
    const mouseY = clientY - top;
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x * 0.2,
        y: position.y * 0.2,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Glow Effect */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none rounded-full blur-[20px]"
          style={{
            width: 100,
            height: 100,
            background: glowColor,
            left: mousePosition.x - 50,
            top: mousePosition.y - 50,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      
      {/* Content wrapper for counter-movement to stabilize text slightly */}
      <motion.span
        animate={{
          x: position.x * 0.05,
          y: position.y * 0.05,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="relative z-10 flex items-center justify-center gap-2 w-full h-full"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
