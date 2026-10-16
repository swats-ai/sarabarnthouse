import type { StaticImageData } from "next/image";
import { SectionHeading } from "./section-heading";
import { ResponsiveImage } from "./responsive-image";
import { Reveal } from "./reveal";
import styles from "./biography-section.module.css";

interface BiographySectionProps {
  introduction: string;
  biography: string;
  image: StaticImageData;
  imageAlt: string;
  ariaLabel?: string;
}

export function BiographySection({ introduction, biography, image, imageAlt, ariaLabel = "Biography" }: BiographySectionProps) {
  return (
    <section className={styles.section} aria-label={ariaLabel}>
      <div className={styles.container}>
        <div className={styles.introRow}>
          <div className={styles.introduction}><SectionHeading>{introduction}</SectionHeading></div>
          <ResponsiveImage src={image} alt={imageAlt} sizes="(max-width: 767px) 88vw, (max-width: 2724px) 39vw, 1055px" shape="double-oval" objectPosition="81.3% 53.6%" preload className={styles.portrait} />
        </div>
        <Reveal className={styles.biography}><p>{biography}</p></Reveal>
      </div>
    </section>
  );
}
