import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface TextOptionStore {
    message: string,
    bucket: string,
    sortBy: string,
    textToSend: number,
    lastContactedDate: number,
    amountSent: number,
    sentTexts: string[],
    sendAs: string,
    setMessage: (newMessage: string) => void,
    setBucket: (newBucket: string) => void,
    setSortBy: (newSortBy: string) => void,
    setTextToSend: (to: number) => void,
    setLastContactedDate: (to: number) => void,
    setAmountSent: (to: number) => void,
    addSentText: (name: string) => void,
    resetSentTexts: () => void,
    setSendAs: (name: string) => void
}

export const useTextOptionStore = create<TextOptionStore>()(
    persist(
        (set) => ({
            message: '',
            bucket: 'WEB_LEAD',
            sortBy: 'DEFAULT',
            textToSend: 50,
            lastContactedDate: 1,
            amountSent: 0,
            sentTexts: [],
            sendAs: '',
            setMessage: (newMessage) => set((state) => ({ message: `Hey this is ${state.sendAs} with the Edge! ${newMessage}`})),
            setBucket: (newBucket) => set(() => ({ bucket: newBucket})),
            setSortBy: (newSortBy) => set(() => ({ sortBy: newSortBy})),
            setTextToSend: (to) => set(() => ({ textToSend: to})),
            setLastContactedDate: (to) => set(() => ({ lastContactedDate: to})),
            setAmountSent: (to) => set(() => ({ amountSent: to})),
            addSentText: (name) => set((state) => ({ sentTexts: [...state.sentTexts, name] })),
            resetSentTexts: () => set(() => ({ sentTexts: [] })),
            setSendAs: (name) => set(() => ({ sendAs: name }))
        }), {
            name: 'TextOptionStore',
            partialize: (state) => ({
                message: state.message,
                bucket: state.bucket,
                sortBy: state.sortBy,
                textToSend: state.textToSend,
                lastContactedDate: state.lastContactedDate,
                amountSent: state.amountSent
            })
        }
    )
)