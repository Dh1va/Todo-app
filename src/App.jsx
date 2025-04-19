import { useState } from 'react'

import './App.css'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-[85vw] sm:w-[70vw] h-screen px-4 py-10 mx-auto flex justify-center'>
        <Todo/>
          
      </div>
    </>
  )
}

export default App
