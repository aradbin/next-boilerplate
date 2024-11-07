import { Command } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Header /> */}
      <Link href="/" className="fixed top-5 left-10 flex items-center justify-center space-x-2">
        <Command />
        <span className="font-bold">Acme Inc</span>
      </Link>
      <div className="w-full lg:grid lg:grid-cols-2">
        <div className="flex h-screen w-full items-center justify-center px-4">{children}</div>
        <div className="hidden bg-muted lg:block">
          <Image src="/media/bg-dark.jpg" alt="Image" width="1920" height="1080" className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
        </div>
      </div>
    </>
  )
}
