import React from 'react'
import SideBar from './SideBar'
import { css } from '@emotion/core'
import { config } from '../config'


export default function Layout({ chapterList, children, sideBar, handleChange }) {
    const layout = css`
        display: flex;
        min-height: 100vh;
        background: ${config.colors.background};
        main {
            width: 100%;
        }
    `
    return (
        <div css={layout}>
            <SideBar chapterList={chapterList} toggled={sideBar} handleChange={handleChange}/>
            <main>
                {children}
            </main>
        </div>
    )
}
