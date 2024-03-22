import './globals.css'
import type { Metadata } from 'next'
import TopMenu from '../components/TopMenu'
import NextAuthProvider from '@/providers/NextAuthProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/libs/auth'


export const metadata: Metadata = {
  title: 'Car Rental by Bandekdek',
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nextAuthSession = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className='bg-gradient-to-tr from-red-600 from-10% to-amber-800 to-90%'>
        <NextAuthProvider  session={nextAuthSession}>
          <TopMenu/>
          {children}          
        </NextAuthProvider>
      </body>
    </html>
  )
}
