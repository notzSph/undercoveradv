import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="/assets/undrcover/css/undrcover-codes.css" rel="stylesheet" />
      <link href="/assets/undrcover/css/undrcover-embedded.css" rel="stylesheet" />
      <link href="/assets/undrcover/css/undrcover.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}