'use client'

import { profile } from '@/app/(auth)/actions'
import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext<{
  user: any
}>({
  user: null
})

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    const response = await profile()
    
    if(response?.success && response?.data){
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