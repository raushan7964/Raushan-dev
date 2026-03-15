import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = ({ theme, onToggle }) => {
  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={onToggle}
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-card transition hover:-translate-y-0.5"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -20, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </motion.span>
    </button>
  );
};

export default ThemeToggle;
