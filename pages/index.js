import Head from 'next/head'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import  { getSortedData } from '../lib/docs'
import { config } from '../config'
import { useRouter } from 'next/router'

export default function Home({allDocs}) {
  const router = useRouter()
  useEffect(()=>{
    router.push(`/docs/${allDocs[0].slug}`)
  })


  return (
    <Layout chapterList={allDocs}>
      <Head>
        <title>{config.siteMetadata.title}</title>
      </Head>
    </Layout>
  )
}


export async function getStaticProps(context) {
  const allDocs = await getSortedData()
  return {
      props: {
          allDocs
      }
  }
}