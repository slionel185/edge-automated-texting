import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { trpc } from '@/utils/trpc'
import Loading from '@/components/Loading'

export default function Register() {

    const router = useRouter()

    const { mutate, data, status } = trpc.register.useMutation()

    const [error, setError] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const handleSubmit = async () => {
        mutate({ username, password, confirmPassword })
    }

    useEffect(() => {
        if(!data) return

        if(data.status === 'error') return setError(data.message)
        if(data.status === 'success') router.push('/auth/login')
    }, [data])

    useEffect(() => {
        if(error === '') return
        toast.error(error)
        setError('')
    }, [error])

    if(status === 'loading') return <div className='h-screen flex'><Loading/></div>

    return (
        <div className='h-screen bg-base-200 md:bg-base-100 flex flex-col justify-center items-center'>
            <div className='bg-base-200 flex flex-col gap-4 p-6 justify-center items-center rounded-lg md:shadow-2xl'>
                <h1 className='text-4xl md:text-5xl text-center text-primary'>Edge Texting Bot</h1>
                <h1 className='text-center'>Please ensure you are registering in<br/> with your ClubOS account.</h1>
                <input id='username' className='input input-bordered w-full' value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username' />
                <input id='password' className='input input-bordered w-full' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                <input id='password' className='input input-bordered w-full' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type='password' placeholder='Confirm Password' />
                <button onClick={handleSubmit} className='text-xl btn btn-primary'>Register</button>
            </div>
        </div>
    )
}