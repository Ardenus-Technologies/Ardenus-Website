import '../src/index.css'
import { Toaster } from '@/components/ui/toaster'

export const metadata = {
  title: 'Ardenus - Home',
  description: 'Transform your business with custom AI automation solutions',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

