import React, { useState } from "react";

const App = () => {
  // let counter = 10;
  const [count, setCount] = useState(10);

  function handleMinus() {
    if (count <= 0) return setCount(0)
    setCount(count - 1);
  }

  function handlePlus() {

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // What will bee the output? 11 / 12 / 13 / 14
    // So setCount (prevCount => prevCount + 1);
    // setCount (prevCount => prevCount + 1);
    // setCount (prevCount => prevCount + 1);
    // setCount (prevCount => prevCount + 1);
    // setCount (prevCount => prevCount + 1);
    // kinaki useState() hook ko dispatcher func ma hidden callback func hunxa tesma hamle previous State ko value tanera tesma increment garnxa milxa. So, ANS ----> 14

    setCount(count + 1);
  }

  return (
    <>
      <main className="app">
        <h1>Counter</h1>
        <div className="app__controls">
          <button onClick={handleMinus}>-</button>
          <h2>{count}</h2>
          <button onClick={handlePlus}>+</button>
        </div>
      </main>
    </>
  );
};

export default App;
