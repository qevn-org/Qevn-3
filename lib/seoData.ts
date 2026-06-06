/**
 * lib/seoData.ts
 *
 * Central SEO data for all pages — titles, descriptions, keywords.
 * Keep this file as the single source of truth for per-page SEO.
 */

export interface PageSeoData {
  title: string
  description: string
  keywords: string[]
  /** Optional richer OG description (defaults to description if not set) */
  ogDescription?: string
}

// ─── Service SEO ─────────────────────────────────────────────────────────────

export const serviceSeo: Record<string, PageSeoData> = {
  'multi-agent-ai-systems': {
    title: 'Multi-Agent AI Systems — Autonomous Workflow Automation | QEVN',
    description:
      'Deploy coordinated AI agents that run complex end-to-end workflows autonomously. No human handoffs, no bottlenecks — just relentless execution across your operations.',
    keywords: [
      'multi-agent AI systems',
      'autonomous AI workflows',
      'AI agent orchestration',
      'agentic AI automation',
      'AI workflow automation India',
      'custom AI agents',
      'AI operations',
      'AI process automation',
    ],
    ogDescription: 'Coordinated AI agents that run your workflows end-to-end. No handoffs. No bottlenecks.',
  },
  'ai-calling-agents': {
    title: 'AI Calling Agents — 24/7 Automated Phone Calls | QEVN',
    description:
      'Human-sounding AI that handles inbound and outbound calls around the clock. Qualify leads, book appointments, and follow up — zero burnout, zero missed calls.',
    keywords: [
      'AI calling agents',
      'AI voice agent',
      'automated calling system',
      'AI phone calls',
      'AI sales calls',
      'AI customer support calls',
      'voice AI for business',
      'outbound AI calling',
      'inbound AI calling India',
    ],
    ogDescription: 'AI that sounds human and handles every call 24/7 — qualify, book, follow up.',
  },
  'ai-business-auto-pilot': {
    title: 'AI Business Auto-Pilot — Autonomous Operations Management | QEVN',
    description:
      'A managed AI layer running your daily ops: reporting, routing, coordination, and escalation — 24/7, without the overhead of an operations team.',
    keywords: [
      'AI business autopilot',
      'AI operations management',
      'autonomous business ops',
      'AI daily reporting',
      'AI task routing',
      'business automation India',
      'AI ops layer',
    ],
    ogDescription: 'Your operations, running on AI — reporting, routing, coordination on autopilot.',
  },
  'ai-marketing-sales-ops': {
    title: 'AI Marketing & Sales Ops — Automated Revenue Pipelines | QEVN',
    description:
      'End-to-end AI systems for marketing and sales: campaign automation, lead scoring, pipeline management, and revenue forecasting — all running 24/7.',
    keywords: [
      'AI marketing automation',
      'AI sales operations',
      'sales pipeline automation',
      'AI revenue operations',
      'marketing AI India',
      'automated lead scoring',
      'AI CRM automation',
    ],
    ogDescription: 'AI-powered marketing and sales that fills your pipeline without a full team.',
  },
  'leads-to-closure': {
    title: 'Leads to Closure — AI-Powered Sales Cycle Automation | QEVN',
    description:
      'Compress your sales cycle by up to 60%. AI systems that qualify, nurture, and convert leads from first touch to closed deal — faster than any human team.',
    keywords: [
      'AI lead nurturing',
      'AI sales funnel automation',
      'lead to closure automation',
      'sales cycle acceleration',
      'AI lead conversion',
      'automated sales pipeline India',
      'sales AI',
    ],
    ogDescription: 'From first contact to closed deal — AI compresses your sales cycle by 60%.',
  },
  'custom-software-development': {
    title: 'Custom AI Software Development — Bespoke AI Solutions | QEVN',
    description:
      'Purpose-built software and AI systems engineered for your exact business logic. No generic SaaS. No compromises. Built to your spec, owned by you.',
    keywords: [
      'custom AI software development',
      'bespoke AI solutions India',
      'custom software development AI',
      'AI product development',
      'custom AI tools',
      'enterprise AI development',
      'AI engineering India',
    ],
    ogDescription: 'Custom-built AI software engineered to your exact spec — not off-the-shelf.',
  },
  'ai-chatbots': {
    title: 'AI Chatbots for Business — Enterprise Conversational AI | QEVN',
    description:
      'Intelligent AI chatbots that handle support, sales, and onboarding across your website, WhatsApp, and internal tools — with deep business context.',
    keywords: [
      'AI chatbot for business',
      'enterprise AI chatbot',
      'business chatbot India',
      'conversational AI',
      'customer support chatbot',
      'WhatsApp AI chatbot',
      'AI virtual assistant',
      'AI chatbot development',
    ],
    ogDescription: 'Smart AI chatbots that handle support and sales 24/7 across every channel.',
  },
  'ai-appointment-booking': {
    title: 'AI Appointment Booking — Automated Scheduling System | QEVN',
    description:
      'AI that schedules, confirms, and manages appointments without human involvement. Eliminate no-shows, handle rescheduling, and sync across all calendars automatically.',
    keywords: [
      'AI appointment booking',
      'automated scheduling system',
      'AI scheduling agent',
      'appointment automation India',
      'AI calendar management',
      'no-show reduction AI',
      'automated booking system',
    ],
    ogDescription: 'AI that books, confirms, and manages appointments — zero manual effort.',
  },
  'lead-generation-systems': {
    title: 'AI Lead Generation Systems — Automated Prospect Engine | QEVN',
    description:
      'Fully automated lead generation machines that research, qualify, and deliver prospects ready for outreach. Built for scale, with AI precision.',
    keywords: [
      'AI lead generation',
      'automated lead capture',
      'AI prospecting system',
      'lead generation automation India',
      'AI outbound leads',
      'lead qualification AI',
      'B2B lead generation AI',
    ],
    ogDescription: 'AI that finds, qualifies, and delivers sales-ready leads at scale — automatically.',
  },
  'workflow-automation': {
    title: 'Workflow Automation — AI-Powered Business Process Automation | QEVN',
    description:
      'Eliminate manual, repetitive processes with intelligent workflow automation. Connect your tools, automate your logic, and free your team for high-value work.',
    keywords: [
      'business workflow automation',
      'AI process automation',
      'workflow automation India',
      'AI business process automation',
      'RPA automation',
      'intelligent automation',
      'Zapier alternative India',
      'no-code AI automation',
    ],
    ogDescription: 'Automate repetitive workflows with AI — connect every tool, eliminate every manual step.',
  },
}

