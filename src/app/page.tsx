import Link from "next/link";
import { Motion } from "@/components/motion";
import { ParallaxBackground } from "@/components/parallax-background";
import styles from "@/components/site.module.css";

export default function LandingPage() {
  return (
    <Motion>
      <main className={styles.landing}>
        <ParallaxBackground image="hero.png" variant="landing" />
        <div className={`${styles.grid} ${styles.landingGrid}`}>
          <div className={styles.landingTitle}>
            <h1 data-reveal="scale"> Sara Barnthouse | Agent</h1>
          </div>
          <Link href="/home" className={styles.enter}>(ENTER)</Link>
        </div>
      </main>
    </Motion>
  );
}
