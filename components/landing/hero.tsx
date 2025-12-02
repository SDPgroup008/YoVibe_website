"use client";

import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section
      className={styles.hero}
      
    >
      <div className={styles.container}>
        <div className={styles.yoVibeLogo}>
          <span className={styles.yo}>Yo</span>
          <span className={styles.vibe}>Vibe</span>
        </div>

        <div className={styles.funnyText} aria-hidden>

        </div>

        <h1 className={styles.heading}>
          <span className={styles.gradientBlue}>Find Your Next</span>
          <br />
          <span className={styles.gradientRed}>Vibe Plot Now</span>
        </h1>

        <p className={styles.subtitle}>
          YoVibe connects you to the venues and shows you upcoming events. Discover venues in real-time, navigate with precision, and
          experience the energy that makes every moment unforgettable.
        </p>

        <div className={styles.ctaContainer}>
          <a href="/apk/yovibe.apk" className={styles.ctaPrimary}>
            Download App
          </a>
          <a href="https://yovibe.netlify.app/" className={styles.ctaSecondary}>
            Launch Web Version
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden>
        <svg className={styles.scrollIcon} fill="none" viewBox="0 0 24 24" width="28" height="28">
          <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
