import { useState } from 'react'

import { presets } from '@/helpers/presets'
import { useTextOptionStore } from '@/data/TextOptionStore'

export default function TextOptions() {

    const { bucket, setBucket, sortBy, setSortBy, textToSend, setTextToSend, lastContactedDate, setLastContactedDate, amountSent, sentTexts } = useTextOptionStore()

    const [sending, setSending] = useState(false)

    const dispatch = () => {

    }

    return (
        <div className='flex flex-col h-full justify-center items-center gap-4'>
            <div className='form-control w-full'>
                <label className='label text-primary'>
                    <span className='label-text text-primary'>Bucket</span>
                </label>
                <select value={bucket} onChange={(e) => setBucket(e.target.value)} className='select select-bordered'>
                    <option value={'WEB_LEAD'}>Web Lead</option>
                    <option value={'VIP_GUEST'}>VIP Guest</option>
                    <option value={'PAID_PASS'}>Paid Pass</option>
                    <option value={'COLLECTIONS'}>Collections</option>
                    <option value={'MISSED_GUEST'}>Missed Guest</option>
                    <option value={'APPT_NO_SHOW'}>Appt No Show</option>
                    <option value={'GUEST_OF_TOTAL'}>Guest Of Total</option>
                </select>
            </div>

            <div className='form-control w-full'>
                <label className='label text-primary'>
                    <span className='label-text text-primary'>Last Contacted Date</span>
                </label>
                <select value={lastContactedDate} onChange={(e) => setLastContactedDate(Number(e.target.value))} className='select select-bordered'>
                    <option value={'1'}>1 Day Ago</option>
                    <option value={'2'}>2 Days Ago</option>
                    <option value={'3'}>3 Days Ago</option>
                    <option value={'4'}>4 Days Ago</option>
                    <option value={'5'}>5 Days Ago</option>
                    <option value={'6'}>6 Days Ago</option>
                    <option value={'7'}>7 Days Ago</option>
                </select>
            </div>

            <div className='form-control w-full'>
                <label className='label text-primary'>
                    <span className='label-text text-primary'>Sort By</span>
                </label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className='select select-bordered'> 
                    <option value={'DEFAULT'}>Default</option>
                    <option value={'CREATED_ASC'}>Created Date Ascending</option>
                    <option value={'CREATED_DESC'}>Created Date Descending</option>
                    <option value={'CONVERSATION_ASC'}>Conversation Date Ascending</option>
                    <option value={'CONVERSATION_DESC'}>Conversation Date Descending</option>
                </select>
            </div>

            <div className='form-control w-full'>
                <label className='label text-primary'>
                    <span className='label-text text-primary'>Text Amount</span>
                    <span className='label-text-alt text-primary'>{textToSend}</span>
                </label>
                <input type='range' min='0' max='1000' value={textToSend} onChange={(e) => setTextToSend(Number(e.target.value))} className='range range-primary' step='50' />
                <div className='w-full flex justify-between text-xs px-2 pt-1'>
                    <span>'</span>
                    <span>'</span>
                    <span>'</span>
                    <span>'</span>
                    <span>'</span>
                    <span>'</span>
                    <span>'</span>
                    <span>'</span>
                    <span>'</span>
                    <span>'</span>
                    <span>'</span>
                </div>
            </div>

            <div className='w-full flex flex-col gap-2'>
                <div className='w-full flex justify-center gap-2 items-center'>
                    <button onClick={presets.rfc} className='btn btn-sm xl:btn-md'>RFC</button>
                    <button onClick={presets.missedGuest} className='btn btn-sm xl:btn-md'>Missed Guest</button>
                    <button onClick={presets.guestOfTotal} className='btn btn-sm xl:btn-md'>Guest of Total</button>
                </div>
                <div className='w-full flex justify-center gap-2 items-center'>
                    <button onClick={presets.webLead} className='btn btn-sm xl:btn-md'>Web Lead</button>
                    <button onClick={presets.apptNoShow} className='btn btn-sm xl:btn-md'>Appt No Show</button>
                    <button onClick={presets.paidPass} className='btn btn-sm xl:btn-md'>Paid Pass</button>
                </div>
            </div>

            <div className='join'>
                <div onClick={() => setSending(!sending)} className={sending ? 'join-item btn btn-disabled btn-md' : 'join-item btn btn-success btn-md'}>
                    <h1>{!sending? 'Send' : 'Sending'}</h1>
                </div>
                <div className='join-item btn btn-neutral btn-disabled btn-md'>
                    <h1>Sent: {amountSent}</h1>
                </div>
                <div onClick={() => setSending(!sending)} className={!sending ? 'join-item btn btn-disabled btn-md' : 'join-item btn btn-primary btn-md'}>
                    <h1>Stop</h1>
                </div>
            </div>
        </div>
    )
}