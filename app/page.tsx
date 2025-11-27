import Hero from "../components/landing/hero"
import Features from "../components/landing/features"
import DownloadSection from "../components/landing/download-section"
import Footer from "../components/landing/footer"

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <DownloadSection />
        <Footer />
      </div>
    </main>
  )
}
