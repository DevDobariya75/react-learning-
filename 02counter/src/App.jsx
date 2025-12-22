import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)

  // let counter = 15
 
  const addvalue = () =>{
      // counter++; 
      if(counter < 20)  
        setCounter(counter + 1) 
      //console.log("clicked" , counter);
  }

  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
        <h1>Chai aur react</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addvalue}
        >Add value</button>
        <br /><br />
        <button onClick={removeValue}>remove value</button>
        <p>footer: {counter}</p>
    </>
  )
}

export default App
