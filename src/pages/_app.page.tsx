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
  return <Component {...pageProps} />
}
