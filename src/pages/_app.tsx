import '@/css/global.css'
import '@/css/theme-switch.scss'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { Inter } from 'next/font/google'

import LayoutWrapper from '@/components/LayoutWrapper'
import metadata from 'data/metadata'

import type { AppProps } from 'next/app'
import { PostsProvider } from '@/lib/utils/blogPostProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme={metadata.theme}>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <PostsProvider>
        <LayoutWrapper className={`${inter.className} ${inter.variable}`}>
          <Component {...pageProps} />
        </LayoutWrapper>
      </PostsProvider>
    </ThemeProvider>
  )
}
