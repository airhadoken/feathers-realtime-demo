import './globals.css'
import { Inter } from 'next/font/google'
import { FeathersProvider } from './feathers-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <FeathersProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </FeathersProvider>
  )
}
