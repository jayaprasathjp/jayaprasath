"use client";

import React, { useRef, useState } from "react";

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tiltMax?: number;
  glowColor?: string;
  glowSize?: number;
}

export function InteractiveCard({
  children,
  tiltMax = 12,
  glowColor = "rgba(16, 185, 129, 0.15)", // Default emerald glow
  glowSize = 300,
  className = "",
  style = {},
  ...props
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y });

    // 3D Tilt calculation
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;

    const rotateX = normalizedY * -tiltMax;
    const rotateY = normalizedX * tiltMax;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const card = cardRef.current;
    if (!card) return;

    // Reset 3D Tilt
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-300 ease-out ${className}`}
      style={{
        ...style,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      {...props}
    >
      {/* Spotlight/Glow overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
          style={{
            background: `radial-gradient(${glowSize}px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
            zIndex: 1,
          }}
        />
      )}

      <div className="relative z-10" style={{ transform: "translateZ(1px)" }}>
        {children}
      </div>
    </div>
  );
}
