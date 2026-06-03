"use client";

import { useEffect, useRef } from "react";

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2 };
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    class Star {
      x: number;
      y: number;
      z: number;
      size: number;
      opacity: number;
      baseOpacity: number;

      constructor() {
        this.x = Math.random() * width - width / 2;
        this.y = Math.random() * height - height / 2;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 1.5 + 0.5;
        this.baseOpacity = Math.random() * 0.5 + 0.1;
        this.opacity = this.baseOpacity;
      }

      update(mx: number, my: number, sy: number) {
        this.z -= 0.5; // Slight forward movement
        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * width - width / 2;
          this.y = Math.random() * height - height / 2;
        }
      }

      draw(ctx: CanvasRenderingContext2D, mx: number, my: number, sy: number) {
        const perspective = 800 / this.z;
        const px = this.x * perspective + width / 2 + (mx - width / 2) * (perspective * 0.05);
        const py = this.y * perspective + height / 2 + (my - height / 2) * (perspective * 0.05) - (sy * perspective * 0.5);

        if (px < 0 || px > width || py < 0 || py > height) return;

        const pSize = this.size * perspective;
        
        ctx.beginPath();
        ctx.arc(px, py, pSize, 0, Math.PI * 2);
        
        // Twinkle effect
        this.opacity = this.baseOpacity + Math.sin(Date.now() * 0.001 * this.size) * 0.2;
        
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const stars = Array.from({ length: 400 }, () => new Star());

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Trail effect
      ctx.fillRect(0, 0, width, height);

      stars.forEach(star => {
        star.update(mouse.x, mouse.y, scrollY);
        star.draw(ctx, mouse.x, mouse.y, scrollY);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-black"
    />
  );
}
