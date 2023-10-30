import React, { useMemo, useState } from 'react'

function Factorial() {

    const [number, setNumber] = useState(2);
    const [username,setUserName]=useState('');

    const factorial = useMemo(()=>calculateFactorial(number),[number]);
    // const factorial=calculateFactorial(number)

    function calculateFactorial(num:number):number{
      console.log("function used")
        if (num === 0) return 1;
        return num * calculateFactorial(num-1)
    }

  return (
    <div className="max-w-md p-6 rounded-lg bg-white shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Factorial Calculator</h1>
        <p className="text-gray-600 mb-2">Calculate the factorial of a number:</p>
        <input
          type="number"

          onChange={(e) => setNumber(Number(e.target.value))}
          className="border p-2 mb-4 rounded w-full"
        />
        <input type="text"
        name='username'
        value={username}
        onChange={(e)=>setUserName(e.target.value)} />
        <p>
          Factorial of {number} is{' '}
          <strong className="text-blue-600 text-2xl">{factorial}</strong>
        </p>
        <p>Username is {username}</p>
      </div>
  )
}

export default Factorial