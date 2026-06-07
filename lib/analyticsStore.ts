import fs from 'fs'
import path from 'path'

export interface SessionRecord {
  id: string
  visitor_id: string
  session_id: string
  device_type: string
  browser_type: string
  country: string
  language: string
  traffic_source: string
  landing_page: string
  visited_pages: string[]
  duration: number
  consent_preferences: {
    essential: boolean
    analytics: boolean
    marketing: boolean
    personalization: boolean
  }
  created_at: string
}

export interface LeadRecord {
  id: string
  session_id: string
  name: string
  email: string
  phone?: string
  company: string
  inquiry_type?: string
  message: string
  created_at: string
}

const LOCAL_DATA_DIR = path.join(process.cwd(), 'data')
const LOCAL_DATA_FILE = path.join(LOCAL_DATA_DIR, 'analytics.json')

// Helper to ensure local JSON file exists for offline/development backup
function getLocalData(): { sessions: SessionRecord[]; leads: LeadRecord[] } {
  try {
    if (!fs.existsSync(LOCAL_DATA_DIR)) {
      fs.mkdirSync(LOCAL_DATA_DIR, { recursive: true })
    }
    if (!fs.existsSync(LOCAL_DATA_FILE)) {
      fs.writeFileSync(LOCAL_DATA_FILE, JSON.stringify({ sessions: [], leads: [] }, null, 2))
    }
    const raw = fs.readFileSync(LOCAL_DATA_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch (err) {
    console.error('Error reading local analytics data:', err)
    return { sessions: [], leads: [] }
  }
}

function saveLocalData(data: { sessions: SessionRecord[]; leads: LeadRecord[] }) {
  try {
    if (!fs.existsSync(LOCAL_DATA_DIR)) {
      fs.mkdirSync(LOCAL_DATA_DIR, { recursive: true })
    }
    fs.writeFileSync(LOCAL_DATA_FILE, JSON.stringify(data, null, 2))
  } catch (err) {
    console.error('Error writing local analytics data:', err)
  }
}

// Supabase REST client wrapper
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const useSupabase = !!(supabaseUrl && supabaseKey)

async function writeToSupabase(table: string, data: Record<string, any>) {
  if (!useSupabase) return false
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey!,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates,return=minimal'
      },
      body: JSON.stringify(data)
    })
    return response.ok
  } catch (err) {
    console.error(`Supabase write error on table ${table}:`, err)
    return false
  }
}

export async function saveSession(session: SessionRecord): Promise<boolean> {
  // 1. Try Supabase first if configured
  if (useSupabase) {
    const ok = await writeToSupabase('qevn_sessions', session)
    if (ok) return true
  }

  // 2. Fall back to local file store
  const data = getLocalData()
  const idx = data.sessions.findIndex((s) => s.session_id === session.session_id)
  if (idx > -1) {
    // Update existing session values (e.g. visited_pages, duration)
    data.sessions[idx] = {
      ...data.sessions[idx],
      visited_pages: Array.from(new Set([...data.sessions[idx].visited_pages, ...session.visited_pages])),
      duration: Math.max(data.sessions[idx].duration, session.duration),
      consent_preferences: session.consent_preferences
    }
  } else {
    data.sessions.push(session)
  }
  saveLocalData(data)
  return true
}

export async function saveLead(lead: LeadRecord): Promise<boolean> {
  // 1. Try Supabase first if configured
  if (useSupabase) {
    const ok = await writeToSupabase('qevn_leads', lead)
    if (ok) return true
  }

  // 2. Fall back to local file store
  const data = getLocalData()
  data.leads.push(lead)
  saveLocalData(data)
  return true
}

export async function getAllAnalytics(): Promise<{ sessions: SessionRecord[]; leads: LeadRecord[] }> {
  // 1. Try fetching from Supabase if configured
  if (useSupabase) {
    try {
      const [sessionsRes, leadsRes] = await Promise.all([
        fetch(`${supabaseUrl}/rest/v1/qevn_sessions?select=*&order=created_at.desc`, {
          headers: { 'apikey': supabaseKey!, 'Authorization': `Bearer ${supabaseKey}` }
        }),
        fetch(`${supabaseUrl}/rest/v1/qevn_leads?select=*&order=created_at.desc`, {
          headers: { 'apikey': supabaseKey!, 'Authorization': `Bearer ${supabaseKey}` }
        })
      ])
      
      if (sessionsRes.ok && leadsRes.ok) {
        const sessions = await sessionsRes.json()
        const leads = await leadsRes.json()
        return { sessions, leads }
      }
    } catch (err) {
      console.error('Error fetching analytics from Supabase, falling back to local file:', err)
    }
  }

  // 2. Default local file read
  return getLocalData()
}
