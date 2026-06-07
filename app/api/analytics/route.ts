import { NextResponse } from 'next/server'
import { saveSession, saveLead } from '@/lib/analyticsStore'

export async function POST(req: Request) {
  try {
    const payload = await req.json()
    const { type, data } = payload

    if (!type || !data) {
      return NextResponse.json({ error: 'Invalid payload structure' }, { status: 400 })
    }

    // Capture location metadata from server headers
    const country = req.headers.get('x-vercel-ip-country') || 'Unknown'
    const userAgent = req.headers.get('user-agent') || 'Unknown'

    // Deduce device type from User Agent
    let deviceType = 'Desktop'
    if (/mobile/i.test(userAgent)) {
      deviceType = 'Mobile'
    } else if (/tablet|ipad/i.test(userAgent)) {
      deviceType = 'Tablet'
    }

    // Deduce browser type from User Agent
    let browserType = 'Other'
    if (/chrome|crios/i.test(userAgent)) {
      browserType = 'Chrome'
    } else if (/firefox/i.test(userAgent)) {
      browserType = 'Firefox'
    } else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) {
      browserType = 'Safari'
    } else if (/edg/i.test(userAgent)) {
      browserType = 'Edge'
    }

    const timestamp = new Date().toISOString()

    if (type === 'session') {
      const sessionRecord = {
        id: data.session_id, // Session ID acts as the record PK
        visitor_id: data.visitor_id,
        session_id: data.session_id,
        device_type: deviceType,
        browser_type: browserType,
        country,
        language: data.language || 'en',
        traffic_source: data.traffic_source || 'Direct',
        landing_page: data.landing_page,
        visited_pages: data.visited_pages || [],
        duration: data.duration || 0,
        consent_preferences: data.consent_preferences,
        created_at: timestamp
      }

      await saveSession(sessionRecord)
      return NextResponse.json({ success: true })
    }

    if (type === 'lead') {
      const leadRecord = {
        id: 'lead_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36),
        session_id: data.session_id,
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        company: data.company,
        inquiry_type: data.inquiry_type || 'General',
        message: data.message,
        created_at: timestamp
      }

      await saveLead(leadRecord)
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Unsupported event type' }, { status: 400 })
  } catch (err) {
    console.error('Telemetry logging api error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
