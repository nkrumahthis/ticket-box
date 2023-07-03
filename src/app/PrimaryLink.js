import Link from 'next/link'
import React from 'react'

export default function PrimaryLink({ label, location }) {
  return (
    <Link className="my-1 mx-3 p-2 text-black active:bg-blue-100 rounded bg-blue-400 hover:bg-blue-200" href={location}>{label}</Link>
  )
}
