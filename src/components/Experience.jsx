import { motion } from 'framer-motion'
import { Briefcase, Calendar, Building2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const achievements = [
  'Built headless WordPress websites using React.js for flexible content-driven architectures',
  'Integrated WordPress REST APIs to deliver dynamic frontend experiences',
  'Developed reusable UI components to improve development speed and consistency',
  'Engineered responsive layouts optimized for desktop, tablet, and mobile usability',
  'Optimized frontend performance using code splitting and targeted rendering improvements',
]

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-7"
      {...fadeInUp}
    >
      <SectionHeading
        overline="Experience"
        title="Professional Experience"
        description="Impact-driven frontend delivery for CMS and application projects in production environments."
      />

      <article className="glass-card rounded-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="border-b border-[var(--border)] bg-gradient-to-r from-[var(--accent-light)] to-transparent px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <Building2 size={20} className="text-[var(--accent)]" />
                <h3 className="font-display text-2xl font-bold">
                  Infinity Soft Systems
                </h3>
              </div>
              <p className="text-[var(--muted)] ml-8">
                Frontend Developer (React.js)
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium backdrop-blur-md">
                <Briefcase size={14} className="text-[var(--accent)]" /> 1.8 Years
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium backdrop-blur-md">
                <Calendar size={14} className="text-[var(--accent)]" /> 2024 —
                Present
              </span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="p-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Key Achievements
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={`group rounded-xl border border-[var(--border)] bg-[var(--soft)] p-4 text-sm text-[var(--muted)] transition-colors hover:border-[var(--accent)]/30 hover:text-[var(--text)] ${
                  index === achievements.length - 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent-light)] text-[10px] font-bold text-[var(--accent)]">
                  {index + 1}
                </span>
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </article>
    </motion.section>
  )
}

export default Experience
