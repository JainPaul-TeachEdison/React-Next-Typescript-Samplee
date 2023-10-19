import React, { useState } from "react";

const OnChangeState: React.FC = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">{text}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded py-2 px-3"
        placeholder="Enter text"
      />
    </div>
  );
};

export default OnChangeState;
