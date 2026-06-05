export interface ServiceFeature {
  icon: string
  title: string
  description: string
}

export interface ServiceData {
  number: string
  title: string
  slug: string
  description: string
  longDescription: string
  features: ServiceFeature[]
  benefits: string[]
  process: { step: string; title: string; description: string }[]
  videoSrc?: string
  posterSrc?: string
  videoAriaLabel?: string
  whatThisDoes?: string[]
  whoFor?: string[]
  results?: { stat: string; statLabel: string; narrative: string }
  faqs?: { q: string; a: string }[]
}

export interface IndustryData {
  title: string
  slug: string
  headline: string
  description: string
  painPoints: string[]
  solutions: { title: string; description: string }[]
  useCases: string[]
  stats: { value: string; label: string }[]
}

export const services: ServiceData[] = [
  {
    number: '01',
    title: 'Multi-Agent AI Systems',
    slug: 'multi-agent-ai-systems',
    description: 'Autonomous agents that run complex multi-step workflows end-to-end. No human handoffs. No bottlenecks.',
    longDescription: 'Our multi-agent systems deploy coordinated AI agents that communicate, delegate, and execute complex business workflows autonomously. Each agent specializes in a distinct function — research, analysis, execution, verification — working in concert to deliver results that previously required entire teams.',
    features: [
      { icon: 'zap', title: 'Autonomous Orchestration', description: 'Agents self-coordinate tasks without human intervention, routing work based on priority and capability.' },
      { icon: 'refresh', title: 'Dynamic Workflow Routing', description: 'Intelligent task distribution that adapts in real-time based on workload, urgency, and agent availability.' },
      { icon: 'brain', title: 'Contextual Memory', description: 'Persistent memory across interactions ensures agents learn from every workflow and continuously improve.' },
      { icon: 'link', title: 'Tool Integration', description: 'Agents connect to your existing CRM, ERP, email, and databases — no migration required.' },
      { icon: 'chart', title: 'Real-Time Monitoring', description: 'Full visibility into agent activity, decision logs, and performance metrics through a unified dashboard.' },
      { icon: 'shield', title: 'Guardrail Framework', description: 'Built-in safety layers ensure agents operate within defined boundaries with human escalation protocols.' },
    ],
    benefits: [
      'Eliminate 80% of manual task routing and handoff delays',
      'Process complex workflows 10× faster than manual execution',
      'Reduce operational overhead by removing repetitive coordination work',
      'Scale operations without proportional headcount increases',
      'Maintain consistent quality through standardized agent protocols',
    ],
    process: [
      { step: '01', title: 'Workflow Mapping', description: 'We audit your existing processes to identify high-leverage automation opportunities and design the agent architecture.' },
      { step: '02', title: 'Agent Engineering', description: 'Custom agents are built, trained, and calibrated for your specific business logic, tools, and data sources.' },
      { step: '03', title: 'Deployment & Evolution', description: 'Agents go live with monitoring, then continuously learn and improve based on real operational data.' },
    ],
  },
  {
    number: '02',
    title: 'AI Calling Agents',
    slug: 'ai-calling-agents',
    description: 'Human-sounding AI that handles inbound and outbound calls 24/7. Zero burnout. Zero missed calls.',
    longDescription: 'Our AI calling agents handle phone conversations with natural speech patterns, emotional intelligence, and perfect recall. They qualify leads, book appointments, handle support queries, and follow up — all while sounding indistinguishable from your best human agent.',
    features: [
      { icon: 'mic', title: 'Natural Voice Synthesis', description: 'Ultra-realistic voice output with natural pauses, tone variation, and conversational flow.' },
      { icon: 'brain', title: 'Context-Aware Responses', description: 'Agents understand nuance, handle objections, and adapt their approach based on caller sentiment.' },
      { icon: 'calendar', title: 'Calendar Integration', description: 'Directly books meetings, sends confirmations, and manages reschedules across your team calendars.' },
      { icon: 'file-text', title: 'Call Transcription & Logging', description: 'Every call is transcribed, summarized, and logged with action items automatically routed to your CRM.' },
      { icon: 'globe', title: 'Multilingual Support', description: 'Handle calls in multiple languages with native-level fluency and cultural awareness.' },
      { icon: 'chart', title: 'Performance Analytics', description: 'Real-time dashboards showing call volumes, conversion rates, sentiment scores, and agent performance.' },
    ],
    benefits: [
      'Never miss a lead — 24/7 availability with zero wait times',
      'Reduce cost-per-call by 70% compared to traditional call centers',
      'Handle unlimited concurrent calls during peak periods',
      'Consistent messaging and brand voice across every interaction',
      'Instant CRM updates with zero manual data entry',
    ],
    process: [
      { step: '01', title: 'Script & Voice Design', description: 'We craft conversation flows, objection handling scripts, and select voice profiles that match your brand.' },
      { step: '02', title: 'Integration & Training', description: 'Agents are connected to your phone system, CRM, and calendar, then trained on your specific business context.' },
      { step: '03', title: 'Launch & Optimize', description: 'Agents go live with A/B testing on scripts. Continuous optimization based on conversion data.' },
    ],
  },
  {
    number: '03',
    title: 'AI Business Auto-Pilot',
    slug: 'ai-business-auto-pilot',
    description: 'A managed AI layer running your ops: reporting, routing, and coordination — without the overhead.',
    longDescription: 'Auto-Pilot is a comprehensive AI operations layer that sits on top of your existing business infrastructure. It handles daily reporting, task routing, team coordination, and escalation management — functioning as an always-on operations manager that never sleeps.',
    features: [
      { icon: 'chart', title: 'Automated Reporting', description: 'Daily, weekly, and monthly reports generated automatically from your data sources and delivered to stakeholders.' },
      { icon: 'shuffle', title: 'Intelligent Task Routing', description: 'Work items are automatically assigned to the right team member based on skill, availability, and priority.' },
      { icon: 'alert', title: 'Escalation Management', description: 'Automatic detection and escalation of blockers, bottlenecks, and critical issues before they become problems.' },
      { icon: 'trending', title: 'KPI Monitoring', description: 'Real-time tracking of your key metrics with automatic alerts when performance drifts from targets.' },
      { icon: 'users', title: 'Team Coordination', description: 'Cross-functional alignment through automated stand-ups, progress tracking, and dependency management.' },
      { icon: 'cog', title: 'Process Optimization', description: 'Continuous analysis of workflow efficiency with actionable recommendations for improvement.' },
    ],
    benefits: [
      'Reclaim 15+ hours per week from manual coordination and reporting',
      'Catch and resolve operational issues 3× faster with proactive monitoring',
      'Eliminate information silos with automated cross-team communication',
      'Scale operations management without adding management overhead',
      'Data-driven decision making with real-time operational intelligence',
    ],
    process: [
      { step: '01', title: 'Operations Audit', description: 'We map your current operational workflows, communication patterns, and reporting requirements.' },
      { step: '02', title: 'System Configuration', description: 'Auto-Pilot is configured with your tools, KPIs, escalation rules, and team structure.' },
      { step: '03', title: 'Managed Operations', description: 'We monitor and evolve the system continuously, adapting to your changing business needs.' },
    ],
  },
  {
    number: '04',
    title: 'AI Marketing & Sales Ops',
    slug: 'ai-marketing-sales-ops',
    description: 'AI that writes, schedules, tests, and optimises your entire pipeline from content to close.',
    longDescription: 'From content creation to lead nurturing to deal closure — our AI marketing and sales system manages your entire revenue pipeline. It writes copy, schedules campaigns, A/B tests messaging, scores leads, and optimizes your funnel based on real conversion data.',
    features: [
      { icon: 'pen', title: 'AI Content Generation', description: 'Blog posts, emails, social media content, and ad copy generated in your brand voice with SEO optimization.' },
      { icon: 'target', title: 'Lead Scoring & Routing', description: 'Intelligent lead qualification based on behavior, demographics, and engagement history.' },
      { icon: 'mail', title: 'Automated Sequences', description: 'Multi-channel nurture campaigns that adapt messaging based on prospect engagement signals.' },
      { icon: 'flask', title: 'A/B Testing Engine', description: 'Continuous testing of subject lines, CTAs, and messaging with automatic winner selection.' },
      { icon: 'chart', title: 'Pipeline Analytics', description: 'Full-funnel visibility from first touch to closed deal with attribution modeling and ROI tracking.' },
      { icon: 'refresh', title: 'CRM Automation', description: 'Automatic deal progression, follow-up scheduling, and activity logging across your CRM.' },
    ],
    benefits: [
      'Generate 5× more qualified content with zero additional headcount',
      'Increase lead-to-opportunity conversion by 40% with AI-driven nurturing',
      'Reduce campaign setup time from days to minutes',
      'Optimize ad spend with AI-driven audience targeting and bid management',
      'Unified view of marketing and sales performance across all channels',
    ],
    process: [
      { step: '01', title: 'Pipeline Analysis', description: 'We audit your current marketing and sales stack, identify conversion bottlenecks, and design the AI layer.' },
      { step: '02', title: 'Campaign Architecture', description: 'AI systems are configured for content generation, lead scoring, and sequence automation.' },
      { step: '03', title: 'Performance Optimization', description: 'Continuous A/B testing and funnel optimization driven by real conversion data.' },
    ],
  },
  {
    number: '05',
    title: 'Leads to Closure',
    slug: 'leads-to-closure',
    description: 'End-to-end AI sales pipeline. Lead capture to closed deal. 60% faster than any manual process.',
    longDescription: 'Leads to Closure is our turnkey AI sales engine. From the moment a lead enters your funnel to the moment the deal closes, AI handles every step — qualification, outreach, follow-up, proposal generation, and closing sequences. Your team only steps in for high-value strategic conversations.',
    features: [
      { icon: 'funnel', title: 'Intelligent Lead Capture', description: 'Multi-channel lead capture with instant qualification, enrichment, and routing to the right pipeline.' },
      { icon: 'phone', title: 'Automated Outreach', description: 'Personalized email, SMS, and calling sequences triggered by lead behavior and intent signals.' },
      { icon: 'clipboard', title: 'Proposal Generation', description: 'AI-generated proposals and quotes customized to each prospect based on their needs and conversation history.' },
      { icon: 'bell', title: 'Smart Follow-Ups', description: 'Perfectly-timed follow-up sequences that adapt based on prospect engagement and buying signals.' },
      { icon: 'chart', title: 'Deal Intelligence', description: 'Real-time deal health scoring, risk alerts, and recommended next actions for every opportunity.' },
      { icon: 'users', title: 'Handoff Orchestration', description: 'Seamless transition from AI to human for strategic conversations with full context transfer.' },
    ],
    benefits: [
      '60% reduction in average sales cycle length',
      '3× increase in qualified pipeline without adding sales reps',
      'Zero leads fall through the cracks with automated follow-up',
      'Consistent sales process execution across your entire pipeline',
      'Real-time visibility into pipeline health and forecasting accuracy',
    ],
    process: [
      { step: '01', title: 'Funnel Mapping', description: 'We map your ideal customer profile, sales stages, and conversion criteria to design the AI pipeline.' },
      { step: '02', title: 'Sequence Engineering', description: 'Outreach sequences, qualification criteria, and proposal templates are built and calibrated.' },
      { step: '03', title: 'Revenue Acceleration', description: 'The system goes live with continuous optimization based on close rate and deal velocity data.' },
    ],
  },
  {
    number: '06',
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    description: 'Web apps, mobile apps, and bespoke software — built to spec, delivered with precision.',
    longDescription: 'When off-the-shelf tools cannot meet your requirements, we build custom software solutions from the ground up. Our development team specializes in modern web applications, mobile apps, internal tools, and integrations — all engineered for performance, scalability, and maintainability.',
    features: [
      { icon: 'globe', title: 'Web Applications', description: 'Full-stack web apps built with modern frameworks, optimized for speed, SEO, and user experience.' },
      { icon: 'smartphone', title: 'Mobile Development', description: 'Native and cross-platform mobile apps for iOS and Android with seamless backend integration.' },
      { icon: 'plug', title: 'API & Integration', description: 'Custom APIs, third-party integrations, and middleware connecting your business systems.' },
      { icon: 'wrench', title: 'Internal Tools', description: 'Admin dashboards, workflow tools, and data visualization platforms built for your team.' },
      { icon: 'cloud', title: 'Cloud Infrastructure', description: 'Scalable cloud architecture with CI/CD pipelines, monitoring, and automated deployment.' },
      { icon: 'lock', title: 'Security & Compliance', description: 'Enterprise-grade security with encryption, access controls, and compliance certifications.' },
    ],
    benefits: [
      'Purpose-built solutions that fit your exact business requirements',
      'Modern tech stack ensuring long-term maintainability and scalability',
      'Dedicated development team with full transparency and agile delivery',
      'Post-launch support and continuous improvement included',
      'Seamless integration with your existing tools and AI systems',
    ],
    process: [
      { step: '01', title: 'Discovery & Design', description: 'We define requirements, create wireframes, and architect the technical solution with your input.' },
      { step: '02', title: 'Agile Development', description: 'Iterative development with bi-weekly demos, continuous testing, and collaborative feedback loops.' },
      { step: '03', title: 'Launch & Support', description: 'Production deployment with monitoring, documentation, and ongoing maintenance and feature development.' },
    ],
  },
  {
    number: '07',
    title: 'AI Chatbots & Conversational AI',
    slug: 'ai-chatbots',
    description: 'Always-on website and WhatsApp chatbots that qualify leads, answer questions, and convert visitors into pipeline.',
    longDescription: 'Our AI chatbots are trained on your business — products, pricing, policies, FAQs — and deployed across your website, WhatsApp, Instagram DMs, and support channels. They handle tier-1 conversations end-to-end and only escalate when a human truly needs to step in.',
    features: [
      { icon: 'message', title: 'Multi-Channel Deployment', description: 'One chatbot across website, WhatsApp Business, Instagram, Messenger, and SMS — with consistent context.' },
      { icon: 'brain', title: 'Trained on Your Business', description: 'Custom-trained on your docs, FAQs, product catalog, and tone — not a generic bot.' },
      { icon: 'target', title: 'Lead Qualification', description: 'Conversational lead capture that qualifies, scores, and routes prospects to the right team member.' },
      { icon: 'globe', title: 'Multilingual', description: 'Native fluency in English, Hindi, and regional Indian languages — plus global languages.' },
      { icon: 'plug', title: 'CRM & Calendar Sync', description: 'Push every chat to your CRM, book meetings directly into your calendar, trigger sequences automatically.' },
      { icon: 'trending', title: 'Conversion Analytics', description: 'See which conversations close, which drop off, and what to optimize.' },
    ],
    benefits: [
      'Capture leads 24/7 without growing your support team',
      'Reduce first-response time from hours to seconds',
      'Resolve up to 80% of queries without human handoff',
      'Convert anonymous traffic into qualified pipeline',
      'Scale infinitely during launches, sales, and traffic spikes',
    ],
    process: [
      { step: '01', title: 'Knowledge Mapping', description: 'We ingest your docs, FAQs, and brand voice — and define the bot\'s scope and escalation rules.' },
      { step: '02', title: 'Build & Train', description: 'Custom chatbot built, trained, and connected to your CRM, calendar, and support tools.' },
      { step: '03', title: 'Launch & Improve', description: 'Bot goes live with weekly tuning based on real conversations and conversion data.' },
    ],
  },
  {
    number: '08',
    title: 'AI Appointment Booking',
    slug: 'ai-appointment-booking',
    description: 'AI that books, confirms, reschedules, and reminds — across phone, chat, email, and web. Zero double-bookings.',
    longDescription: 'Whether you run a clinic, a salon, a consultancy, or a sales team, our AI booking system handles every appointment touchpoint autonomously. It checks availability, books the slot, sends confirmations and reminders, and handles reschedules — without anyone on your team lifting a finger.',
    features: [
      { icon: 'calendar', title: 'Real-Time Availability', description: 'Live calendar sync across Google, Outlook, and proprietary booking systems.' },
      { icon: 'phone', title: 'Multi-Channel Booking', description: 'Customers book via voice call, WhatsApp, web chat, SMS, or email — same intelligent agent.' },
      { icon: 'bell', title: 'Automated Reminders', description: 'Smart reminder sequences via SMS, email, and WhatsApp that reduce no-shows by 40%+.' },
      { icon: 'refresh', title: 'Reschedule Handling', description: 'AI handles rescheduling and cancellations conversationally, with no manual coordination.' },
      { icon: 'users', title: 'Multi-Resource Routing', description: 'Books across multiple staff, locations, or service types based on availability and preference.' },
      { icon: 'credit-card', title: 'Payment & Deposits', description: 'Optional deposit collection and payment links during the booking flow.' },
    ],
    benefits: [
      'Reduce no-shows by 40% with intelligent reminder sequences',
      'Free your front desk from 70% of scheduling calls',
      'Capture appointments 24/7 — including evenings and weekends',
      'Eliminate double-bookings and scheduling conflicts',
      'Higher revenue per booking with smart upsell prompts',
    ],
    process: [
      { step: '01', title: 'Calendar & Rules Setup', description: 'We map your services, staff availability, business rules, and booking policies.' },
      { step: '02', title: 'Channel Integration', description: 'Booking AI connects to your phone line, website, WhatsApp, and CRM.' },
      { step: '03', title: 'Go Live & Optimize', description: 'System goes live with continuous tuning on conversion, no-show rate, and customer experience.' },
    ],
  },
  {
    number: '09',
    title: 'Lead Generation Systems',
    slug: 'lead-generation-systems',
    description: 'AI-powered prospecting, enrichment, and outbound — filling your pipeline with qualified leads on autopilot.',
    longDescription: 'Stop paying for leads that never convert. Our lead generation systems combine AI prospecting, real-time enrichment, intent-signal monitoring, and personalized outbound to deliver a steady stream of qualified, ready-to-buy prospects directly into your CRM.',
    features: [
      { icon: 'target', title: 'AI Prospecting', description: 'Identify your ideal customer profile and surface lookalike accounts automatically.' },
      { icon: 'network', title: 'Lead Enrichment', description: 'Real-time enrichment with verified emails, phone numbers, firmographics, and tech stack.' },
      { icon: 'radio', title: 'Intent Monitoring', description: 'Detect buying signals — funding rounds, hiring spikes, tech changes — before competitors do.' },
      { icon: 'mail', title: 'Personalized Outbound', description: 'AI-generated, hyper-personalized emails and LinkedIn outreach at scale.' },
      { icon: 'shield', title: 'Deliverability Engineering', description: 'Domain warmup, inbox rotation, and authentication setup so emails land in primary.' },
      { icon: 'chart', title: 'Pipeline Reporting', description: 'Live dashboard tracking sourced leads, replies, meetings booked, and pipeline value.' },
    ],
    benefits: [
      '3× more qualified meetings without expanding your SDR team',
      'Reduce cost per qualified lead by 60%+',
      'Replace expensive lead-gen agencies with an in-house AI engine',
      'Continuous pipeline — no dry months between campaigns',
      'Full ownership of your data, accounts, and infrastructure',
    ],
    process: [
      { step: '01', title: 'ICP & Targeting', description: 'We define your ideal customer profile, intent signals, and qualification criteria.' },
      { step: '02', title: 'Engine Build', description: 'Prospecting, enrichment, deliverability, and outreach systems are engineered and connected to your CRM.' },
      { step: '03', title: 'Pipeline Operations', description: 'System runs on autopilot with weekly optimization on reply rate, meeting rate, and pipeline conversion.' },
    ],
  },
  {
    number: '10',
    title: 'Workflow Automation',
    slug: 'workflow-automation',
    description: 'Connect every tool. Automate every repetitive task. Eliminate the busywork that drains your team.',
    longDescription: 'From invoice processing to onboarding to data entry — we automate the cross-tool workflows that consume hours of your team\'s day. Built on robust orchestration engines with full audit trails, error handling, and human-in-the-loop where it matters.',
    features: [
      { icon: 'link', title: 'Cross-Tool Orchestration', description: 'Connect 100+ apps — CRM, email, Slack, sheets, databases, accounting tools — into one workflow.' },
      { icon: 'file', title: 'Document Automation', description: 'Auto-generate, send, and store contracts, invoices, proposals, and reports.' },
      { icon: 'chart', title: 'Data Sync & Cleanup', description: 'Keep records consistent across systems with automated deduplication and enrichment.' },
      { icon: 'bell', title: 'Notification Routing', description: 'Smart alerts to the right people, on the right channel, only when it matters.' },
      { icon: 'clock', title: 'Scheduled Jobs', description: 'Recurring reports, data pulls, and maintenance tasks running on autopilot.' },
      { icon: 'alert', title: 'Error Recovery', description: 'Built-in retry logic, alerting, and human escalation for graceful failure handling.' },
    ],
    benefits: [
      'Reclaim 10–20 hours per employee per week from repetitive tasks',
      'Eliminate copy-paste errors between systems',
      'Faster onboarding, faster billing, faster everything',
      'Audit-ready logs of every automated action',
      'Free your team to focus on high-leverage work',
    ],
    process: [
      { step: '01', title: 'Workflow Audit', description: 'We map your team\'s most time-consuming repetitive workflows and identify automation candidates.' },
      { step: '02', title: 'Build & Connect', description: 'Workflows are engineered, tested, and rolled out with full documentation and team training.' },
      { step: '03', title: 'Operate & Evolve', description: 'We monitor, maintain, and continuously expand automation coverage as your business grows.' },
    ],
  },
]

