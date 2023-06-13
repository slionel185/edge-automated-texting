import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

export default function AccessDenied({ error }: { error?: string }) {
    
    const router = useRouter()

    return (
        <div className='h-screen flex flex-col gap-4 justify-center items-center bg-base-100'>
            <h1 className='text-primary text-3xl'>Access Denied</h1>
            {error && <h1 className='text-3xl text-secondary'>{error}</h1>}
            <h1 className='text-lg text-center'>Try logging in, or regsitering if you don't have an account!</h1>
            <div className='flex gap-4'>
                <button onClick={() => signIn()} className='btn text-xl btn-primary btn-outline'>Login</button>
                <button onClick={() => router.push('/auth/register')} className='btn text-xl btn-primary btn-outline'>Register</button>
            </div>
        </div>
    )
}