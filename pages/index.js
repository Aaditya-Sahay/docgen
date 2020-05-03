import Head from 'next/head'
import Layout from '../components/Layout'
import  { getSortedData } from '../lib/docs'


export default function Home({allDocs}) {
  console.log(allDocs)
  return (
    <Layout chapterList={allDocs}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </Layout>
  )
}


export async function getStaticProps() {
  const allDocs = await getSortedData()
  return {
      props: {
          allDocs
      }
  }
}