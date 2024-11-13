import BreadcrumbComponent from '@/components/admin/breadcrumb-component'
import { Header } from '@/components/admin/header'
import { AppSidebar } from '@/components/admin/sidebar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
          <div className='flex flex-col w-full p-4'>
            <Card className='w-full'>
              <CardHeader>
                <BreadcrumbComponent />
              </CardHeader>
              <CardContent>
                {children}
              </CardContent>
            </Card>
          </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
