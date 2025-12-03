import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

let name = prompt('emter your name')
const x = 
<>
  <h1>{name} score : 50+50 = {50+50}</h1>
  <p>hello world</p>
</>;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {x}
  </StrictMode>,
)
