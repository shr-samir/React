import { useState } from 'react'
import './App.css'

// let count = 15

// const increaseCount = () => {
//   count ++
//   console.log(count);
// }

function App() {

  let [count, setCount] = useState(1)

  const increaseCount = () => {
    if (count < 5) {
      setCount(++count)
    }
    console.log('Click'); 
  }

  const decreaseCount = () => {
    if (count > 0)
      setCount(--count)
  }

  return (
    <>
    <h2>Counter in React</h2>
    <h5>Counter Value: {count}</h5>

    <button onClick = {increaseCount}>INCREASE</button>
    <button onClick={decreaseCount}>DECREASE</button>

    </>
  )
}

export default App
