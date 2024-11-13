'use client'

import { profile } from '@/app/(auth)/actions'
import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext<{
  user: {
    id: string
    name: string
    email: string
    avatar: string
  } | null
}>({
  user: null,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    const response = await profile()

    if (response?.success && response?.data) {
      setUser(response?.data)
    }
  }

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}
