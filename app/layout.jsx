import '../src/index.css'
import { Toaster } from '@/components/ui/toaster'

export const metadata = {
  title: 'Ardenus - Home',
  description: 'Transform your business with custom AI automation solutions',
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

