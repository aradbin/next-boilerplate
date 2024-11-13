'use client'

import { ArrowLeftRight } from 'lucide-react'
import { Button } from '../ui/button'
import { useSidebar } from '../ui/sidebar'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function SidebarToggle() {
  const { toggleSidebar, setOpenMobile } = useSidebar()
  const pathname = usePathname()

  useEffect(() => {
    setOpenMobile(false)
  }, [pathname])

  return (
    <Button data-sidebar="trigger" variant="outline" size="icon" className="" onClick={toggleSidebar}>
      <ArrowLeftRight />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
