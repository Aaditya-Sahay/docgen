import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import { config } from '../config'
import LeftArrow from './icons/LeftArrow'
import RightArrow from './icons/RightArrow'

export default function Reader({ HTML }) {

    const { typography, colors, spacings } = config


    const reader = css`
        display: flex;
        justify-content: center;
        background: ${colors.background};
        height: 100%;
        padding: 1rem;
        .reading-zone {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

        }

        .arrow-div {
            height: 100%;
   
            display: flex;
            align-items: center;
            min-width: 24px;
            padding: 0;
            button {
                position: fixed;
                background: ${colors.background};
                border: none;
                outline: none;
                top: 48%;
                cursor: pointer;
                svg {
                    color: ${colors.hover};
                    height: 50px;
                    width: 50px;
                    transform: translateX(-15px);
                    transition: all 0.25s linear;
                }
                &:hover svg {
                    color: ${colors.link};
                }
            }
        }
        
        .content-holder {
            max-width: 700px;
            width: 100%;
            color: ${colors.foreground};
            h1 {
                font-size: ${typography.h1};
                font-family: ${typography.alternateFont};
                margin: ${spacings.double} 0;
            }
            h2 {
                font-size: ${typography.h2};
                font-family: ${typography.primaryFont};
                margin: ${spacings.reg} 0;
            }
            p {
                font-size: ${typography.p};
                font-family: ${typography.primaryFont};
                margin: ${spacings.std} 0;
            }
            ol {
                padding-left: ${spacings.double};
                margin: ${spacings.std} 0;
            }
            li {
                font-size: ${typography.p};
                font-family: ${typography.primaryFont};
              
            }
            pre.shiki {
                padding: ${spacings.double};
                margin: ${spacings.std} 0;
                border-radius: 10px;
                font-size: ${typography.code};
            }
            a {
                text-decoration: none;
                border-bottom: 1px solid transparent;
                color: ${colors.link};
                transition: all 0.25s linear;
                &:hover {
                    color: ${colors.hover};
                    border-bottom: 1px solid ${colors.link};
                }
            }
        }
        

    `

    return (
        <div css={reader}>
            <div>

            </div>
            <div className="reading-zone">
                <div className="arrow-div">
                    <button>
                        <LeftArrow/>
                    </button>
                </div>
                <div className="content-holder" dangerouslySetInnerHTML={{ __html: HTML }} />
                <div className="arrow-div">
                    <button>
                        <RightArrow/>
                    </button>
                </div>
            </div>

        </div>
    )
}
