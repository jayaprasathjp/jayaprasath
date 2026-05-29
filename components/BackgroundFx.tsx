"use client";

import React, { useEffect, useRef } from "react";

export function BackgroundFx() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const auroraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(0, ${scrolled * 0.05}px, 0)`;
      }
      if (auroraRef.current) {
        auroraRef.current.style.transform = `translate3d(0, ${scrolled * 0.02}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35; // Slow, elegant drift
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 2.2 + 0.8; // Larger, more visible particles
        this.color = Math.random() > 0.5 ? "rgba(16, 185, 129, 0.7)" : "rgba(34, 211, 238, 0.6)"; // Richer opacities
      }

      update(mouseX: number, mouseY: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around borders elegantly
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Gentle interactive mouse magnetic pull
        if (mouseX !== -1000 && mouseY !== -1000) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const force = (130 - dist) / 130;
            this.x += dx * force * 0.015;
            this.y += dy * force * 0.015;
          }
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(65, Math.floor((width * height) / 22000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    let prevWidth = window.innerWidth;
    let prevHeight = window.innerHeight;

    const handleResize = () => {
      if (!canvas) return;
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // Only resize if the width changed (e.g. orientation swap) or height changed significantly.
      // This completely prevents vertical address bar collapses on mobile scroll from clearing particles!
      if (newWidth !== prevWidth || Math.abs(newHeight - prevHeight) > 120) {
        width = canvas.width = newWidth;
        height = canvas.height = newHeight;
        prevWidth = newWidth;
        prevHeight = newHeight;

        // Re-populate particles to fit new viewport dimensions
        particles.length = 0;
        const newCount = Math.min(65, Math.floor((width * height) / 22000));
        for (let i = 0; i < newCount; i++) {
          particles.push(new Particle());
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw constellation connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.26; // Faint but clearly viewable plexus lines
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.update(mouse.x, mouse.y);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Rich Cosmic Slate Background */}
      <div className="absolute inset-0 bg-zinc-950" />

      {/* Radial vignette for perfect focal styling - Moved behind canvas and glow layers */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "radial-gradient(circle, transparent 20%, rgba(9, 9, 11, 0.75) 100%)"
        }}
      />

      {/* Cosmic Aurora Shift Overlay */}
      <div 
        ref={auroraRef}
        className="aurora-layer absolute -inset-[15%] opacity-75" 
        style={{ willChange: "transform" }}
      />

      {/* Dynamic Interactive Plexus Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-90" />

      {/* Harmonious Radial Glowing Accents - Pure CSS to prevent Tailwind split errors */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "radial-gradient(circle at 12% 20%, rgba(16, 185, 129, 0.28), transparent 45%), radial-gradient(circle at 82% 12%, rgba(34, 211, 238, 0.25), transparent 40%), radial-gradient(circle at 50% 88%, rgba(59, 130, 246, 0.18), transparent 45%)"
        }}
      />

      {/* Subtle modern Grid layout - Standard CSS to guarantee visual rendering */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-[0.11]" 
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: "linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px)",
          willChange: "transform"
        }}
      />
    </div>
  );
}
