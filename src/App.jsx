import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Repositories from './Repositories'
import CodeAntLogin from './CodeAntLogin'
import { Route, Routes } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<CodeAntLogin />} />
      <Route path="/Repositories" element={<Repositories />} />
    </Routes>
  )
}

export default App
