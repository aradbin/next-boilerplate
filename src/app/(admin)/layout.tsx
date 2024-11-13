import BreadcrumbComponent from '@/components/admin/breadcrumb-component'
import { Header } from '@/components/admin/header'
import { AppSidebar } from '@/components/admin/sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-col gap-4 w-full p-4">
          <BreadcrumbComponent />
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
