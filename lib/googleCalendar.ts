import { google } from 'googleapis'

const clientId = process.env.GOOGLE_CLIENT_ID
const clientSecret = process.env.GOOGLE_CLIENT_SECRET
const refreshToken = process.env.GOOGLE_REFRESH_TOKEN
const redirectUri = process.env.GOOGLE_REDIRECT_URI || 'https://www.qevn.in'
const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary'

export async function createCalendarEvent({
  summary,
  description,
  startTime,
  durationMinutes,
  candidateEmail,
  candidateName,
}: {
  summary: string
  description: string
  startTime: string
  durationMinutes: number
  candidateEmail: string
  candidateName: string
}) {
  if (!clientId || !clientSecret || !refreshToken) {
    console.warn('Google Calendar credentials missing. Event creation skipped.')
    return null
  }

  try {
    const oauth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret,
      redirectUri
    )
    
    oauth2Client.setCredentials({ refresh_token: refreshToken })

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client })

    const start = new Date(startTime)
    const end = new Date(start.getTime() + durationMinutes * 60 * 1000)

    const response = await calendar.events.insert({
      calendarId,
      requestBody: {
        summary,
        description,
        start: {
          dateTime: start.toISOString(),
          timeZone: 'UTC',
        },
        end: {
          dateTime: end.toISOString(),
          timeZone: 'UTC',
        },
        attendees: [
          { email: candidateEmail, displayName: candidateName },
        ],
        conferenceData: {
          createRequest: {
            requestId: crypto.randomUUID(),
            conferenceSolutionKey: {
              type: 'hangoutsMeet',
            },
          },
        },
      },
      conferenceDataVersion: 1,
      sendUpdates: 'all', // Instructs Google Calendar to send email invitations to attendees
    })

    const eventId = response.data.id || ''
    const meetUrl = response.data.conferenceData?.entryPoints?.find(
      (ep) => ep.entryPointType === 'video'
    )?.uri || ''

    return {
      eventId,
      meetUrl,
    }
  } catch (error) {
    console.error('Google Calendar event creation failed:', error)
    return null
  }
}
