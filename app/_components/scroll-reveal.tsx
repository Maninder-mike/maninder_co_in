import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const directionClass = `reveal-${direction}`;
  const delayStyle = delay ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <div
      className={`reveal-on-scroll ${directionClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}

