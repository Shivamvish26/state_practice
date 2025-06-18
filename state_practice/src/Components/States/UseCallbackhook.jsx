import React, { useCallback, useState } from "react";
import Header from "./Header/Header";

export default function UseCallbackhook() {
  const [count, setCount] = useState(0);

  const newFunction = useCallback(() =>{

  },[])

  return (
    <div>
        {/* Header Mounted */}
        <Header newFunction={newFunction}/> 
      <h1>Use Callback Hook</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Me</button>
    </div>
  );
}
