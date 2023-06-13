import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TextOptionStore {
    message: string,
    bucket: string,
    sortBy: string,
    textToSend: number,
    lastContactedDate: number,
    setMessage: (newMessage: string) => void,
    setBucket: (newBucket: string) => void,
    setSortBy: (newSortBy: string) => void,
    setTextToSend: (to: number) => void,
    setLastContactedDate: (to: number) => void
}

export const useTextOptionStore = create<TextOptionStore>()(
    persist(
        (set) => ({
            message: '',
            bucket: 'WEB_LEAD',
            sortBy: 'DEFAULT',
            textToSend: 50,
            lastContactedDate: 1,
            setMessage: (newMessage) => set(() => ({ message: newMessage})),
            setBucket: (newBucket) => set(() => ({ bucket: newBucket})),
            setSortBy: (newSortBy) => set(() => ({ sortBy: newSortBy})),
            setTextToSend: (to) => set(() => ({ textToSend: to})),
            setLastContactedDate: (to) => set(() => ({ lastContactedDate: to}))
        }), {
            name: 'TextOptionStore',
            partialize: (state) => ({
                message: state.message,
                bucket: state.bucket,
                sortBy: state.sortBy,
                textToSend: state.textToSend,
                lastContactedDate: state.lastContactedDate
            })
        }
    )
)