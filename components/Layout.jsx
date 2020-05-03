import React from 'react'
import SideBar from './SideBar'

export default function Layout({ chapterList, children }) {
    return (
        <div>
            <SideBar chapterList={chapterList}/>
            <main>
                {children}
            </main>
        </div>
    )
}
