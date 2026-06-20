'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

type Currency = 'INR' | 'USD'

const symbol: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
}

const formatMoney = (value: number, currency: Currency) => {
  if (!isFinite(value) || isNaN(value)) return `${symbol[currency]}0`
  const rounded = Math.max(0, Math.round(value))
  if (currency === 'INR') {
    return `${symbol.INR}${rounded.toLocaleString('en-IN')}`
  }
  return `${symbol.USD}${rounded.toLocaleString('en-US')}`
}

interface FieldProps {
  label: string
  hint?: string
  value: number
  onChange: (n: number) => void
  min?: number
  max?: number
  step?: number
  prefix?: string
  suffix?: string
}

function NumberField({
  label,
  hint,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  prefix,
  suffix,
}: FieldProps) {
  return (
    <div>
      <label
        className="block font-mono text-xs tracking-[0.15em] uppercase mb-2"
        style={{ color: 'var(--text-muted)' }}
      >
        {label}
      </label>
      <div
        className="flex items-center gap-2 rounded-xl px-4 py-3 transition-colors focus-within:border-accent-primary/40"
        style={{
          backgroundColor: 'var(--bg-elevated)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {prefix && (
          <span
            className="font-mono text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            {prefix}
          </span>
        )}
        <input
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => {
            const n = Number(e.target.value)
            onChange(Number.isFinite(n) ? n : 0)
          }}
          className="w-full bg-transparent border-none outline-none font-display text-base sm:text-lg lg:text-xl font-semibold tabular-nums"
          style={{ color: 'var(--text-primary)' }}
        />
        {suffix && (
          <span
            className="font-mono text-xs uppercase tracking-wider"
            style={{ color: 'var(--text-muted)' }}
          >
            {suffix}
          </span>
        )}
      </div>
      {hint && (
        <p
          className="text-xs mt-1.5"
          style={{ color: 'var(--text-muted)' }}
        >
          {hint}
        </p>
      )}
    </div>
  )
}

export default function RoiCalculator() {
  const [currency, setCurrency] = useState<Currency>('INR')
  const [teamSize, setTeamSize] = useState<number>(10)
  const [avgSalary, setAvgSalary] = useState<number>(60000) // monthly INR default
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(12)

  const results = useMemo(() => {
    // Standard work assumptions
    const workingHoursPerMonth = 173 // ~40 hrs/week
    const automationCoverage = 0.7 // QEVN automates ~70% of repetitive work

    const hourlyCost = avgSalary / workingHoursPerMonth
    const weeklyHoursReclaimedPerEmployee = hoursPerWeek * automationCoverage
    const monthlyHoursReclaimed =
      weeklyHoursReclaimedPerEmployee * 4.33 * teamSize
    const monthlySavings = monthlyHoursReclaimed * hourlyCost
    const yearlySavings = monthlySavings * 12

    return {
      hourlyCost,
      monthlyHoursReclaimed,
      monthlySavings,
      yearlySavings,
    }
  }, [teamSize, avgSalary, hoursPerWeek])

  return (
    <section
      id="roi"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-surface)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 50%, transparent)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(200,240,75,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="mb-12 lg:mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="font-mono text-xs tracking-[0.18em] uppercase mb-4 block"
            style={{ color: 'var(--accent-primary)' }}
          >
            Live ROI Calculator
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.04em] leading-[0.95] mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            See what you'd save.
            <br />
            <span style={{ color: 'var(--text-muted)' }}>In real money.</span>
          </h2>
          <p
            className="text-base lg:text-lg leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
          >
            Plug in your team size, average salary, and hours wasted on repetitive
            work. We will show you what AI automation could save — every month, every year.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -60px 0px' }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-base)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Inputs */}
            <div className="p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.05]">
              <div className="flex items-center justify-between mb-6">
                <span
                  className="font-mono text-xs tracking-[0.15em] uppercase"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Your Inputs
                </span>
                <div
                  className="flex rounded-full p-1"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {(['INR', 'USD'] as Currency[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`font-mono text-xs px-3 py-1 rounded-full transition-all duration-200 ${
                        currency === c ? 'font-semibold' : ''
                      }`}
                      style={{
                        backgroundColor:
                          currency === c
                            ? 'rgba(200,240,75,0.12)'
                            : 'transparent',
                        color:
                          currency === c
                            ? 'var(--accent-primary)'
                            : 'var(--text-muted)',
                      }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <NumberField
                  label="Team Size"
                  value={teamSize}
                  onChange={setTeamSize}
                  min={1}
                  max={5000}
                  step={1}
                  suffix="people"
                  hint="Employees doing repetitive work today."
                />
                <NumberField
                  label={`Average Monthly Salary`}
                  value={avgSalary}
                  onChange={setAvgSalary}
                  min={0}
                  step={1000}
                  prefix={symbol[currency]}
                  hint="Per team member, fully loaded cost."
                />
                <NumberField
                  label="Hours on Repetitive Tasks"
                  value={hoursPerWeek}
                  onChange={setHoursPerWeek}
                  min={0}
                  max={40}
                  step={1}
                  suffix="hrs / week"
                  hint="Per team member, on tasks AI can automate."
                />
              </div>
            </div>

            {/* Output */}
            <div
              className="relative p-6 lg:p-10"
              style={{
                background:
                  'radial-gradient(ellipse 80% 70% at 70% 30%, rgba(200,240,75,0.05) 0%, transparent 70%)',
              }}
            >
              <span
                className="font-mono text-xs tracking-[0.15em] uppercase mb-6 block"
                style={{ color: 'var(--accent-primary)' }}
              >
                Estimated Savings
              </span>

              <div className="mb-8">
                <div
                  className="font-display text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-none mb-2 tabular-nums break-words"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {formatMoney(results.yearlySavings, currency)}
                </div>
                <p
                  className="text-sm tracking-wide"
                  style={{ color: 'var(--text-muted)' }}
                >
                  estimated savings per year
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div
                    className="font-display text-2xl font-extrabold tabular-nums"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {formatMoney(results.monthlySavings, currency)}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    saved per month
                  </div>
                </div>
                <div
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div
                    className="font-display text-2xl font-extrabold tabular-nums"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {Math.round(results.monthlyHoursReclaimed).toLocaleString()}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    hours reclaimed / month
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  window.open('https://calendly.com/hello-qevn/30min', '_blank')
                }
                className="inline-flex items-center gap-2 font-body tracking-wide rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-[#d4f55a]"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--bg-base)',
                }}
              >
                Book a Strategy Call
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Free AI Pitch Generator Cross-Link */}
              <div className="mt-4">
                <a
                  href="https://pitch.qevn.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-[#B6F76E] transition-colors duration-200 font-medium"
                >
                  <span>Want a second proof point? Try our free AI Pitch Generator</span>
                  <span>→</span>
                </a>
              </div>

              <p
                className="text-xs mt-5 leading-relaxed max-w-md"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                Estimates assume ~70% automation coverage on repetitive work and
                173 working hours per month. Actual results vary by workflow.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
