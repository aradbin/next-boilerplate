import * as React from 'react'
import { SidebarToggle } from './sidebar-toggle'
import { ThemeToggle } from '../common/theme-toggle'
import { UserToggle } from '../common/user-toggle'
import { SearchComponent } from '../common/search-component'
import Link from 'next/link'
import { Command } from 'lucide-react'
import LanguageToggle from '../common/language-toggle'

export function Header() {
  return (
    <header className="sticky flex gap-2 shrink-0 items-center justify-between h-16 px-4 border-b">
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
        <SearchComponent />
        <LanguageToggle />
        <ThemeToggle />
        <UserToggle />
      </div>
    </header>
  )
}
