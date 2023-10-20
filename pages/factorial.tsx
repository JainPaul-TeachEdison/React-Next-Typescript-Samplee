import React, { useMemo, useState } from 'react'

function Factorial() {

    const [number, setNumber] = useState(5);

    const factorial = useMemo(()=>calculateFactorial(number),[number]);

    function calculateFactorial(num:number):number{
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
        <p>
          Factorial of {number} is{' '}
          <strong className="text-blue-600 text-2xl">{factorial}</strong>
        </p>
      </div>
  )
}

export default Factorial