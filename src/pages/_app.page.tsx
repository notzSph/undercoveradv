import Head from 'next/head'
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


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="/assets/undrcover/css/undrcover-codes.css" rel="stylesheet" />
        <link href="/assets/undrcover/css/undrcover-embedded.css" rel="stylesheet" />
        <link href="/assets/undrcover/css/undrcover.css" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
