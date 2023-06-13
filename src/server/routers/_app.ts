import { router } from '@/server/trpc'
import { register } from './auth/register';

export const appRouter = router({
    register: register
})

export type AppRouter = typeof appRouter