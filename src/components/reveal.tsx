"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./reveal.module.css";

interface RevealProps {
  children: ReactNode;
  effect?: "fade" | "scale";
  className?: string;
}

export function Reveal({ children, effect = "fade", className = "" }: RevealProps) {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = element.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.dataset.visible = "true";
        observer.disconnect();
      }
    }, { threshold: 0.05 });
    node.dataset.visible = "false";
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={element} className={`${styles.reveal} ${className}`} data-effect={effect}>{children}</div>;
}
