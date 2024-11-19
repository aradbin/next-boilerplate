import Link from 'next/link'
import LogoLight from '../../../public/media/logo-light.svg'
import Image from 'next/image'
import BreadcrumbComponent from './breadcrumb-component'
import LanguageToggle from '../common/language-toggle'
import SidebarToggle from './sidebar-toggle'
import SearchComponent from '../common/search-component'
import ThemeToggle from '../common/theme-toggle'
import UserToggle from '../common/user-toggle'

export default async function Header() {
  return (
    <header className="sticky flex gap-2 shrink-0 items-center justify-between h-16 px-4 border-b">
      <div className="flex gap-4 items-center">
        <SidebarToggle />
        <BreadcrumbComponent />
        <Link href="/dashboard" className="md:hidden">
          <Image src={LogoLight} alt="Logo" width="60" />
        </Link>
      </div>
      <div className="flex gap-2">
        <SearchComponent />
        <LanguageToggle />
        <ThemeToggle />
        <UserToggle />
      </div>
    </header>
  )
}
