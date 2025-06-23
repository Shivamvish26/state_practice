import React from "react";
import useCounter from "./UseCounter";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(2);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Custom Counter Hook</h1>
      <h2>{count}</h2>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
  );
};

export default Counter;
