import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        if (count!==0) 
            setCount(count-1);
    };


  return (
    <div>
        <h1>Counter</h1>
        <p>Count: <h2>{count}</h2> </p>
        <button onClick={increment}>Press here to increment (+)</button><br />
        <button onClick={decrement}>Press here to decrement (-)</button>
    </div>
  )
}

export default Counter
