import * as React from 'react'
import { SidebarToggle } from '../common/sidebar-toggle'
import { ThemeToggle } from '../common/theme-toggle'
import { UserToggle } from '../common/user-toggle'
import { LanguageToggle } from '../common/language-toggle'
import { SearchToggle } from '../common/search-toggle'
import Link from 'next/link'
import { Command } from 'lucide-react'

export function Header() {
  return (
    <header className="flex gap-2 shrink-0 items-center justify-between h-16 px-4">
      <div className="flex gap-4 items-center">
        <SidebarToggle />
        <Link href="/dashboard" className="flex items-center md:hidden">
          <div className="flex aspect-square size-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground mr-2">
            <Command className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Acme Inc</span>
            <span className="truncate text-xs">Enterprise</span>
          </div>
        </Link>
      </div>
      <div className="flex gap-2">
        <SearchToggle />
        <LanguageToggle />
        <ThemeToggle />
        <UserToggle />
      </div>
    </header>
  )
}
