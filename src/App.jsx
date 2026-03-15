import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Highlights from './components/Highlights'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { useTheme } from './hooks/useTheme'

const contactEmail =
  import.meta.env.VITE_CONTACT_EMAIL || 'raushan.frontend.dev@gmail.com'
const linkedInUrl =
  import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/'
const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/'
const phoneNumber = import.meta.env.VITE_PHONENUMBER || '7279897364'

function App() {
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      {/* Background gradient orbs */}
      <div className="gradient-orbs" />

      <Header theme={theme} toggleTheme={toggleTheme} mounted={mounted} />

      <main className="relative z-10 pt-24">
        <Hero
          contactEmail={contactEmail}
          linkedInUrl={linkedInUrl}
          githubUrl={githubUrl}
        />
        <div className="section-divider max-w-4xl" />
        <About />
        <div className="section-divider max-w-4xl" />
        <Skills />
        <div className="section-divider max-w-4xl" />
        <Highlights />
        <div className="section-divider max-w-4xl" />
        <Projects />
        <div className="section-divider max-w-4xl" />
        <Experience />
        <div className="section-divider max-w-4xl" />
        <Contact
          contactEmail={contactEmail}
          linkedInUrl={linkedInUrl}
          githubUrl={githubUrl}
          phoneNumber={phoneNumber}
        />
      </main>

      <Footer githubUrl={githubUrl} linkedInUrl={linkedInUrl} />
      <ScrollToTop />
    </div>
  )
}

export default App
