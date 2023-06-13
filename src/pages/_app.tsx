import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { AppProps, AppType } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { trpc } from '@/utils/trpc'

const queryClient = new QueryClient()

const App: AppType = ({
  Component,
  pageProps
}: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ToastContainer position='bottom-right' theme='dark' />
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default trpc.withTRPC(App)
