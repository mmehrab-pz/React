import React, { useState } from 'react'
import './style.css'

export default function Home() {
const [Name , setName] = useState([])

const para = ()=>{
  const name = prompt('enter your name')
  console.log(name);
  setName([...Name, name])
}

  return (
    <div className='home'>
        <button onClick={para}>click here</button>
        <ul>{Name.map((item , i)=>{
            return(
                <li key={i}>{item}</li>
            )
        })}</ul>
    </div>
  )
}
