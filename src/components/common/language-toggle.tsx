'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { Check, Languages } from 'lucide-react'
import { languages } from '@/lib/variables'
import { getLocale, setLocale } from '@/lib/i18n'
import { useEffect, useState } from 'react'

export default function LanguageToggle() {
  const [language, setLanguage] = useState('')

  useEffect(() => {
    getLocale().then((value) => setLanguage(value))
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 rounded-lg" side="bottom" align="end" sideOffset={4}>
        <DropdownMenuLabel>Select Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {languages.map((item) => (
            <DropdownMenuItem
              key={item.code}
              onSelect={async () => {
                await setLocale(item.code)
                setLanguage(item.code)
              }}
            >
              {item.name}
              {item.code === language && <Check className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
