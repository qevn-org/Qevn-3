'use client'

import { useState, useRef } from 'react'
import InnerPageLayout from '@/components/layout/InnerPageLayout'
import Button from '@/components/ui/Button'
import HandshakeAnimation from '@/components/ui/HandshakeAnimation'
import { useVisitorIntelligence } from '@/components/providers/VisitorIntelligenceProvider'
import { motion, AnimatePresence } from 'framer-motion'

const HELPER_TEXTS: Record<string, string> = {
  'AI Calling Agents': "We'll help you explore inbound, outbound, appointment booking, and voice lead-qualification use cases.",
  'AI Employees': "We'll design digital workers trained on your company knowledge bases to handle repetitive operational roles.",
  'Multi-Agent Systems': "We'll engineer autonomous networks of agents that delegate and coordinate complex multi-step workflows.",
  'Workflow Automation': "We'll sync your CRMs, messaging channels, databases, and sheets to eliminate copy-paste overhead.",
  'Lead Generation': "We'll build out custom prospecting engines and personalized outbound email/LinkedIn outreach sequences.",
  'Custom Software': "We'll design and build bespoke web/mobile dashboards and API integrations matching your exact stack.",
  'Something Else': "Let's map out your operational bottlenecks and brainstorm high-impact custom automation ideas.",
}

const WHY_REACH_OUT = [
  {
    title: 'Automate Repetitive Work',
    description: 'Connect siloed database tables, CRMs, and email pipelines into unified workflows that execute without human delay.',
  },
  {
    title: 'Never Miss Another Lead',
    description: 'Qualify and follow up on new web, phone, or message inquiries in seconds, 24 hours a day, 7 days a week.',
  },
  {
    title: 'Scale Without Hiring',
    description: 'Expand your operational throughput and handle high seasonal peaks without proportional increases in overhead.',
  },
  {
    title: 'Improve Customer Response',
    description: 'Deploy voice and chat systems with native language support to resolve customer support tickets with zero lag.',
  },
  {
    title: 'Create AI-Powered Operations',
    description: 'Upgrade legacy reporting systems into self-correcting business structures running on complete autopilot.',
  },
]

const STATS = [
  { value: '50+', label: 'Systems Deployed' },
  { value: '12+', label: 'Industries Optimized' },
  { value: '80%+', label: 'Cost Reduction Realized' },
  { value: '1M+', label: 'Actions Executed Autonomously' },
]

