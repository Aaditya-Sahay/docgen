import React, { useState } from 'react'
import Link from 'next/link'
import MenuLeft from './icons/MenuLeft'
import { css } from '@emotion/core'

import { config } from '../config'

export default function SideBar({ initialToggle = true, chapterList }) {
    const [toggled, setToggled] = useState(initialToggle)
    const { typography, spacings, sideBar } = config

    const styling = css`
        
        max-width: ${sideBar.maxWidth};
        width: 100%;
        background: ${sideBar.background};
        position: sticky;
        border-right: 1px solid ${sideBar.border};
        transition: all 0.25s ease-in-out;
        ${!toggled && `
            transform: translateX(-100%);
            width: 0;
        `}
        div {
            position: relative;
            left: 100%;
            border-right: 1px solid ${sideBar.border};
            border-bottom: 1px solid ${sideBar.border};
            border-radius: 2px;
            display: inline-block;
            button {
                padding: ${spacings.half};
                cursor: pointer;
                border: none;
                outline: none;
                background: ${sideBar.background};
            }
        }
      
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            overflow: hidden;
            li {
                font-family: ${typography.alternateFont};
                padding: ${spacings.half};
                cursor: pointer;
                color: ${sideBar.foreground};
                transition: all 0.2s linear;
                font-size: ${sideBar.fontSize};
                &:hover {
                    color: ${sideBar.hover};
                    
                }
            }
        }
    `

    return (
        <>
            {sideBar.visible &&
                <div css={styling}>
                    <div>
                        <button onClick={() => setToggled(!toggled)}>
                            <MenuLeft />
                        </button>
                    </div>
                    <ul>
                        {chapterList.map((elem) => {
                            return (
                                <Link key={elem.index} href={'/docs/[slug]'} as={`/docs/${elem.slug}`}>
                                    <li>
                                        {elem.title}
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            }
        </>
    )
}
