import React, {useState} from 'react'
import { getSortedData, getPostData } from '../../lib/docs'
import Layout from '../../components/Layout'
import Reader from '../../components/Reader'
import Head from 'next/head'
import { config } from '../../config'
export default function Page({ postData, allDocs, previous, next }) {
    const [sideBar, toggleSideBar] = useState(false)
    return (
        <Layout chapterList={allDocs} sideBar={sideBar} handleChange={toggleSideBar}>
            <Head>
                <title>{config.siteMetadata.name} | {postData.title}</title>
            </Head>
            <Reader HTML={postData.HTML} previous={previous} next={next}/>
        </Layout>
    )
}

export async function getStaticPaths() {
    let data = await getSortedData()
    let paths = data.map(entry => {
        return {
            params: {
                page: entry.slug
            }
        }

    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
  
    const postData = await getPostData(params.page)

    let allDocs = await getSortedData()
    let current = allDocs.indexOf(allDocs.find(doc => doc.slug === params.page))
    let previous = allDocs[current - 1] ? allDocs[current - 1].slug : null
    let next = allDocs[current + 1] ? allDocs[current + 1].slug : null
    return {
        props: {
            postData,
            allDocs,
            previous,
            next
        }
    }
}