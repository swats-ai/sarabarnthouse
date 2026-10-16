import Link from "next/link";
import { Reveal } from "./reveal";
import { SocialLinks, type SocialLink } from "./social-links";
import { MobileMenu } from "./mobile-menu";
import styles from "./header.module.css";

interface HeaderProps {
  title: string;
  socialLinks: readonly SocialLink[];
  homeHref?: string;
  contentId?: string;
}

export function Header({ title, socialLinks, homeHref = "/", contentId = "page" }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href={`#${contentId}`}>Skip to Content</a>
      <div className={styles.inner}>
        <Reveal effect="scale"><Link href={homeHref} className={styles.title}>{title}</Link></Reveal>
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <Link href={homeHref} className={styles.homeLink} aria-label="Home">+</Link>
          <SocialLinks links={socialLinks} />
        </nav>
        <MobileMenu title={title} homeHref={homeHref} socialLinks={socialLinks} />
      </div>
    </header>
  );
}
