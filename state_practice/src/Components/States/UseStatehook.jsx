import React, { useState } from "react";

export default function UseStatehook() {
  const [count, setCount] = useState(0);

  // data store in key value pair multiple state
  //   const [car, setCar] = useState({
  //     brand:"BMW",
  //     model: "X5",
  //     year: 2020,
  //     color: "black"
  //   });
  //   console.log(car);

  //   const changecolor = () => {
  //     setCar((prev)=>{
  //         return{...prev,color:"blue"}
  //     })
  //     console.log("Color changed to blue");
  //   };

  const increaseCount = () => {
    // setCount(count + 1)
    setCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      {/* <h1>UseState Hook</h1>
      <br />
      <h2>My favourite color is {color}</h2>
      <button onClick={changecolor}>Click me to change the color</button> */}
      {/* ------------------------------------------------------------------- */}
      {/* <h1>My {car.brand}</h1>
      <h2>It is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={changecolor}>Blue</button> */}
      {/* --------------------------------------------------------------------- */}
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Click Me</button>
    </div>
  );
}
