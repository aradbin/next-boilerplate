'use client'

import * as React from 'react'
import { ChevronRight, LogOut, Command, BadgeCheck, Bell, SquareTerminal, Bot, User } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { CaretSortIcon, ComponentPlaceholderIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  console.log(pathname)

  const data = {
    groups: [
      {
        title: 'Platform',
        menus: [
          {
            title: 'Dashboard',
            url: '/dashboard',
            icon: SquareTerminal,
            isActive: false,
          },
          {
            title: 'Models',
            url: '#',
            icon: Bot,
            isActive: false,
            subs: [
              {
                title: 'Genesis',
                url: '#',
              },
              {
                title: 'Explorer',
                url: '#',
              },
              {
                title: 'Quantum',
                url: '#',
              },
            ],
          },
        ],
      },
    ],
  }

  return (
    <Sidebar variant="floating" collapsible="icon" side="left" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {data?.groups?.map((group, index) => (
          <SidebarGroup key={index}>
            {group?.title && <SidebarGroupLabel>{group?.title}</SidebarGroupLabel>}
            <SidebarMenu>
              {group?.menus?.map((menu) => (
                <React.Fragment key={menu?.title}>
                  {menu?.subs?.length ? (
                    <Collapsible asChild defaultOpen={menu?.isActive} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton asChild tooltip={menu?.title} isActive={pathname === menu?.url}>
                            <Link href={menu?.url}>
                              {menu?.icon && <menu.icon />}
                              <span>{menu?.title}</span>
                              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                            </Link>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {menu?.subs?.map((sub) => (
                              <SidebarMenuSubItem key={sub?.title}>
                                <SidebarMenuSubButton asChild isActive={pathname === sub?.url}>
                                  <Link href={sub?.url}>
                                    <span>{sub?.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild tooltip={menu?.title} isActive={pathname === menu?.url}>
                        <Link href={menu?.url}>
                          {menu?.icon && <menu.icon />}
                          <span>{menu?.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </React.Fragment>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground" asChild>
              <Link href="/login">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarFallback className="rounded-lg"><User /></AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Login</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={'user.avatar'} alt={'Full Name'} />
                    <AvatarFallback className="rounded-lg"><User /></AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{'Full Name'}</span>
                    <span className="truncate text-xs">{'email@example.com'}</span>
                  </div>
                  <CaretSortIcon className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side="bottom" align="center" sideOffset={4}>
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={'user.avatar'} alt={'Full Name'} />
                      <AvatarFallback className="rounded-lg">FN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{'Full Name'}</span>
                      <span className="truncate text-xs">{'email@example.com'}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ComponentPlaceholderIcon />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
