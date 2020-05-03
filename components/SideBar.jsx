import React, { useState } from 'react'
import Link from 'next/link'
import MenuLeft from './icons/MenuLeft'
import { css } from '@emotion/core'

import { config } from '../config'
import { useRouter } from 'next/router'

export default function SideBar({ initialToggle = true, chapterList }) {
    const [toggled, setToggled] = useState(initialToggle)
    const { typography, spacings, sideBar } = config
    const router = useRouter()
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
            top: 2rem;
            border-right: 1px solid ${sideBar.border};
            border-bottom: 1px solid ${sideBar.border};
            border-top: 1px solid ${sideBar.border};
            border-radius: 2px;
            display: inline-block;
            &:hover {
                button {
                    color: ${sideBar.hover};
                    
                }
            }
            button {
                padding: ${spacings.half};
                cursor: pointer;
                border: none;
                outline: none;
                background: ${sideBar.background};
                color: ${sideBar.foreground};
            }
        }
        section {
            font-family: ${typography.alternateFont};
            padding: ${spacings.half} ${spacings.std};
            ${!toggled && "padding: 0;"}
            overflow:hidden;
            a {
                padding: ${spacings.half};
                font-family: ${typography.alternateFont};

                cursor: pointer;
                color: ${sideBar.foreground};
                transition: all 0.2s linear;
                font-size: ${sideBar.fontSize};
                text-decoration: none;
    
                &:hover {
                    color: ${sideBar.hover};
                }
                &.active {
                    font-weight: 600;
                }
            }
            
        }
        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            overflow: hidden;
            padding-left: 2rem;
            li {
                font-size: 14px;
                padding-top: 0.5rem;
                
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

                    {chapterList.map((elem) => {
                        return (
                            <section key={elem.index*8}>
                                <Link href={'/docs/[slug]'} as={`/docs/${elem.slug}`}>
                                    <a className={router.asPath == `/docs/${elem.slug}` ? 'active' : 'not-active'}>
                                        {elem.title}
                                    </a>
                                </Link>
                                <ul>
                                    {elem.sublist.map((subelem, index) => {
                                        return (

                                            <Link key={index*100} href={'/docs/[slug]'} as={`/docs/${elem.slug}`}>
                                                <li>
                                                    {subelem}
                                                </li>
                                            </Link>

                                        )
                                    })}

                                </ul>
                            </section>
                        )
                    })}

                </div>
            }
        </>
    )
}
