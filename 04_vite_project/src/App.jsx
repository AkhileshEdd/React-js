import { useState } from 'react'
import { Card } from './Card'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center '>

    
      <Card name = "Sara"/>
      <Card name = "Lara"/>
      <Card name = "Dora"/>
    

    </div>
  )
}

export default App
