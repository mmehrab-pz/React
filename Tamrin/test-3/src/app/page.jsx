'use client'
import React, { useState } from 'react'

export default function page() {
const [name , setName] = useState('mehrab')
const para = ()=>{
    setName('sahar')
}
  return (
    <>
        <h1 className='text-[red] text-[18px]'>welcome to next</h1>
        <h2 className='text-[yellow]'>{name}</h2>
        <button onClick={para} className='px-2.5 py-1.5 rounded-sm border border-white cursor-pointer'>click to change</button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nemo.</p>
    </>
  )
}
