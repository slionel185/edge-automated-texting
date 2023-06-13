import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'

import type { AppRouter } from '@/server/routers/_app'
import getBaseUrl from '@/utils/functions/getBaseUrl'

export const trpc = createTRPCNext<AppRouter>({
    config(opts) {
        return {
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                    async headers() {
                        return {
                        }
                    }
                })
            ]
        }
    },
    ssr: false
})