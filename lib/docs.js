import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'docs')

export function getSortedData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')


    const matterResult = matter(fileContents)
    if (!matterResult.data.index) {
        throw new Error("No page index provided")
    }
    return {
      id,
      ...matterResult.data
    }
  })
  return allPostsData.sort((a, b) => {
    if (a.index > b.index) {
      return 1
    } else {
      return -1
    }
  })
}