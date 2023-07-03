import React from 'react'
import MenuLink from './MenuLink'

export default function Navbar() {
  return (
    <nav className='flex justify-between p-4 mb-2 dark:bg-gray-900'>
        <span className='flex-none mr-8'><MenuLink label="Ticket-box" location="/"/></span>
        <div className="flex-auto">
          <ul className='flex'>
            <li><MenuLink label="My work" location="/dashboard/my-work" /></li>
            <li><MenuLink label="Projects" location="/dashboard/projects" /></li>
            {/* <li><button>Create</button></li> */}
          </ul>
        </div>
        <div className="flex-none">
          <ul className='flex'>
            <li></li>
            <li><MenuLink location="/" label="Your profile and settings" /></li>
          </ul>
        </div>
      </nav>
  )
}
