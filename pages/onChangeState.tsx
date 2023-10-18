import React, { useState } from "react";

const OnChangeState:React.FC = () => {
  const [text, setText] = useState("");
  return (
    
    <div>
        <h1>{text}</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};

export default OnChangeState;
