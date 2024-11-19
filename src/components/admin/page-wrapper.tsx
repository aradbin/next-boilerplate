import { CardTitle } from '@/components/ui/card'

export default async function PageWrapper({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-row justify-between">
        <CardTitle>{title}</CardTitle>
        {action}
      </div>
      <div>{children}</div>
    </>
  )
}
