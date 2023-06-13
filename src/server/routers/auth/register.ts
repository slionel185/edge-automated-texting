import { z } from 'zod'

import { prisma } from '@/utils/db'
import { procedure } from '@/server/trpc'

export const register = procedure
    .input(
        z.object({
            username: z.string(),
            password: z.string(),
            confirmPassword: z.string()
        })
    )
    .mutation(async (opts) => {
        if(!opts.input.password || !opts.input.password || !opts.input.confirmPassword) return { status: 'error', message: 'Invalid data.' }
        
        if(opts.input.password !== opts.input.confirmPassword) return { status: 'error', message: 'Invalid data.' }

        const exists = await prisma.user.findFirst({
            where: {
                username: {
                    equals: opts.input.username,
                    mode: 'insensitive'
                }
            }
        })

        if(exists) return { status: 'error', message: 'User already exists.' }

        const newUser = await prisma.user.create({
            data: {
                username: opts.input.username,
                password: opts.input.password
            }
        })

        if(!newUser) return { status: 'error', message: 'Error creating User.' }
        return { status: 'success', message: 'User created.' }
    })