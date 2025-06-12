import React, { useEffect, useState } from "react";

export default function UseEffecthook() {

    const [count, setCount]= useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count => count + 1)
        },2000)
    },[count])
    // without any dependency array, the effect runs after every render.
    // with an empty dependency array, the effect runs only once after the initial render.
    // with a dependency array containing specific variables, the effect runs only when those variables change.
    // we can also multiply dependencies, so the effect runs when any of them change.
  return (
    <div>
      <h1>UseEffect Hook Example</h1>
      <br />
      <h2>I have rendered {count} times</h2>
    </div>
  );
}
