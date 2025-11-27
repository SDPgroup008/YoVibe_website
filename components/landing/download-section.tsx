"use client"

import styles from "./download-section.module.css"

export default function DownloadSection() {
  return (
    <section id="download" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title}>Get YoVibe Now</h2>

          <p className={styles.description}>
            Available on mobile and web. Start discovering venues and experiencing the vibe today.
          </p>

          <div className={styles.grid}>
            <a href="/apk/yovibe.apk" download className={`${styles.downloadCard} ${styles.androidCard}`}>
              <div className={styles.cardIcon}>📱</div>
              <h3 className={styles.cardTitle}>Android App</h3>
              <p className={styles.cardSubtitle}>Download APK</p>
              <div className={styles.cardFooter}>Direct download available</div>
            </a>

            <a
              href="https://yovibe.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.downloadCard} ${styles.webCard}`}
            >
              <div className={styles.cardIcon}>🌐</div>
              <h3 className={styles.cardTitle}>Web Version</h3>
              <p className={styles.cardSubtitle}>Access online</p>
              <div className={styles.cardFooter}>Works on any device</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
