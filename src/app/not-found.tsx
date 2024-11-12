import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader className='justify-center text-center pb-2'>
          <div className="relative mx-auto h-24 w-24 text-primary">
            <AlertCircle className="absolute inset-0 h-full w-full p-2" />
          </div>
          <CardTitle className="text-4xl font-bold mt-4">404</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-xl font-semibold mb-2">Page Not Found</p>
          <p className="text-muted-foreground">
            Oops! The page you are looking for doesn't exist or has been moved.
          </p>
        </CardContent>
        <CardFooter className="justify-center pb-8">
          <Button variant="default" asChild className="transition-all duration-200 hover:scale-105">
            <Link href="/">Return Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
