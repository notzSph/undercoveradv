import type { AppProps } from 'next/app'

/**
 * GLOBAL STYLES IMPORT
 * 
 * Core Style --> app.scss
 * Global Classes --> styles.scss
 * Width --> width.scss
 * Flex --> flex.scss
 * Margins & Paddings --> margin-padding.scss
 * Colors --> colors.scss
 * 
 */

import '../share/styles/app.scss'
import '../share/styles/styles.scss'
import '../share/styles/width.scss'
import '../share/styles/flex.scss'
import '../share/styles/margin-padding.scss'
import '../share/styles/colors.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
