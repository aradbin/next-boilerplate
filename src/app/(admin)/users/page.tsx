import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import UsersTable from './users-table'

export default async function Page() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent>
        <UsersTable />
      </CardContent>
    </Card>
  )
}
