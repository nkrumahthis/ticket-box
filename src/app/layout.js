import './globals.css'
import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ticket Box',
  description: 'Software bug, issue and task manager',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900 dark:text-white">{children}</body>
    </html>
  )
}
