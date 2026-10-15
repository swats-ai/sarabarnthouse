import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Motion } from "@/components/motion";
import { ParallaxBackground } from "@/components/parallax-background";
import styles from "@/components/site.module.css";

export const metadata: Metadata = { title: "ABOUT — Sara Barnthouse" };

export default function AboutPage() {
  return (
    <Motion>
      <Header />
      <main id="page" className={styles.about}>
        <section className={styles.biography} aria-label="About Sara Barnthouse">
          <div className={`${styles.grid} ${styles.biographyGrid}`}>
            <div className={styles.introduction}>
              <h2 data-reveal="scale">A dynamic and authentic mom. Friend. Daughter and talent representative based in Los Angeles, known for her friendly demeanor and keen industry insights.</h2>
            </div>
            <div className={styles.portrait}>
              <svg className={styles.clipDefinitions} aria-hidden="true" width="0" height="0">
                <defs>
                  <clipPath id="portrait-shape" clipPathUnits="objectBoundingBox">
                    <path d="M0 0.33 A0.5 0.33, 0 0 1, 1 0.33 M1 0.33 A0.5 0.33, 0 0 1, 0 0.33 M0 0.67 A0.5 0.33, 0 0 1, 1 0.67 M1 0.67 A0.5 0.33, 0 0 1, 0 0.67" />
                  </clipPath>
                </defs>
              </svg>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/portrait.jpg" alt="Sara Barnthouse relaxing in a bathtub, wearing sunglasses and a white blouse" width="2500" height="2510" fetchPriority="high" />
            </div>
            <div className={styles.description}>
              <p data-reveal="fade">As the owner of DeVine Reps, she specializes in connecting creative talent with opportunities in the entertainment industry. Sara’s reputation for honesty and enthusiasm has made her a trusted partner for many clients, including notable projects with clients such as Lexus, Beats by Dre, Burger King, Nike and mane more. With a commitment to detail and a passion for fostering artistic innovation and boosting the up and coming, Sara continues to play a vital role in shaping the production landscape both on the east and west coast.</p>
            </div>
          </div>
        </section>
        <section className={styles.contact} aria-labelledby="contact-title">
          <ParallaxBackground image="contact.png" variant="contact" />
          <div className={`${styles.grid} ${styles.contactGrid}`}>
            <div className={styles.contactTitle}><h2 id="contact-title" data-reveal="scale">Get In Touch.</h2></div>
            <div className={styles.hours}><p data-reveal="fade"><strong>Hours</strong><br />Monday–Friday<br />9am–4pm</p></div>
            <div className={styles.phone}><p data-reveal="fade"><strong>Phone</strong><br /><a href="tel:3103843037">(310) 384-3037</a></p></div>
            <div className={styles.email}><p data-reveal="fade"><strong>Email</strong><br /><a href="mailto:sara@devinereps.com?">sara@devinereps.com</a></p></div>
          </div>
        </section>
      </main>
    </Motion>
  );
}
