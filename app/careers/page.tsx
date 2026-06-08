'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import InnerPageLayout from '@/components/layout/InnerPageLayout'
import Button from '@/components/ui/Button'
import { Calendar, Clock, MapPin, Upload, FileText, Globe, Check, AlertCircle, ArrowRight, User } from 'lucide-react'

// Defined Job Roles matching project specifications
const CATEGORIZED_ROLES = {
  Engineering: [
    'AI Engineer',
    'Full Stack Engineer',
    'Backend Engineer',
    'Frontend Engineer',
    'DevOps Engineer',
    'Automation Engineer',
  ],
  Growth: [
    'Growth Marketer',
    'Content Strategist',
    'SEO Specialist',
    'Performance Marketer',
  ],
  Operations: [
    'Operations Manager',
    'Project Manager',
    'Customer Success Manager',
  ],
  Sales: [
    'Account Executive',
    'SDR',
    'Business Development Manager',
  ],
  Product: [
    'Product Manager',
    'Product Designer',
    'UX Designer',
  ],
  Leadership: [
    'Head of Growth',
    'Head of Product',
    'Head of Operations',
    'VP Revenue',
    'Chief Operating Officer',
  ],
}

const ALL_ROLES_LIST = Object.entries(CATEGORIZED_ROLES).flatMap(([category, roles]) => 
  roles.map(role => ({ category, role }))
)

const CALL_TYPES = [
  { id: '15 Minute Intro Call', label: '15 Min Intro Call', duration: 15 },
  { id: '30 Minute Team Discussion', label: '30 Min Team Discussion', duration: 30 },
  { id: '45 Minute Deep Dive', label: '45 Min Deep Dive', duration: 45 },
  { id: '60 Minute Leadership Conversation', label: '60 Min Leadership Conversation', duration: 60 },
]

