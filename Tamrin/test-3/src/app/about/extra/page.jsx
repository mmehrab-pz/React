import React from 'react'
import Link from 'next/link'


export default function page() {
  return (
    <div>
        <h1>extar page</h1>
        <ul>
            <li><Link href='../'>home page</Link></li>
            <li><Link href='./'>about page</Link></li>
            <li><Link href='#'>extra page</Link></li>
        </ul>
    </div>
  )
}
