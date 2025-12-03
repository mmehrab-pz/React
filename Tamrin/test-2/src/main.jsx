import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const data = ['mina' , 'sina' , 'ali' , 'tina']
const myLiat = <ul>{data.map((val , i)=>{
  return(
    <li key={i}>{val}</li>
  )
})}</ul> 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {myLiat}
  </StrictMode>,
)
