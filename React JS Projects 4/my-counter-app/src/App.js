import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="card">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button class="button1" onClick={increment}>
        +
      </button>
      <button class="button2" onClick={decrement}>
        -
      </button>
    </div>
  );
}

export default App;
