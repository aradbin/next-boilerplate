'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { UserType } from '@/lib/types'
import { ColumnDef } from '@tanstack/react-table'
import { Edit, MoreHorizontal, Trash2, User } from 'lucide-react'
import Link from 'next/link'

export const userColumns: ColumnDef<UserType>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'contact',
    header: 'Contact',
  },
  {
    id: 'actions',
    cell: ({ row }: { row: { original: UserType } }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/users/${row.original.id}`}>
                <User />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={`/users/edit/${row.original.id}`}>
                <Edit />
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
