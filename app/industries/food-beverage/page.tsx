'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import InnerPageLayout from '@/components/layout/InnerPageLayout'
import Button from '@/components/ui/Button'
import { 
  Phone, MessageSquare, Calendar, ChevronRight, X, Play, Clock, 
  MapPin, Utensils, AlertTriangle, ArrowRight, ShieldCheck, Heart, 
  Users, CheckCircle2, Check, ChevronRightCircle, Award, Sparkles, Database, 
  Globe, Laptop, Tablet, Smartphone, Volume2, TrendingUp, HelpCircle
} from 'lucide-react'

// PROBLEMS LIST
const PROBLEMS = [
  {
    title: 'Missed Calls',
    desc: 'Restaurants lose up to 15% of bookings because staff are busy in the kitchen or front-of-house during rush hours.',
    impact: 'Lost revenue and frustrated customers.'
  },
  {
    title: 'Manual Reservations',
    desc: 'Staff spend precious hours answering basic questions, noting down details, and manually entering bookings.',
    impact: 'High labor cost and input errors.'
  },
  {
    title: 'Costly No-Shows',
    desc: 'Tables remain empty when customers reserve seats but fail to show up, with zero automated follow-up.',
    impact: 'Idle inventory and wasted overhead.'
  },
  {
    title: 'Outdated Websites',
    desc: 'Most restaurant websites are slow, outdated, not optimized for mobile, and fail to turn traffic into bookings.',
    impact: 'Poor digital conversion rates.'
  },
  {
    title: 'Poor Customer Experience',
    desc: 'Guests are kept waiting on phone hold lines or get slow replies to simple questions about menus and events.',
    impact: 'Diluted brand reputation.'
  },
  {
    title: 'Lost Revenue',
    desc: 'Every unanswered query about group bookings, hours, or menu items is a customer who goes to a competitor.',
    impact: 'Invisible leaky revenue pipeline.'
  }
]

// BENEFITS
const METRIC_CARDS = [
  { metric: '+28%', label: 'More Reservations', desc: 'Capture off-hours bookings and automatically handle multiple calls simultaneously.' },
  { metric: '99.8%', label: 'Fewer Missed Calls', desc: 'AI answer systems manage unlimited inbound calls 24/7 with zero hold times.' },
  { metric: '4.9★', label: 'Higher Satisfaction', desc: 'Instant confirmations and multilingual support create high guest delight.' },
  { metric: '-12h', label: 'Reduced Staff Workload', desc: 'Save hours of administrative work weekly by offloading routine booking tasks.' },
  { metric: '+35%', label: 'Better Retention', desc: 'Nurture customer profiles with custom SMS notifications and reminders.' },
  { metric: '15x', label: 'More ROI Opportunities', desc: 'Turn basic inquiries into upselling items, special requests, and event bookings.' },
]

// AUDIENCE
const INDUSTRIES_SERVED = [
  { title: 'Fine Dining', desc: 'Seamless VIP reservation allocation, personalized customer profile logs, and smart table configurations.' },
  { title: 'Casual Restaurants', desc: 'High-volume reservation management, automated waitlists, and SMS confirmations.' },
  { title: 'Cafes & Bistros', desc: 'Direct QR-code menu integration, peak hours automation, and quick answering services.' },
  { title: 'Cloud Kitchens', desc: 'WhatsApp lead nurturing, immediate menu routing, and automated delivery system connections.' },
  { title: 'Multi-Location Brands', desc: 'Centralized reservation dashboards, multi-outlet routing, and aggregated analytics.' },
  { title: 'Bakery & Dessert Chains', desc: 'Catering management, order customization, and pre-booking logistics support.' },
  { title: 'Hospitality Groups', desc: 'Cross-brand reservations, shared customer profiling, and enterprise-grade SLA controls.' },
]

