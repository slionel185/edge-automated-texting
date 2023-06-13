import { useState } from 'react'

import { useTextOptionStore } from '@/data/TextOptionStore'

export default function TextOptions() {

    const { bucket, setBucket, sortBy, setSortBy, textToSend, setTextToSend, lastContactedDate, setLastContactedDate } = useTextOptionStore()

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

            <div className='join join-vertical lg:join-horizontal'>
                <button className='btn join-item'>RFC</button>
                <button className='btn join-item'>Web Lead</button>
                <button className='btn join-item'>Missed Guest</button>
                <button className='btn join-item'>Appt No Show</button>
                <button className='btn join-item'>Guest of Total</button>
            </div>
        </div>
    )
}