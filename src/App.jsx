import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Sun,
  X,
} from 'lucide-react'

const resumeUrl = '/Raushan-Kumar-Resume.pdf'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

const summaryText =
  'React.js Developer with 1.7+ years delivering 5+ production-grade applications — including a live corporate website for Motive Software (Australia) — using React.js, Next.js, Tailwind CSS, WordPress Headless CMS, and GSAP animations. Achieved 90+ Lighthouse scores. Open to React.js / Frontend Developer roles.'

const statCards = [
  { value: 1.7, label: 'Years Experience', suffix: '+', decimals: 1 },
  { value: 5, label: 'Projects Delivered', suffix: '+', decimals: 0 },
  { value: 90, label: 'Lighthouse Score', suffix: '+', decimals: 0 },
  { value: 4, label: 'GitHub Repositories', suffix: '', decimals: 0 },
]

const skillsByCategory = [
  {
    category: 'React.js',
    items: [
      'React 18',
      'React Hooks (useState, useEffect, useRef, useCallback, useMemo)',
      'Custom Hooks',
      'React Router v6',
      'JSX',
      'SPA Architecture',
      'Context API',
      'Zustand',
      'Redux Toolkit',
      'React Query',
    ],
  },
  {
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript (basic)', 'HTML5', 'CSS3'],
  },
  {
    category: 'Styling',
    items: [
      'Tailwind CSS',
      'SCSS/SASS',
      'Bootstrap',
      'shadcn/ui',
      'GSAP Animations',
      'Responsive Design',
      'WCAG Accessibility',
    ],
  },
  {
    category: 'Next.js',
    items: [
      'Next.js 14',
      'SSR',
      'SSG',
      'Server-Side Rendering',
      'File-based Routing',
    ],
  },
  {
    category: 'Performance',
    items: [
      'Core Web Vitals',
      'Lighthouse (90+)',
      'Code Splitting',
      'Lazy Loading',
      'SEO Optimisation',
    ],
  },
  {
    category: 'Testing',
    items: [
      'Jest',
      'React Testing Library',
      'Unit Testing',
      'Component Testing',
    ],
  },
  {
    category: 'Tools',
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'Vite',
      'Webpack',
      'Vercel',
      'CI/CD',
      'Figma',
      'Postman',
      'ESLint',
      'Prettier',
      'Agile/Scrum',
    ],
  },
  {
    category: 'Backend/CMS',
    items: [
      'WordPress Headless CMS',
      'REST APIs',
      'Axios',
      'MySQL',
      'Gutenberg Blocks',
      'PHP (basic)',
    ],
  },
]

const experiences = [
  {
    company: 'Infinity Soft Systems Pvt. Ltd.',
    role: 'Junior Software Engineer',
    period: 'Nov 2024 – Present',
    location: 'Noida, UP',
    points: [
      'Built headless CMS apps (React.js + WordPress REST APIs) — 90+ Lighthouse, 35% faster loads.',
      '15+ reusable React components, custom hooks, CI/CD pipelines — deploy time 2 hrs → 15 mins.',
      'Delivered Ringway, Novo NSW, Soto, Motive Software (AU) — GSAP animations, WCAG accessibility.',
    ],
  },
  {
    company: 'Infinity Soft Systems Pvt. Ltd.',
    role: 'Frontend Developer Intern',
    period: 'Aug 2024 – Nov 2024',
    location: 'Noida, UP',
    points: [
      'Built 10+ responsive pages from Figma designs using HTML5/CSS3/JavaScript.',
      'Contributed to 2 production releases, learned Git, Agile, React.js.',
    ],
  },
]

const projects = [
  {
    title: 'Motive Software – Client Website (Production · Australia)',
    live: 'https://motivesoftware.com.au/',
    github: '',
    stack: [
      'React.js',
      'WordPress Headless CMS',
      'REST API',
      'React Router v6',
      'SCSS',
      'GSAP',
      'SEO',
      'Vercel',
    ],
    description:
      'Production corporate website for Australian client. React.js SPA consuming WordPress REST APIs. 90+ Lighthouse score, GSAP scroll animations, on-time delivery.',
  },
  {
    title: 'React E-Commerce Platform',
    live: 'https://ecommerce-react-jet.vercel.app/',
    github: 'https://github.com/raushan7964/Ecommerce-react',
    stack: [
      'React.js',
      'Vite',
      'Context API',
      'Tailwind CSS',
      'REST API',
      'React Router v6',
      'Vercel',
    ],
    description:
      'Full-featured SPA — product listing, cart, checkout, Context API state, FakeStore REST API, CI/CD on Vercel.',
  },
  {
    title: 'Employee Management System',
    live: 'https://employee-management-system-ems.vercel.app/',
    github:
      'https://github.com/raushan7964/employee-management-system-EMS',
    stack: [
      'React.js',
      'Tailwind CSS',
      'Jest',
      'React Testing Library',
      'LocalStorage',
      'Vercel',
    ],
    description:
      'Role-based auth (Admin/Employee), CRUD operations, protected routes, Jest unit tests.',
  },
  {
    title: 'Personal Developer Portfolio',
    live: 'https://raushan-dev-d17g.vercel.app/',
    github: 'https://github.com/raushan7964/Raushan-dev',
    stack: ['React.js', 'GSAP', 'Tailwind CSS', 'Vercel'],
    description:
      'Responsive portfolio with GSAP scroll animations. Lighthouse 90+.',
  },
]

