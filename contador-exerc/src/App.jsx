import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  var sortear = () => {
    var sorteio = Math.floor(Math.random()*100)+1
    if(sorteio > 50){
      setCount(count => count -1)
    }else{
      setCount(count => count +1)
    }
  }


  return (
    <>
      <div>
        <a href="https://www.ifb.edu.br/" target="_blank">
          <img src="https://th.bing.com/th/id/OIP.EZKAAfkXvAjcK4T4TXa0jQHaGW?w=186&h=180&c=7&r=0&o=7&pid=1.7&rm=3" className="logo" alt="Vite logo" />
        </a>
        <a href="https://code.visualstudio.com/" target="_blank">
          <img src="data:image/webp;base64,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" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={sortear}>
          count is {count}
        </button>
        <p>{count}</p>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
