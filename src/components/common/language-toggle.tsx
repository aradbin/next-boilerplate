import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { BadgeCheck, Bell, DollarSign, LogOut, User } from 'lucide-react'
import Image from 'next/image'

export function LanguageToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Image src={'/media/flags/united-states.svg'} alt="USA" height="10" width="16" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] rounded-lg" side="bottom" align="center" sideOffset={4}>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Image src={'/media/flags/united-states.svg'} alt="USA" height="10" width="20" />
            USA
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Image src={'/media/flags/united-arab-emirates.svg'} alt="UAE" height="10" width="20" />
            UAE
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
