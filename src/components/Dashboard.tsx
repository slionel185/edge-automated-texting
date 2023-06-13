import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

import Loading from '@/components/Loading'
import TextOptions from '@/components/TextOptions'

export default function Dashboard() {

    const router = useRouter()
    const session = useSession()

    useEffect(() => {
        if(session.status === 'unauthenticated') router.push('/')
    }, [session])

    if(session.status === 'loading') return <Loading />

    return (
        <div className='h-screen flex flex-col bg-base-200'>
            <div className='navbar bg-base-300'>
                <div className='flex-1 px-10 flex-nowrap whitespace-nowrap overflow-hidden overflow-ellipsis'>
                    <h1 className='normal-case text-2xl text-primary'>Edge Automated Texting</h1>
                </div>
                <div className='flex-none'>
                    <button onClick={() => signOut()} className='btn btn-ghost text-primary'>Log Out</button>
                </div>
            </div>
            <div className='flex flex-col lg:h-full lg:grid lg:grid-cols-3 lg:grid-rows-3 p-6 gap-6'>
                <div className='flex h-full w-full lg:col-span-2 shadow-lg'>
                    <textarea className='h-full w-full textarea textarea-lg textarea-bordered' placeholder='Enter message here.' style={{ "resize": "none" }} />
                </div>
                <div className='flex flex-col h-full w-full lg:row-span-3 bg-base-100 rounded-lg shadow-xl p-4'>
                    <h1 className='w-full text-primary text-center text-2xl'>Options</h1>
                    <TextOptions />
                </div>
                <div className='flex flex-col h-full w-full lg:row-span-2 col-span-2 bg-base-100 rounded-lg shadow-xl p-4' tabIndex={0}>
                    <h1 className='w-full text-primary text-center text-2xl'>Texts Sent</h1>
                    <div className='flex h-full lg:grid lg:grid-cols-2 xl:grid-cols-3'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}