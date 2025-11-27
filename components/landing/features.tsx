"use client"

import styles from "./features.module.css"

export default function Features() {
  const features = [
    {
      icon: "📍",
      title: "Real-Time Discovery",
      description: "Find venues around you instantly. See what's happening, where it's happening.",
    },
    {
      icon: "🗺️",
      title: "Smart Navigation",
      description: "Get precise directions to your chosen venue with distance calculations.",
    },
    {
      icon: "⚡",
      title: "Live Vibes",
      description: "Experience venues with real-time updates and venue details at your fingertips.",
    },
    {
      icon: "🎯",
      title: "Personalized",
      description: "Set your location and explore venues tailored to your journey.",
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Powerful Features</h2>
          <p className={styles.subtitle}>Everything you need to find your next favorite place</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
