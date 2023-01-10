import Head from 'next/head'
import styles from '../share/styles/index.module.scss'
import { GetStaticPropsContext } from 'next';
import Desktop from '../components/desktop/desktop';



export default function Home() {

  return (
    <>
      <Head>
        <title>UndercoverADV | Your Partner In Crime Since 2008</title>
        <meta name="description" content="UndercoverADV is a premier web agency that specializes in creating sleek and effective websites for a wide range of businesses. We offer a variety of services, including web design, development, and digital marketing to help you grow your online presence and reach your target audience. Trust us to bring your brand to life and give you an edge over the competition." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} f-column j-between a-center`}>
        <Desktop />
      </main>
    </>
  )
}

// Internationalization
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../share/lang/${locale}.json`)).default
    }
  }
}