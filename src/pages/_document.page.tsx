import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;500;600;700&family=Varela+Round&display=swap" rel="stylesheet" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}