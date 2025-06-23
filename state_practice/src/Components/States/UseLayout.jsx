import React, { useEffect, useLayoutEffect } from "react";

function UseLayout() {
  useEffect(() => {
    console.log("UseEffect is running");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect is running");
  }, []);

  return (
    <div>
      <h1>UseLayout</h1>
      <p>
        The useLayoutEffect hook is similar to useEffect, but it runs
        synchronously after all DOM mutations. It is useful for reading layout
        from the DOM and synchronously re-rendering.
      </p>
      <p>
        This hook is often used for measuring the DOM or performing operations
        that require the DOM to be in a consistent state before the browser
        paints.
      </p>
      <ul>
        {Array(100)
          .fill("")
          .map((item, index) => (
            <li key={index}>{Math.pow(Math.random(), 10)}</li>
          ))}
      </ul>
    </div>
  );
}
export default UseLayout;
