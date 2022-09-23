import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      <button onClick={(e) => handleClick(1)}>Button 1</button>
      <button onClick={(e) => handleClick(2)}>Button 2</button>
      <button onClick={(e) => handleClick(3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;
