import React from 'react'
import Child from './Child';

interface ParentProps {
    message:string;
}

const Parent: React.FC<ParentProps> = ({message}) => {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child message={message}/>
    </div>
  )
}

export default Parent
