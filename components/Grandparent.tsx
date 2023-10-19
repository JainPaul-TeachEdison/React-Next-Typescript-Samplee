import React from "react";
import Parent from "./Parent";
const Grandparent: React.FC = () => {
  const message = "Hello from Grandparent!";
  return <div>
    <h1>Grandparent Component</h1>
    <Parent message={message}/>
  </div>;
};

export default Grandparent;
