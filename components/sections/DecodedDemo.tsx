'use client'

import React, { useState, useEffect, useRef } from 'react'

interface TranscriptLine {
  speaker: 'agent' | 'customer'
  text: string
  duration: number // seconds it takes to speak
}

const LANGUAGES = [
  'English',
  'Hinglish',
  'Hindi',
  'Gujarati',
  'Marathi',
  'Tamil',
  'Telugu',
  'Bengali',
  'Arabic'
]

const CATEGORIES = [
  { id: 'receptionist', label: 'AI Receptionist' },
  { id: 'sales', label: 'AI Sales Agent' },
  { id: 'booking', label: 'AI Appointment Booking' },
  { id: 'support', label: 'AI Customer Support' },
  { id: 'leads', label: 'AI Lead Qualification' },
  { id: 'real-estate', label: 'AI Real Estate Agent' },
  { id: 'healthcare', label: 'AI Healthcare Assistant' },
  { id: 'recruitment', label: 'AI Recruitment Assistant' }
]

// Dialogue databases
const DIALOGUES: Record<string, Record<string, TranscriptLine[]>> = {
  receptionist: {
    English: [
      { speaker: 'agent', text: 'Thank you for calling QEVN Operations. This is Sarah, your AI receptionist. How can I direct your call today?', duration: 5 },
      { speaker: 'customer', text: 'Hi, I need to talk to someone regarding a custom CRM integration project.', duration: 4 },
      { speaker: 'agent', text: 'I can help with that. Let me look up our project engineering team. They are currently resolving a system deployment, but I can schedule a direct call back or create a support ticket. Which do you prefer?', duration: 8 },
      { speaker: 'customer', text: 'A direct call back is great. Sometime tomorrow afternoon would be perfect.', duration: 5 },
      { speaker: 'agent', text: 'Understood. I have logged your request. An integration strategist will call you back tomorrow, Tuesday, between 2 PM and 4 PM. Confirmation details have been sent to your mobile.', duration: 8 },
      { speaker: 'customer', text: 'Awesome, thanks Sarah. That was quick.', duration: 3 },
      { speaker: 'agent', text: 'My pleasure. Have a productive day ahead!', duration: 3 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hello, QEVN Operations me call karne ke liye thank you. Main Sarah hoon, aapki AI receptionist. Aaj main aapki kya help kar sakti hoon?', duration: 6 },
      { speaker: 'customer', text: 'Hi Sarah, mujhe integration project ke baare me team se baat karni thi.', duration: 4 },
      { speaker: 'agent', text: 'Sure, main check karti hoon. Humare system engineering experts abhi ek live deployment me hain. Kya main kal ke liye aapka call back schedule kar doon?', duration: 7 },
      { speaker: 'customer', text: 'Haan, kal afternoon ka time sahi rahega.', duration: 3 },
      { speaker: 'agent', text: 'Done! Maine call back schedule kar diya hai. Kal dopahar 2 se 4 baje ke beech humare manager aapko call karenge. Confirmation SMS aapko mil gaya hoga.', duration: 8 },
      { speaker: 'customer', text: 'Mil gaya, thank you. Kaafi smooth tha ye.', duration: 3 },
      { speaker: 'agent', text: 'You are welcome! Have a great day.', duration: 2 }
    ]
  },
  sales: {
    English: [
      { speaker: 'agent', text: 'Hi, this is James from QEVN. I noticed you requested an audit of your billing workflows. Am I speaking with the founder?', duration: 6 },
      { speaker: 'customer', text: 'Yes, this is David, the founder. We are spending too much time syncing invoice data manually.', duration: 5 },
      { speaker: 'agent', text: 'I completely understand, David. Most high-growth agencies lose about 12 hours a week on manual invoice syncing. Our custom AI billing agents automate this flow from invoice creation directly to CRM sync. What accounting software do you currently use?', duration: 10 },
      { speaker: 'customer', text: 'We use QuickBooks and HubSpot CRM.', duration: 3 },
      { speaker: 'agent', text: 'Perfect. We have pre-built secure adapters for both. We can build a workflow that automatically triggers QuickBooks entries, checks for payment clearance, and updates your HubSpot deal pipeline in real-time. Would you like to review a custom blueprint?', duration: 9 },
      { speaker: 'customer', text: 'Definitely. Send it over.', duration: 2 },
      { speaker: 'agent', text: 'Great. Sending the custom blueprint link to your email right now. Let\'s get your time back!', duration: 5 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hi, main QEVN se James baat kar raha hoon. Aapne billing process automated karne ke liye request kiya tha. Kya meri baat David ji se ho rahi hai?', duration: 7 },
      { speaker: 'customer', text: 'Haan, main David bol raha hoon. Humara kaafi time manual invoicing me waist hota hai.', duration: 4 },
      { speaker: 'agent', text: 'Bilkul samajh sakta hoon David ji. Custom billing agent se aapka QuickBooks aur HubSpot CRM automatically sync ho jayenge. Aapko manually ek entry bhi nahi karni padegi.', duration: 8 },
      { speaker: 'customer', text: 'Ye safe toh hai na? client data leak toh nahi hoga?', duration: 4 },
      { speaker: 'agent', text: 'Security humari top priority hai. System aapke local secure cloud instance par deploy hoga. Data complete safe rahega aur humara ispar koi access nahi hoga.', duration: 8 },
      { speaker: 'customer', text: 'Ok, please process share kijiye.', duration: 3 },
      { speaker: 'agent', text: 'Awesome. Maine details aur client case-study aapke WhatsApp par send kar di hai. Apan kal baat karte hain.', duration: 6 }
    ]
  },
  booking: {
    English: [
      { speaker: 'agent', text: 'Hello, this is QEVN scheduling team. I am calling to confirm your consultation scheduled for Wednesday at 10 AM. Will you be attending?', duration: 6 },
      { speaker: 'customer', text: 'Hi, actually I have a client conflict on Wednesday. Can we reschedule to Thursday?', duration: 5 },
      { speaker: 'agent', text: 'No problem at all. Let me check our availability for Thursday. I have open slots at 11:30 AM, 2 PM, and 4 PM. Do any of these work for you?', duration: 7 },
      { speaker: 'customer', text: 'Thursday at 2 PM works perfectly.', duration: 3 },
      { speaker: 'agent', text: 'Got it. I have rescheduled your strategy call to Thursday at 2 PM. You will receive an updated Calendar invite and confirmation email in a few seconds.', duration: 8 },
      { speaker: 'customer', text: 'Got the invite. Thank you so much.', duration: 3 },
      { speaker: 'agent', text: 'Excellent. Looking forward to our conversation. Goodbye!', duration: 3 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hello, QEVN scheduling team se confirmation call. Wednesday subah 10 baje aapka call scheduled hai. Kya aap confirm hain?', duration: 7 },
      { speaker: 'customer', text: 'Hi, Wednesday ko main thoda busy hoon. Thursday reschedule ho sakta hai?', duration: 4 },
      { speaker: 'agent', text: 'Bilkul ho sakta hai. Thursday ko subah 11:30, dopahar 2 baje ya shaam 4 baje ka slot khali hai. Kaunsa time change karoon?', duration: 7 },
      { speaker: 'customer', text: 'Thursday dopahar 2 baje confirm kar dijiye.', duration: 3 },
      { speaker: 'agent', text: 'Rescheduled! Thursday dopahar 2 baje confirm ho gaya hai. Google Calendar invite maine send kar diya hai aapko.', duration: 6 },
      { speaker: 'customer', text: 'Invite mil gaya. Thank you, bye.', duration: 3 },
      { speaker: 'agent', text: 'Thank you! Goodbye.', duration: 2 }
    ]
  },
  support: {
    English: [
      { speaker: 'agent', text: 'Hi there, thank you for reaching out to customer care. This is your AI assistant. How can I help you check your current order?', duration: 6 },
      { speaker: 'customer', text: 'Hi, my shipment with ID 9942 was supposed to arrive today, but it is showing pending.', duration: 5 },
      { speaker: 'agent', text: 'Let me track shipment ID 9942 for you... I see that it reached the local transit hub this morning. However, there is a minor local dispatch delay due to heavy rain. Delivery is now scheduled for tomorrow before 12 PM. Is that alright?', duration: 9 },
      { speaker: 'customer', text: 'Yes, that is fine. Can you send me the delivery agent number when dispatched?', duration: 4 },
      { speaker: 'agent', text: 'Absolutely. As soon as the rider takes it out for delivery tomorrow morning, I will auto-trigger a WhatsApp message with their direct contact details.', duration: 7 },
      { speaker: 'customer', text: 'Perfect. Thanks for the help.', duration: 2 },
      { speaker: 'agent', text: 'Anytime! Let me know if you need anything else.', duration: 3 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hi, QEVN customer care hub me aapka swagat hai. Main order query assistant hoon. Delivery status check karne me help karoon?', duration: 6 },
      { speaker: 'customer', text: 'Haan, mera order ID 9942 aaj aana tha but abhi tak nahi aaya.', duration: 4 },
      { speaker: 'agent', text: 'Ek second rukiye, track karti hoon... order local hub me subah pahunch chuka hai. Baarish ki wajah se delivery thodi delay ho gayi hai. Kal dopahar 12 baje se pehle deliver ho jayega.', duration: 9 },
      { speaker: 'customer', text: 'Ok, delivery boy ka number mil jayega kal?', duration: 3 },
      { speaker: 'agent', text: 'Haan ji, jaise hi rider dispatch karega kal subah, aapse direct number WhatsApp par share ho jayega.', duration: 5 },
      { speaker: 'customer', text: 'Ok fine. Thank you so much.', duration: 3 },
      { speaker: 'agent', text: 'Khushi hui help karke! Bye.', duration: 2 }
    ]
  },
  leads: {
    English: [
      { speaker: 'agent', text: 'Hi, thank you for showing interest in QEVN AI calling systems. Are you looking to qualify inbound marketing leads or automate outbound cold outreach?', duration: 7 },
      { speaker: 'customer', text: 'We get about 500 inbound signups a month, and our sales reps take hours to reach out to them.', duration: 6 },
      { speaker: 'agent', text: 'That is exactly where we excel. With QEVN, when a lead submits a form, our AI agent calls them within 15 seconds, pre-qualifies their budget and needs, and directly books them into a sales rep\'s calendar. This can boost contact rates by up to 80%. What is the average size of your target client?', duration: 11 },
      { speaker: 'customer', text: 'Usually mid-market enterprise SaaS clients, average deal value is $10k.', duration: 5 },
      { speaker: 'agent', text: 'Understood. At a $10,000 deal value, even a 5% increase in contact speed could add significant monthly revenue. Let\'s build a custom mock-call scenario around your form. Would you like a demo call to your phone right now?', duration: 9 },
      { speaker: 'customer', text: 'Yes, that would be amazing. My number is on the form.', duration: 4 },
      { speaker: 'agent', text: 'Excellent. Initiating the demo call loop. Look at your phone in 5 seconds!', duration: 4 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hi, QEVN lead qualifying systems me interest dikhane ke liye thank you. Inbound forms ko check karne ke liye AI call call lagaye?', duration: 7 },
      { speaker: 'customer', text: 'Haan, monthly 500 leads aati hain, aur humari sales team unhe call karne me delay kar deti hai.', duration: 5 },
      { speaker: 'agent', text: 'QEVN AI agent automatic instant response deta hai. Lead form fill karega aur 15 seconds me AI call chali jayegi qualification check karne ke liye. Kya main abhi aapke number par ek live demo call lagau?', duration: 9 },
      { speaker: 'customer', text: 'Haan, lagaiye, main check karta hoon kaise sound karta hai.', duration: 4 },
      { speaker: 'agent', text: 'Done! Main live demo call pipeline start kar rahi hoon. Agle 5 seconds me aapke phone par call aane wali hai.', duration: 6 }
    ]
  },
  'real-estate': {
    English: [
      { speaker: 'agent', text: 'Hi, this is QEVN Property Desk. I am calling regarding your interest in the 3-bedroom villa listing in South Delhi. Are you looking for self-use or investment?', duration: 7 },
      { speaker: 'customer', text: 'Hi, looking for self-use. I wanted to check if there is a private garden space included.', duration: 6 },
      { speaker: 'agent', text: 'Yes, this particular villa has a 1,200 sq.ft private landscaped garden and deck area. It also comes with independent parking for two vehicles. Would you like to schedule an in-person site visit this weekend?', duration: 9 },
      { speaker: 'customer', text: 'Yes, Saturday morning would be great. Around 11 AM.', duration: 4 },
      { speaker: 'agent', text: 'Perfect. Saturday at 11 AM is locked in. Our area consultant will meet you at the site gate. I will send you the location coordinates and site map on WhatsApp now. Does that sound good?', duration: 9 },
      { speaker: 'customer', text: 'Yes, thank you very much.', duration: 3 },
      { speaker: 'agent', text: 'Wonderful. Have a great day!', duration: 2 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hi, main QEVN Property Desk se baat kar rahi hoon. Aapne South Delhi 3-bedroom villa me interest dikhaya tha. Self-use ke liye plan kar rahe hain ya investment?', duration: 8 },
      { speaker: 'customer', text: 'Self-use ke liye hai. Kya waha private garden area hai?', duration: 4 },
      { speaker: 'agent', text: 'Haan ji, is villa me 1,200 square feet ka landscaped garden hai aur open deck area bhi hai. Location details and video walkthrough WhatsApp par send kar doon?', duration: 8 },
      { speaker: 'customer', text: 'Haan, send kar dijiye aur Saturday morning site visit bhi book kar do.', duration: 4 },
      { speaker: 'agent', text: 'Sure! Saturday subah 11:30 baje site visit book kar di hai. Locations and coordinates WhatsApp par send kar diye hain. Milenge Saturday ko.', duration: 7 }
    ]
  },
  healthcare: {
    English: [
      { speaker: 'agent', text: 'Hello, this is the healthcare scheduling desk. I see you requested a check-up appointment with Dr. Mehta. What date and time are you looking for?', duration: 7 },
      { speaker: 'customer', text: 'Hi, do you have anything available tomorrow afternoon?', duration: 4 },
      { speaker: 'agent', text: 'Dr. Mehta has slots open tomorrow at 3 PM and 4:30 PM. For check-ups, we request that you arrive 10 minutes early with your previous medical records. Which slot works?', duration: 8 },
      { speaker: 'customer', text: 'Let\'s go with 3 PM.', duration: 2 },
      { speaker: 'agent', text: 'Excellent, 3 PM is confirmed. I have updated the hospital portal. Please carry your government ID card for check-in. Confirmation details have been sent via SMS.', duration: 8 },
      { speaker: 'customer', text: 'Great, thank you.', duration: 2 },
      { speaker: 'agent', text: 'You are welcome. Take care!', duration: 2 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hello, Dr. Mehta ke booking portal se support desk. Aap checkup appointment schedule karna chahte hain. Kis date ko slot chahiye?', duration: 7 },
      { speaker: 'customer', text: 'Mujhe kal afternoon me appointment mil sakti hai?', duration: 3 },
      { speaker: 'agent', text: 'Mehta ji kal dopahar 3:00 baje aur 4:30 baje available hain. 3 baje book kar doon?', duration: 6 },
      { speaker: 'customer', text: 'Haan, 3 baje set kar dijiye.', duration: 2 },
      { speaker: 'agent', text: 'Done! Kal dopahar 3 baje ki booking ho gayi hai. Check-in ke liye prescription aur reports sath laiyega. SMS details send ho chuke hain.', duration: 8 }
    ]
  },
  recruitment: {
    English: [
      { speaker: 'agent', text: 'Hello, this is the QEVN hiring assistant calling. I received your application for the Lead DevOps role. Do you have 3 minutes to confirm a few qualifying questions?', duration: 8 },
      { speaker: 'customer', text: 'Hi, yes, I am free to talk right now.', duration: 3 },
      { speaker: 'agent', text: 'Excellent. The role requires building and scaling Kubernetes clusters and handling multi-region deployments. How many years of experience do you have with AWS and Terraform?', duration: 9 },
      { speaker: 'customer', text: 'I have around 5 years of AWS and Terraform, mostly running high-availability setups.', duration: 5 },
      { speaker: 'agent', text: 'Perfect. That matches our criteria. What are your salary expectations, and how soon could you join?', duration: 6 },
      { speaker: 'customer', text: 'Looking for $120k, notice period is 2 weeks.', duration: 4 },
      { speaker: 'agent', text: 'Got it. I have updated your application status. Our engineering director will review this today. If approved, I will auto-trigger a schedule link for the technical round. Thank you for your time!', duration: 10 }
    ],
    Hinglish: [
      { speaker: 'agent', text: 'Hello, main QEVN Recruitment team se calling assistant hoon. Lead DevOps position ke liye aapki application check karni thi. 2 minutes baat ho sakti hai?', duration: 8 },
      { speaker: 'customer', text: 'Haan, bilkul, poochiye.', duration: 2 },
      { speaker: 'agent', text: 'Kubernetes aur cloud infrastructure scale karne ke liye hume AWS experts chahiye. Aapko AWS and Terraform me kitna experience hai?', duration: 8 },
      { speaker: 'customer', text: 'AWS me mujhe 4 saal ka production experience hai.', duration: 3 },
      { speaker: 'agent', text: 'Perfect. Expected salary package and notice period kya hai aapka?', duration: 5 },
      { speaker: 'customer', text: 'Looking for 15 LPA. Notice period 1 month hai.', duration: 4 },
      { speaker: 'agent', text: 'Noted. Details review ke liye manager ke paas chali gayi hain. Technical round schedule karne ke liye link short-listed hone par direct SMS par mil jayegi.', duration: 8 }
    ]
  }
}

// Fallback for non-supported languages: show English translation with a label
function getDialogLines(category: string, language: string): TranscriptLine[] {
  const cat = DIALOGUES[category] || DIALOGUES.receptionist
  if (cat[language]) return cat[language]
  
  // Fallback translation message or translate English to show a demo
  const english = cat.English
  return english.map((line) => {
    if (line.speaker === 'agent') {
      return {
        speaker: 'agent',
        text: `[${language} Voice Demo] ${line.text}`,
        duration: line.duration
      }
    }
    return line
  })
}

export default function DecodedDemo() {
  const [activeCategory, setActiveCategory] = useState('receptionist')
  const [activeLang, setActiveLang] = useState('English')
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [seconds, setSeconds] = useState(0)
  
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const transcriptEndRef = useRef<HTMLDivElement>(null)
  const activeLineRef = useRef<HTMLDivElement>(null)

  const lines = getDialogLines(activeCategory, activeLang)

  useEffect(() => {
    // Reset player state on category or language change
    setIsPlaying(false)
    setCurrentIndex(-1)
    setSeconds(0)
    if (timerRef.current) clearInterval(timerRef.current)
  }, [activeCategory, activeLang])

  useEffect(() => {
    if (isPlaying) {
      let currentLineIdx = 0
      let elapsedInLine = 0
      setCurrentIndex(0)
      
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1)
        elapsedInLine += 1

        const currentLine = lines[currentLineIdx]
        if (currentLine && elapsedInLine >= currentLine.duration) {
          if (currentLineIdx < lines.length - 1) {
            currentLineIdx += 1
            setCurrentIndex(currentLineIdx)
            elapsedInLine = 0
          } else {
            // End of conversation
            setIsPlaying(false)
            if (timerRef.current) clearInterval(timerRef.current)
          }
        }
      }, 1000)
    } else {
      if (timerRef.current) clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, lines])

  // Scroll active message into view
  useEffect(() => {
    if (activeLineRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
  }, [currentIndex])

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60)
    const remainingSecs = secs % 60
    return `${String(mins).padStart(2, '0')}:${String(remainingSecs).padStart(2, '0')}`
  }

  const handlePlayToggle = () => {
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      if (currentIndex === -1 || currentIndex === lines.length - 1) {
        setCurrentIndex(0)
        setSeconds(0)
      }
      setIsPlaying(true)
    }
  }

  return (
    <div className="w-full">
      {/* Category selector chips */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-[#B5ED68] text-[#08090A] border-[#B5ED68] shadow-[0_0_15px_rgba(181,237,104,0.25)]'
                : 'bg-white/[0.02] text-white/65 border-white/[0.06] hover:bg-white/[0.05] hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Main player layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Side: Audio Player Card */}
        <div 
          className="rounded-3xl p-6 lg:p-8 flex flex-col justify-between"
          style={{
            background: '#050505',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          {/* Header row */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B5ED68] animate-ping" />
              <span className="text-xs font-mono tracking-wider uppercase text-white/65">
                Active Simulator
              </span>
            </div>
            
            {/* Language Selector Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/65">Speak:</span>
              <select
                value={activeLang}
                onChange={(e) => setActiveLang(e.target.value)}
                className="bg-[#0A0A0A] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#B5ED68] cursor-pointer"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang === 'Hinglish' ? 'Hinglish (India)' : lang}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Center visual: Waveform simulation */}
          <div className="flex flex-col items-center justify-center my-10">
            {/* Waveform bars */}
            <div className="flex items-end gap-1.5 h-24 mb-6">
              {Array.from({ length: 24 }).map((_, i) => {
                // Generate simulated variable heights
                const val = Math.sin((i + seconds) * 0.5) * 40 + 50
                const heightPercent = isPlaying ? Math.max(10, Math.min(100, val)) : 15
                return (
                  <div
                    key={i}
                    className="w-1.5 rounded-full transition-all duration-300"
                    style={{
                      height: `${heightPercent}%`,
                      backgroundColor: isPlaying ? '#B5ED68' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: isPlaying ? '0 0 8px rgba(181, 237, 104, 0.3)' : 'none'
                    }}
                  />
                )
              })}
            </div>
            
            <div className="font-mono text-sm tracking-widest text-white/60">
              {formatTime(seconds)}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between border-t border-white/[0.05] pt-6 mt-4">
            <div className="flex flex-col">
              <span className="text-[11px] font-mono tracking-wider uppercase text-white/40">Scenario</span>
              <span className="text-xs font-semibold text-white">
                {CATEGORIES.find(c => c.id === activeCategory)?.label}
              </span>
            </div>

            {/* Play/Pause CTA Button */}
            <button
              onClick={handlePlayToggle}
              className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 bg-[#B5ED68] hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(181,237,104,0.3)]"
              aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
            >
              {isPlaying ? (
                // Pause SVG
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#08090A]">
                  <rect x="6" y="4" width="4" height="16" fill="currentColor" rx="1" />
                  <rect x="14" y="4" width="4" height="16" fill="currentColor" rx="1" />
                </svg>
              ) : (
                // Play SVG
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#08090A] translate-x-0.5">
                  <path d="M8 5v14l11-7z" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: Live conversation transcript */}
        <div 
          className="rounded-3xl p-6 lg:p-8 flex flex-col justify-between h-[420px] lg:h-auto"
          style={{
            background: '#050505',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
          }}
        >
          <div className="text-xs font-mono tracking-wider uppercase text-white/40 mb-4 pb-2 border-b border-white/[0.05]">
            Live Conversation Transcript
          </div>

          {/* Transcript Scroll Area */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-4 max-h-[300px] lg:max-h-[340px] overscroll-y-contain">
            {currentIndex === -1 ? (
              <div className="h-full flex items-center justify-center text-sm text-white/45 italic text-center px-6">
                Click the Play button on the simulator to start the conversation demonstration.
              </div>
            ) : (
              lines.slice(0, currentIndex + 1).map((line, idx) => {
                const isActive = idx === currentIndex
                const isAgent = line.speaker === 'agent'
                
                return (
                  <div
                    key={idx}
                    ref={isActive ? activeLineRef : null}
                    className={`flex flex-col max-w-[85%] rounded-2xl p-4 transition-all duration-300 ${
                      isAgent 
                        ? 'mr-auto bg-white/[0.03] text-white border border-white/[0.04]' 
                        : 'ml-auto text-white'
                    } ${
                      isActive && isAgent
                        ? 'border-[#B5ED68]/30 shadow-[0_0_20px_rgba(181,237,104,0.08)] bg-[#B5ED68]/[0.02]'
                        : ''
                    }`}
                    style={{
                      borderLeftWidth: isAgent ? '3px' : '1px',
                      borderLeftColor: isAgent ? (isActive ? '#B5ED68' : 'rgba(255,255,255,0.1)') : 'rgba(255,255,255,0.04)',
                      background: !isAgent ? (isActive ? 'linear-gradient(135deg, rgba(181,237,104,0.08), rgba(181,237,104,0.01))' : 'rgba(255,255,255,0.01)') : undefined,
                      border: !isAgent ? (isActive ? '1px solid rgba(181,237,104,0.2)' : '1px solid rgba(255,255,255,0.04)') : undefined
                    }}
                  >
                    <span 
                      className={`text-[10px] font-mono tracking-wider uppercase mb-1.5 ${
                        isAgent ? 'text-[#B5ED68]' : 'text-white/45'
                      }`}
                    >
                      {isAgent ? 'QEVN AI Employee' : 'Customer'}
                    </span>
                    <p className="text-sm leading-relaxed font-body">
                      {line.text}
                    </p>
                  </div>
                )
              })
            )}
            <div ref={transcriptEndRef} />
          </div>
        </div>

      </div>
    </div>
  )
}
