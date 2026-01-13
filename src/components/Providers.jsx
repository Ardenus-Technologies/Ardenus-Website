'use client'

import { DemoFormProvider } from '@/context/DemoFormContext'

export default function Providers({ children }) {
  return (
    <DemoFormProvider>
      {children}
    </DemoFormProvider>
  )
}
