'use client'

import { LogOut } from 'lucide-react'
import { DropdownMenuItem } from '../ui/dropdown-menu'
import { logout } from '@/app/(auth)/actions'
import { toast } from 'sonner'

export default function Logout() {
  return (
    <DropdownMenuItem
      onClick={() => {
        logout()
        toast.success('Logged out successfully')
      }}
    >
      <LogOut />
      Log out
    </DropdownMenuItem>
  )
}
