"use client";

import React, { useEffect, useRef } from "react";

export function BackgroundFx() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
        this.vx = (Math.random() - 0.5) * 0.3; // Very slow, elegant drift
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
        this.color = Math.random() > 0.5 ? "rgba(16, 185, 129, 0.35)" : "rgba(34, 211, 238, 0.25)";
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

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
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

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.09;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.6;
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
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Rich Cosmic Slate Background */}
      <div className="absolute inset-0 bg-zinc-950" />

      {/* Cosmic Aurora Shift Overlay */}
      <div className="aurora-layer absolute -inset-[15%] opacity-55" />

      {/* Dynamic Interactive Plexus Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-60" />

      {/* Harmonious Radial Glowing Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(16,185,129,0.18),transparent_40%),radial-gradient(circle_at_82%_12%,rgba(34,211,238,0.16),transparent_38%),radial-gradient(circle_at_50%_88%,rgba(59,130,246,0.12),transparent_42%)]" />

      {/* Subtle modern Grid layout */}
      <div className="absolute inset-0 opacity-[0.09] [background-size:40px_40px] [background-image:linear-gradient(rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.15)_1px,transparent_1px)]" />

      {/* Radial vignette for perfect focal styling */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_25%,rgba(9,9,11,0.85)_100%)]" />
    </div>
  );
}

