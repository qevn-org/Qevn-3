'use client'

import { useState } from 'react'
import InnerPageLayout from '@/components/layout/InnerPageLayout'
import Button from '@/components/ui/Button'
import { staticPageSeo } from '@/lib/seoData'
import { useVisitorIntelligence } from '@/components/providers/VisitorIntelligenceProvider'

const seo = staticPageSeo['contact']

export default function ContactPage() {
  const { trackLeadSubmit } = useVisitorIntelligence()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Telemetry Sync
    trackLeadSubmit({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      inquiry_type: 'Contact Inquiry'
    })

    setSubmitted(true)
  }

  return (
    <InnerPageLayout>
      <section className="relative overflow-hidden pb-32 lg:pb-44 pt-[calc(var(--layout-chrome-top,104px)+2.5rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+3.5rem)]">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,240,75,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Contact Form */}
            <div className="lg:col-span-7">
              <span
                className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
                style={{ color: 'var(--accent-primary)' }}
              >
                Get in Touch
              </span>
              <h1
                className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.04em] mb-6"
                style={{ color: 'var(--text-primary)' }}
              >
                Let&apos;s automate your operations.
              </h1>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-xl text-text-muted">
                Have a manual bottleneck you want to eliminate? Send us a message and our team will get back to you with custom architecture options within 24 hours.
              </p>

              {submitted ? (
                <div
                  className="rounded-2xl p-8 border border-accent-primary/20 text-center"
                  style={{ backgroundColor: 'rgba(200,240,75,0.03)' }}
                >
                  <p className="font-display text-xl font-bold mb-2 text-text-primary">
                    Message Sent Successfully
                  </p>
                  <p className="text-sm text-text-muted">
                    Thank you for reaching out. We will review your operational requirements and connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-xs tracking-wider uppercase mb-2 text-text-muted">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 focus:border-accent-primary/30 outline-none rounded-xl px-4 py-3 text-sm text-text-primary transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs tracking-wider uppercase mb-2 text-text-muted">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 focus:border-accent-primary/30 outline-none rounded-xl px-4 py-3 text-sm text-text-primary transition-all duration-200"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs tracking-wider uppercase mb-2 text-text-muted">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-accent-primary/30 outline-none rounded-xl px-4 py-3 text-sm text-text-primary transition-all duration-200"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs tracking-wider uppercase mb-2 text-text-muted">
                      Automation Needs & Goals
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-accent-primary/30 outline-none rounded-xl px-4 py-3 text-sm text-text-primary transition-all duration-200 resize-none"
                      placeholder="Tell us about the manual workflows or pipelines you want to automate..."
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Right Side: Social Connection Block */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div
                className="rounded-2xl p-8 border border-white/[0.05]"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.01), rgba(200,240,75,0.02))'
                }}
              >
                <h2 className="font-display text-xl font-bold tracking-[-0.02em] mb-3 text-text-primary">
                  Connect With QEVN
                </h2>
                <p className="text-sm leading-relaxed mb-8 text-text-muted">
                  Follow our journey, insights, and latest AI automation innovations.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/company/qevn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-xl border border-white/[0.03] p-4 transition-all duration-200 hover:border-accent-primary/20 hover:bg-white/[0.03]"
                    style={{ backgroundColor: 'var(--bg-base)' }}
                  >
                    <span className="shrink-0 mt-0.5 text-white/40 group-hover:text-accent-primary transition-colors">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                        LinkedIn
                      </p>
                      <p className="text-xs text-text-muted mt-1 leading-snug">
                        AI automation insights, case studies, and enterprise playbooks.
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/qevn.in?igsh=ZHh6bXRwZmpjaDN6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-xl border border-white/[0.03] p-4 transition-all duration-200 hover:border-accent-primary/20 hover:bg-white/[0.03]"
                    style={{ backgroundColor: 'var(--bg-base)' }}
                  >
                    <span className="shrink-0 mt-0.5 text-white/40 group-hover:text-accent-primary transition-colors">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                        Instagram
                      </p>
                      <p className="text-xs text-text-muted mt-1 leading-snug">
                        Behind-the-scenes snapshots, product releases, and team culture.
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://youtube.com/@qevn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 rounded-xl border border-white/[0.03] p-4 transition-all duration-200 hover:border-accent-primary/20 hover:bg-white/[0.03]"
                    style={{ backgroundColor: 'var(--bg-base)' }}
                  >
                    <span className="shrink-0 mt-0.5 text-white/40 group-hover:text-accent-primary transition-colors">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.002 3.002 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                        YouTube
                      </p>
                      <p className="text-xs text-text-muted mt-1 leading-snug">
                        AI calling agent demos, system walkthroughs, and tutorials.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </InnerPageLayout>
  )
}
