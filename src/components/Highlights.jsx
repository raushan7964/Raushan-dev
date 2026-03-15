import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
  whileInView: {
    transition: { staggerChildren: 0.1 },
  },
  viewport: { once: true, amount: 0.15 },
}

const fadeItem = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: 'easeOut' },
}

const highlights = [
  {
    metric: '1.8+',
    unit: 'Years',
    text: 'of professional frontend development experience',
  },
  {
    metric: '4+',
    unit: 'Projects',
    text: 'Built multiple production-ready web applications',
  },
  {
    metric: 'React',
    unit: 'Specialist',
    text: 'Specialized in React and modern UI development',
  },
  {
    metric: 'CMS',
    unit: 'Expert',
    text: 'Experience integrating headless CMS with React',
  },
]

const Highlights = () => {
  return (
    <motion.section
      id="highlights"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-7"
      {...fadeInUp}
    >
      <SectionHeading
        overline="Highlights"
        title="Developer Highlights"
        description="Quick snapshot of the value I bring to frontend teams and product workflows."
      />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        className="grid gap-5 sm:grid-cols-2"
      >
        {highlights.map((item, index) => (
          <motion.article
            key={index}
            variants={fadeItem}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="glass-card rounded-2xl p-7 group"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              0{index + 1}
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                {item.metric}
              </span>
              <span className="text-sm font-medium text-[var(--muted)]">
                {item.unit}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              {item.text}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Highlights
