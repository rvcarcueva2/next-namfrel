'use client'

import PowerBIWrapper from '../components/PowerBIWrapper';
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Timestamp from '../components/Timestamp'

type Record = {
  id: number
  created_at: string
}


export default function ElectionStatisticsPage() {
  const [latest, setLatest] = useState<Record | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

 useEffect(() => {
    const load = async () => {
      try {
        const { data, error } = await supabase
          .from('results_db')
          .select('id, created_at')
          .order('created_at', { ascending: false })
          .limit(1)
          .single()


        if (!data) {
          throw new Error('Result as of (2022 TEST DATA)')               
        }

        setLatest(data)
        setError(null)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start p-0 bg-white">
      <div className="text-center text-[#11349C] my-6">
        <h1 className="text-4xl font-bold mb-2">Demographics</h1>
        <div className="text-m">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-[#11349C]">{error}</p>
            ) : latest ? (
            latest?.created_at ? <Timestamp value={latest.created_at} /> : 'Loading...'
            ) : null}
        </div>
        <p className="text-m px-[15px] md:px-8  mt-1">
          These are <strong>PARTIAL</strong> and <strong>UNOFFICIAL</strong> results of the 2025 Philippine Midterm Elections.<br></br>Use the map to explore results by location. Refresh the page for the most recent updates. 
        </p>
      </div>

      <div className="w-full flex-grow px-4 md:px-12 lg:px-24 mb-8"> {/* 👈 Add margin-bottom here */}
        <div className="w-full h-[90vh] rounded-lg shadow overflow-hidden">
          <PowerBIWrapper

            desktopUrl="https://app.powerbi.com/view?r=eyJrIjoiMzBiNjE0ZjItMzNhYS00YzE2LWIyM2QtZjJkOWZkN2I3Nzg2IiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D&pageName=e720e21a3e52a0ae9a00"
            mobileUrl="https://app.powerbi.com/view?r=eyJrIjoiMzBiNjE0ZjItMzNhYS00YzE2LWIyM2QtZjJkOWZkN2I3Nzg2IiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D&pageName=16a510ce326592a2c332"
            reportId={''} accessToken={''} />
        </div>
      </div>
    </main>
  );
}