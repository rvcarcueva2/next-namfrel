// pages/next-namfrel.tsx
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function NextNamfrel() {
  const [status, setStatus] = useState('Checking...')

  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from('candidates').select('*').limit(1)
      if (error) {
        console.error('Database connection error:', error)
        setStatus('❌ Connection Failed')
      } else {
        setStatus('✅ Connected Successfully')
      }
    }

    checkConnection()
  }, [])

  return (
    <div>
      <h1>Supabase Connection Status</h1>
      <p>{status}</p>
    </div>
  )
}
