"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

/**
 * Fade + slight upward slide when scrolled into view, once. Native
 * IntersectionObserver + CSS transitions — no animation library.
 * prefers-reduced-motion: reduce shows the final state immediately
 * (see the motion-reduce: utilities below).
 */
export default function Reveal({ children, delay = 0, className, y = 16 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-[550ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:!transition-none motion-reduce:!transform-none motion-reduce:opacity-100",
        visible ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        transitionDelay: `${delay * 1000}ms`,
        transform: visible ? "translateY(0px)" : `translateY(${y}px)`
      }}
    >
      {children}
    </div>
  );
}
