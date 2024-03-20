import './globals.css'
import type { Metadata } from 'next'
import TopMenu from '@/components/Topmenu'

export const metadata: Metadata = {
  title: 'Car Rental by Bandekdek',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <TopMenu/>
        {children}
      </body>
    </html>
  )
}
