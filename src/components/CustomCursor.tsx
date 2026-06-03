"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    isMobile.current = window.innerWidth < 768;
    if (isMobile.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2 };
    let previousMouse = { x: width / 2, y: height / 2 };
    let isMoving = false;
    let stopTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMoving = true;
      
      clearTimeout(stopTimeout);
      stopTimeout = setTimeout(() => {
        isMoving = false;
      }, 50);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      maxLife: number;
      color: string;

      constructor(x: number, y: number, velocityX: number, velocityY: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1.5 + 0.2;
        // Explode outward slightly but inherit mouse velocity
        this.speedX = (Math.random() - 0.5) * 1.5 - velocityX * 0.1;
        this.speedY = (Math.random() - 0.5) * 1.5 - velocityY * 0.1;
        this.maxLife = Math.random() * 30 + 10;
        this.life = this.maxLife;
        // Subtle color variations between white, cool blue, and purple
        const colors = [
          "rgba(255, 255, 255,", 
          "rgba(180, 210, 255,", 
          "rgba(210, 180, 255,"
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.size = Math.max(0, this.size - 0.03);
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const opacity = (this.life / this.maxLife) * 0.8;
        ctx.fillStyle = `${this.color} ${opacity})`;
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const trailPoints: {x: number, y: number, life: number}[] = [];

    const animate = () => {
      if (!ctx) return;
      
      // Use composite operation for motion blur and glow
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, width, height);
      
      ctx.globalCompositeOperation = "screen";

      const speedX = mouse.x - previousMouse.x;
      const speedY = mouse.y - previousMouse.y;
      const speed = Math.sqrt(speedX * speedX + speedY * speedY);

      if (isMoving) {
        trailPoints.push({ x: mouse.x, y: mouse.y, life: 1.0 });
        if (trailPoints.length > 25) trailPoints.shift();

        // Emit fragments
        if (speed > 2) {
          const particleCount = Math.min(Math.floor(speed / 2), 5);
          for(let i=0; i<particleCount; i++) {
            particles.push(new Particle(mouse.x, mouse.y, speedX, speedY));
          }
        }
      }

      // Draw premium motion trail
      if (trailPoints.length > 1) {
        ctx.beginPath();
        for (let i = 0; i < trailPoints.length - 1; i++) {
          const p = trailPoints[i];
          const nextP = trailPoints[i + 1];
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(nextP.x, nextP.y);
          p.life -= 0.05; // Fade out trail
        }
        
        // Gradient stroke for the trail
        const gradient = ctx.createLinearGradient(
          trailPoints[0].x, trailPoints[0].y, 
          mouse.x, mouse.y
        );
        gradient.addColorStop(0, "rgba(100, 150, 255, 0)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.6)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
        
        // Clean up dead trail points
        while (trailPoints.length > 0 && trailPoints[0].life <= 0) {
          trailPoints.shift();
        }
      }

      // Update & draw fragment particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      // Draw Bright Star Core
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      
      // Core Glow
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 6, 0, Math.PI * 2);
      const coreGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 6);
      coreGlow.addColorStop(0, "rgba(255, 255, 255, 0.8)");
      coreGlow.addColorStop(0.3, "rgba(180, 210, 255, 0.4)");
      coreGlow.addColorStop(1, "rgba(180, 210, 255, 0)");
      ctx.fillStyle = coreGlow;
      ctx.fill();

      previousMouse.x = mouse.x;
      previousMouse.y = mouse.y;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] mix-blend-screen hidden md:block"
    />
  );
}
