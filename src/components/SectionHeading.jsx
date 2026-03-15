import { motion } from 'framer-motion'

const SectionHeading = ({ overline, title, description }) => {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-3 font-display text-xs font-bold uppercase tracking-[0.35em] text-[var(--accent)]"
      >
        {overline}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-display text-3xl font-extrabold text-[var(--text)] md:text-4xl lg:text-[2.5rem]"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg"
      >
        {description}
      </motion.p>
      <div className="mx-auto mt-6 accent-line" />
    </div>
  )
}

export default SectionHeading