// ─── Industry SEO ─────────────────────────────────────────────────────────────

export const industrySeo: Record<string, PageSeoData> = {
  'real-estate': {
    title: 'AI Automation for Real Estate — QEVN',
    description:
      'AI systems built for real estate: lead qualification, property matching, follow-up automation, and appointment booking — so agents close more deals faster.',
    keywords: [
      'AI for real estate',
      'real estate AI automation',
      'property lead AI',
      'real estate CRM automation',
      'real estate AI India',
    ],
  },
  healthcare: {
    title: 'AI Automation for Healthcare — QEVN',
    description:
      'Streamline patient scheduling, follow-up, intake forms, and admin workflows with AI — reducing overhead while improving patient experience.',
    keywords: [
      'AI for healthcare',
      'healthcare automation India',
      'patient scheduling AI',
      'medical workflow automation',
      'healthcare AI systems',
    ],
  },
  retail: {
    title: 'AI Automation for Retail — QEVN',
    description:
      'AI systems for retail: inventory management, customer support, order tracking, and personalized marketing — running 24/7 without additional headcount.',
    keywords: [
      'AI for retail',
      'retail automation India',
      'e-commerce AI automation',
      'retail customer support AI',
      'inventory AI',
    ],
  },
  logistics: {
    title: 'AI Automation for Logistics & Supply Chain — QEVN',
    description:
      'Optimise dispatch, tracking, exception management, and vendor coordination with AI automation — reducing delays and operational costs.',
    keywords: [
      'AI for logistics',
      'supply chain AI automation',
      'logistics automation India',
      'AI fleet management',
      'dispatch automation AI',
    ],
  },
  finance: {
    title: 'AI Automation for Finance & FinTech — QEVN',
    description:
      'AI systems for finance: automated reporting, KYC workflows, compliance checks, and client onboarding — built to scale without regulatory risk.',
    keywords: [
      'AI for finance',
      'fintech AI automation',
      'financial workflow automation India',
      'AI KYC automation',
      'finance reporting AI',
    ],
  },
  saas: {
    title: 'AI Automation for SaaS Companies — QEVN',
    description:
      'Accelerate onboarding, reduce churn, automate customer success, and scale support operations — AI systems purpose-built for SaaS growth.',
    keywords: [
      'AI for SaaS',
      'SaaS automation India',
      'customer success AI',
      'SaaS onboarding automation',
      'AI churn reduction',
    ],
  },
  hospitality: {
    title: 'AI Automation for Hospitality — QEVN',
    description:
      'AI for hotels, restaurants, and travel — guest inquiry handling, reservation management, upsell automation, and staff coordination, all on autopilot.',
    keywords: [
      'AI for hospitality',
      'hotel automation AI',
      'restaurant AI automation India',
      'guest experience AI',
      'hospitality workflow automation',
    ],
  },
  legal: {
    title: 'AI Automation for Legal Firms — QEVN',
    description:
      'Automate client intake, document drafting, deadline tracking, and billing workflows — so legal professionals focus on strategy, not admin.',
    keywords: [
      'AI for law firms',
      'legal workflow automation India',
      'AI legal document automation',
      'law firm AI tools',
      'legal AI India',
    ],
  },
  recruitment: {
    title: 'AI Automation for Recruitment & HR — QEVN',
    description:
      'AI systems for hiring: automated sourcing, resume screening, candidate outreach, interview scheduling, and onboarding — reduce time-to-hire dramatically.',
    keywords: [
      'AI for recruitment',
      'HR automation India',
      'AI hiring automation',
      'resume screening AI',
      'candidate outreach automation',
    ],
  },
  'e-commerce': {
    title: 'AI Automation for E-Commerce — QEVN',
    description:
      'AI systems for e-commerce: order management, returns handling, customer support, abandoned cart recovery, and personalized recommendations — at scale.',
    keywords: [
      'AI for e-commerce',
      'ecommerce automation India',
      'online store AI',
      'AI product recommendations',
      'ecommerce customer support AI',
    ],
  },
  education: {
    title: 'AI Automation for EdTech & Education — QEVN',
    description:
      'AI for education providers: student onboarding, query resolution, progress tracking, fee reminders, and admission workflows — fully automated.',
    keywords: [
      'AI for education',
      'edtech automation India',
      'student onboarding AI',
      'AI for schools and colleges',
      'education workflow automation',
    ],
  },
  manufacturing: {
    title: 'AI Automation for Manufacturing — QEVN',
    description:
      'AI systems for manufacturing: predictive maintenance, quality control alerts, supplier communication, and production scheduling — reducing downtime and cost.',
    keywords: [
      'AI for manufacturing',
      'manufacturing automation India',
      'AI predictive maintenance',
      'factory AI automation',
      'production scheduling AI',
    ],
  },
  insurance: {
    title: 'AI Automation for Insurance — QEVN',
    description:
      'AI for insurance: claims processing, policy renewals, fraud detection alerts, and customer communication — faster decisions, lower operational cost.',
    keywords: [
      'AI for insurance',
      'insurance automation India',
      'AI claims processing',
      'insurance workflow AI',
      'policy renewal automation',
    ],
  },
  'media-entertainment': {
    title: 'AI Automation for Media & Entertainment — QEVN',
    description:
      'AI systems for content distribution, audience engagement, rights management, and ad operations — built to scale with your content library.',
    keywords: [
      'AI for media',
      'entertainment AI automation India',
      'content automation AI',
      'media workflow automation',
      'AI audience engagement',
    ],
  },
  construction: {
    title: 'AI Automation for Construction — QEVN',
    description:
      'AI for construction: project timeline management, contractor coordination, procurement tracking, and safety reporting — cutting project overruns.',
    keywords: [
      'AI for construction',
      'construction automation India',
      'project management AI',
      'AI contractor coordination',
      'construction workflow AI',
    ],
  },
  agriculture: {
    title: 'AI Automation for Agriculture & AgriTech — QEVN',
    description:
      'AI systems for agriculture: crop monitoring alerts, supply chain coordination, market price tracking, and farmer communication — modernising farm ops.',
    keywords: [
      'AI for agriculture',
      'agritech automation India',
      'farm AI systems',
      'agriculture workflow automation',
      'AI crop management',
    ],
  },
  automotive: {
    title: 'AI Automation for Automotive — QEVN',
    description:
      'AI for automotive businesses: service appointment booking, parts inventory management, lead follow-up, and customer retention — all automated.',
    keywords: [
      'AI for automotive',
      'automobile dealership AI India',
      'car service booking AI',
      'automotive workflow automation',
      'AI for car dealers',
    ],
  },
  'travel-tourism': {
    title: 'AI Automation for Travel & Tourism — QEVN',
    description:
      'AI systems for travel agencies and tour operators: itinerary building, booking management, customer follow-up, and visa query handling — on autopilot.',
    keywords: [
      'AI for travel',
      'travel agency automation India',
      'tourism AI systems',
      'AI booking management',
      'travel workflow automation',
    ],
  },
}

