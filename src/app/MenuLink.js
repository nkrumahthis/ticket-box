import Link from 'next/link'
import React from 'react'

export default function MenuLink({
  label, location
}) {
  return (
    <Link className= "m-1 p-2 text-gray-400 active:text-blue-200 rounded hover:bg-gray-700" href={location}>{label}</Link>
  )
}
