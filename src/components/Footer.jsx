import { Github, Linkedin, Heart } from 'lucide-react'

const Footer = ({ githubUrl, linkedInUrl }) => {
  return (
    <footer className="relative border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-7">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
            <span>© {new Date().getFullYear()}</span>
            <span className="font-display font-semibold text-[var(--text)]">
              Raushan Kumar
            </span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline-flex items-center gap-1">
              Built with <Heart size={12} className="text-rose-500 fill-rose-500" /> using React
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--soft)] text-[var(--muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--soft)] text-[var(--muted)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
