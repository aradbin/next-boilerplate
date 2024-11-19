import * as React from 'react'
import { ChevronRight, SquareTerminal, Bot, Settings } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton, SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import Link from 'next/link'
import Image from 'next/image'
import LogoLight from '../../../public/media/logo-light.svg'

interface IconProps {
  icon: React.ElementType
}
interface MenuType {
  title: string
  url: string
  icon: IconProps['icon']
  isActive: boolean
  subs?: MenuType[]
}

export default async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const admin = {
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
            title: 'Users',
            url: '/users',
            icon: Bot,
            isActive: false,
          },
        ],
      },
    ],
  }

  return (
    <Sidebar variant="inset" collapsible="icon" side="left" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-center">
            <Link href="/dashboard">
              <Image src={LogoLight} alt="Logo" width="90" />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {admin?.groups?.map((group, index) => (
          <SidebarGroup key={index}>
            {group?.title && <SidebarGroupLabel>{group?.title}</SidebarGroupLabel>}
            <SidebarMenu>
              {group?.menus?.map((menu: MenuType) => (
                <React.Fragment key={menu?.title}>
                  {menu?.subs?.length ? (
                    <Collapsible asChild defaultOpen={menu?.isActive} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          {menu?.url ? (
                            <SidebarMenuButton asChild tooltip={menu?.title}>
                              <Link href={menu?.url}>
                                {menu?.icon && <menu.icon />}
                                <span>{menu?.title}</span>
                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                              </Link>
                            </SidebarMenuButton>
                          ) : (
                            <SidebarMenuButton tooltip={menu?.title} isActive={menu?.isActive}>
                              <>
                                {menu?.icon && <menu.icon />}
                                <span>{menu?.title}</span>
                                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                              </>
                            </SidebarMenuButton>
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {menu?.subs?.map((sub: MenuType) => (
                              <SidebarMenuSubItem key={sub?.title}>
                                <SidebarMenuSubButton asChild>
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
                      <SidebarMenuButton asChild tooltip={menu?.title}>
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
            <SidebarMenuButton asChild tooltip="settings">
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
