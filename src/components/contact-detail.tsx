import styles from "./contact-section.module.css";

export interface ContactDetailProps {
  label: string;
  lines: readonly string[];
  href?: string;
}

export function ContactDetail({ label, lines, href }: ContactDetailProps) {
  return (
    <div className={styles.detail}>
      <dt>{label}</dt>
      <dd>{href ? <a href={href}>{lines.join(" ")}</a> : lines.map((line) => <span key={line}>{line}</span>)}</dd>
    </div>
  );
}
