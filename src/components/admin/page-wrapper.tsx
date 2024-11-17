import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PageWrapper({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <Card className="w-full">
      <CardHeader className="flex-row justify-between items-center">
        <CardTitle>{title}</CardTitle>
        {action}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
