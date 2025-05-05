import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const { error } = await supabase
    .from('feedback')
    .insert([{ name, email, message }]);

  if (error) return res.status(500).json({ message: 'Failed to save message.', error });

  res.status(200).json({ message: 'Message sent successfully!' });
}
