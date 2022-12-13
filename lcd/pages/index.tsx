import Head from 'next/head'
import { parseCookies } from 'nookies'
import Loading from './loading'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Loading />
    </div>
  )
}

export async function getServerSideProps(ctx: any) {
  const { LCD_TOKEN: jwt } = parseCookies(ctx)
  if (jwt) {
    return {
      redirect: {
        permanent: false,
        destination: '/clientesOffline',
      },
      props: {},
    }
  }
  return {
    redirect: {
      permanent: false,
      destination: '/login',
    },
    props: {},
  }
}
