import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import remark from 'remark'
import html from 'remark-html'

import { JSDOM } from 'jsdom'

const shiki = require('shiki')

const postsDirectory = path.join(process.cwd(), 'docs')

export async function getSortedData() {
    const fileNames = fs.readdirSync(postsDirectory)

    
    return Promise.all(fileNames.map(async fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)
        let HTML = await getHTML(matterResult)

        const dom = new JSDOM(HTML)
        const { document } = (dom).window;
        let h1Elems = [...document.getElementsByTagName('H1')]
        h1Elems = h1Elems.map(elem => elem.innerHTML)
        const sublist = h1Elems

      
        if (!matterResult.data.index) {
            throw new Error("No page index provided")
        }
        return {
            id,
            sublist,
            ...matterResult.data
        }
    }))

    // return allPostsData.sort((a, b) => {
    //     if (a.index > b.index) {
    //         return 1
    //     } else {
    //         return -1
    //     }
    // })
}

export async function getHTML(matterResult) {
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

    return  processedContent.toString()
}

export async function getPostData(slug) {

    const data =await getSortedData().then(result => result.find(elem => elem.slug == slug))
    const fullPath = path.join(postsDirectory, `${data.id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    let HTML = await getHTML(matterResult)

    const dom = new JSDOM(HTML)
    const { document } = (dom).window;
    const codeElems = document.getElementsByTagName('code')
    if (codeElems.length > 0) {
        for (let codeElem of codeElems) {
            await shiki.getHighlighter({
                theme: 'Material-Theme-Darker'
            }).then(highlighter => {
                let language = codeElem.className.replace("language-", "")
                if (!language) language = 'js'
                codeElem.parentNode.innerHTML = (highlighter.codeToHtml(codeElem.innerHTML, language))
            })
        }
    }

    HTML = (document.body.innerHTML)



    let id = data.id
    return {
        id,
        HTML,
        ...matterResult.data
    }
}
