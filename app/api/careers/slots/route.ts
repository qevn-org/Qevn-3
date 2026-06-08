import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabaseClient'

export const dynamic = 'force-dynamic'

// Configurable Company working hours (in India Standard Time - UTC+05:30)
const COMPANY_TIMEZONE = 'Asia/Kolkata'
const WORK_START_HOUR = 10 // 10:00 AM
const WORK_END_HOUR = 18   // 6:00 PM
const SLOT_INTERVAL_MIN = 30 // Generate slots every 30 minutes

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const clientTimezone = searchParams.get('timezone') || 'Asia/Kolkata'
    const durationMin = parseInt(searchParams.get('duration') || '30', 10)

    // 1. Fetch already booked applications in the future to avoid double booking
    const { data: bookedApplications, error } = await supabaseServer
      .from('career_applications')
      .select('scheduled_datetime, interview_type')
      .eq('is_archived', false)
      .gte('scheduled_datetime', new Date().toISOString())

    if (error) {
      console.error('Failed to fetch booked slots:', error)
    }

    const bookedTimestamps = (bookedApplications || []).map((app) => 
      new Date(app.scheduled_datetime).getTime()
    )

    // 2. Generate slots for the next 14 days starting from tomorrow
    const slots: Record<string, string[]> = {}
    const now = new Date()
    
    // We start from tomorrow to give candidates time to prepare
    for (let dayOffset = 1; dayOffset <= 14; dayOffset++) {
      const targetDate = new Date()
      targetDate.setDate(now.getDate() + dayOffset)
      
      // Filter out weekends
      const dayOfWeek = targetDate.getDay()
      if (dayOfWeek === 0 || dayOfWeek === 6) continue

      const dateStr = targetDate.toISOString().split('T')[0]
      slots[dateStr] = []

      // Standard working hours in IST (10 AM to 6 PM)
      // We'll construct times in UTC and convert to user timezone in UI or do it here.
      // To keep it simple and robust, let's generate candidate-selectable UTC times representing company hours:
      // Company work hours: targetDate with hour 10:00:00 to 18:00:00 in Asia/Kolkata timezone.
      
      const startOfWorkCompany = new Date(targetDate)
      startOfWorkCompany.setUTCHours(4, 30, 0, 0) // 10:00 AM IST is 4:30 AM UTC
      
      const endOfWorkCompany = new Date(targetDate)
      endOfWorkCompany.setUTCHours(12, 30, 0, 0) // 6:00 PM IST is 12:30 PM UTC

      let currentSlot = new Date(startOfWorkCompany)

      while (currentSlot.getTime() + durationMin * 60 * 1000 <= endOfWorkCompany.getTime()) {
        const slotTime = currentSlot.getTime()

        // Verify slot is in the future and not already booked
        // If booked duration overlaps with this slot, we exclude it
        let isBooked = false
        for (let i = 0; i < bookedTimestamps.length; i++) {
          const bookedTime = bookedTimestamps[i]
          // Check if booked slot overlaps with our candidate slot
          // For simplicity: exact match or falls within +/- 30 mins
          if (Math.abs(bookedTime - slotTime) < durationMin * 60 * 1000) {
            isBooked = true
            break
          }
        }

        if (!isBooked) {
          slots[dateStr].push(currentSlot.toISOString())
        }

        // Advance slot pointer
        currentSlot = new Date(currentSlot.getTime() + SLOT_INTERVAL_MIN * 60 * 1000)
      }
    }

    return NextResponse.json({ slots, clientTimezone })
  } catch (err) {
    console.error('Error generating slots:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
