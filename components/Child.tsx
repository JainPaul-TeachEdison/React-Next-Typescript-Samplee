import React from 'react'

interface ChildProps{
    message:string;
}

const Child:React.FC<ChildProps> = ({message}) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>{message}</p>
    </div>
  )
}

export default Child
