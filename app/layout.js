import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'The Ocptopus',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={`antialiased bg-gray-200 text-gray-900 tracking-tight font-rubik`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
