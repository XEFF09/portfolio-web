import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'my profile',
  description: 'web 101 portfolio profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-900'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
