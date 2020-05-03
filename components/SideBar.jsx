import React, { useState } from 'react'
import Link from 'next/link'

export default function SideBar({ initialToggle = false, chapterList }) {
    const [toggled, setToggled] = useState(initialToggle)

    return (
        <div>
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
    )
}