const certifications = [
  {
    title: 'React.js',
    issuer: 'Namaste React | NamasteDev.com',
    link: 'https://namastedev.com/raushansharma74940/certificates/namaste-react',
  },
  {
    title: 'JavaScript (Basic)',
    issuer: 'Verified | HackerRank',
    link: 'https://www.hackerrank.com/certificates/b5fec273f256',
  },
]

const education = [
  {
    degree: 'MCA (Distance Learning)',
    details: 'Pursuing 2025–2027',
    institute: 'Lovely Professional University, Punjab',
  },
  {
    degree: 'BBA',
    details: '2021–2024',
    institute: 'L.N. Mishra College of Business Management, Muzaffarpur',
  },
]

const typewriterPhrases = [
  'Building production-grade React applications',
  'Improving performance with 90+ Lighthouse score',
  'Crafting accessible and responsive user interfaces',
]

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    const storedTheme = localStorage.getItem('raushan-theme')
    return storedTheme === 'dark' ? 'dark' : 'light'
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [typedText, setTypedText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [statValues, setStatValues] = useState(() => statCards.map(() => 0))
  const [statsStarted, setStatsStarted] = useState(false)

  const rootRef = useRef(null)
  const aboutSectionRef = useRef(null)
  const sectionRefs = useRef({})

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('raushan-theme', theme)
  }, [theme])

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex]
    const typingSpeed = isDeleting ? 45 : 85
    const holdDelay = isDeleting ? 200 : 1300

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && typedText === currentPhrase) {
        setIsDeleting(true)
        return
      }

      if (isDeleting && typedText.length === 0) {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length)
        return
      }

      setTypedText((prev) =>
        isDeleting
          ? prev.slice(0, prev.length - 1)
          : currentPhrase.slice(0, prev.length + 1)
      )
    }, typedText === currentPhrase ? holdDelay : typingSpeed)

    return () => window.clearTimeout(timeoutId)
  }, [typedText, phraseIndex, isDeleting])

  useEffect(() => {
    const sections = navItems
      .map((item) => sectionRefs.current[item.id])
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.35,
        rootMargin: '-18% 0px -48% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const aboutSection = aboutSectionRef.current

    if (!aboutSection) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(aboutSection)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!statsStarted) {
      return undefined
    }

    let animationFrame
    const duration = 1400
    const startedAt = performance.now()

    const animate = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setStatValues(statCards.map((stat) => stat.value * eased))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [statsStarted])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-animate="section"]').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  const setSectionRef = (id) => (element) => {
    sectionRefs.current[id] = element

    if (id === 'about') {
      aboutSectionRef.current = element
    }
  }

  const formatStatValue = (value, decimals, suffix) => {
    const number = decimals > 0 ? value.toFixed(decimals) : Math.round(value)
    return `${number}${suffix}`
  }

  return (
    <div
      ref={rootRef}
      className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_14%,rgba(26,86,160,0.15),transparent_36%),radial-gradient(circle_at_86%_8%,rgba(26,86,160,0.12),transparent_34%),linear-gradient(180deg,rgba(26,86,160,0.04),rgba(26,86,160,0.01)_28%,transparent_100%)]" />

      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] font-display text-sm font-semibold text-white"
            aria-label="Raushan Kumar"
          >
            RK
          </a>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--accent-soft)] text-[var(--accent)]'
                      : 'text-[var(--muted)] hover:text-[var(--accent)]'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-white"
            >
              <Download size={16} />
              Download Resume
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)]"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--muted)]"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-[var(--border)] bg-[var(--nav-bg)] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-lg px-3 py-2 text-left text-sm font-medium text-[var(--muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8" data-animate="section">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Open to Work
              </span>

              <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-[var(--title)] sm:text-5xl lg:text-6xl">
                Raushan Kumar
              </h1>

              <p className="mt-4 text-xl font-semibold text-[var(--accent)] sm:text-2xl">
                React.js Developer | Frontend Developer
              </p>

              <p className="typewriter mt-4 min-h-[2rem] text-base text-[var(--muted)] sm:text-lg">
                {typedText}
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Building high-performance, accessible interfaces with React.js,
                Next.js, and modern frontend tooling for production-grade
                delivery.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="mailto:raushankumar74940@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Mail size={16} />
                  Email
                </a>
                <a
                  href="https://github.com/raushan7964"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/raushan-kumar-147a47233/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(26,86,160,0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_32px_-16px_rgba(26,86,160,0.95)]"
              >
                <Download size={17} />
                Download Resume PDF
              </a>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold text-[var(--title)] sm:text-xl">
                Quick Info
              </h2>
              <div className="mt-6 space-y-4 text-sm text-[var(--muted)] sm:text-base">
                <p>
                  <span className="font-semibold text-[var(--title)]">Location:</span>{' '}
                  Noida, India
                </p>
                <p>
                  <span className="font-semibold text-[var(--title)]">Email:</span>{' '}
                  raushankumar74940@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-[var(--title)]">Phone:</span>{' '}
                  +91-7279897364
                </p>
                <p>
                  <span className="font-semibold text-[var(--title)]">Portfolio:</span>{' '}
                  <a
                    href="https://raushan-dev-d17g.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    raushan-dev-d17g.vercel.app
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          ref={setSectionRef('about')}
          className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
          data-animate="section"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-7 w-1.5 rounded-full bg-[var(--accent)]" />
            <h2 className="font-display text-2xl font-semibold text-[var(--title)] sm:text-3xl">
              About
            </h2>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {summaryText}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map((stat, index) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
              >
                <p className="text-2xl font-bold text-[var(--accent)] sm:text-3xl">
                  {formatStatValue(statValues[index], stat.decimals, stat.suffix)}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          ref={setSectionRef('skills')}
          className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
          data-animate="section"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-7 w-1.5 rounded-full bg-[var(--accent)]" />
            <h2 className="font-display text-2xl font-semibold text-[var(--title)] sm:text-3xl">
              Skills
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {skillsByCategory.map((group) => (
              <article
                key={group.category}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--title)]">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-1 text-xs font-medium text-[var(--muted)] sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          ref={setSectionRef('experience')}
          className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
          data-animate="section"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-7 w-1.5 rounded-full bg-[var(--accent)]" />
            <h2 className="font-display text-2xl font-semibold text-[var(--title)] sm:text-3xl">
              Work Experience
            </h2>
          </div>

          <div className="relative pl-6 before:absolute before:bottom-0 before:left-1 before:top-1 before:w-[2px] before:bg-[var(--border)] sm:pl-8">
            {experiences.map((experience) => (
              <article key={experience.role} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[1.65rem] top-2 h-3.5 w-3.5 rounded-full border-4 border-white bg-[var(--accent)] dark:border-slate-900 sm:-left-[2.14rem]" />
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-[var(--title)]">
                    {experience.role}
                  </h3>
                  <p className="mt-1 font-medium text-[var(--accent)]">
                    {experience.company}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {experience.period} | {experience.location}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="projects"
          ref={setSectionRef('projects')}
          className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
          data-animate="section"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-7 w-1.5 rounded-full bg-[var(--accent)]" />
            <h2 className="font-display text-2xl font-semibold text-[var(--title)] sm:text-3xl">
              Projects
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-card rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_32px_-18px_rgba(15,23,42,0.5)] sm:p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--title)]">
                  {project.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-4 min-h-[3.25rem] text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="certifications"
          ref={setSectionRef('certifications')}
          className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
          data-animate="section"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-7 w-1.5 rounded-full bg-[var(--accent)]" />
            <h2 className="font-display text-2xl font-semibold text-[var(--title)] sm:text-3xl">
              Certifications
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((certificate) => (
              <article
                key={certificate.title}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--title)]">
                  {certificate.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)] sm:text-base">
                  {certificate.issuer}
                </p>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
          data-animate="section"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-7 w-1.5 rounded-full bg-[var(--accent)]" />
            <h2 className="font-display text-2xl font-semibold text-[var(--title)] sm:text-3xl">
              Education
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.degree}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--title)]">
                  {item.degree}
                </h3>
                <p className="mt-2 text-sm text-[var(--accent)] sm:text-base">
                  {item.details}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)] sm:text-base">
                  {item.institute}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          ref={setSectionRef('contact')}
          className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
          data-animate="section"
        >
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center sm:p-10">
            <h2 className="font-display text-3xl font-semibold text-[var(--title)] sm:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--muted)] sm:text-base">
              I am open to React.js and Frontend Developer opportunities across
              India.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:raushankumar74940@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a
                href="tel:+917279897364"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Phone size={16} />
                +91-7279897364
              </a>
              <a
                href="https://www.linkedin.com/in/raushan-kumar-147a47233/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/raushan7964"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-7 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <p className="font-display text-lg font-semibold text-[var(--title)]">
              Raushan Kumar
            </p>
            <p className="text-sm text-[var(--muted)]">
              React.js Developer | Frontend Developer
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--muted)] md:justify-end">
            <a href="mailto:raushankumar74940@gmail.com" className="hover:text-[var(--accent)]">
              Email
            </a>
            <a
              href="https://github.com/raushan7964"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent)]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/raushan-kumar-147a47233/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>
            <a
              href="https://raushan-dev-d17g.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--accent)]"
            >
              Portfolio
            </a>
          </div>
        </div>

        <p className="border-t border-[var(--border)] py-3 text-center text-xs text-[var(--muted)] sm:text-sm">
          © 2025 Raushan Kumar. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
