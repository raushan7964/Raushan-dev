import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react'

const roles = [
  'Building scalable React products',
  'Crafting responsive UI systems',
  'Delivering production-ready apps',
  'Optimizing frontend performance',
]

const Hero = ({ contactEmail, linkedInUrl, githubUrl }) => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1))
        }, 55)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 30)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  const directMailtoLink = `mailto:${contactEmail}?subject=Portfolio%20Contact`

  const socialLinks = [
    { label: 'GitHub', href: githubUrl, icon: Github },
    { label: 'LinkedIn', href: linkedInUrl, icon: Linkedin },
  ]

  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-7 md:pb-28 md:pt-16"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)] backdrop-blur-md">
            <Sparkles size={13} className="animate-pulse" /> Available for
            Hire
          </span>

          <div className="space-y-5">
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[var(--accent)] via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Raushan Kumar
              </span>
            </h1>
            <div className="h-10 sm:h-12">
              <p className="font-display text-xl font-semibold text-[var(--muted)] sm:text-2xl">
                {displayed}
                <span className="inline-block w-0.5 h-6 ml-1 bg-[var(--accent)] animate-pulse align-middle" />
              </p>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Frontend Developer with 1.8+ years crafting fast, responsive, and
              maintainable React applications. I focus on clean UI architecture and
              product-quality experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="shimmer inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-accent"
            >
              <ArrowRight size={16} /> View Projects
            </a>
            <a
              href="/Raushan-Kumar-Resume.pdf"
              download
              className="glass-card inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-[var(--text)] transition-all duration-300 hover:-translate-y-1"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[var(--text)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
                  aria-label={link.label}
                >
                  <Icon size={16} className="text-[var(--accent)]" />{' '}
                  {link.label}
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          {/* Main Photo Container */}
          <div className="relative z-10 mx-auto w-full max-w-[400px] overflow-hidden rounded-[2.5rem] border-2 border-[var(--border)] bg-[var(--surface)] p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/assets/raushan.jpg"
              alt="Raushan Kumar"
              className="h-full w-full rounded-[2rem] object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -left-4 -top-4 -z-0 h-24 w-24 rounded-full bg-[var(--accent)]/10 blur-3xl animate-pulse" />
          <div className="absolute -right-4 -bottom-4 -z-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />

          {/* Floating Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="glass absolute -right-4 top-1/4 z-20 flex items-center gap-3 rounded-2xl border border-[var(--border)] p-4 shadow-card"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">Experience</p>
              <p className="text-lg font-bold">1.8+ Years</p>
            </div>
          </motion.div>

          {/* Floating Role Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="glass absolute -left-8 bottom-1/4 z-20 flex items-center gap-3 rounded-2xl border border-[var(--border)] p-4 shadow-card"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500 text-xl">
              ⚛️
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]">Expertise</p>
              <p className="text-lg font-bold">React.js</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
