import React, { useEffect, useState } from "react";
import { useMyContext } from "@/contexts/MyContext";

const MyComponent: React.FC = () => {
  const { data, updateData } = useMyContext();
    const [input, setInput] = useState('')

    useEffect(()=>{
        console.log("Data is been send to server",data)
    },[data])
    
  return (
    <div>
      <h3>Data from Context:<b><h2>{data}</h2></b>
      </h3>
      <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new data"
        />
      <button onClick={() => updateData(input)}>Update Data</button>
    </div>
  );
};

export default MyComponent;
