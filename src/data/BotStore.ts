import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Bot {
    userId: string,
    id: string,
    message: string,
    bucket: string,
    sortBy: string,
    textToSend: number,
    lastContactedDate: number,
    amountSent: number,
    sentTexts: string[]
}

interface BotStore {
    bots: Bot[],
    addBot: (bot: Bot) => void,
    removeBot: (userId: string) => void,
}

export const useBotStore = create<BotStore>()(
    persist(
        (set) => ({
            bots: [],
            addBot: (bot) => set((state) => ({ bots: [...state.bots, bot] })),
            removeBot: (userId) => set((state) => ({ bots: state.bots.filter(bot => bot.userId !== userId) }))
        }), {
            name: 'BotStore',
            partialize: (state) => ({
                bots: state.bots
            })
        }
    )
)