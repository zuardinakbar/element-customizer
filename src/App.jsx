// src/App.jsx

import { useState } from 'react'
import './style.css'
import Scene3D from './components/scene/Scene3D'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <h1>Element Customizer</h1>
      <Scene3D/>
    </div>
  )
}

export default App
