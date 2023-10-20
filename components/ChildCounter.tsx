import React from "react";

type ChildCounterProps = {
  increment: () => void;
  decrement: () => void;
};

function ChildCounter({ increment, decrement }: ChildCounterProps) {
  return (
    <div>
      <button onClick={increment}>Increment from Child</button>
      <button onClick={decrement}>Decrement from Child</button>
    </div>
  );
}

export default ChildCounter;
