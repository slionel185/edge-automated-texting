import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'

import { prisma } from '@/utils/db'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                if(!credentials) return null

                const user = await prisma.user.findFirst({
                    where: {
                        username: {
                            equals: credentials.username,
                            mode: 'insensitive'
                        }
                    }
                })

                if(!user) return null
                if(user.password !== credentials.password) return null

                return user
            }
        })
    ],
    session: {
        strategy: 'jwt',
    },
    theme: {
        colorScheme: 'dark'
    },
    pages: {
        signIn: '/auth/login',
    }
}

export default NextAuth(authOptions)