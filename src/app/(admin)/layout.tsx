import Header from '@/components/admin/header'
import AppSidebar from '@/components/admin/sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <div className="flex flex-col gap-4 w-full px-10 py-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
