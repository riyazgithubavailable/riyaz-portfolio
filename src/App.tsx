import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import StatsBar from './sections/StatsBar'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-bg text-text overflow-x-hidden">
      {/* Fixed grid background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,160,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,160,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <Navbar />
      <Hero />
      <StatsBar />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
