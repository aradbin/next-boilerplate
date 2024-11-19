import { userColumns } from '@/columns/user-columns'
import PageWrapper from '@/components/admin/page-wrapper'
import TableComponent from '@/components/common/table-component'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Page() {
  return (
    <PageWrapper
      title="Users"
      action={
        <Button asChild>
          <Link href="/users/create">Create User</Link>
        </Button>
      }
    >
      <TableComponent queryKey="users" columns={userColumns} url="users" />
    </PageWrapper>
  )
}
