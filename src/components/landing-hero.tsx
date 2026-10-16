import Link from "next/link";
import type { StaticImageData } from "next/image";
import { ParallaxBackground } from "./parallax-background";
import { Reveal } from "./reveal";
import styles from "./landing-hero.module.css";

interface LandingHeroProps {
  title: string;
  image: StaticImageData;
  href: string;
  linkLabel: string;
  id?: string;
}

export function LandingHero({ title, image, href, linkLabel, id = "landing" }: LandingHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby={`${id}-title`}>
      <ParallaxBackground src={image} focalPoint={[.4684, .72]} overlay="rgb(0 0 0 / .53)" sizes="(max-width: 767px) max(118vw, 1661px), 118vw" preload />
      <div className={styles.content}>
        <Reveal effect="scale"><h1 id={`${id}-title`}>{title}</h1></Reveal>
        <Link href={href} className={styles.enter}>{linkLabel}</Link>
      </div>
    </section>
  );
}
