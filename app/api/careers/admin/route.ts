import { NextResponse } from 'next/server'
import { supabaseServer } from '@/lib/supabaseClient'

export const dynamic = 'force-dynamic'

// GET handler to list applications with search and filters
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search') || ''
    const role = searchParams.get('role') || ''
    const status = searchParams.get('status') || ''
    const showArchived = searchParams.get('archived') === 'true'

    let query = supabaseServer
      .from('career_applications')
      .select('*')
      .order('created_at', { ascending: false })

    // Filter by archive state
    query = query.eq('is_archived', showArchived)

    // Filter by role
    if (role && role !== 'All') {
      query = query.eq('selected_role', role)
    }

    // Filter by status
    if (status && status !== 'All') {
      query = query.eq('status', status)
    }

    const { data: applications, error } = await query

    if (error) {
      console.error('Failed to query applications:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Filter by search client-side/post-query for ease of multi-column text search or write a structured query
    let filteredApps = applications || []
    if (search) {
      const searchLower = search.toLowerCase()
      filteredApps = filteredApps.filter(
        (app) =>
          app.first_name.toLowerCase().includes(searchLower) ||
          app.last_name.toLowerCase().includes(searchLower) ||
          app.email.toLowerCase().includes(searchLower) ||
          (app.custom_role && app.custom_role.toLowerCase().includes(searchLower))
      )
    }

    return NextResponse.json({ applications: filteredApps })
  } catch (err) {
    console.error('Admin GET handler error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PATCH handler to update status, notes, or archive state
export async function PATCH(req: Request) {
  try {
    const body = await req.json()
    const { id, status, notes, is_archived } = body

    if (!id) {
      return NextResponse.json({ error: 'Missing application ID.' }, { status: 400 })
    }

    const updateFields: Record<string, any> = {}
    if (status !== undefined) updateFields.status = status
    if (notes !== undefined) updateFields.notes = notes
    if (is_archived !== undefined) updateFields.is_archived = is_archived

    const { data, error } = await supabaseServer
      .from('career_applications')
      .update(updateFields)
      .eq('id', id)
      .select()

    if (error) {
      console.error('Failed to update application:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, application: data?.[0] })
  } catch (err) {
    console.error('Admin PATCH handler error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
