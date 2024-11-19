'use client'

import ActionToggle from '@/components/common/action-toggle'
import { UserType } from '@/lib/types'
import { ColumnDef } from '@tanstack/react-table'
import { Edit, Trash2, User } from 'lucide-react'

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
    accessorKey: 'phone_number',
    header: 'Contact',
  },
  {
    id: 'actions',
    cell: ({ row }: { row: { original: UserType } }) => {
      const actions = [
        [{ label: 'Profile', icon: User, href: `/users/${row.original.id}` }],
        [
          { label: 'Edit', icon: Edit, href: `/users/${row.original.id}/edit` },
          { label: 'Delete', icon: Trash2, href: `/users/${row.original.id}/delete` },
        ],
      ]
      return <ActionToggle actions={actions} />
    },
  },
]
