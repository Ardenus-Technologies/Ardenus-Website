'use client'

import { createContext, useContext, useState } from 'react'

const DemoFormContext = createContext(undefined)

export function DemoFormProvider({ children }) {
  const [demoFormOpen, setDemoFormOpen] = useState(false)

  return (
    <DemoFormContext.Provider value={{ demoFormOpen, setDemoFormOpen }}>
      {children}
    </DemoFormContext.Provider>
  )
}

export function useDemoForm() {
  const context = useContext(DemoFormContext)
  if (context === undefined) {
    throw new Error('useDemoForm must be used within a DemoFormProvider')
  }
  return context
}
