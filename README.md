# Raushan Kumar Portfolio

Modern personal developer portfolio built with React.js, Tailwind CSS, and Framer Motion.

## Features

- Dark/light theme toggle with persisted preference
- Smooth entrance and hover animations via Framer Motion
- Responsive sections for hero, about, skills, projects, experience, and contact
- Project cards with image, stack, and links
- Contact form integrated with EmailJS

## Setup

```bash
npm install
npm run dev
```

## EmailJS Configuration

Copy `.env.example` to `.env` and fill in your EmailJS values:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
VITE_CONTACT_EMAIL=you@example.com
VITE_GITHUB_URL=https://github.com/your-username
VITE_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
```

The contact form reads these values at runtime.

## Build for Production

```bash
npm run build
npm run preview
```

## Notes

- Update GitHub, LinkedIn, live project URLs, and contact email in `src/App.jsx`.
- Replace `public/Raushan-Kumar-Resume.pdf` with your actual resume.
