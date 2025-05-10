'use client'

type Props = {
  value: string
}

export default function Timestamp({ value }: Props) {
  const date = new Date(value)
  const formatted = date.toLocaleString('en-PH', {
    timeZone: 'Asia/Manila', 
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })


  return <>{formatted.replace(',', ' ,')}</>
}