export default function CareersPage() {
  const formRef = useRef<HTMLDivElement>(null)

  // Form State
  const [selectedRole, setSelectedRole] = useState('')
  const [customRole, setCustomRole] = useState('')
  const [whyJoinQevn, setWhyJoinQevn] = useState('')
  const [achievement, setAchievement] = useState('')
  
  // Candidate Info
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [linkedinUrl, setLinkedinUrl] = useState('')
  const [portfolioUrl, setPortfolioUrl] = useState('')
  const [location, setLocation] = useState('')
  const [yearsExperience, setYearsExperience] = useState('')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  
  // Scheduling States
  const [callType, setCallType] = useState(CALL_TYPES[1].id) // default to 30 min
  const [clientTimezone, setClientTimezone] = useState('Asia/Kolkata')
  const [selectedDate, setSelectedDate] = useState('') // 'YYYY-MM-DD'
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('') // ISO String
  const [availableSlots, setAvailableSlots] = useState<Record<string, string[]>>({})
  
  // Statuses
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [slotsLoading, setSlotsLoading] = useState(false)

  // Detect local timezone
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
        if (tz) setClientTimezone(tz)
      } catch (e) {
        console.warn('Timezone detection failed, fallback to Asia/Kolkata')
      }
    }
  }, [])

  // Fetch available slots from backend whenever call duration changes
  useEffect(() => {
    const fetchSlots = async () => {
      setSlotsLoading(true)
      setSelectedDate('')
      setSelectedTimeSlot('')
      
      const duration = CALL_TYPES.find(c => c.id === callType)?.duration || 30
      try {
        const res = await fetch(`/api/careers/slots?duration=${duration}&timezone=${clientTimezone}`)
        if (res.ok) {
          const data = await res.json()
          setAvailableSlots(data.slots || {})
        } else {
          setErrorMsg('Failed to load available scheduling slots.')
        }
      } catch (err) {
        console.error('Error fetching calendar slots:', err)
        setErrorMsg('Network error while fetching scheduling calendar.')
      } finally {
        setSlotsLoading(false)
      }
    }

    fetchSlots()
  }, [callType, clientTimezone])

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Limit <= 10MB
    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('Resume file size exceeds the 10 MB limit.')
      setResumeFile(null)
      return
    }

    // Allowed extensions
    const ext = file.name.split('.').pop()?.toLowerCase() || ''
    if (ext !== 'pdf' && ext !== 'docx') {
      setErrorMsg('Only PDF or DOCX resume formats are supported.')
      setResumeFile(null)
      return
    }

    setErrorMsg('')
    setResumeFile(file)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    setIsSubmitting(true)

    // Validate custom vision characters
    if (selectedRole === 'None Of These. I Want To Build Something New.') {
      if (whyJoinQevn.length < 200 || whyJoinQevn.length > 3000) {
        setErrorMsg(`Your role proposal must be between 200 and 3000 characters. Currently: ${whyJoinQevn.length} characters.`)
        setIsSubmitting(false)
        return
      }
    }

    if (!resumeFile) {
      setErrorMsg('Please upload your resume to complete the application.')
      setIsSubmitting(false)
      return
    }

    if (!selectedTimeSlot) {
      setErrorMsg('Please select a preferred interview date and time slot from the calendar.')
      setIsSubmitting(false)
      return
    }

    // Assemble Multipart Form Data
    const data = new FormData()
    data.append('first_name', firstName)
    data.append('last_name', lastName)
    data.append('email', email)
    data.append('phone', phone)
    data.append('linkedin_url', linkedinUrl)
    data.append('portfolio_url', portfolioUrl)
    data.append('location', location)
    data.append('years_experience', yearsExperience)
    data.append('selected_role', selectedRole)
    data.append('custom_role', customRole)
    data.append('why_join_qevn', whyJoinQevn)
    data.append('achievement', achievement)
    data.append('interview_type', callType)
    data.append('scheduled_datetime', selectedTimeSlot)
    data.append('resume', resumeFile)

    try {
      const res = await fetch('/api/careers/submit', {
        method: 'POST',
        body: data,
      })

      const result = await res.json()
      if (res.ok && result.success) {
        setIsSuccess(true)
        // Scroll to top of success view
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        setErrorMsg(result.error || 'Failed to submit interview application.')
      }
    } catch (err) {
      console.error(err)
      setErrorMsg('Something went wrong. Please check your network connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get active schedule list for dates
  const sortedDates = Object.keys(availableSlots).sort()

  return (
    <InnerPageLayout>
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden pb-16 lg:pb-24 pt-[calc(var(--layout-chrome-top,104px)+1.5rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+3.5rem)] min-h-[75vh] flex items-center">
        {/* QEVN Green Accent Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[350px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 65% 50% at 50% 0%, rgba(200,240,75,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Subtle Animated Network Lines Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Animated network lines */}
            <motion.path
              d="M100,200 L400,100 L600,450 L900,150 L1100,500"
              fill="none"
              stroke="var(--accent-primary)"
              strokeWidth="1.5"
              strokeDasharray="10 5"
              animate={{ strokeDashoffset: [-100, 0] }}
              transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
            />
            <motion.path
              d="M200,600 L500,400 L800,700 L1200,300"
              fill="none"
              stroke="var(--accent-primary)"
              strokeWidth="1.2"
              strokeDasharray="6 4"
              animate={{ strokeDashoffset: [0, 100] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl text-left">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
              style={{ color: 'var(--accent-primary)' }}
            >
              Careers @ QEVN
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display text-4xl sm:text-6xl lg:text-7.5xl font-extrabold tracking-[-0.04em] leading-[0.95] mb-6 text-text-primary"
            >
              Build The Future
              <br />
              Of Business
              <br />
              <span className="text-gradient-lime">Operations.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed text-text-muted mb-10 max-w-xl"
            >
              We're building AI systems that help businesses grow faster, operate smarter, and never miss opportunities.
              <span className="block mt-2 font-medium text-text-primary">
                If you see a role that fits, apply. If you don't, create your own.
              </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" onClick={handleScrollToForm} pulse>
                Schedule An Interview
              </Button>
              <Button variant="secondary" size="lg" onClick={handleScrollToForm}>
                Explore Open Roles
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section ref={formRef} className="py-20 lg:py-32 border-t border-white/5 relative" id="careers-portal">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 px-8 rounded-3xl border border-white/[0.06] relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  boxShadow: '0 30px 100px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.03)',
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow"
                  style={{ backgroundColor: 'rgba(200,240,75,0.1)' }}
                >
                  <Check className="w-10 h-10 text-accent-primary" />
                </div>
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent-primary block mb-3">
                  CONFIRMED
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 text-text-primary">
                  You're In.
                </h2>
                <div className="max-w-md mx-auto space-y-4 text-base leading-relaxed text-text-muted">
                  <p>Our team has received your application.</p>
                  <p>A confirmation email has been sent to <strong className="text-text-primary">{email}</strong>.</p>
                  <p className="border-t border-white/5 pt-4 mt-4 text-sm">
                    We'll review everything before the interview and come prepared.
                  </p>
                  <p className="font-display font-bold text-text-primary text-lg pt-2">See you soon.</p>
                </div>
                
                <div className="mt-10">
                  <Button variant="secondary" onClick={() => {
                    setIsSuccess(false)
                    setSelectedRole('')
                    setCustomRole('')
                    setWhyJoinQevn('')
                    setAchievement('')
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPhone('')
                    setLinkedinUrl('')
                    setPortfolioUrl('')
                    setLocation('')
                    setYearsExperience('')
                    setResumeFile(null)
                    setSelectedDate('')
                    setSelectedTimeSlot('')
                  }}>
                    Submit Another Application
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-3xl border border-white/[0.06] p-8 sm:p-12 relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  boxShadow: '0 30px 100px -20px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.03)',
                }}
              >
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-[-0.02em] mb-2 text-text-primary">
                  Careers Portal
                </h2>
                <p className="text-text-muted text-sm sm:text-base mb-10">
                  We look for ambitious builders, operators, and leaders who want to scale QEVN.
                </p>

                <form onSubmit={handleSubmit} className="space-y-12">
                  
                  {/* SECTION 2: OPEN ROLES SELECTOR */}
                  <div className="space-y-4">
                    <label className="block font-mono text-xs tracking-widest uppercase text-text-muted">
                      1. Select An Opportunity
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={selectedRole}
                        onChange={(e) => {
                          setSelectedRole(e.target.value)
                          setErrorMsg('')
                        }}
                        className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-4 text-sm text-text-primary transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-bg-base">Choose an open position...</option>
                        {Object.entries(CATEGORIZED_ROLES).map(([category, roles]) => (
                          <optgroup key={category} label={category} className="bg-bg-base text-accent-primary font-mono text-xs uppercase tracking-wider mt-2">
                            {roles.map(role => (
                              <option key={role} value={role} className="bg-bg-base text-text-primary text-sm py-2">
                                {role}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                        <option value="None Of These. I Want To Build Something New." className="bg-bg-base text-accent-primary font-bold text-sm">
                          None Of These. I Want To Build Something New.
                        </option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                        <Clock className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* SECTION 3: CREATE YOUR OWN ROLE (Revealed if selected) */}
                  <AnimatePresence>
                    {selectedRole === 'None Of These. I Want To Build Something New.' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <div>
                          <label className="block font-mono text-xs tracking-widest uppercase text-text-muted mb-2">
                            What role should exist?
                          </label>
                          <input
                            type="text"
                            required
                            value={customRole}
                            onChange={(e) => setCustomRole(e.target.value)}
                            placeholder="e.g. Chief Automation Officer, Founding Designer, AI Researcher"
                            className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3.5 text-sm text-text-primary transition-all duration-200"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <label className="block font-mono text-xs tracking-widest uppercase text-text-muted">
                              What would you build at QEVN?
                            </label>
                            <span className={`text-[10px] font-mono ${whyJoinQevn.length >= 200 && whyJoinQevn.length <= 3000 ? 'text-accent-primary' : 'text-red-400'}`}>
                              {whyJoinQevn.length} / 3000 chars (Min 200)
                            </span>
                          </div>
                          <textarea
                            required
                            rows={8}
                            value={whyJoinQevn}
                            onChange={(e) => setWhyJoinQevn(e.target.value)}
                            placeholder="Tell us:&#10;* What role should exist?&#10;* What problem would you solve?&#10;* Why are you uniquely qualified?&#10;* What impact would you create?"
                            className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl p-4 text-sm text-text-primary transition-all duration-200 resize-none"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Standard Motivation if fixed role chosen */}
                  {selectedRole && selectedRole !== 'None Of These. I Want To Build Something New.' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-2"
                    >
                      <label className="block font-mono text-xs tracking-widest uppercase text-text-muted">
                        Why are you a fit for this role?
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={whyJoinQevn}
                        onChange={(e) => setWhyJoinQevn(e.target.value)}
                        placeholder="Tell us why you want to join QEVN and how you can accelerate our building process."
                        className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl p-4 text-sm text-text-primary transition-all duration-200 resize-none"
                      />
                    </motion.div>
                  )}

                  {/* SECTION 4: CANDIDATE INFORMATION */}
                  <div className="space-y-6">
                    <label className="block font-mono text-xs tracking-widest uppercase text-text-muted border-b border-white/5 pb-2">
                      2. Candidate Information
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs text-text-muted mb-2 font-mono uppercase tracking-wider">First Name</label>
                        <input
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First Name"
                          className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3 text-sm text-text-primary transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-text-muted mb-2 font-mono uppercase tracking-wider">Last Name</label>
                        <input
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Last Name"
                          className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3 text-sm text-text-primary transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs text-text-muted mb-2 font-mono uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@domain.com"
                          className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3 text-sm text-text-primary transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-text-muted mb-2 font-mono uppercase tracking-wider">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 99999 99999"
                          className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3 text-sm text-text-primary transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs text-text-muted mb-2 font-mono uppercase tracking-wider">LinkedIn Profile</label>
                        <input
                          type="url"
                          value={linkedinUrl}
                          onChange={(e) => setLinkedinUrl(e.target.value)}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3 text-sm text-text-primary transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-text-muted mb-2 font-mono uppercase tracking-wider">Portfolio / Website</label>
                        <input
                          type="url"
                          value={portfolioUrl}
                          onChange={(e) => setPortfolioUrl(e.target.value)}
                          placeholder="https://username.com"
                          className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3 text-sm text-text-primary transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs text-text-muted mb-2 font-mono uppercase tracking-wider">Location</label>
                        <input
                          type="text"
                          required
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="e.g. New Delhi, India"
                          className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3 text-sm text-text-primary transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-text-muted mb-2 font-mono uppercase tracking-wider">Years Of Experience</label>
                        <input
                          type="number"
                          required
                          min="0"
                          max="40"
                          value={yearsExperience}
                          onChange={(e) => setYearsExperience(e.target.value)}
                          placeholder="Years of professional experience"
                          className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl px-4 py-3 text-sm text-text-primary transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Resume Upload Box */}
                    <div className="space-y-2">
                      <label className="block text-xs text-text-muted font-mono uppercase tracking-wider">Resume Upload</label>
                      <div className="relative group border-2 border-dashed border-white/10 hover:border-accent-primary/20 rounded-2xl p-6 transition-all duration-200 bg-white/[0.01] flex flex-col items-center justify-center text-center cursor-pointer">
                        <input
                          type="file"
                          accept=".pdf,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="p-3 bg-white/5 rounded-full mb-3 text-text-muted group-hover:text-accent-primary transition-colors">
                          <Upload className="w-6 h-6" />
                        </div>
                        {resumeFile ? (
                          <div className="space-y-1">
                            <p className="text-sm font-semibold text-text-primary flex items-center justify-center gap-2">
                              <FileText className="w-4 h-4 text-accent-primary" />
                              {resumeFile.name}
                            </p>
                            <p className="text-xs text-text-muted">
                              {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <p className="text-sm text-text-primary font-medium">Click or drag resume file to upload</p>
                            <p className="text-xs text-text-muted">Accepted formats: PDF, DOCX (Max 10 MB)</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* SECTION 5: INTERVIEW SCHEDULING */}
                  <div className="space-y-6">
                    <label className="block font-mono text-xs tracking-widest uppercase text-text-muted border-b border-white/5 pb-2">
                      3. Interview Scheduling
                    </label>

                    <div className="space-y-4">
                      <label className="block text-xs text-text-muted font-mono uppercase tracking-wider">
                        Select Discussion Type
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {CALL_TYPES.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setCallType(type.id)}
                            className={`p-4 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center gap-1.5 ${
                              callType === type.id
                                ? 'border-accent-primary bg-accent-primary/5 text-text-primary'
                                : 'border-white/10 hover:border-white/20 text-text-muted'
                            }`}
                          >
                            <Clock className="w-4 h-4" style={{ color: callType === type.id ? 'var(--accent-primary)' : '' }} />
                            <span className="text-xs font-semibold leading-tight">{type.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                          <Globe className="w-4 h-4 text-accent-primary" />
                          <span>Timezone: {clientTimezone}</span>
                        </div>
                        <span className="text-xs text-text-muted italic">Available slots sync automatically with company calendar</span>
                      </div>

                      {slotsLoading ? (
                        <div className="flex justify-center items-center py-12">
                          <div className="w-8 h-8 border-4 border-accent-primary/30 border-t-accent-primary rounded-full animate-spin" />
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Date Selector */}
                          <div>
                            <span className="block text-xs font-semibold text-text-muted mb-3 uppercase tracking-wider font-mono">1. Select Date</span>
                            <div className="space-y-2 max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
                              {sortedDates.length === 0 ? (
                                <p className="text-sm text-text-muted italic">No dates available in this schedule.</p>
                              ) : (
                                sortedDates.map((dateStr) => {
                                  const dateObj = new Date(dateStr)
                                  const formatted = dateObj.toLocaleDateString('en-US', {
                                    weekday: 'short',
                                    month: 'short',
                                    day: 'numeric',
                                  })
                                  const isSelected = selectedDate === dateStr
                                  return (
                                    <button
                                      key={dateStr}
                                      type="button"
                                      onClick={() => {
                                        setSelectedDate(dateStr)
                                        setSelectedTimeSlot('')
                                      }}
                                      className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all duration-150 ${
                                        isSelected
                                          ? 'border-accent-primary bg-accent-primary/5 text-text-primary'
                                          : 'border-white/5 hover:border-white/10 text-text-muted hover:text-text-primary'
                                      }`}
                                    >
                                      <span className="text-sm font-semibold">{formatted}</span>
                                      <Calendar className="w-4 h-4 text-text-muted" />
                                    </button>
                                  )
                                })
                              )}
                            </div>
                          </div>

                          {/* Time Slots Selector */}
                          <div>
                            <span className="block text-xs font-semibold text-text-muted mb-3 uppercase tracking-wider font-mono">2. Select Time</span>
                            {selectedDate ? (
                              <div className="grid grid-cols-2 gap-2 max-h-[260px] overflow-y-auto pr-2 custom-scrollbar">
                                {(availableSlots[selectedDate] || []).length === 0 ? (
                                  <p className="text-sm text-text-muted italic col-span-2">No available time slots on this day.</p>
                                ) : (
                                  availableSlots[selectedDate].map((isoString) => {
                                    const timeStr = new Date(isoString).toLocaleTimeString([], {
                                      hour: '2-digit',
                                      minute: '2-digit',
                                    })
                                    const isSelected = selectedTimeSlot === isoString
                                    return (
                                      <button
                                        key={isoString}
                                        type="button"
                                        onClick={() => setSelectedTimeSlot(isoString)}
                                        className={`p-3 rounded-xl border text-center transition-all duration-150 text-sm font-medium ${
                                          isSelected
                                            ? 'border-accent-primary bg-accent-primary/5 text-text-primary'
                                            : 'border-white/5 hover:border-white/10 text-text-muted hover:text-text-primary'
                                        }`}
                                      >
                                        {timeStr}
                                      </button>
                                    )
                                  })
                                )}
                              </div>
                            ) : (
                              <div className="h-[200px] flex items-center justify-center border border-white/5 border-dashed rounded-xl">
                                <p className="text-sm text-text-muted italic text-center px-4">
                                  Select a date on the left to see available times
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* SECTION 6: FINAL QUESTION */}
                  <div className="space-y-4">
                    <label className="block font-mono text-xs tracking-widest uppercase text-text-muted">
                      4. Final Question
                    </label>
                    <div className="space-y-2">
                      <label className="block text-sm text-text-primary font-medium">
                        What's something you've built, solved, or achieved that you're proud of?
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={achievement}
                        onChange={(e) => setAchievement(e.target.value)}
                        placeholder="Tell us about a project, a complex issue you resolved, or anything you built from scratch that shows your skills and drive."
                        className="w-full bg-white/[0.03] border border-white/10 focus:border-accent-primary/30 focus:bg-white/[0.05] outline-none rounded-xl p-4 text-sm text-text-primary transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>

                  {/* ERROR DISPLAY */}
                  {errorMsg && (
                    <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-sm flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* SUBMISSION BUTTON */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full justify-center text-center font-bold tracking-wide"
                      onClick={() => {}}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-bg-base/30 border-t-bg-base rounded-full animate-spin" />
                          Scheduling...
                        </div>
                      ) : (
                        <span className="flex items-center gap-2">
                          Schedule My Interview <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </InnerPageLayout>
  )
}
