import { RotateLoader } from 'react-spinners'

export default function Loading() {
    return (
        <div className='h-full w-full flex flex-col justify-center items-center'>
            <RotateLoader color='#f43f5e' />
        </div>
    )
}