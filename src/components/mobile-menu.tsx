"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { SocialLinks, type SocialLink } from "./social-links";
import headerStyles from "./header.module.css";
import styles from "./mobile-menu.module.css";

interface MobileMenuProps {
  title: string;
  homeHref: string;
  socialLinks: readonly SocialLink[];
}

export function MobileMenu({ title, homeHref, socialLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();

  useEffect(() => {
    const modal = dialog.current;
    if (!modal || !isOpen) return;
    modal.showModal();
    const previous = document.body.style.overflow;
    const button = trigger.current;
    document.body.style.overflow = "hidden";
    const handleResize = () => {
      const mobile = window.matchMedia("(max-width: 799px), (pointer: coarse) and (max-width: 1024px)").matches;
      if (!mobile) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = previous;
      modal.close();
      button?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button ref={trigger} className={styles.toggle} aria-label="Open Menu" aria-expanded={isOpen} aria-controls={id} onClick={() => setIsOpen(true)}><span /><span /></button>
      <dialog ref={dialog} id={id} className={styles.dialog} aria-label="Main menu" onCancel={() => setIsOpen(false)} onClose={() => setIsOpen(false)}>
        <div className={styles.menuHeader}>
          <Link href={homeHref} className={headerStyles.title} onClick={() => setIsOpen(false)}>{title}</Link>
          <button className={styles.close} aria-label="Close Menu" onClick={() => setIsOpen(false)} autoFocus><span /><span /></button>
        </div>
        <nav aria-label="Mobile navigation"><Link href={homeHref} className={styles.homeLink} aria-label="Home" onClick={() => setIsOpen(false)}>+</Link></nav>
        <div className={styles.social}><SocialLinks links={socialLinks} size="large" /></div>
      </dialog>
    </>
  );
}
