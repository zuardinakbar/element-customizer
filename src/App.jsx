// src/App.jsx

import { useState } from 'react'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <h1>Element Customizer</h1>
    </div>
  )
}

export default App
