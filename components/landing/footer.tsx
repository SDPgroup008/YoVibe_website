"use client"

import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.section}>
            <h3 className={styles.brand}>YoVibe</h3>
            <p className={styles.brandDescription}>Discover where the vibe lives.</p>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#download" className={styles.link}>
                  Download
                </a>
              </li>
              <li>
                <a href="#features" className={styles.link}>
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.link}>
                
              </a>
              <a href="#" className={styles.link}>
                
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider}>
          <p>&copy; 2025 YoVibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
