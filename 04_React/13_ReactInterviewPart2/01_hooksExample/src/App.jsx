import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UseStateExample from "./Components/useStateExample"
import FocusInput from './Components/UseRef'
import StopWatch from './Components/stopWatch'
// import useVisibility from './hooks/useVisibility'
import Modal from './Components/Modal'
import Carousel from './Components/Carousel'
import CountUseReducer from './Components/useReducer'
import UseReducerExample from './Components/useReducerExample'


// const { isVisible, show, hide, toggle } = useVisibility(false);

function App() {
  return (
    <>
    {/* <CountUseReducer/> */}
    <UseReducerExample />
      {/* <Carousel /> */}
      {/* <UseStateExample/> */}
      {/* <FocusInput/> */}
      {/* <StopWatch /> */}
      {/* <button onClick={toggle}>Toggle Modal</button>
      <button onClick={show}>Show Modal</button>
      <Modal isVisible={isVisible} hide={toggle}></Modal> */}
    </>
  )
}

export default App
