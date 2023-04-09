import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App text-red-600">
     <h3>Hello From Tailwind</h3>
    </div>
  )
}

export default App
