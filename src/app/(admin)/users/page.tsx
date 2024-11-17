import { userColumns } from '@/columns/user-columns'
import { TableComponent } from '@/components/common/table-component'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function Page() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent>
        <TableComponent queryKey="users" columns={userColumns} url="users" />
      </CardContent>
    </Card>
  )
}
