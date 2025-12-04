import React from 'react'
import Link from 'next/link'


export default function () {
  return (
    <div>
        <h1>about page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deserunt animi, qui commodi aliquid neque quae architecto possimus illo quidem!</p>
        <ul>
            <li><Link href='./'>home page</Link></li>
            <li><Link href='#'>about page</Link></li>
            <li><Link href='about/extra'>extra page</Link></li>
        </ul>
    </div>
  )
}
