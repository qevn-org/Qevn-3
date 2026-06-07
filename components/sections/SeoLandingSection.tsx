'use client'

import Link from 'next/link'

export default function SeoLandingSection() {
  return (
    <section
      className="py-16 border-t border-white/5 relative"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-1">
            <h2
              className="font-display text-2xl lg:text-3xl font-extrabold tracking-[-0.03em] mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              AI Agents For Every
              <br />
              Business Function
            </h2>
            <p
              className="text-xs font-mono tracking-wider uppercase"
              style={{ color: 'var(--accent-primary)' }}
            >
              Capabilities Index
            </p>
          </div>

          {/* Right Column: Naturally written copy with rich keywords & links */}
          <div className="lg:col-span-2 space-y-6">
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              QEVN is a premier custom <strong style={{ color: 'var(--text-primary)' }}>AI Agent Provider</strong> and <strong style={{ color: 'var(--text-primary)' }}>AI Automation Company</strong>. We design and build dedicated <strong style={{ color: 'var(--text-primary)' }}>AI Employees</strong>, autonomous agents, and multi-agent systems engineered specifically to streamline your business operations. Our systems handle repetitive tasks, sync data platforms, and run your revenue pipeline 24/7 on autopilot.
            </p>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              For front-of-house operations, our custom <strong style={{ color: 'var(--text-primary)' }}>AI Receptionists</strong>, voice-based <Link href="/services/ai-calling-agents" className="underline hover:text-white transition-colors duration-200" style={{ color: 'var(--accent-primary)' }}>AI Calling Agents</Link>, and conversational <strong style={{ color: 'var(--text-primary)' }}>AI Voice Agents</strong> handle inbound and outbound customer inquiries with human-like speed and tone. To capture web traffic, we build intelligent <Link href="/services/ai-chatbots" className="underline hover:text-white transition-colors duration-200" style={{ color: 'var(--accent-primary)' }}>AI Chatbots</Link> and <strong style={{ color: 'var(--text-primary)' }}>AI Customer Support Agents</strong> that qualify prospects and answer complex FAQs instantly.
            </p>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              To accelerate growth, QEVN installs custom <Link href="/services/lead-generation-systems" className="underline hover:text-white transition-colors duration-200" style={{ color: 'var(--accent-primary)' }}>Lead Generation Systems</Link> and <strong style={{ color: 'var(--text-primary)' }}>AI Sales Agents</strong> to run prospecting campaigns. These solutions are paired with conversational <Link href="/services/ai-appointment-booking" className="underline hover:text-white transition-colors duration-200" style={{ color: 'var(--accent-primary)' }}>AI Appointment Booking Agents</Link> to book, reschedule, and verify meetings. Everything is tied together with deep <Link href="/services/workflow-automation" className="underline hover:text-white transition-colors duration-200" style={{ color: 'var(--accent-primary)' }}>Workflow Automation</Link> and robust <strong style={{ color: 'var(--text-primary)' }}>Multi-Agent Systems</strong> to coordinate cross-platform jobs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
