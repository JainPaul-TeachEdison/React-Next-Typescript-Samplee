import { useCallback, useState } from "react"
import ChildCounter from "@/components/ChildCounter";
import Button from "@/components/Button";

function Counter() {

    const [count, setCount] = useState(0)

    const increment = useCallback(function handleIncrement(){
      setCount(count+1);
    },[count]);

    const decrement= useCallback(function handleDecrement(){
      if (count !=0)
      setCount(count-1)
    },[count])


  return (
    <div>
        <h1>Counter</h1>
        <h3>Count:</h3>  <h2>{count}</h2>
        <Button onClick={increment}>Press here to increment (+)</Button><br />
        <Button onClick={decrement}>Press here to decrement (-)</Button>
        <ChildCounter increment={increment} decrement={decrement}/>
    </div>
  )
}

export default Counter
