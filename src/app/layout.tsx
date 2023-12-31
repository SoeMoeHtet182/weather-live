import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './ui/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grab Your Clouds',
  description: 'Track the weather of your city live',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
