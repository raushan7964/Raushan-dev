import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import SectionHeading from './SectionHeading'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
  whileInView: {
    transition: { staggerChildren: 0.12 },
  },
  viewport: { once: true, amount: 0.1 },
}

const fadeItem = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const projects = [
  {
    title: 'Employee Management Dashboard',
    image: '/projects/employee-management.png',
    description:
      'A professional dashboard for monitoring team performance and task progress with a clean, modern UI.',
    features: [
      'Task Tracking',
      'Employee Distribution',
      'Status Management',
      'Responsive Dashboard',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    github: import.meta.env.VITE_EMPLOYEE_DASHBORD_PROJECT_GITHUB_URL || 'https://github.com/raushan7964/employee-management-system-EMS',
    live: 'https://employee-management-system-ems-three.vercel.app',
    color: 'from-purple-500/20 to-blue-500/20',
  },
  {
    title: 'E-Shop E-commerce Platform',
    image: '/projects/ecommerce-shop.png',
    description:
      'A high-performance e-commerce storefront with a sleek product discovery experience and modern design.',
    features: ['Premium Hero Section', 'Product Filtering', 'Category Browse', 'Modern UI/UX'],
    tech: ['React.js', 'REST APIs', 'Tailwind CSS'],
    github: import.meta.env.VITE_ECOMMERCE_PROJECT_GITHUB_URL || 'https://github.com/raushan7964/Ecommerce-react',
    live: 'https://ecommerce-react-jet.vercel.app/',
    color: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'Developer Portfolio',
    image: '/projects/developer-portfolio.png',
    description:
      'A stunning, glassmorphism-based portfolio (this very site!) focused on performance, dynamic UI, and professional developer branding.',
    features: ['Typing Animation', 'Glassmorphism UI', 'Scroll Spy Nav', 'Mobile First'],
    tech: ['React.js', 'Framer Motion', 'Tailwind CSS'],
    github: import.meta.env.VITE_PORTFOLIO_PROJECT_GITHUB_URL || 'https://github.com/raushan7964/portfolio',
    live: 'https://raushankumar-portfolio.vercel.app/',
    color: 'from-teal-500/20 to-emerald-500/20',
  },
]

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-7"
      {...fadeInUp}
    >
      <SectionHeading
        overline="Projects"
        title="Featured Work"
        description="Real-world frontend applications built with a focus on clean code and high-quality user experiences."
      />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="grid gap-8 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeItem}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="glass-card group overflow-hidden rounded-3xl"
          >
            {/* Image */}
            <div className="project-image-container relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`}
              />
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)]/90 via-transparent to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100 backdrop-blur-md">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105 active:scale-95"
                >
                  <ArrowUpRight size={18} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md shadow-lg transition hover:scale-105 active:scale-95"
                >
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-5 p-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-[var(--accent)]">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>

              {/* Features as small pills */}
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-[var(--border)] bg-[var(--soft)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--muted)]"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border)]">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 text-xs font-bold text-[var(--accent)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> {tech}
                  </span>
                ))}
              </div>

              {/* CTA for mobile visibility if hover isn't possible */}
              <div className="flex items-center gap-4 pt-4 md:hidden">
                 <a href={project.live} className="text-sm font-bold text-[var(--accent)] underline underline-offset-4">Live Demo</a>
                 <a href={project.github} className="text-sm font-bold text-[var(--muted)] underline underline-offset-4">GitHub</a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Projects
