"use client";

import { useEffect, useRef } from "react";

interface ParallaxOptions {
  width: number;
  height: number;
  focalPoint: readonly [number, number];
  zoom: number;
}

export function useParallax({ width, height, focalPoint: [focalX, focalY], zoom }: ParallaxOptions) {
  const container = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = container.current;
    const photo = layer.current;
    if (!root || !photo) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let current: number | undefined;

    const update = () => {
      const rect = root.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const scrollLimit = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const start = Math.max(0, top - window.innerHeight);
      const end = Math.min(scrollLimit, top + rect.height);
      const progress = preference.matches ? .5 : end <= start ? 1 : Math.max(0, Math.min(1, (window.scrollY - start) / (end - start)));
      current = current === undefined || preference.matches || Math.abs(progress - current) < .001 ? progress : current + (progress - current) * .12;
      const scale = Math.max(rect.width / width, rect.height / height) * zoom;
      const renderedWidth = width * scale;
      const renderedHeight = height * scale;
      const travel = renderedHeight * (1 - 1 / zoom);
      photo.style.width = `${renderedWidth}px`;
      photo.style.height = `${renderedHeight}px`;
      photo.style.transform = `translate3d(${(rect.width - renderedWidth) * focalX}px, ${(rect.height - renderedHeight) * focalY + travel * (focalY - current)}px, 0)`;
      frame = current === progress ? 0 : requestAnimationFrame(update);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(root);
    observer.observe(document.body);
    preference.addEventListener("change", schedule);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      preference.removeEventListener("change", schedule);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [width, height, focalX, focalY, zoom]);

  return { container, layer };
}
