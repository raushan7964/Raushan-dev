import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

const Header = ({ theme, toggleTheme, mounted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id)
          return
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-[var(--border)] shadow-card'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-7">
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-wide"
        >
          Raushan<span className="text-[var(--accent)]">.</span>dev
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--muted)] hover:text-[var(--text)]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-[var(--accent)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {mounted && <ThemeToggle theme={theme} onToggle={toggleTheme} />}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition hover:border-[var(--accent)] md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col border-l border-[var(--border)] bg-[var(--bg)] p-6 md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-lg font-bold">
                  Raushan<span className="text-[var(--accent)]">.</span>dev
                </span>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-[var(--accent-light)] text-[var(--accent)]'
                        : 'text-[var(--muted)] hover:bg-[var(--soft)] hover:text-[var(--text)]'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
