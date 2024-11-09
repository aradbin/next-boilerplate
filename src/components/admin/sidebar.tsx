'use client'

import * as React from 'react'
import { ChevronRight, Command, SquareTerminal, Bot, Settings } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

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
    <Sidebar variant="inset" collapsible="icon" side="left" {...props}>
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
            <SidebarMenuButton asChild tooltip="settings" isActive={pathname === '/settings'}>
              <Link href="/#">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
