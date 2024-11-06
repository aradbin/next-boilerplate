"use client"

import * as React from 'react'
import { CircleUser, Command, Github, Home, Menu, Package2 } from 'lucide-react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Input } from '../ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { ThemeToggle } from '../common/theme-toggle'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="flex h-14 items-center justify-between px-4 md:px-10">
        
        {/* MobileNav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className='h-5 w-5' />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Link href="/" className="mr-4 flex items-center justify-center space-x-2">
                <Command />
                <span className="font-bold">
                  Acme Inc
                </span>
              </Link>
            </SheetHeader>
            <div className="overflow-auto py-10">
              <div className="flex flex-col space-y-3">
                <Link href="/dashboard" className="hover:text-foreground">
                  Dashboard
                </Link>
                <Link href="/pricing" className="hover:text-foreground">
                  Pricing
                </Link>
              </div>
            </div>
            <SheetFooter>
              <Button variant="outline" asChild>
                <Link href="/login">Get Started</Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <div className="flex md:hidden">
          <Link href="/" className="mr-4 flex items-center space-x-2">
            <Command />
            <span className="font-bold">
              Acme Inc
            </span>
          </Link>
        </div>
        {/* MobileNav */}

        {/* MainNav */}
        <div className="hidden md:flex gap-6 items-center text-sm">
          <Link href="/" className="flex items-center space-x-2">
            <Command />
            <span className="hidden font-bold lg:inline-block">
              Acme Inc
            </span>
          </Link>
          <Link
            href="/dashboard"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/dashboard" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Dashboard
          </Link>
          <Link
            href="/pricing"
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === "/pricing" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Pricing
          </Link>
        </div>
        {/* MainNav */}

        <div className="flex items-center gap-2">
          <Button className='hidden md:flex' asChild>
            <Link href="/login">Login</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
