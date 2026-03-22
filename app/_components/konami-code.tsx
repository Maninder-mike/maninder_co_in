"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

function createParticle(x: number, y: number): HTMLDivElement {
  const particle = document.createElement("div");
  const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = Math.random() * 10 + 5;
  const angle = Math.random() * Math.PI * 2;
  const velocity = Math.random() * 6 + 2;
  const vx = Math.cos(angle) * velocity;
  const vy = Math.sin(angle) * velocity - 3;

  Object.assign(particle.style, {
    position: "fixed",
    left: `${x}px`,
    top: `${y}px`,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: Math.random() > 0.5 ? "50%" : "2px",
    backgroundColor: color,
    pointerEvents: "none",
    zIndex: "99999",
    transform: `rotate(${Math.random() * 360}deg)`,
  });

  document.body.appendChild(particle);

  let posX = x;
  let posY = y;
  let velocityX = vx;
  let velocityY = vy;
  let opacity = 1;

  const animate = () => {
    posX += velocityX;
    posY += velocityY;
    velocityY += 0.15; // gravity
    opacity -= 0.015;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.opacity = `${opacity}`;

    if (opacity > 0) {
      requestAnimationFrame(animate);
    } else {
      particle.remove();
    }
  };

  requestAnimationFrame(animate);
  return particle;
}

export function KonamiCode() {
  const indexRef = useRef(0);
  const [triggered, setTriggered] = useState(false);

  const burst = useCallback(() => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    for (let i = 0; i < 80; i++) {
      setTimeout(() => createParticle(cx, cy), i * 15);
    }
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const expected = KONAMI_SEQUENCE[indexRef.current];
      if (e.key === expected) {
        indexRef.current++;
        if (indexRef.current === KONAMI_SEQUENCE.length) {
          indexRef.current = 0;
          setTriggered(true);
          burst();
          setTimeout(() => setTriggered(false), 4000);
        }
      } else {
        indexRef.current = 0;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [burst]);

  if (!triggered) return null;

  return (
    <div className="fixed bottom-8 left-1/2 z-[99999] -translate-x-1/2 animate-slide-up">
      <div className="rounded-full border border-zinc-200 bg-white/90 px-6 py-3 shadow-2xl backdrop-blur-xl dark:border-zinc-700 dark:bg-zinc-900/90">
        <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
          🎮 You found the secret! You&apos;re a true power user.
        </p>
      </div>
    </div>
  );
}
