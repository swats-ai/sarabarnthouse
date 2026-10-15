"use client";

import { useEffect, useRef } from "react";
import styles from "./site.module.css";

export function ParallaxBackground({ image, variant }: { image: string; variant: "landing" | "contact" }) {
  const root = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const element = root.current;
    const img = photo.current;
    if (!element || !img) return;
    let frame = 0;
    let renderedProgress: number | undefined;
    const focalX = variant === "landing" ? 0.46841511562323745 : 0.5;
    const focalY = variant === "landing" ? 0.7200450028126758 : 0.6560410025626602;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const update = () => {
      const bounds = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      const offset = bounds.top + window.scrollY;
      const preceding = Math.min(offset, viewport);
      const following = Math.min(document.body.scrollHeight - offset - bounds.height, viewport);
      const numerator = -Math.round(bounds.top) + preceding;
      const denominator = preceding + bounds.height + following - viewport;
      const progress = reduced ? 0.5 : Math.abs(numerator - denominator) < 0.5 ? 1 : Math.max(0, Math.min(1, numerator / denominator));
      renderedProgress = renderedProgress === undefined || progress - renderedProgress < 0.01
        ? progress
        : renderedProgress + (progress - renderedProgress) * 0.1;
      const scale = Math.max(bounds.width / 1920, bounds.height / 1080) / 0.85;
      const width = 1920 * scale;
      const height = 1080 * scale;
      img.style.width = `${width}px`;
      img.style.height = `${height}px`;
      img.style.left = `${(bounds.width - width) * focalX}px`;
      img.style.top = `${(bounds.height - height) * focalY + height * 0.15 * (focalY - renderedProgress)}px`;
      frame = renderedProgress === progress ? 0 : requestAnimationFrame(update);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(element);
    observer.observe(document.body);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [variant]);

  return (
    <div ref={root} className={`${styles.background} ${variant === "landing" ? styles.landingBackground : styles.contactBackground}`} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={photo} src={`/images/${image}`} alt="" width="1920" height="1080" fetchPriority={variant === "landing" ? "high" : "low"} />
    </div>
  );
}
