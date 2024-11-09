'use client'

import { Search } from 'lucide-react'
import { Button } from '../ui/button'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'
import { useState } from 'react'

export function SearchToggle() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
        <Search />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search" />
        <CommandList>
          <CommandEmpty>No results found</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>User</CommandItem>
            <CommandItem>Settings</CommandItem>
            <CommandItem>Other</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
