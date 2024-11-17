import { userColumns } from '@/columns/user-columns'
import PageWrapper from '@/components/admin/page-wrapper'
import { TableComponent } from '@/components/common/table-component'

export default async function Page() {
  return (
    <PageWrapper title="Users">
      <TableComponent queryKey="users" columns={userColumns} url="users" />
    </PageWrapper>
  )
}
