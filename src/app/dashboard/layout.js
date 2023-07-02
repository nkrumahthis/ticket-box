import Link from 'next/link'
import React from 'react'
import Navbar from '../Navbar'

export default function layout({ children }) {
  return (
    <div className="m-0 p-0">
      <Navbar />
      <div>{children}</div>
    </div>
  )
}
