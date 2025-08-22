import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [idade, setidade] = useState(0)
  const [mensagem, setmensagem] = useState('')

  useEffect(() => {
    if(idade >= 0 && idade <= 15){
      setmensagem("0 - 15")
    }
    else if(idade >= 16 && idade <= 30){
      setmensagem("16 - 30")
    }
    else if(idade >= 31 && idade <= 45){
      setmensagem("31 - 45")
    }
    else if(idade >= 46 && idade <= 60){
      setmensagem("46 - 60")
    }
    else if(idade >= 61 && idade <= 75){
      setmensagem("61 - 75")
    }
    else if(idade >= 76 && idade <= 125){
      setmensagem("76 - 125")
    }
    else{
      setmensagem("Erro")
    }
  }, [idade])

  
  return (
    <div>
      <h1>faixa etaria</h1>
      <p>idade: <input type="number" value={idade} onChange={e => setidade(e.target.value)} /></p>
      <p>{mensagem}</p>
    </div>
  )
}

export default App
