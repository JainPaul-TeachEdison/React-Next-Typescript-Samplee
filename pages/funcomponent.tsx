import React from 'react'
import HelloWorld from '@/components/HelloWorld'


const FunctionalComponent:React.FC = () => {
  return (
    <div>
      <h1>Functional Component example</h1>
      <HelloWorld name="Jain"/>
      <HelloWorld name="Paul"/>
    </div>
  )
}

export default FunctionalComponent