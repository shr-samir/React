import React, { useState } from "react";

const App = () => {
  // let counter = 10;
  let [count, setCount] = useState(10);

  function handleMinus() {
    if (count <= 0) return setCount(0)
    return setCount(count - 1);
  }

  function handlePlus() {
    return setCount(count + 1);
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
