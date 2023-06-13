import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'

import Loading from '@/components/Loading'
import Dashboard from '@/components/Dashboard'
import AccessDenied from '@/components/AccessDenied'

export default function Home() {

    const session = useSession()

    useEffect(() => {
        console.log(session.data)
    }, [session])

    if(session.status === 'loading') return <div className='h-screen flex'><Loading /></div>
    if(session.status === 'unauthenticated') return <AccessDenied />

    return (
        <div className={`${inter.className}`}>
            <Dashboard />
        </div>
    )
}