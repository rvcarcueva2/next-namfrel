import { createClient } from '@supabase/supabase-js';

// Public Supabase client — safe for reading public data
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase.from('contests').select('*');
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Unexpected error occurred' });
  }
}
