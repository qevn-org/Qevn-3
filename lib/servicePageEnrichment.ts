/**
 * Per-service copy for service detail pages (plain-language blocks, audience,
 * proof, FAQs). Keeps lib/data.ts focused on shared service definitions.
 */
export type ServicePageEnrichment = {
  whatThisDoes: string[]
  whoFor: string[]
  results: { stat: string; statLabel: string; narrative: string }
  faqs: { q: string; a: string }[]
}

export const servicePageEnrichment: Record<string, ServicePageEnrichment> = {
  'multi-agent-ai-systems': {
    whatThisDoes: [
      'Instead of one big chatbot, you get a team of small AIs that each do one part of a job — then pass the work along like a real operations chain.',
      'They read from your tools, write back where you need it, and stop for a human only when something is unclear or risky.',
      'You see a clear trail of what each agent did, so approvals and audits stay simple.',
    ],
    whoFor: [
      'Ops-heavy teams with lots of handoffs',
      'Companies outgrowing spreadsheets and email chains',
      'Leaders who want automation without a fragile “one prompt does all” setup',
    ],
    results: {
      stat: '10×',
      statLabel: 'Faster multi-step cycles',
      narrative:
        'Clients typically see long workflows that used to take days finish in hours once agents coordinate the same steps people used to route manually.',
    },
    faqs: [
      {
        q: 'How is this different from a single AI assistant?',
        a: 'Each agent has a narrow job and clear inputs and outputs. That keeps quality high and makes failures easier to spot and fix — instead of one model guessing at everything.',
      },
      {
        q: 'Will this replace my staff?',
        a: 'No. It removes repetitive routing and busywork so your team spends time on judgment, relationships, and exceptions.',
      },
      {
        q: 'What tools can agents connect to?',
        a: 'Most modern CRMs, email, calendars, databases, and internal APIs. We scope integrations during discovery so nothing is a surprise at go-live.',
      },
      {
        q: 'How long until we are live?',
        a: 'Most builds land in a few weeks depending on how many systems we wire in. You get a dated plan after the strategy session.',
      },
    ],
  },
  'ai-calling-agents': {
    whatThisDoes: [
      'This is an AI voice layer that answers and places calls for you — qualifying leads, booking slots, and logging every conversation.',
      'It sounds natural, sticks to your scripts, and hands off to a person when the call needs a human.',
      'Calls sync to your CRM with notes and next steps so nothing lives in someone’s head.',
    ],
    whoFor: [
      'Sales and support teams missing calls after hours',
      'Clinics and service businesses with high booking volume',
      'Founders who cannot hire a full phone bench yet',
    ],
    results: {
      stat: '24/7',
      statLabel: 'Answered calls',
      narrative:
        'Teams report fewer missed inbound leads and faster follow-up because every ring gets a consistent, logged response.',
    },
    faqs: [
      {
        q: 'Will callers know it is AI?',
        a: 'We follow your disclosure preferences and local rules. The voice is natural; many callers care most about getting a fast, correct answer.',
      },
      {
        q: 'What if the AI gets stuck?',
        a: 'We design escalation paths — voicemail, SMS, or a live queue — so callers are never left hanging.',
      },
      {
        q: 'Can it use my existing phone number?',
        a: 'Usually yes, via your carrier or VoIP provider. We map the technical path during discovery.',
      },
      {
        q: 'Does it work in multiple languages?',
        a: 'Yes. We configure languages and phrasing to match your market.',
      },
    ],
  },
  'ai-business-auto-pilot': {
    whatThisDoes: [
      'Auto-Pilot watches your daily operations: reports, routing, reminders, and escalations — then does the repeatable parts for you.',
      'It connects to the tools you already use so you are not migrating data to yet another dashboard.',
      'When something looks off, you get a clear alert with context instead of digging through threads.',
    ],
    whoFor: [
      'Small leadership teams wearing the “ops manager” hat',
      'Companies with recurring reporting and follow-up chaos',
      'Teams drowning in Slack or email coordination',
    ],
    results: {
      stat: '15+',
      statLabel: 'Hours back weekly',
      narrative:
        'Typical teams claw back serious weekly time once reporting, nudges, and routing run on a steady automated layer.',
    },
    faqs: [
      {
        q: 'Is this the same as hiring an ops person?',
        a: 'It handles the repetitive cadence — reminders, rollups, routing — so your ops people focus on decisions and edge cases.',
      },
      {
        q: 'What if our process changes?',
        a: 'We build with change in mind. Tweaks to schedules, KPIs, and routing rules are part of ongoing support.',
      },
      {
        q: 'Where does my data live?',
        a: 'In systems you control, with access rules you approve. We do not move data out for training without explicit agreement.',
      },
      {
        q: 'How fast is rollout?',
        a: 'Light stacks can go live quickly; deeper integrations take longer. You get a timeline after we map your tools.',
      },
    ],
  },
  'ai-marketing-sales-ops': {
    whatThisDoes: [
      'We connect AI to your marketing and sales motion — content drafts, sequences, scoring, and light CRM hygiene — so pipeline work does not stall.',
      'It tests and learns within guardrails you set: tone, segments, and what never gets automated.',
      'You still approve brand-sensitive pieces; the system handles volume and consistency.',
    ],
    whoFor: [
      'B2B teams with active outbound or nurture',
      'Lean marketing orgs needing more output per person',
      'Sales leaders who want cleaner pipeline data',
    ],
    results: {
      stat: '40%',
      statLabel: 'Lift in qualified opps',
      narrative:
        'When nurture and scoring run consistently, more of the right conversations reach sales at the right time.',
    },
    faqs: [
      {
        q: 'Will AI hurt our brand voice?',
        a: 'We train on your examples and lock style guides into prompts and checks. Humans stay in the loop for launches and sensitive campaigns.',
      },
      {
        q: 'Which platforms do you integrate with?',
        a: 'Common stacks include HubSpot, Salesforce, Mailchimp, Meta/Google ads tools, and Slack — scoped per client.',
      },
      {
        q: 'Do you replace our agency?',
        a: 'Often no. We automate repeatable execution so agencies or internal teams spend time on strategy and creative direction.',
      },
      {
        q: 'How do you measure success?',
        a: 'We align on funnel metrics up front — meetings booked, speed to lead, pipeline created — and report against those.',
      },
    ],
  },
  'leads-to-closure': {
    whatThisDoes: [
      'This is an end-to-end sales engine: capture, qualify, follow up, propose, and nudge deals forward with AI doing the heavy lifting.',
      'Humans step in for negotiation and judgment calls — with full context already assembled.',
      'Every touch is logged so forecasting and handoffs stay honest.',
    ],
    whoFor: [
      'SMBs with inbound leads but inconsistent follow-up',
      'Teams without a full SDR bench',
      'Founders who want pipeline without hiring three roles at once',
    ],
    results: {
      stat: '60%',
      statLabel: 'Faster cycles',
      narrative:
        'Clients often see deal velocity improve when follow-ups and proposals stop depending on “who had time today.”',
    },
    faqs: [
      {
        q: 'Does this work with our CRM?',
        a: 'Yes — we design around your source of truth so stages, fields, and activities stay clean.',
      },
      {
        q: 'What about compliance and consent?',
        a: 'Sequences respect opt-outs and regional rules. We bake compliance checkpoints into templates.',
      },
      {
        q: 'Can reps override the AI?',
        a: 'Always. Reps get summaries and suggested next steps; they own the relationship.',
      },
      {
        q: 'What is the first milestone?',
        a: 'Usually a working qualification + follow-up path for one segment, then we expand.',
      },
    ],
  },
  'custom-software-development': {
    whatThisDoes: [
      'We design and build software that fits how you actually work — web apps, internal tools, and integrations — instead of forcing you into off-the-shelf boxes.',
      'You get a clear roadmap, regular demos, and documentation your team can own.',
      'Launch includes monitoring and a sensible handoff so you are not dependent on mystery knowledge.',
    ],
    whoFor: [
      'Teams with a workflow nothing on the market handles well',
      'Companies modernising legacy internal tools',
      'Founders validating a product with a serious first version',
    ],
    results: {
      stat: '100%',
      statLabel: 'Owned codebase',
      narrative:
        'You keep the repo, access, and deploy pipeline we agree on — no black-box vendor lock-in for your product.',
    },
    faqs: [
      {
        q: 'React or something else?',
        a: 'We pick the stack for maintainability and your team’s skills. Most web work is modern React/Next-style stacks unless you need different.',
      },
      {
        q: 'How do you price builds?',
        a: 'Fixed phases after discovery — scope, milestones, and acceptance criteria are written down up front.',
      },
      {
        q: 'Do you maintain after launch?',
        a: 'Yes — support retainers are optional and sized to how fast you iterate.',
      },
      {
        q: 'Can you work with our designers?',
        a: 'Absolutely. We implement from Figma or pair with your design partner.',
      },
    ],
  },
  'ai-chatbots': {
    whatThisDoes: [
      'A chat layer trained on your real answers — site, WhatsApp, DMs — so visitors get accurate replies instantly.',
      'It qualifies leads, books meetings, and opens tickets when a human should take over.',
      'You see transcripts and drop-off points so improvements are data-backed.',
    ],
    whoFor: [
      'Businesses with repeat “where is my / how much / can I” questions',
      'Teams losing leads after hours',
      'Support queues that spike during campaigns',
    ],
    results: {
      stat: '80%',
      statLabel: 'Queries deflected',
      narrative:
        'Many clients resolve the majority of tier-1 questions automatically while keeping satisfaction steady.',
    },
    faqs: [
      {
        q: 'What do we need to train it?',
        a: 'FAQs, product pages, policies, and any private docs you want included. We exclude anything sensitive by default until you approve.',
      },
      {
        q: 'Can it book on our calendar?',
        a: 'Yes — Google, Outlook, and common booking tools are typical integrations.',
      },
      {
        q: 'What if it answers wrong?',
        a: 'We add guardrails, source citations where useful, and human handoff for low-confidence replies.',
      },
      {
        q: 'Languages?',
        a: 'Multilingual setups are supported; we tune per market.',
      },
    ],
  },
  'ai-appointment-booking': {
    whatThisDoes: [
      'An AI scheduler that talks or chats like your front desk — checks live availability, books, confirms, and handles reschedules.',
      'Reminders go out on the channels your customers actually read.',
      'Your calendar stays the source of truth — no double-book ghosts.',
    ],
    whoFor: [
      'Clinics, salons, spas, and consultancies',
      'Sales teams booking demos at volume',
      'Multi-location groups with complex rules',
    ],
    results: {
      stat: '40%',
      statLabel: 'Fewer no-shows',
      narrative:
        'Smart reminders and easy reschedules usually cut empty slots and phone tag sharply.',
    },
    faqs: [
      {
        q: 'Which calendars sync?',
        a: 'Google and Microsoft are common; proprietary systems depend on API access — we confirm in discovery.',
      },
      {
        q: 'Deposits or payments?',
        a: 'Optional — we can add payment links in the flow if your processor supports it.',
      },
      {
        q: 'Staff-specific routing?',
        a: 'Yes — skills, rooms, equipment, and locations can all be rules.',
      },
      {
        q: 'HIPAA or similar?',
        a: 'We plan architecture and vendors to match your compliance tier when required.',
      },
    ],
  },
  'lead-generation-systems': {
    whatThisDoes: [
      'Outbound prospecting, enrichment, and personalised first touches — running as a system, not a one-off campaign.',
      'Deliverability and list hygiene are treated as engineering, not luck.',
      'Everything lands in your CRM with sane fields so reps work leads instead of cleaning spreadsheets.',
    ],
    whoFor: [
      'B2B teams needing predictable meetings',
      'Founders doing founder-led sales who need leverage',
      'Agencies replacing manual list building',
    ],
    results: {
      stat: '3×',
      statLabel: 'More qualified meetings',
      narrative:
        'When sourcing and outreach run continuously, pipeline stops depending on heroic manual bursts.',
    },
    faqs: [
      {
        q: 'Is this spammy?',
        a: 'No — volume stays within best practices, with personalisation and strict opt-out handling.',
      },
      {
        q: 'What data sources?',
        a: 'We combine your ICP, public firmographics, and compliant providers you approve.',
      },
      {
        q: 'How fast do we see replies?',
        a: 'Usually within the first weeks after warmup; we set expectations on your domain age and market.',
      },
      {
        q: 'Do we keep the accounts?',
        a: 'Yes — inboxes, domains, and sequences are yours.',
      },
    ],
  },
  'workflow-automation': {
    whatThisDoes: [
      'We wire your apps together so invoices, onboarding, tickets, and reports move without copy-paste.',
      'Failures retry, get logged, and ping the right person instead of vanishing.',
      'You get playbooks and ownership so automations are maintainable.',
    ],
    whoFor: [
      'Teams living in five tools that never quite agree',
      'Finance and ops with recurring monthly close tasks',
      'Anyone tired of “export CSV, tweak, upload again”',
    ],
    results: {
      stat: '20',
      statLabel: 'Hours saved weekly',
      narrative:
        'Per-employee time savings add up fast when the boring glue work between systems runs on a schedule.',
    },
    faqs: [
      {
        q: 'Zapier or code?',
        a: 'We pick the right layer — often a mix: fast integrations where visual tools win, code where reliability or volume demands it.',
      },
      {
        q: 'What about errors?',
        a: 'Retries, dead-letter queues, and Slack/email alerts are standard.',
      },
      {
        q: 'Security reviews?',
        a: 'We document data paths and use least-privilege credentials; enterprise reviews are supported.',
      },
      {
        q: 'Can we start small?',
        a: 'Yes — one painful workflow first, then expand once ROI is clear.',
      },
    ],
  },
}

export function getServicePageEnrichment(slug: string): ServicePageEnrichment | undefined {
  return servicePageEnrichment[slug]
}
