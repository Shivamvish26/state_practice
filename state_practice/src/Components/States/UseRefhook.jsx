import React, { useEffect, useRef, useState } from "react";

export default function UseRefhook() {
//   const [value, setValue] = useState(0);
  // counter using useRef
//   const count = useRef(0);
  //  console.log(count)

//   useEffect(()=>{
//     count.current = count.current + 1
//   })

// Accepting the dom element using useRef
const inputElmt = useRef()

const btnclick = ()=>{
    console.log(inputElmt.current.value);
    inputElmt.current.style.background = "red";
}

  return (
    <div>
      {/* <h1>UseRef Hook</h1>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h2>{value}</h2>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <h3>Reander Count: {count.current}</h3> */}
      <input
        type="text"
        placeholder="Enter your name" ref={inputElmt}/>
        <button onClick={btnclick}>Click Here</button>
    </div>
  );
}
