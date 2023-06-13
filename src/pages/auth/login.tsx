import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

import { useState } from 'react'
import { getCsrfToken } from 'next-auth/react'

export default function Login({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div className='h-screen bg-base-100 flex flex-col justify-center items-center'>
            <form method='POST' action='/api/auth/callback/credentials' className='bg-base-200 flex flex-col gap-4 p-6 justify-center items-center rounded-lg shadow-2xl'>
                <h1 className='text-5xl text-center text-primary'>Edge Texting Bot</h1>
                <h1 className='text-center'>Please ensure you are signing in<br/> with your ClubOS account.</h1>
                <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
                <input name='username' className='input input-bordered w-full' value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username' />
                <input name='password' className='input input-bordered w-full' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                <button type='submit' className='text-xl btn btn-primary'>Login</button>
            </form>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return {
        props: {
            csrfToken: await getCsrfToken(context)
        }
    }
}