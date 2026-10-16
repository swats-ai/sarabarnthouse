import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";
import styles from "./responsive-image.module.css";

interface ResponsiveImageProps {
  src: StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
  shape?: "rectangle" | "double-oval";
  objectPosition?: string;
  preload?: boolean;
}

export function ResponsiveImage({ src, alt, sizes, className = "", shape = "rectangle", objectPosition = "center", preload = false }: ResponsiveImageProps) {
  return (
    <div className={`${styles.frame} ${className}`} data-shape={shape} style={{ "--image-position": objectPosition } as CSSProperties}>
      <Image src={src} alt={alt} fill sizes={sizes} preload={preload} quality={85} className={styles.image} />
    </div>
  );
}
