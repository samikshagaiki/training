import { useState } from 'react'

function App() {
 
  const[name, setName] = useState("")
  return (
    <>
      <div>
        <input type="text" placeholder="Tye here..." onChange={(e)=>setName(e.target.value)}/>
        <h1>{name}</h1>
      </div>
    </>
  )
}

export default App
