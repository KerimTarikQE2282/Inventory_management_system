import { Toaster } from "react-hot-toast"
import "../styles/globals.scss"
import { Inter } from 'next/font/google'
import favicon from './Resources/favicon.png'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Smart Inventory System',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      {/* <link rel="icon" href={favicon} /> */}
      </head>
      <body className={inter.className}>
      <Toaster
      position="top-center"
      reverseOrder={false}
      />
        {children}</body>
    </html>
  )
}
