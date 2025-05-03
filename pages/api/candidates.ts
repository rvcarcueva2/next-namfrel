import { createClient } from '@supabase/supabase-js';

// Public Supabase client — safe for reading public data
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function handler(req, res) {
  try {
    let allData = [];
    let page = 0;
    const pageSize = 100; // You can adjust this based on the maximum page size for your queries

    while (true) {
      // Fetch data for the current page
      const { data, error, count } = await supabase
        .from('candidates')
        .select('*', { count: 'exact' })
        .range(page * pageSize, (page + 1) * pageSize - 1); // Get the page of data

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      // Append this page's data to the full data array
      allData = [...allData, ...data];

      if (allData.length >= count) {
        // Stop if we've fetched all rows (count is the total number of rows in the table)
        break;
      }

      // Move to the next page
      page++;
    }

    res.status(200).json(allData); // Return all fetched data
  } catch (err) {
    console.error('Unexpected error:', err);
    res.status(500).json({ error: 'Unexpected server error' });
  }
}