export default function ContactPage() {
  const { trackLeadSubmit } = useVisitorIntelligence()
  const formRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Telemetry sync
    trackLeadSubmit({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      message: formData.message,
      inquiry_type: formData.service || 'Contact Inquiry',
    })

    setSubmitted(true)
  }

  return (
    <InnerPageLayout>
      {/* SECTION 1: HERO SECTION */}
      <section className="relative overflow-hidden pb-12 lg:pb-20 pt-[calc(var(--layout-chrome-top,104px)+1.5rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+3.5rem)] min-h-[85vh] flex items-center">
        {/* Subtle top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,240,75,0.05) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Side: Copy */}
            <div className="lg:col-span-6 text-left max-w-xl">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
                style={{ color: 'var(--accent-primary)' }}
              >
                Start A Conversation
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[0.95] mb-6 text-text-primary"
              >
                Let&apos;s Build
                <br />
                Something That
                <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #FFFFFF 0%, #C8F04B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Works.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base md:text-lg leading-relaxed text-text-muted mb-10"
              >
                Whether you&apos;re exploring AI agents, automation, or a custom solution, we&apos;re ready to understand your business and help you move faster.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
                >
                  Book a Strategy Call
                </Button>
                <Button variant="secondary" size="lg" onClick={handleScrollToForm}>
                  Start a Conversation
                </Button>
              </motion.div>
            </div>

            {/* Right Side: Animated Handshake */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <HandshakeAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONVERSATION FIRST */}
      <section className="py-20 lg:py-32 border-t border-white/5" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-[0.2em] uppercase mb-6"
            style={{ color: 'var(--accent-primary)' }}
          >
            Conversation First
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-snug text-text-primary"
          >
            Most businesses don&apos;t need more software.
            <br />
            <span style={{ color: 'var(--text-muted)' }}>
              They need systems that remove repetitive work and create more opportunities.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-text-muted mt-8"
          >
            Let&apos;s talk about what&apos;s slowing your business down.
          </motion.p>
        </div>
      </section>

      {/* SECTION 3: CONTACT FORM */}
      <section ref={formRef} className="pb-24 lg:pb-36 px-6 relative" id="conversation-form">
        <div className="max-w-[700px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/[0.06] p-8 md:p-12 relative overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-surface)',
              boxShadow: '0 30px 100px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.03)',
            }}
          >
            {/* Soft inner radial glow */}
            <div
              className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-[80px] pointer-events-none"
              style={{ background: 'rgba(200,240,75,0.02)' }}
            />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'rgba(200,240,75,0.1)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="var(--accent-primary)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-text-primary">
                  The partnership has begun.
                </h3>
                <p className="text-sm md:text-base text-text-muted max-w-md mx-auto leading-relaxed">
                  Thank you for starting the conversation. We will review your system goals and connect with you shortly with architectural insights.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase mb-2 text-text-muted">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 focus:border-[#C8F04B]/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3.5 text-sm text-text-primary transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase mb-2 text-text-muted">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 focus:border-[#C8F04B]/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3.5 text-sm text-text-primary transition-all duration-200"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase mb-2 text-text-muted">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 focus:border-[#C8F04B]/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3.5 text-sm text-text-primary transition-all duration-200"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase mb-2 text-text-muted">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 focus:border-[#C8F04B]/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3.5 text-sm text-text-primary transition-all duration-200"
                      placeholder="+91 99999 99999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase mb-2 text-text-muted">
                    What would you like help with?
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 focus:border-[#C8F04B]/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3.5 text-sm text-text-primary transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-bg-base">Select service area...</option>
                      <option value="AI Calling Agents" className="bg-bg-base">AI Calling Agents</option>
                      <option value="AI Employees" className="bg-bg-base">AI Employees</option>
                      <option value="Multi-Agent Systems" className="bg-bg-base">Multi-Agent Systems</option>
                      <option value="Workflow Automation" className="bg-bg-base">Workflow Automation</option>
                      <option value="Lead Generation" className="bg-bg-base">Lead Generation</option>
                      <option value="Custom Software" className="bg-bg-base">Custom Software</option>
                      <option value="Something Else" className="bg-bg-base">Something Else</option>
                    </select>
                    {/* Select indicator arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* SMART FORM HELPER TEXTS */}
                  <AnimatePresence mode="wait">
                    {formData.service && HELPER_TEXTS[formData.service] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -5 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -5 }}
                        className="mt-3 overflow-hidden"
                      >
                        <div
                          className="rounded-xl px-4 py-3 border border-[#C8F04B]/10 text-xs leading-relaxed"
                          style={{
                            backgroundColor: 'rgba(200, 240, 75, 0.03)',
                            color: 'var(--accent-primary)',
                          }}
                        >
                          {HELPER_TEXTS[formData.service]}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase mb-2 text-text-muted">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-[#C8F04B]/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3.5 text-sm text-text-primary transition-all duration-200 resize-none"
                    placeholder="Tell us about the workflows, teams, or tools you want to optimize..."
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                    Let&apos;s Talk →
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: WHY PEOPLE REACH OUT */}
      <section className="py-20 lg:py-32 border-t border-white/5" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 lg:mb-20">
            <span
              className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
              style={{ color: 'var(--accent-primary)' }}
            >
              Why Partners Connect
            </span>
            <h2
              className="font-display text-3xl md:text-5xl font-extrabold tracking-[-0.04em]"
              style={{ color: 'var(--text-primary)' }}
            >
              Problems We Solve.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {WHY_REACH_OUT.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-8 lg:p-10 rounded-2xl border border-white/[0.04] flex flex-col justify-between"
                style={{ backgroundColor: 'var(--bg-surface)' }}
              >
                <div>
                  <h3
                    className="font-display text-xl lg:text-2xl font-bold tracking-tight mb-4"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: TRUST SECTION */}
      <section className="py-16 border-t border-white/5" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span
            className="font-mono text-[10px] tracking-[0.2em] uppercase mb-10 block"
            style={{ color: 'var(--text-muted)' }}
          >
            Trusted By Businesses Building Smarter Operations
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 max-w-5xl mx-auto">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-display text-4xl lg:text-5xl font-extrabold text-text-primary mb-2">
                  {stat.value}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: DIRECT CONTACT OPTIONS */}
      <section className="py-20 lg:py-32 border-t border-white/5" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 lg:mb-20 text-center max-w-xl mx-auto">
            <span
              className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
              style={{ color: 'var(--accent-primary)' }}
            >
              Alternative Channels
            </span>
            <h2
              className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-text-primary"
            >
              Direct Connections
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email */}
            <motion.a
              href="mailto:hello@qevn.in"
              className="group p-6 rounded-2xl border border-white/[0.04] transition-all duration-300 hover:border-accent-primary/20 flex flex-col justify-between aspect-square"
              style={{ backgroundColor: 'var(--bg-surface)' }}
              whileHover={{ y: -4 }}
            >
              <div className="text-white/40 group-hover:text-accent-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors mb-1">
                  Email Us
                </h3>
                <p className="text-xs text-text-muted mb-4">Direct correspondence</p>
                <span className="text-sm font-semibold text-text-primary">hello@qevn.in</span>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/company/qevn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-white/[0.04] transition-all duration-300 hover:border-accent-primary/20 flex flex-col justify-between aspect-square"
              style={{ backgroundColor: 'var(--bg-surface)' }}
              whileHover={{ y: -4 }}
            >
              <div className="text-white/40 group-hover:text-accent-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors mb-1">
                  LinkedIn
                </h3>
                <p className="text-xs text-text-muted mb-4">Insights & Playbooks</p>
                <span className="text-sm font-semibold text-text-primary">QEVN Page →</span>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919213406563"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-white/[0.04] transition-all duration-300 hover:border-accent-primary/20 flex flex-col justify-between aspect-square"
              style={{ backgroundColor: 'var(--bg-surface)' }}
              whileHover={{ y: -4 }}
            >
              <div className="text-white/40 group-hover:text-accent-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors mb-1">
                  WhatsApp
                </h3>
                <p className="text-xs text-text-muted mb-4">Direct message support</p>
                <span className="text-sm font-semibold text-text-primary">Chat with Us →</span>
              </div>
            </motion.a>

            {/* Book a Call */}
            <motion.a
              href="https://calendly.com/hello-qevn/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-white/[0.04] transition-all duration-300 hover:border-accent-primary/20 flex flex-col justify-between aspect-square"
              style={{ backgroundColor: 'var(--bg-surface)' }}
              whileHover={{ y: -4 }}
            >
              <div className="text-white/40 group-hover:text-accent-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors mb-1">
                  Book a Call
                </h3>
                <p className="text-xs text-text-muted mb-4">Schedule a session</p>
                <span className="text-sm font-semibold text-text-primary">Calendly Page →</span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-24 lg:py-36 border-t border-white/5 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-base)' }}>
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle 50% 50% at 50% 50%, rgba(200,240,75,0.02) 0%, transparent 80%)',
          }}
        />

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-tight mb-6 text-text-primary">
            The Future Isn&apos;t More Work.
            <br />
            <span style={{ color: 'var(--text-muted)' }}>It&apos;s Smarter Systems.</span>
          </h2>
          <p className="text-base md:text-lg text-text-muted mb-10 max-w-xl mx-auto">
            Let&apos;s explore what AI can do inside your business.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
          >
            Schedule a Strategy Call
          </Button>
        </div>
      </section>
    </InnerPageLayout>
  )
}
