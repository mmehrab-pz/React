import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/master.css'

const data = [
  {
    id:1,
    name:'ali'
  },
  {
    id:2,
    name:'mina'
  },
  {
    id:3,
    name:'sina'
  },
  {
    id:4,
    name:'tina'
  },

]

const myList = <ul>
  {data.map((val , i)=>{
    return(
      <li className='list' key={i}>{val.id} : {val.name}</li>
    )
  })}
</ul>



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {myList}
  </StrictMode>,
)