export const industries: IndustryData[] = [
  {
    title: 'Real Estate',
    slug: 'real-estate',
    headline: 'AI-Powered Real Estate Operations',
    description: 'Automate lead qualification, property matching, client follow-ups, and transaction coordination — so your agents close more deals with less admin.',
    painPoints: [
      'Agents spend 60% of their time on admin instead of selling',
      'Leads go cold from slow response times and missed follow-ups',
      'Manual CRM updates and transaction tracking cause errors',
      'Inconsistent client communication across the team',
    ],
    solutions: [
      { title: 'AI Lead Qualification', description: 'Instantly qualify inbound leads based on budget, timeline, and preferences — routing hot leads directly to agents.' },
      { title: 'Automated Property Matching', description: 'AI matches listings to buyer criteria in real-time, sending personalized property recommendations automatically.' },
      { title: 'Transaction Coordination', description: 'Automated document tracking, deadline management, and stakeholder communication throughout the closing process.' },
    ],
    useCases: ['Lead response automation', 'Open house follow-up sequences', 'Market analysis reporting', 'Client portal management', 'Listing syndication'],
    stats: [{ value: '3×', label: 'Faster lead response' }, { value: '45%', label: 'More deals closed' }, { value: '20hrs', label: 'Saved per agent weekly' }],
  },
  {
    title: 'Healthcare',
    slug: 'healthcare',
    headline: 'AI Systems for Healthcare Operations',
    description: 'Streamline patient scheduling, automate follow-ups, manage referrals, and handle intake workflows — while maintaining full HIPAA compliance.',
    painPoints: [
      'Front desk staff overwhelmed with scheduling and rescheduling calls',
      'Patient no-shows and late cancellations drain revenue',
      'Manual referral tracking leads to lost patients and revenue',
      'Administrative burden reduces time available for patient care',
    ],
    solutions: [
      { title: 'AI Patient Scheduling', description: 'Automated appointment booking, reminders, and rescheduling via phone, text, and web — reducing no-shows by 40%.' },
      { title: 'Referral Management', description: 'End-to-end referral tracking from receipt to appointment, with automated follow-ups and status updates.' },
      { title: 'Intake Automation', description: 'Digital patient intake forms, insurance verification, and document collection completed before the visit.' },
    ],
    useCases: ['Patient appointment scheduling', 'Post-visit follow-up', 'Insurance pre-authorization', 'Waitlist management', 'Patient satisfaction surveys'],
    stats: [{ value: '40%', label: 'Reduction in no-shows' }, { value: '60%', label: 'Less admin overhead' }, { value: '24/7', label: 'Patient accessibility' }],
  },
  {
    title: 'Retail',
    slug: 'retail',
    headline: 'AI Automation for Retail & DTC',
    description: 'Optimize inventory management, personalize customer experiences, automate marketing campaigns, and streamline supply chain operations.',
    painPoints: [
      'Inventory mismanagement leads to stockouts and overstock costs',
      'Manual marketing segmentation misses personalization opportunities',
      'Customer service volume spikes during sales events are unmanageable',
      'Fragmented data across POS, e-commerce, and CRM systems',
    ],
    solutions: [
      { title: 'Demand Forecasting', description: 'AI-driven inventory optimization that predicts demand patterns and automates reorder triggers.' },
      { title: 'Personalized Marketing', description: 'Customer segmentation and campaign personalization driven by purchase history and behavioral data.' },
      { title: 'Customer Service AI', description: 'AI agents handle order inquiries, returns, and product questions across chat, email, and phone.' },
    ],
    useCases: ['Inventory optimization', 'Dynamic pricing', 'Customer segmentation', 'Abandoned cart recovery', 'Review management'],
    stats: [{ value: '30%', label: 'Reduction in stockouts' }, { value: '5×', label: 'Campaign throughput' }, { value: '85%', label: 'CS queries automated' }],
  },
  {
    title: 'Logistics',
    slug: 'logistics',
    headline: 'AI for Logistics & Supply Chain',
    description: 'Automate route optimization, shipment tracking, warehouse coordination, and carrier management with intelligent AI systems.',
    painPoints: [
      'Manual route planning leads to inefficient fuel and time usage',
      'Shipment visibility gaps cause customer dissatisfaction',
      'Warehouse coordination bottlenecks slow fulfillment speed',
      'Carrier selection and negotiation is time-intensive and inconsistent',
    ],
    solutions: [
      { title: 'Route Optimization', description: 'AI-powered route planning that factors in traffic, weather, delivery windows, and vehicle capacity in real-time.' },
      { title: 'Predictive Tracking', description: 'Proactive shipment monitoring with automatic alerts for delays, exceptions, and ETA changes.' },
      { title: 'Warehouse Automation', description: 'Intelligent pick-pack-ship workflows, inventory slotting, and capacity planning.' },
    ],
    useCases: ['Fleet management', 'Last-mile delivery optimization', 'Customs documentation', 'Carrier rate negotiation', 'Returns processing'],
    stats: [{ value: '25%', label: 'Fuel cost reduction' }, { value: '99%', label: 'Delivery accuracy' }, { value: '3×', label: 'Faster fulfillment' }],
  },
  {
    title: 'Finance',
    slug: 'finance',
    headline: 'AI for Financial Services',
    description: 'Automate compliance reporting, risk assessment, client onboarding, and portfolio management with precision-engineered AI systems.',
    painPoints: [
      'Regulatory compliance is time-consuming and error-prone',
      'Manual KYC and onboarding creates friction and delays',
      'Risk assessment relies on incomplete data and human judgment',
      'Client reporting requires hours of manual data aggregation',
    ],
    solutions: [
      { title: 'Compliance Automation', description: 'Automated regulatory reporting, audit trail generation, and policy adherence monitoring.' },
      { title: 'KYC & Onboarding', description: 'AI-driven identity verification, document processing, and risk scoring for seamless client onboarding.' },
      { title: 'Risk Intelligence', description: 'Real-time risk monitoring, anomaly detection, and portfolio stress testing using AI models.' },
    ],
    useCases: ['Transaction monitoring', 'Fraud detection', 'Loan processing', 'Client portfolio reporting', 'Market analysis'],
    stats: [{ value: '90%', label: 'Faster onboarding' }, { value: '70%', label: 'Compliance cost reduction' }, { value: '0', label: 'Missed reporting deadlines' }],
  },
  {
    title: 'SaaS',
    slug: 'saas',
    headline: 'AI for SaaS Companies',
    description: 'Scale customer success, automate onboarding, predict churn, and accelerate product-led growth with AI-powered operations.',
    painPoints: [
      'Customer onboarding is manual and inconsistent across accounts',
      'Churn signals are missed until it is too late to intervene',
      'Support ticket volume scales faster than support team hiring',
      'Expansion revenue opportunities are identified reactively, not proactively',
    ],
    solutions: [
      { title: 'Automated Onboarding', description: 'Personalized onboarding sequences that adapt to user behavior, ensuring faster time-to-value.' },
      { title: 'Churn Prediction', description: 'AI models that identify at-risk accounts based on usage patterns, support interactions, and engagement data.' },
      { title: 'Smart Support', description: 'AI-powered tier-1 support that resolves common queries and escalates complex issues with full context.' },
    ],
    useCases: ['User onboarding flows', 'Health score monitoring', 'Feature adoption tracking', 'Expansion opportunity detection', 'Support automation'],
    stats: [{ value: '50%', label: 'Faster time-to-value' }, { value: '35%', label: 'Churn reduction' }, { value: '80%', label: 'Tickets auto-resolved' }],
  },
  {
    title: 'Hospitality',
    slug: 'hospitality',
    headline: 'AI for Hospitality & Travel',
    description: 'Automate guest communications, reservation management, review responses, and operational coordination across your properties.',
    painPoints: [
      'Guest inquiries across multiple channels are difficult to manage consistently',
      'Manual reservation and upsell processes leave revenue on the table',
      'Review management across platforms is overwhelming and reactive',
      'Staff coordination across shifts and properties lacks standardization',
    ],
    solutions: [
      { title: 'Guest AI Concierge', description: 'AI-powered guest communication handling inquiries, bookings, and special requests across all channels 24/7.' },
      { title: 'Revenue Optimization', description: 'Dynamic pricing, upsell recommendations, and package personalization based on guest profiles.' },
      { title: 'Reputation Management', description: 'Automated review monitoring, response generation, and sentiment analysis across all review platforms.' },
    ],
    useCases: ['Booking management', 'Pre-arrival communication', 'In-stay service requests', 'Post-stay follow-ups', 'Staff scheduling'],
    stats: [{ value: '24/7', label: 'Guest availability' }, { value: '15%', label: 'Revenue increase' }, { value: '4.8', label: 'Avg. review score (of 5)' }],
  },
  {
    title: 'Legal',
    slug: 'legal',
    headline: 'AI for Legal Operations',
    description: 'Automate document review, client intake, billing, and case management — enabling your practice to handle more matters with fewer hours.',
    painPoints: [
      'Document review and due diligence consume disproportionate billable hours',
      'Client intake is slow with extensive manual form processing',
      'Billing and time tracking are inconsistent and often delayed',
      'Knowledge management across cases and precedents is fragmented',
    ],
    solutions: [
      { title: 'Document Intelligence', description: 'AI-powered contract review, clause extraction, and risk flagging — reducing review time by 70%.' },
      { title: 'Client Intake Automation', description: 'Digital intake forms, conflict checks, and engagement letter generation with automatic routing.' },
      { title: 'Practice Management AI', description: 'Automated time tracking, billing optimization, and deadline management across all active matters.' },
    ],
    useCases: ['Contract analysis', 'Legal research', 'Client communication', 'Deadline tracking', 'Billing optimization'],
    stats: [{ value: '70%', label: 'Faster document review' }, { value: '3×', label: 'More matters handled' }, { value: '95%', label: 'Billing accuracy' }],
  },
  {
    title: 'Recruitment',
    slug: 'recruitment',
    headline: 'AI for Recruitment & Staffing',
    description: 'Automate candidate sourcing, screening, interview scheduling, and placement tracking — filling roles faster with better matches.',
    painPoints: [
      'Sourcing qualified candidates is increasingly time-intensive and competitive',
      'Manual resume screening creates bottlenecks and introduces bias',
      'Interview scheduling coordination wastes recruiter and candidate time',
      'Candidate engagement drops during slow-moving hiring processes',
    ],
    solutions: [
      { title: 'AI Candidate Sourcing', description: 'Automated candidate identification, outreach, and engagement across job boards, social media, and talent databases.' },
      { title: 'Smart Screening', description: 'AI-powered resume parsing, skill matching, and candidate ranking based on role requirements and culture fit.' },
      { title: 'Interview Automation', description: 'Automated scheduling, calendar coordination, and pre-interview preparation materials for candidates.' },
    ],
    useCases: ['Job description optimization', 'Candidate pipeline management', 'Reference checking', 'Offer letter generation', 'Onboarding coordination'],
    stats: [{ value: '50%', label: 'Faster time-to-hire' }, { value: '3×', label: 'More candidates screened' }, { value: '40%', label: 'Better retention rates' }],
  },
  {
    title: 'E-commerce',
    slug: 'e-commerce',
    headline: 'AI for E-commerce Operations',
    description: 'Automate product catalog management, customer service, order fulfillment, and marketing optimization across your online stores.',
    painPoints: [
      'Product catalog management across channels is manual and error-prone',
      'Customer service inquiries spike unpredictably during promotions',
      'Cart abandonment rates remain high despite retargeting efforts',
      'Returns processing and customer resolution are costly and slow',
    ],
    solutions: [
      { title: 'Catalog Intelligence', description: 'AI-powered product descriptions, categorization, pricing optimization, and cross-sell recommendations.' },
      { title: 'Conversational Commerce', description: 'AI shopping assistants that guide customers through product selection, answer questions, and upsell.' },
      { title: 'Order Lifecycle AI', description: 'Automated order tracking, delivery updates, returns processing, and customer satisfaction follow-ups.' },
    ],
    useCases: ['Product description generation', 'Review analysis', 'Pricing optimization', 'Abandoned cart recovery', 'Customer segmentation'],
    stats: [{ value: '25%', label: 'Increase in AOV' }, { value: '60%', label: 'CS cost reduction' }, { value: '3×', label: 'Faster catalog updates' }],
  },
  {
    title: 'Education',
    slug: 'education',
    headline: 'AI Automation for Education',
    description: 'Streamline admissions, automate student communications, manage course delivery, and personalize learning experiences across schools, colleges, and EdTech platforms.',
    painPoints: [
      'Admissions teams overwhelmed by inquiry volume during peak seasons',
      'Manual student support creates long response delays',
      'Inconsistent follow-up with prospective students leads to lost enrollments',
      'Administrative burden takes faculty time away from teaching',
    ],
    solutions: [
      { title: 'Admissions Automation', description: 'AI agents handle inquiries, qualify prospects, schedule counseling calls, and follow up automatically.' },
      { title: 'Student Support AI', description: '24/7 AI assistants answer course, fee, and policy questions across web, WhatsApp, and phone.' },
      { title: 'Lifecycle Engagement', description: 'Personalized communication from inquiry to enrollment to alumni — fully automated.' },
    ],
    useCases: ['Lead nurturing', 'Counseling automation', 'Fee reminders', 'Course recommendations', 'Alumni engagement'],
    stats: [{ value: '3×', label: 'More enrollments handled' }, { value: '24/7', label: 'Student support' }, { value: '50%', label: 'Faster admissions' }],
  },
  {
    title: 'Manufacturing',
    slug: 'manufacturing',
    headline: 'AI Automation for Manufacturing',
    description: 'Automate quote generation, vendor communications, production reporting, and quality coordination across your factory floor and back office.',
    painPoints: [
      'Manual RFQ and quotation processes delay sales cycles',
      'Vendor coordination is fragmented across calls, emails, and spreadsheets',
      'Production reporting is reactive and consumes management time',
      'Quality issues are caught too late in the cycle',
    ],
    solutions: [
      { title: 'Quote Automation', description: 'AI generates quotes from RFQs, pricing rules, and inventory data — in minutes, not days.' },
      { title: 'Vendor Coordination', description: 'Automated PO follow-ups, delivery confirmations, and exception alerts across your supplier base.' },
      { title: 'Production Intelligence', description: 'Real-time production dashboards, anomaly detection, and predictive maintenance alerts.' },
    ],
    useCases: ['RFQ processing', 'Vendor follow-ups', 'Inventory reporting', 'Quality alerts', 'Order tracking'],
    stats: [{ value: '5×', label: 'Faster quotes' }, { value: '30%', label: 'Lower coordination cost' }, { value: '99%', label: 'Order accuracy' }],
  },
  {
    title: 'Insurance',
    slug: 'insurance',
    headline: 'AI for Insurance Operations',
    description: 'Automate policy quoting, claims intake, customer service, and renewals — for brokers, agencies, and insurers.',
    painPoints: [
      'Manual claims intake is slow and frustrating for customers',
      'Renewal processes leak revenue without consistent follow-up',
      'Quote generation across products and providers is time-consuming',
      'Policy documents and customer questions overwhelm support teams',
    ],
    solutions: [
      { title: 'Quote Engine', description: 'AI quoting across multiple insurers, products, and customer profiles in seconds.' },
      { title: 'Claims Intake AI', description: 'Conversational claims intake via voice and chat with automatic document collection.' },
      { title: 'Renewal Automation', description: 'Proactive renewal sequences with personalized recommendations and one-click renewal flows.' },
    ],
    useCases: ['Quote comparison', 'Policy lookups', 'Claims first notice of loss', 'Renewal reminders', 'Document automation'],
    stats: [{ value: '10×', label: 'Faster quotes' }, { value: '40%', label: 'Higher renewal rate' }, { value: '24/7', label: 'Claims intake' }],
  },
  {
    title: 'Media & Entertainment',
    slug: 'media-entertainment',
    headline: 'AI for Media & Entertainment',
    description: 'Automate content workflows, audience engagement, ad operations, and rights management for media companies, studios, and creator businesses.',
    painPoints: [
      'Content production cycles can\'t keep up with audience demand',
      'Audience engagement is fragmented across platforms',
      'Manual rights and royalty tracking is error-prone',
      'Ad ops and campaign trafficking eats into margin',
    ],
    solutions: [
      { title: 'Content Automation', description: 'AI-assisted scripting, captioning, repurposing, and distribution across platforms.' },
      { title: 'Audience Engagement', description: 'Automated community management, comment moderation, and personalized recommendations.' },
      { title: 'Rights & Ops', description: 'Royalty tracking, contract management, and ad operations automated end-to-end.' },
    ],
    useCases: ['Content repurposing', 'Subtitle generation', 'Audience analytics', 'Royalty reconciliation', 'Ad trafficking'],
    stats: [{ value: '5×', label: 'More content output' }, { value: '60%', label: 'Engagement lift' }, { value: '40%', label: 'Lower ops cost' }],
  },
  {
    title: 'Construction',
    slug: 'construction',
    headline: 'AI for Construction & Real Estate Development',
    description: 'Automate project tracking, vendor communications, compliance documentation, and client reporting across your construction sites and projects.',
    painPoints: [
      'Project status updates require constant manual coordination',
      'Vendor and subcontractor communication is fragmented',
      'Compliance documentation eats into project margins',
      'Client reporting is ad-hoc and inconsistent across projects',
    ],
    solutions: [
      { title: 'Project Coordination AI', description: 'Automated daily progress reports, RFI tracking, and stakeholder updates.' },
      { title: 'Vendor Management', description: 'AI follow-ups on POs, deliveries, and payment cycles across your subcontractor base.' },
      { title: 'Compliance Automation', description: 'Document collection, safety reporting, and audit trails on autopilot.' },
    ],
    useCases: ['Daily progress reports', 'RFI management', 'Safety compliance', 'Client portal updates', 'Vendor coordination'],
    stats: [{ value: '20hrs', label: 'Saved per PM weekly' }, { value: '95%', label: 'Compliance coverage' }, { value: '3×', label: 'Faster reporting' }],
  },
  {
    title: 'Agriculture',
    slug: 'agriculture',
    headline: 'AI Automation for Agriculture & Agritech',
    description: 'Automate farmer onboarding, supply chain coordination, advisory services, and market linkages across agritech and agribusiness operations.',
    painPoints: [
      'Farmer onboarding is paper-heavy and slow',
      'Supply chain coordination across thousands of farmers is unmanageable',
      'Advisory and support services don\'t scale to rural language preferences',
      'Market linkage data is fragmented and reactive',
    ],
    solutions: [
      { title: 'Farmer Onboarding AI', description: 'Voice and WhatsApp-based onboarding in regional languages — KYC, land records, and registration.' },
      { title: 'Supply Coordination', description: 'Automated procurement scheduling, logistics, and quality reporting across farmer networks.' },
      { title: 'Advisory Automation', description: 'AI-powered crop advisory, market price alerts, and weather notifications via voice and chat.' },
    ],
    useCases: ['Farmer KYC', 'Crop advisory', 'Procurement scheduling', 'Market price alerts', 'Subsidy claim assistance'],
    stats: [{ value: '10×', label: 'Faster onboarding' }, { value: '5+', label: 'Languages supported' }, { value: '24/7', label: 'Farmer support' }],
  },
  {
    title: 'Automotive',
    slug: 'automotive',
    headline: 'AI for Automotive — Dealers & OEMs',
    description: 'Automate lead qualification, test-drive scheduling, service reminders, and after-sales communication across dealerships and automotive networks.',
    painPoints: [
      'Sales reps overwhelmed by inquiry volume and slow to respond',
      'Test drive coordination is manual and error-prone',
      'Service reminders are inconsistent and miss revenue opportunities',
      'After-sales engagement drops off after delivery',
    ],
    solutions: [
      { title: 'Lead Engagement AI', description: 'Instant response to inbound inquiries with qualification, vehicle matching, and dealer routing.' },
      { title: 'Test Drive Automation', description: 'Booking, confirmation, reminders, and follow-up — all handled by AI across web, phone, and WhatsApp.' },
      { title: 'Service Lifecycle', description: 'Automated service reminders, booking, status updates, and post-service feedback collection.' },
    ],
    useCases: ['Inquiry handling', 'Test drive booking', 'Service reminders', 'Loan & finance follow-ups', 'Customer feedback'],
    stats: [{ value: '5×', label: 'Faster lead response' }, { value: '35%', label: 'Higher service capture' }, { value: '24/7', label: 'Customer engagement' }],
  },
  {
    title: 'Travel & Tourism',
    slug: 'travel-tourism',
    headline: 'AI for Travel & Tourism',
    description: 'Automate itinerary building, booking workflows, customer support, and post-trip engagement for travel agencies, OTAs, and tour operators.',
    painPoints: [
      'Custom itinerary building is time-consuming and inconsistent',
      'Booking modifications and cancellations clog up support',
      'Multi-language traveler support is hard to staff',
      'Post-trip engagement and reviews go uncaptured',
    ],
    solutions: [
      { title: 'Itinerary AI', description: 'Generate personalized itineraries based on traveler preferences, budget, and dates — in minutes.' },
      { title: 'Booking Support AI', description: '24/7 multilingual support for changes, cancellations, and travel emergencies.' },
      { title: 'Engagement Automation', description: 'Pre-trip prep, in-trip assistance, and post-trip review collection — all on autopilot.' },
    ],
    useCases: ['Itinerary generation', 'Booking modifications', 'Multilingual support', 'Reviews collection', 'Repeat traveler campaigns'],
    stats: [{ value: '10×', label: 'Faster itineraries' }, { value: '24/7', label: 'Traveler support' }, { value: '40%', label: 'Higher reviews captured' }],
  },
  {
    title: 'Food & Beverage',
    slug: 'food-beverage',
    headline: 'AI for Food & Beverage — Restaurants, Cloud Kitchens, F&B Brands',
    description: 'Automate reservations, order management, customer engagement, and review responses across restaurants, cafes, and F&B brands.',
    painPoints: [
      'Reservation and order calls overwhelm front-of-house staff',
      'Customer feedback and review management is reactive',
      'Loyalty and repeat customer engagement lacks personalization',
      'Multi-outlet coordination is fragmented',
    ],
    solutions: [
      { title: 'Reservation & Order AI', description: 'Voice and WhatsApp-based reservations, takeaway orders, and table management.' },
      { title: 'Reputation AI', description: 'Automated review monitoring, response generation, and sentiment tracking across Google, Zomato, Swiggy.' },
      { title: 'Loyalty Engagement', description: 'Personalized offers, win-back campaigns, and repeat-customer sequences via WhatsApp and SMS.' },
    ],
    useCases: ['Reservation handling', 'Order taking', 'Review responses', 'Loyalty campaigns', 'Multi-outlet reporting'],
    stats: [{ value: '4.8', label: 'Avg. review score (of 5)' }, { value: '30%', label: 'Higher repeat orders' }, { value: '24/7', label: 'Customer availability' }],
  },
  {
    title: 'Professional Services',
    slug: 'professional-services',
    headline: 'AI for Professional Services — Agencies, Consultancies, CA Firms',
    description: 'Automate client intake, proposal generation, project coordination, and billing for agencies, consultancies, and professional service firms.',
    painPoints: [
      'Client intake and onboarding is manual and inconsistent',
      'Proposal and SOW generation eats into billable time',
      'Project status updates require constant follow-up',
      'Billing and collections cycles are slow',
    ],
    solutions: [
      { title: 'Client Intake AI', description: 'Conversational discovery, qualification, and onboarding with auto-generated brief documents.' },
      { title: 'Proposal Automation', description: 'AI-generated proposals and SOWs from past templates, scope inputs, and pricing rules.' },
      { title: 'Engagement Operations', description: 'Automated status updates, time tracking, invoicing, and collection reminders.' },
    ],
    useCases: ['Client onboarding', 'Proposal generation', 'Status reporting', 'Invoice automation', 'Collections follow-up'],
    stats: [{ value: '5×', label: 'Faster proposals' }, { value: '20hrs', label: 'Saved per consultant weekly' }, { value: '95%', label: 'Billing accuracy' }],
  },
  {
    title: 'Nonprofits',
    slug: 'nonprofits',
    headline: 'AI for Nonprofits & Social Impact',
    description: 'Automate donor engagement, volunteer coordination, beneficiary support, and grant reporting — so your team can focus on impact.',
    painPoints: [
      'Donor stewardship is inconsistent across the donor base',
      'Volunteer coordination consumes program manager time',
      'Beneficiary support is hard to scale across geographies',
      'Grant reporting is manual and time-consuming',
    ],
    solutions: [
      { title: 'Donor Engagement AI', description: 'Personalized donor communications, receipt automation, and renewal sequences.' },
      { title: 'Volunteer Operations', description: 'Automated recruitment, scheduling, training, and feedback for volunteer teams.' },
      { title: 'Beneficiary Support', description: 'Multilingual AI support across voice and chat for beneficiaries — at zero marginal cost.' },
    ],
    useCases: ['Donor stewardship', 'Volunteer scheduling', 'Beneficiary helpline', 'Grant reporting', 'Campaign automation'],
    stats: [{ value: '3×', label: 'Donor retention' }, { value: '5+', label: 'Languages supported' }, { value: '60%', label: 'Less admin overhead' }],
  },
  {
    title: 'Government & PSU',
    slug: 'government',
    headline: 'AI for Government & Public Sector',
    description: 'Citizen-facing AI agents that handle queries, applications, and support — across web, phone, and regional languages.',
    painPoints: [
      'Citizen helplines overwhelmed during peak periods',
      'Manual application processing creates long backlogs',
      'Multilingual citizen support is hard to staff',
      'Public information requests pile up faster than they\'re resolved',
    ],
    solutions: [
      { title: 'Citizen Helpline AI', description: 'Multilingual voice and chat agents for queries, scheme information, and grievance routing.' },
      { title: 'Application Automation', description: 'AI-driven document collection, eligibility checks, and status updates for citizen applications.' },
      { title: 'Information Access', description: '24/7 AI portal answering policy, scheme, and procedural questions in any language.' },
    ],
    useCases: ['Scheme inquiries', 'Application status', 'Grievance routing', 'Document verification', 'Public information'],
    stats: [{ value: '10+', label: 'Languages supported' }, { value: '24/7', label: 'Citizen access' }, { value: '70%', label: 'Faster resolution' }],
  },
]
