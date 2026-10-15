"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./site.module.css";

function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      <a href="https://www.linkedin.com/in/sarabarnthouse/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/linkedin.svg" alt="" width="20" height="20" />
      </a>
      <a href="https://www.instagram.com/bhousedevine/" aria-label="Instagram" target="_blank" rel="noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/instagram.svg" alt="" width="20" height="20" />
      </a>
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function handleResize() {
      const mobile = window.innerWidth < 800 || (window.innerWidth <= 1024 && window.matchMedia("(pointer: coarse)").matches);
      if (!mobile) setIsOpen(false);
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const links = header.current?.querySelectorAll<HTMLElement>("a, button");
        const visible = links ? [...links].filter((element) => element.getBoundingClientRect().width) : [];
        const first = visible[0];
        const last = visible.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first?.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <header ref={header} className={`${styles.header} ${isOpen ? styles.menuOpen : ""}`}>
      <a className={styles.skipLink} href="#page">Skip to Content</a>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.siteTitle} data-reveal="scale">SARA BARNTHOUSE</Link>
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <Link href="/" className={styles.plus} aria-label="+">+</Link>
          <SocialLinks />
        </nav>
        <button ref={toggle} className={styles.menuToggle} aria-label={isOpen ? "Close Menu" : "Open Menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)}>
          <span /><span />
        </button>
      </div>
      <nav id="mobile-navigation" className={styles.mobileNav} aria-label="Mobile navigation" inert={!isOpen}>
        <Link href="/" className={styles.menuPlus} aria-label="+">+</Link>
        <SocialLinks />
      </nav>
    </header>
  );
}
