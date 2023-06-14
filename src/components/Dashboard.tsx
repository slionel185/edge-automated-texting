import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

import Loading from '@/components/Loading'
import TextOptions from '@/components/TextOptions'
import { useTextOptionStore } from '@/data/TextOptionStore'

export default function Dashboard() {

    const router = useRouter()
    const session = useSession()

    const { message, setMessage, sentTexts } = useTextOptionStore()

    useEffect(() => {
        if(session.status === 'unauthenticated') router.push('/')
    }, [session])

    if(session.status === 'loading') return <Loading />

    return (
        <div className='h-full lg:h-screen flex flex-col bg-base-200'>
            <div className='flex flex-col lg:h-full lg:grid lg:grid-cols-3 lg:grid-rows-3 p-6 gap-6'>
                <div className='flex h-60 lg:h-full w-full lg:col-span-2 shadow-lg'>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='h-full w-full textarea textarea-lg text-lg md:text-xl xl:text-3xl textarea-bordered' maxLength={250} placeholder='Enter message here.' style={{ "resize": "none" }} />
                </div>
                <div className='flex flex-col gap-2 h-full w-full lg:row-span-3 bg-base-100 rounded-lg shadow-xl p-4'>
                    <div className='flex w-full justify-between items-center px-2'>
                        <h1 className='text-4xl text-primary'>Options</h1>
                        <h1 onClick={() => signOut()} className='btn btn-sm text-primary'>Logout</h1>
                    </div>
                    <TextOptions />
                </div>
                <div className='flex flex-col h-full w-full lg:row-span-2 col-span-2 bg-base-100 rounded-lg shadow-xl p-4 overflow-hidden'>
                    <div className='flex flex-col h-full gap-2 gap-x-4 lg:grid lg:grid-cols-2 xl:grid-cols-3 overflow-y-auto pr-4'>
                        {/*<div className='border min-h-16 h-16 border-base-200 flex justify-start p-4 items-center rounded-xl'><h1>Seth Torrence</h1></div>*/}
                        {(sentTexts.length === 0) && <div className='h-16'>Texts sent will display here!</div>}
                        {sentTexts.map((name, idx) => (
                            <div key={idx} className='border min-h-16 h-16 border-base-200 flex justify-start p-4 items-center rounded-xl'>
                                <h1>{name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}