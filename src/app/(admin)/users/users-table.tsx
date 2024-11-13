'use client'

import { userColumns } from "@/columns/user-columns";
import { TableComponent } from "@/components/common/table-component";
import { endpoints } from "@/lib/variables";

export default function UsersTable() {
  return (
    <TableComponent queryKey="users" columns={userColumns} url={endpoints.users} />
  )
}