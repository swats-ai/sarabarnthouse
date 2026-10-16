import type { StaticImageData } from "next/image";
import { ParallaxBackground } from "./parallax-background";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { ContactDetail, type ContactDetailProps } from "./contact-detail";
import styles from "./contact-section.module.css";

interface ContactSectionProps {
  title: string;
  image: StaticImageData;
  details: readonly ContactDetailProps[];
  id?: string;
}

export function ContactSection({ title, image, details, id = "contact" }: ContactSectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
      <ParallaxBackground src={image} focalPoint={[.5, .656]} overlay="rgb(93 130 114 / .73)" sizes="(max-width: 767px) max(118vw, 1455px), max(118vw, 140vh)" />
      <div className={styles.content}>
        <SectionHeading id={`${id}-heading`}>{title}</SectionHeading>
        <Reveal><dl className={styles.details}>{details.map((detail) => <ContactDetail key={detail.label} {...detail} />)}</dl></Reveal>
      </div>
    </section>
  );
}
