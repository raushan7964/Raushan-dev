import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const focusAreas = [
  'React frontend architecture for scalable products',
  'Reusable UI components and design consistency',
  'Performance optimization and faster user journeys',
  'API integration with clean data handling flows',
]

const About = () => {
  return (
    <motion.section
      id="about"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-7"
      {...fadeInUp}
    >
      <SectionHeading
        overline="About"
        title="React Frontend Specialist Focused on Scale and Speed"
        description="I build frontend applications that balance clean architecture, strong usability, and measurable performance improvements."
      />

      <div className="grid gap-6 md:grid-cols-3">
        <article className="glass-card rounded-2xl p-7 md:col-span-2">
          <div className="accent-line mb-5" />
          <h3 className="font-display text-xl font-semibold">
            Professional Summary
          </h3>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            I am a frontend developer with 1.8 years of experience building
            production-ready applications with React.js and Next.js. My work
            includes dashboard systems, CMS-driven websites, and
            business-facing web interfaces with API-first architecture.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            I specialize in React frontend development with a strong focus on
            scalable component systems, reusable UI patterns, performance
            optimization, and responsive design quality across devices.
          </p>
        </article>

        <article className="glass-card rounded-2xl p-7">
          <div className="accent-line mb-5" />
          <h3 className="font-display text-xl font-semibold">
            Core Focus Areas
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm text-[var(--muted)]">
            {focusAreas.map((area) => (
              <li key={area} className="flex items-start gap-2.5">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-[var(--accent)]"
                />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </motion.section>
  )
}

export default About
