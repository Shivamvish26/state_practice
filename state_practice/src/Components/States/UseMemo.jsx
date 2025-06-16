import React, { useState, useMemo } from "react";

export default function UseMemohook() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubenumber() {
    console.log("Calculation Done");
    return Math.pow(number, 3);
  }

//   const result = cubenumber(number);
  const result = useMemo(()=>{
    return cubenumber(number);
  },[number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        />
        <h1>Cube of the number is: {result}</h1>
        <button onClick={()=> {setCounter(counter+1)}}>Counter ++</button>
        <h1>Counter:{counter}</h1>
    </div>
  );
}
