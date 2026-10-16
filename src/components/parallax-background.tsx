"use client";

import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";
import { useParallax } from "@/hooks/use-parallax";
import styles from "./parallax-background.module.css";

interface ParallaxBackgroundProps {
  src: StaticImageData;
  sizes: string;
  focalPoint?: readonly [number, number];
  overlay?: string;
  zoom?: number;
  preload?: boolean;
}

export function ParallaxBackground({ src, sizes, focalPoint = [.5, .5], overlay = "transparent", zoom = 1 / .85, preload = false }: ParallaxBackgroundProps) {
  const { container, layer } = useParallax({ width: src.width, height: src.height, focalPoint, zoom });
  return (
    <div ref={container} className={styles.background} aria-hidden="true" style={{ "--overlay": overlay } as CSSProperties}>
      <div ref={layer} className={styles.layer}>
        <Image src={src} alt="" fill sizes={sizes} preload={preload} quality={85} className={styles.image} />
      </div>
    </div>
  );
}
