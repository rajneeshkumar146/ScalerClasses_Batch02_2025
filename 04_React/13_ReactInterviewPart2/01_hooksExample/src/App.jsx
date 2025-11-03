import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import UseStateExample from "./Components/useStateExample"
import FocusInput from './Components/UseRef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UseStateExample/> */}
    <FocusInput/>
    </>
  )
}

export default App