export default function FoodBeverageIndustryPage() {
  const [activeTab, setActiveTab] = useState<'receptionist' | 'reservation' | 'menu' | 'website'>('receptionist')
  const [activeStep, setActiveStep] = useState(0)
  const [isPlayingDemo, setIsPlayingDemo] = useState(false)

  // Simulation states for AI receptionist
  const [simStep, setSimStep] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSimStep(prev => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <InnerPageLayout>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pb-24 pt-[calc(var(--layout-chrome-top,104px)+2.5rem)] lg:pt-[calc(var(--layout-chrome-top,104px)+4.5rem)] min-h-[90vh] flex items-center bg-bg-base">
        {/* Soft radial glow in corner */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,240,75,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left side: Heading */}
            <div className="lg:col-span-6 text-left max-w-xl">
              <span
                className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block text-accent-primary"
              >
                QEVN FOR FOOD & BEVERAGE
              </span>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] leading-[0.95] mb-6 text-text-primary">
                Never Miss
                <br />
                Another
                <br />
                <span className="text-gradient-lime">Reservation.</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-text-muted mb-10">
                AI-powered receptionists, smart reservation systems, interactive video menus, and premium websites built exclusively for restaurants, cafes, cloud kitchens, and F&B brands.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
                  pulse
                >
                  Book a Demo
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => setIsPlayingDemo(true)}
                >
                  <Play className="w-4 h-4 mr-1 text-accent-primary" fill="currentColor" /> Watch Product Tour
                </Button>
              </div>
            </div>

            {/* Right side: Real-Time AI Receptionist Booking Simulator */}
            <div className="lg:col-span-6 w-full flex justify-center">
              <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0c0d0f] p-6 shadow-2xl relative overflow-hidden">
                {/* Header info */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-primary animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-wider text-text-primary">Qevn AI Agent Live Run</span>
                  </div>
                  <span className="text-xs text-text-muted font-mono bg-white/5 px-2 py-0.5 rounded-md">Channel: WhatsApp & Voice</span>
                </div>

                {/* Animated Chat simulation box */}
                <div className="h-[250px] flex flex-col justify-end gap-3 text-xs">
                  {/* Step 1: Customer text */}
                  {simStep >= 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2 max-w-[85%]"
                    >
                      <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Users className="w-3.5 h-3.5 text-text-muted" />
                      </div>
                      <div className="bg-white/5 border border-white/10 text-text-primary rounded-2xl rounded-tl-none p-3">
                        <p className="font-semibold text-white/50 mb-0.5">Guest (John D.)</p>
                        "Hey, do you have a table for 4 available tonight around 7:30 PM? Also, are there vegan options?"
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: AI reply */}
                  {simStep >= 1 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2 max-w-[85%] self-end flex-row-reverse"
                    >
                      <div className="w-7 h-7 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-accent-primary" />
                      </div>
                      <div className="bg-accent-primary/5 border border-accent-primary/10 text-text-primary rounded-2xl rounded-tr-none p-3">
                        <p className="font-semibold text-accent-primary mb-0.5">Qevn Assistant</p>
                        "Yes John! We have table 12 available at 7:30 PM. Our chef has a dedicated vegan menu, including our signature Avocado Tartare. Shall I reserve this table for you?"
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Customer accepts */}
                  {simStep >= 2 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-2 max-w-[85%]"
                    >
                      <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Users className="w-3.5 h-3.5 text-text-muted" />
                      </div>
                      <div className="bg-white/5 border border-white/10 text-text-primary rounded-2xl rounded-tl-none p-3">
                        "Yes please, go ahead and book it under John Doe."
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Booking completed */}
                  {simStep >= 3 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-[#c8f04b]/10 border border-[#c8f04b]/30 p-3 rounded-xl flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-accent-primary shrink-0" />
                        <div>
                          <p className="font-bold text-text-primary">Reservation Confirmed</p>
                          <p className="text-[10px] text-text-muted font-mono">Table 12 • 7:30 PM • 4 Guests • John Doe</p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-mono px-2 py-0.5 rounded-full uppercase">
                        Sync Complete
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Simulated database syncing card overlay */}
                <div className="mt-4 border-t border-white/5 pt-4 flex justify-between items-center text-[10px] font-mono text-text-muted">
                  <span className="flex items-center gap-1"><Database className="w-3 h-3 text-accent-primary" /> Table Sync Active</span>
                  <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3 text-accent-primary" /> SMS & WhatsApp Sent</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: THE PROBLEMS WE SOLVE */}
      <section className="py-20 lg:py-32 border-t border-white/5 bg-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-accent-primary mb-3 block">
              The Leak
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
              Why Traditional F&B Operations Lose Revenue.
            </h2>
            <p className="text-base text-text-muted mt-4">
              Managing a modern restaurant is a battle against bottlenecks. Everyday tasks pull your staff away from tables and guests, hurting conversion rates and guest satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROBLEMS.map((prob, idx) => (
              <div
                key={prob.title}
                className="p-8 rounded-2xl border border-white/[0.04] bg-[#0c0d0f] transition-all hover:border-accent-primary/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <h3 className="font-display text-lg font-bold text-text-primary">
                      {prob.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {prob.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-xs font-mono text-red-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                  <span>Impact: {prob.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SPOTLIGHT TABS */}
      <section className="py-20 lg:py-32 border-t border-white/5 bg-[#0a0b0c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-accent-primary mb-3 block">
              Our Capabilities
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
              AI Infrastructure For Hospitality
            </h2>
            <p className="text-base text-text-muted mt-4">
              We replace outdated workflows with intelligent systems designed to capture, book, and retain every customer.
            </p>
          </div>

          {/* Navigation tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'receptionist', label: 'AI Receptionist', icon: Phone },
              { id: 'reservation', label: 'Smart Reservations', icon: Calendar },
              { id: 'menu', label: 'Interactive Menu', icon: Utensils },
              { id: 'website', label: 'Premium Websites', icon: Laptop },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? 'border-accent-primary bg-accent-primary/5 text-text-primary'
                    : 'border-white/5 bg-white/[0.01] hover:border-white/15 text-text-muted'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content panel */}
          <div className="rounded-3xl border border-white/[0.06] bg-[#0c0d0f] p-8 md:p-12 relative overflow-hidden min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeTab === 'receptionist' && (
                <motion.div
                  key="receptionist"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-primary bg-accent-primary/10 border border-accent-primary/15 px-3 py-1 rounded-full">
                      Product Card 1
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-text-primary">
                      AI Receptionist for Restaurants
                    </h3>
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                      An intelligent voice and text agent that answers phone calls, WhatsApp inquiries, and reservation questions 24/7. Integrates with your host stand table configurations.
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-text-muted font-medium">
                      {[
                        '24/7 call answering',
                        'Table reservations',
                        'Booking modifications',
                        'Event inquiries',
                        'Catering inquiries',
                        'Frequently asked questions',
                        'Multi-language support',
                        'WhatsApp confirmations',
                        'SMS confirmations',
                        'Reservation reminders',
                        'No missed customer inquiries'
                      ].map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual: connected dashboard mockup */}
                  <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-text-muted">
                      <span>INTEGRATIONS MAP</span>
                      <span className="text-accent-primary">ACTIVE</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="p-3 bg-white/[0.02] rounded-xl flex items-center justify-between">
                        <span className="font-bold flex items-center gap-2"><Phone className="w-4 h-4 text-accent-primary" /> Voice Calling (Inbound)</span>
                        <span className="text-xs text-text-muted font-mono">100% Handled</span>
                      </div>
                      <div className="p-3 bg-white/[0.02] rounded-xl flex items-center justify-between">
                        <span className="font-bold flex items-center gap-2"><MessageSquare className="w-4 h-4 text-accent-primary" /> WhatsApp Marketing</span>
                        <span className="text-xs text-text-muted font-mono">Direct API Sync</span>
                      </div>
                      <div className="p-3 bg-white/[0.02] rounded-xl flex items-center justify-between">
                        <span className="font-bold flex items-center gap-2"><Calendar className="w-4 h-4 text-accent-primary" /> Reservation CRM</span>
                        <span className="text-xs text-text-muted font-mono">Instant Insert</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'reservation' && (
                <motion.div
                  key="reservation"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-primary bg-accent-primary/10 border border-accent-primary/15 px-3 py-1 rounded-full">
                      Product Card 2
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-text-primary">
                      Reservation System Built for Hospitality
                    </h3>
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                      Optimize table turns, seat allocations, and host stand operations dynamically. Say goodbye to pen-and-paper logs and double bookings.
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-text-muted font-medium">
                      {[
                        'Real-time table availability',
                        'Smart seat allocation',
                        'Waitlist management',
                        'Reservation dashboard',
                        'Customer profiles',
                        'Automated reminders',
                        'Event bookings',
                        'Special requests management',
                        'Reservation analytics'
                      ].map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual: Live Floor Plan Mockup */}
                  <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-text-muted">
                      <span>FLOOR MAP ALLOCATION</span>
                      <span className="text-accent-primary">7:30 PM SLOT</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'T-1 (2 Pax)', status: 'Occupied', bg: 'bg-white/5 border-white/10 text-white/40' },
                        { id: 'T-2 (4 Pax)', status: 'Reserved', bg: 'bg-accent-primary/10 border-accent-primary/30 text-accent-primary' },
                        { id: 'T-3 (2 Pax)', status: 'Available', bg: 'bg-white/[0.02] border-white/5 text-text-muted' },
                        { id: 'T-4 (6 Pax)', status: 'Available', bg: 'bg-white/[0.02] border-white/5 text-text-muted' },
                        { id: 'T-5 (4 Pax)', status: 'Occupied', bg: 'bg-white/5 border-white/10 text-white/40' },
                        { id: 'T-6 (2 Pax)', status: 'Reserved', bg: 'bg-accent-primary/10 border-accent-primary/30 text-accent-primary' },
                      ].map((t) => (
                        <div key={t.id} className={`p-2 rounded-lg border text-center text-[10px] font-bold ${t.bg}`}>
                          <div>{t.id}</div>
                          <div className="text-[8px] opacity-75 font-mono uppercase mt-1">{t.status}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'menu' && (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-primary bg-accent-primary/10 border border-accent-primary/15 px-3 py-1 rounded-full">
                      Product Card 3
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-text-primary">
                      Video Menu Experience
                    </h3>
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                      Upgrade boring static PDF menus to rich video and interactive showcases. Prompt customers with gourmet video previews to drive higher ticket values.
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-text-muted font-medium">
                      {[
                        'QR-powered menus',
                        'High-quality dish videos',
                        'Interactive food showcases',
                        'Improved customer engagement',
                        'Better upselling opportunities',
                        'Mobile optimized'
                      ].map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual: Immersive food mockup */}
                  <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex flex-col items-center">
                    <div className="w-full max-w-[200px] border border-white/15 rounded-3xl p-3 bg-bg-base shadow-lg">
                      <div className="aspect-[9/16] bg-gradient-to-tr from-accent-primary/20 to-white/5 rounded-2xl overflow-hidden relative flex flex-col justify-end p-3">
                        {/* Play button simulated icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 bg-black/60 rounded-full flex items-center justify-center">
                            <Play className="w-4 h-4 text-accent-primary" fill="currentColor" />
                          </div>
                        </div>
                        
                        <div className="relative z-10 text-[10px] space-y-1">
                          <span className="bg-accent-primary text-bg-base font-bold px-1.5 py-0.5 rounded">Signature</span>
                          <p className="font-bold text-white leading-tight">Woodfired Neapolitan Pizza</p>
                          <p className="text-text-muted text-[8px]">Hot Honey & Pepperoni</p>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-text-muted mt-3 text-center">QR Scan Live Dish Visualizer</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 'website' && (
                <motion.div
                  key="website"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-primary bg-accent-primary/10 border border-accent-primary/15 px-3 py-1 rounded-full">
                      Product Card 4
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-text-primary">
                      Websites That Generate Reservations
                    </h3>
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                      Custom enterprise websites structured for speed, search optimization, and direct call-to-action triggers. Say goodbye to template agencies.
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-text-muted font-medium">
                      {[
                        'Luxury custom themes',
                        'Reservation integration',
                        'SEO optimized',
                        'Mobile-first design',
                        'Menu integration',
                        'Event booking pages',
                        'WhatsApp integration',
                        'Lightning-fast performance'
                      ].map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual: Website mockups */}
                  <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-text-muted">
                      <span>AUDIT REPORT</span>
                      <span className="text-[#a8d43b]">99 SCORE</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-text-muted">Mobile Speed index</span>
                        <span className="text-xs font-mono font-bold text-accent-primary">0.4s</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-text-muted">SEO Ranking Core</span>
                        <span className="text-xs font-mono font-bold text-accent-primary">100 / 100</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-text-muted">Reservation CTR</span>
                        <span className="text-xs font-mono font-bold text-accent-primary">+45% avg</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW IT WORKS */}
      <section className="py-20 lg:py-32 border-t border-white/5 bg-bg-base">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-accent-primary mb-3 block">
              Process
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
              Seamless Reservation Automation
            </h2>
            <p className="text-base text-text-muted mt-4">
              How Qevn AI infrastructure coordinates table reservations from inquiry to confirmation.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-[2.25rem] top-4 bottom-4 w-px bg-white/10" />

            <div className="space-y-12">
              {[
                { step: '01', title: 'Customer Calls or Visits Website', desc: 'A customer reaches out via call, website widget, or WhatsApp during business or off-hours.' },
                { step: '02', title: 'Qevn AI Handles Inquiry', desc: 'The AI answers phone calls in natural voice patterns or fields live chats, confirming menus and table availability.' },
                { step: '03', title: 'Reservation Confirmed Instantly', desc: 'The AI schedules the date/time slot directly into your hospitality calendar database, ensuring zero conflicts.' },
                { step: '04', title: 'Customer Receives WhatsApp Confirmation', desc: 'A custom confirmation invoice template is delivered directly to the guest\'s phone number.' },
                { step: '05', title: 'Automated Reminder Sent Before Arrival', desc: 'Reminders go out hours prior, requesting confirmation or cancellations, minimizing table no-shows.' },
                { step: '06', title: 'Restaurant Delivers Great Experience', desc: 'Your staff welcomes the guest, fully prepared with customer profiling notes (special requests, allergies).' }
              ].map((step, idx) => (
                <div key={step.step} className="flex gap-6 items-start relative z-10">
                  <div className="w-9 h-9 rounded-full bg-[#0c0d0f] border border-accent-primary/40 text-accent-primary font-mono text-xs font-bold flex items-center justify-center shrink-0 shadow-lg">
                    {step.step}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-display text-lg font-bold text-text-primary mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: BENEFITS */}
      <section className="py-20 lg:py-32 border-t border-white/5 bg-[#0a0b0c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-accent-primary mb-3 block">
              Impact
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
              The ROI of AI Operations
            </h2>
            <p className="text-base text-text-muted mt-4">
              Real operational metrics realized by food and beverage outlets switching to Qevn AI infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {METRIC_CARDS.map((m) => (
              <div
                key={m.label}
                className="p-8 rounded-2xl border border-white/[0.04] bg-[#0c0d0f] space-y-4"
              >
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-accent-primary">
                  {m.metric}
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary mb-1">{m.label}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: INDUSTRIES WE SERVE */}
      <section className="py-20 lg:py-32 border-t border-white/5 bg-bg-base">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-accent-primary mb-3 block">
              Verticals
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
              Built For Hospitality Operators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {INDUSTRIES_SERVED.map((ind) => (
              <div
                key={ind.title}
                className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:border-accent-primary/25 transition-all"
              >
                <h3 className="font-display text-base font-bold text-text-primary mb-2 flex items-center gap-2">
                  <Utensils className="w-4.5 h-4.5 text-accent-primary shrink-0" />
                  {ind.title}
                </h3>
                <p className="text-xs leading-relaxed text-text-muted">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: WHY QEVN */}
      <section className="py-20 lg:py-32 border-t border-white/5 bg-[#0a0b0c]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.18em] uppercase text-accent-primary mb-3 block">
              Alignment
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
              Why Qevn
            </h2>
            <p className="text-base text-text-muted mt-4">
              We are not another template agency or simple booking dashboard. We provide complete operational partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="p-8 rounded-2xl border border-white/5 bg-[#0c0d0f] flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-4">
                  Traditional Agencies & SaaS
                </h3>
                <ul className="space-y-3.5 text-xs text-text-muted">
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Template websites that load slowly and fail to convert.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>No integrations with telephone, voice calls, or CRM dashboards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Software license fees per-outlet with no operations support.</span>
                  </li>
                </ul>
              </div>
              <p className="text-[10px] text-text-muted font-mono uppercase tracking-widest mt-6 pt-4 border-t border-white/5">
                Outdated SaaS Model
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-accent-primary/20 bg-accent-primary/[0.02] flex flex-col justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent-primary" /> Qevn Platform
                </h3>
                <ul className="space-y-3.5 text-xs text-text-primary">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>Unified automation layers encompassing voice calls, bookings, and WhatsApp notifications.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>High-converting luxury restaurant websites optimized for search rankings.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>Complete build fee + retort RET retainer model without surprise usage bills.</span>
                  </li>
                </ul>
              </div>
              <p className="text-[10px] text-accent-primary font-mono uppercase tracking-widest mt-6 pt-4 border-t border-accent-primary/10">
                AI Hospitality Infrastructure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="py-24 lg:py-36 border-t border-white/5 bg-bg-base relative overflow-hidden text-center">
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle 50% 50% at 50% 50%, rgba(200,240,75,0.02) 0%, transparent 80%)',
          }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent-primary block">
            Start Today
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-[-0.04em] leading-tight text-text-primary">
            Your Next Customer
            <br />
            Is Calling Right Now.
            <br />
            <span className="text-text-muted">Make sure someone answers.</span>
          </h2>
          <p className="text-base text-text-muted max-w-xl mx-auto leading-relaxed">
            Deploy AI receptionists, smart table managers, and luxury websites inside your F&B brand in 2-4 weeks.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('https://calendly.com/hello-qevn/30min', '_blank')}
            >
              Schedule a Demo
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open('/contact', '_self')}
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* VIDEO TOUR MODAL DIALOG */}
      <AnimatePresence>
        {isPlayingDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-6"
          >
            <div className="bg-[#0c0d0f] border border-white/10 rounded-2xl p-4 w-full max-w-3xl relative">
              <button
                onClick={() => setIsPlayingDemo(false)}
                className="absolute right-4 top-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-text-muted hover:text-text-primary"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="aspect-video w-full bg-black/50 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-3 text-center p-6">
                <div className="p-4 bg-accent-primary/10 rounded-full border border-accent-primary/20 text-accent-primary animate-pulse">
                  <Play className="w-8 h-8" fill="currentColor" />
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary">Qevn F&B AI Product Tour</h3>
                <p className="text-xs text-text-muted max-w-sm">
                  This simulated video demo showcases Qevn AI receptionists syncing live calls, reservation tables, and WhatsApp integrations in a restaurant environment.
                </p>
                <div className="mt-4">
                  <Button variant="primary" size="sm" onClick={() => setIsPlayingDemo(false)}>
                    Close Tour
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </InnerPageLayout>
  )
}
