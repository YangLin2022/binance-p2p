import { VercelRequest, VercelResponse } from '@vercel/node';
import { initializeSupabase } from './utils'

/** RETURN ALL ADS FROM DB */
export default async (req: VercelRequest, res: VercelResponse) => {
  const supabase = initializeSupabase()
  const method = req.method
  
  let { data, error } = await supabase
    .from('ads')
    .select('*')

  res.status(error ? 500 : 200).json({ method, data, error })
};