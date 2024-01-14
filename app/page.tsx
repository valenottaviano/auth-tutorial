import {Button} from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button';


export default function Home() {
  return (
    <main className='h-full flex flex-col items-center justify-center bg-slate-100'>
      <div className="flex flex-col items-center space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-slate-900">🔐 Auth</h1>
        <p className='text-md text-slate-700 '>A simple authentication system.</p>
        <LoginButton>
          <Button size="lg">Sign in</Button>
        </LoginButton>
      </div>
    </main>   
  )
}
