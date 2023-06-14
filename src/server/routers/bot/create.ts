import { prisma } from '@/utils/db'
import { useBotStore } from '@/data/BotStore'
import { useTextOptionStore } from '@/data/TextOptionStore'

export const dispatch = async ({ userId }: { userId: string }) => {
    const BotStore = useBotStore.getState()
    const TextOptionStore = useTextOptionStore.getState()

    const existsInStore = BotStore.bots.filter(bot => bot.userId === userId)
    const existsInDb = await prisma.bot.findFirst({
        where: {
            userId: {
                equals: userId,
                mode: 'insensitive'
            }
        }
    })

    if(existsInDb || existsInStore.length > 0) return { error: 'Bot already exists.' }

    const newDB = await prisma.bot.create({
        data: {
            userId: userId,
            bucket: TextOptionStore.bucket,
            sortBy: TextOptionStore.sortBy,
            message: TextOptionStore.message,
            textToSend: TextOptionStore.textToSend,
            amountSent: TextOptionStore.amountSent,
            lastContactedDate: TextOptionStore.lastContactedDate
        }
    })

    if(newDB) BotStore.addBot(newDB)
}