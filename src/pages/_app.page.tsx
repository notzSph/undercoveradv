import Head from 'next/head'
import { NextIntlProvider } from 'next-intl'
import type { AppProps } from 'next/app'

/* Core Style */
import '../share/styles/app.scss'
/* Global Classes */
import '../share/styles/styles.scss'
/* Width */
import '../share/styles/width.scss'
/* Flex */
import '../share/styles/flex.scss'
/* Margins & Paddings */
import '../share/styles/margin-padding.scss'
/* Colors */
import '../share/styles/colors.scss'
/* Common Text */
import '../share/styles/common-text.scss'
import { useLayoutListener } from '../hooks/useLayout.hook'


export default function App({ Component, pageProps }: AppProps) {

  useLayoutListener();

  return (
    <>
    <NextIntlProvider messages={pageProps.messages}>
      <Head>
      </Head>
      <Component {...pageProps} />
    </NextIntlProvider>
    </>
  )
}
