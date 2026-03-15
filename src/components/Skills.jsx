import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const skills = {
  Frontend: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  Styling: ['Tailwind CSS', 'SCSS / Sass', 'Responsive Design', 'Framer Motion'],
  Tools: ['Git & GitHub', 'Postman', 'VS Code', 'Chrome DevTools'],
  'CMS / Backend': ['WordPress (Headless)', 'REST APIs', 'EmailJS'],
}

const categoryIcons = {
  Frontend: '⚛️',
  Styling: '🎨',
  Tools: '🛠️',
  'CMS / Backend': '🔌',
}

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-7"
      {...fadeInUp}
    >
      <SectionHeading
        overline="Skills"
        title="Tech Stack"
        description="A focused toolkit for building reliable frontend products and modern UI systems."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <motion.article
            key={category}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="glass-card rounded-2xl p-7 group"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{categoryIcons[category]}</span>
              <h3 className="font-display text-xl font-semibold">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {categorySkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-[var(--border)] bg-[var(--soft)] px-3.5 py-2 text-sm font-medium text-[var(--text)] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
