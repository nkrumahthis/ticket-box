import Link from 'next/link'
import React from 'react'
import Menubar from '../Menubar'

export default function layout({ children }) {
  return (
    <div className="m-0 p-0">
      <Menubar />
      <div>{children}</div>
    </div>
  )
}
