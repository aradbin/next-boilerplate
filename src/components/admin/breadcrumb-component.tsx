'use client'

import { Home } from 'lucide-react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb'
import { usePathname } from 'next/navigation'
import { upperFirst } from 'lodash'

export default function BreadcrumbComponent() {
  const pathname = usePathname()

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">
            <Home size={15} />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathname
          .split('/')
          ?.filter((item) => item !== '')
          ?.map((item, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink href={`/${item}`}>{upperFirst(item)}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
