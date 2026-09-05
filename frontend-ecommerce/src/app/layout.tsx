import type { Metadata } from 'next'
import { Raleway, Rubik } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://corecraftnepal.com'),
  title: {
    default: 'CoreCraft Technologies',
    template: '%s | CoreCraft Technologies',
  },
  description:
    'CoreCraft Technologies builds websites, software, mobile applications, and digital solutions for modern businesses.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${raleway.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
