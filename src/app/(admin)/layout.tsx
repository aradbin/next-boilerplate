import { Header } from '@/components/common/header'
import { AppSidebar } from '@/components/common/sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
