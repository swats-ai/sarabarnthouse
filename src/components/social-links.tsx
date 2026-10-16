import { SocialIcon, type SocialPlatform } from "./social-icon";
import styles from "./social-links.module.css";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export function SocialLinks({ links, size = "normal" }: { links: readonly SocialLink[]; size?: "normal" | "large" }) {
  return (
    <div className={styles.links} data-size={size}>
      {links.map(({ platform, label, href }) => (
        <a key={platform} href={href} aria-label={label} target="_blank" rel="noreferrer"><SocialIcon platform={platform} /></a>
      ))}
    </div>
  );
}