// ─── Static Page SEO ──────────────────────────────────────────────────────────

export const staticPageSeo: Record<string, PageSeoData> = {
  home: {
    title: 'QEVN — AI Business Automation Agency | Multi-Agent Systems & AI Calling Agents',
    description:
      'QEVN builds custom AI systems that run your operations, sales, and workflows — 24/7. Multi-agent systems, AI calling agents, workflow automation, and more. Custom-built, not SaaS.',
    keywords: [
      'AI automation agency',
      'multi-agent AI systems',
      'AI calling agents India',
      'business automation agency',
      'AI sales automation',
      'AI operations',
      'custom AI systems India',
      'AI workflow automation',
      'AI business automation India',
      'replace manual ops with AI',
      'QEVN',
    ],
    ogDescription: 'Your Business. Running Itself. — Custom AI systems built to handle your operations, sales, and workflows 24/7.',
  },
  offer: {
    title: 'Website Build & Redesign Offer — From ₹4,999 | QEVN',
    description:
      'Build a new website or redesign an existing one starting from ₹4,999. See what is included, regional pricing, and how fast we ship.',
    keywords: [
      'website design India',
      'affordable website development',
      'website redesign India',
      'cheap website build',
      'web design agency India',
      'Next.js website India',
      '₹4999 website',
    ],
  },
  'how-it-works': {
    title: 'How QEVN Works — AI Deployment in 3 Steps | QEVN',
    description:
      'Diagnose → Build → Operate. See exactly how QEVN audits your workflows, engineers custom AI agents, and runs them for your business.',
    keywords: [
      'how AI automation works',
      'AI deployment process',
      'AI system build process',
      'AI implementation steps',
      'QEVN methodology',
    ],
  },
  'qevn-decoded': {
    title: 'QEVN Decoded — What We Do, AI Employees & Call Simulators | QEVN',
    description:
      'Get a behind-the-scenes look at the future of business operations. Test our live voice call simulator and read case studies on AI automation outcomes.',
    keywords: [
      'what is AI employee',
      'AI voice caller simulator',
      'QEVN decoded',
      'automated business workflows',
      'AI receptionist',
    ],
  },
  'numbers-dont-lie': {
    title: "Numbers Don't Lie — Proven AI Automation Results | QEVN",
    description:
      'Real metrics from QEVN deployments: 60% shorter sales cycles, 80% ops cost reduction, 24/7 uptime, and zero missed leads. See the data.',
    keywords: [
      'AI automation ROI',
      'AI results statistics',
      'AI business outcomes',
      'automation metrics',
      'AI cost reduction',
      'AI ROI India',
    ],
  },
  'the-qevn-files': {
    title: 'About QEVN — Our Mission, Vision & Core Philosophy | QEVN',
    description:
      'We exist to offer businesses a simpler operating model powered by AI. Read our manifesto, mission, vision, and core USPs of zero-friction automation.',
    keywords: [
      'about QEVN',
      'AI automation agency',
      'business process automation',
      'QEVN manifesto',
      'QEVN mission',
      'QEVN vision',
    ],
  },
  contact: {
    title: 'Contact QEVN — Book an AI Automation Strategy Session | QEVN',
    description:
      'Get in touch with QEVN. Fill out our contact form or follow our social channels to learn how we replace manual operational friction with custom, automated AI systems.',
    keywords: [
      'contact QEVN',
      'AI automation agency contact',
      'book AI consultation India',
      'QEVN email',
      'AI business solutions consultation',
    ],
  },
}
