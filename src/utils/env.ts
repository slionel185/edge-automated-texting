import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    client: {

    },
    server: {
        NODE_ENV: z.enum(['development', 'preview', 'production']),

        DATABASE_URL: z.string().url(),

        NEXTAUTH_URL: z.string().url(),
        NEXTAUTH_SECRET: z.string().min(1),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    }
})