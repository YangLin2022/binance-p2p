import { createClient, SupabaseClient } from '@supabase/supabase-js'

/** RETURN A `supabase` INSTANCE */
export function initializeSupabase(): SupabaseClient {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY

  return createClient(supabaseUrl, supabaseKey)
}
