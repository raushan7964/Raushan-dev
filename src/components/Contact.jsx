import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Phone,
} from 'lucide-react'
import SectionHeading from './SectionHeading'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const Contact = ({ contactEmail, linkedInUrl, githubUrl, phoneNumber }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const emailConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  }
  const hasEmailConfig = Boolean(
    emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey
  )

  const getMailtoLink = (prefill = {}) => {
    const params = new URLSearchParams({ subject: 'Portfolio Contact' })
    const messageLines = []
    const senderName = prefill.name?.trim()
    const senderEmail = prefill.email?.trim()
    const senderMessage = prefill.message?.trim()

    if (senderName) messageLines.push(`Name: ${senderName}`)
    if (senderEmail) messageLines.push(`Email: ${senderEmail}`)
    if (senderMessage) {
      messageLines.push('')
      messageLines.push('Message:')
      messageLines.push(senderMessage)
    }
    if (messageLines.length > 0) params.set('body', messageLines.join('\n'))

    return `mailto:${contactEmail}?${params.toString()}`
  }

  const directMailtoLink = getMailtoLink()
  const fallbackMailtoLink = getMailtoLink(formData)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!hasEmailConfig) {
      setStatus({
        state: 'error',
        message:
          'EmailJS keys are missing. Add VITE_EMAILJS_* values in .env or use "Send via Email App".',
      })
      return
    }
    try {
      setStatus({ state: 'loading', message: 'Sending your message...' })
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
        },
        emailConfig.publicKey
      )
      setStatus({
        state: 'success',
        message: 'Thanks for reaching out! I will get back to you shortly.',
      })
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus({
        state: 'error',
        message:
          'Message failed to send. Please try again or contact me directly via email.',
      })
    }
  }

  const statusColor =
    status.state === 'success'
      ? 'text-emerald-500'
      : status.state === 'error'
        ? 'text-rose-500'
        : 'text-[var(--muted)]'

  const contactItems = [
    {
      label: 'Email',
      icon: Mail,
      href: directMailtoLink,
      isExternal: false,
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      href: linkedInUrl,
      isExternal: true,
    },
    {
      label: 'GitHub',
      icon: Github,
      href: githubUrl,
      isExternal: true,
    },
    {
      label: 'Phone',
      icon: Phone,
      href: `tel:${phoneNumber}`,
      isExternal: false,
    },
  ]

  return (
    <motion.section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-20 pb-28 sm:px-7"
      {...fadeInUp}
    >
      <SectionHeading
        overline="Contact"
        title="Let's Build Something Together"
        description="Open to frontend roles, freelance work, and React-focused collaborations."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Sidebar */}
        <article className="glass-card space-y-4 rounded-2xl p-6 lg:col-span-2">
          <h3 className="font-display text-xl font-semibold">
            Contact Details
          </h3>
          <p className="text-sm text-[var(--muted)]">
            I usually respond within 24 hours for project and hiring
            discussions.
          </p>

          {contactItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noreferrer' : undefined}
                className="flex items-center justify-between gap-3 rounded-xl border border-[var(--border)] bg-[var(--soft)] p-4 text-sm text-[var(--text)] transition-all duration-200 hover:border-[var(--accent)] hover:-translate-y-0.5"
              >
                <span className="inline-flex items-center gap-3">
                  <Icon size={16} className="text-[var(--accent)]" />{' '}
                  {item.label}
                </span>
                <ArrowUpRight size={15} className="text-[var(--muted)]" />
              </a>
            )
          })}

          <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--soft)] p-4 text-sm text-[var(--text)]">
            <MapPin size={16} className="text-[var(--accent)]" /> Noida, India
          </div>
        </article>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="glass-card space-y-5 rounded-2xl p-6 lg:col-span-3"
        >
          <h3 className="font-display text-xl font-semibold">
            Send a Message
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm">
              <span className="text-[var(--muted)] font-medium">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--soft)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-glow-accent/20"
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-[var(--muted)] font-medium">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--soft)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-glow-accent/20"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm">
            <span className="text-[var(--muted)] font-medium">Message</span>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Tell me about your project or opportunity..."
              className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--soft)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-glow-accent/20"
            />
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              disabled={status.state === 'loading'}
              className="shimmer inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-glow-accent disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send size={16} />{' '}
              {status.state === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            <a
              href={fallbackMailtoLink}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--soft)] px-5 py-2.5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
            >
              <Mail size={16} /> Send via Email App
            </a>
          </div>

          {status.message && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-sm font-medium ${statusColor}`}
            >
              {status.message}
            </motion.p>
          )}
        </form>
      </div>
    </motion.section>
  )
}

export default Contact
