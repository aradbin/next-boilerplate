'use client'

import { ArrowLeftRight } from 'lucide-react'
import { Button } from '../ui/button'
import { useSidebar } from '../ui/sidebar'

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar()

  return (
    <Button data-sidebar="trigger" variant="outline" size="icon" className="" onClick={toggleSidebar}>
      <ArrowLeftRight />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
