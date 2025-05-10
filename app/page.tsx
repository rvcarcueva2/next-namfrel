'use client'

import PowerBIWrapper from './components/PowerBIWrapper';
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import Timestamp from './components/Timestamp'

type Record = {
  id: number
  created_at: string
}

export default function SenatePage() {
  const [latest, setLatest] = useState<Record | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const { data, error } = await supabase
          .from('results_db') 
          .select('id, created_at')
          .order('created_at', { ascending: false })
          .limit(1)
          .single()

        if (error) {
          throw error
        }

        setLatest(data)
      } catch (error: any) {
        setError('Failed to fetch the latest data')
      }
    }

    load()
  }, [])

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start p-0 bg-white">
      <div className="text-center text-[#1e0775] my-6">
        <h1 className="text-4xl font-bold mb-2">Senatorial Race</h1>
        <p className="text-sm font-light">
          Results as of{' '}
          {error ? (
            <span className="text-red-500">{error}</span>
          ) : (
            latest?.created_at ? <Timestamp value={latest.created_at} /> : 'Loading...'
          )}
        </p>

        <p className="text-xs md:px-4 mt-1">
          This is a PARTIAL and UNOFFICIAL results for the 2025 Philippine Midterm Elections. Current results may need to be refreshed for a live update.
        </p>
      </div>

      <div className="w-full flex-grow px-4 md:px-12 lg:px-24 mb-8">
        <div className="w-full h-[90vh] rounded-lg shadow overflow-hidden">
          <PowerBIWrapper
            desktopUrl="https://app.powerbi.com/view?r=eyJrIjoiNmI2YTRkNjgtM2EwYy00MmIzLThkZTgtNTFlYzk1MTNjYzJjIiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D&pageName=3a4aded5c1db1eceb3ae"
            mobileUrl="https://app.powerbi.com/view?r=eyJrIjoiNmI2YTRkNjgtM2EwYy00MmIzLThkZTgtNTFlYzk1MTNjYzJjIiwidCI6ImFlYjc0NWU2LTgxNjYtNGY4Zi05MjMzLTE3OWU4MTA5YzQ5ZSIsImMiOjEwfQ%3D%3D&pageName=9a046bea605b04125819"
            reportId={''} accessToken={''} />
        </div>
      </div>
    </main>
  );
}