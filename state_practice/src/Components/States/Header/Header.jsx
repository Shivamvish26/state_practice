import React from "react";

function Header() {
  console.log("Header component rendered");

  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

export default React.memo(Header); 
// Memoizing the Header component to prevent unnecessary re-renders
// React.memo is used to optimize performance by preventing re-renders if the props haven't changed.
