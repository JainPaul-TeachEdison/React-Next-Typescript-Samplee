import React from "react";

const HelloWorld: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Hello,{name}!</h1>
    </div>
  );
};

export default HelloWorld;
