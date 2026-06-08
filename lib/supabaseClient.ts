import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

if (!supabaseUrl) {
  console.warn('Missing SUPABASE_URL environment variable.')
}

// supabaseServer uses the service role key to bypass RLS for administrative tasks in Route Handlers
export const supabaseServer = createClient(
  supabaseUrl,
  supabaseServiceKey || supabaseAnonKey,
  {
    auth: {
      persistSession: false,
    },
  }
)

// supabaseClient uses the public anon key for safe client-side actions
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
