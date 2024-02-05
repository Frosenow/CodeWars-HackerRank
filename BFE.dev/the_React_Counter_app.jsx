import React, { useState } from "react";

export function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        data-testid="decrement-button"
        disabled={counter < 1}
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <button
        data-testid="increment-button"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <p>clicked: {counter}</p>
    </div>
  );
}
