import React from 'react'
import { getSortedData, getPostData } from '../../lib/docs'
import Layout from '../../components/Layout'
import Reader from '../../components/Reader'

export default function Page({ postData, allDocs }) {
    return (
        <Layout chapterList={allDocs}>

            <Reader HTML={postData.HTML}/>
            

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
    return {
        props: {
            postData,
            allDocs
        }
    }
}