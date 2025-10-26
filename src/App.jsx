
import { useState } from 'react'
import './style.css'
import Scene3D from './components/scene/Scene3D'
import ControlPanel from './components/ui/ControlPanel/ControlPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <ControlPanel/>
      <Scene3D/>
    </div>
  )
}

export default App
