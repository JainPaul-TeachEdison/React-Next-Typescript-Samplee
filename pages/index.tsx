import React from 'react'
import Link from 'next/link'

const Home:React.FC = () => {


  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Home page</h1>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="w-1/2 pr-4">
              <Link href="/funcomponent">
               <b> Functional Component </b>
              </Link>
            </td>
            <td> : </td>
            <td className="w-1/2 pl-4">
              <p> This is an example for functional component.</p>
            </td>
          </tr>
          <tr>
            <td className="w-1/2 pr-4">
              <Link href="/counter">
               <b> Counter </b>
              </Link>
            </td>
            <td> : </td>
            <td className="w-1/2 pl-4">
              <p> This is an example for state and useCallback hook.</p>
            </td>
          </tr>
          <tr>
            <td className="w-1/2 pr-4">
              <Link href="/homepage">
               <b> Home</b>
              </Link>
            </td>
            <td> : </td>
            <td className="w-1/2 pl-4">
              <p> This is an example for Composition.</p>
            </td>
          </tr>
          <tr>
            <td className="w-1/2 pr-4">
              <Link href="/onChangeState">
               <b> OnChange State</b>
              </Link>
            </td>
            <td> : </td>
            <td className="w-1/2 pl-4">
              <p> This is an example for state changing using onChange event handler and useState hook.</p>
            </td>
          </tr>
          <tr>
            <td className="w-1/2 pr-4">
              <Link href="/propsdrill">
               <b> Props drill</b>
              </Link>
            </td>
            <td> : </td>
            <td className="w-1/2 pl-4">
              <p> This is an example for props drilling.</p>
            </td>
          </tr>
          <tr>
            <td className="w-1/2 pr-4">
              <Link href="/contex">
               <b> React Context</b>
              </Link>
            </td>
            <td> : </td>
            <td className="w-1/2 pl-4">
              <p> This is an example for state management throught React Context.Used useState,useContext,useEffect and custom hooks</p>
            </td>
          </tr>
          <tr>
            <td className="w-1/2 pr-4">
              <Link href="/factorial">
               <b>useMemo</b>
              </Link>
            </td>
            <td> : </td>
            <td className="w-1/2 pl-4">
              <p> This is an example for useMemo where i have used useMemo and useState hook </p>
            </td>
          </tr>
          <tr>
            <td className="w-1/2 pr-4">
              <Link href="/factorial">
               <b>HOC</b>
              </Link>
            </td>
            <td> : </td>
            <td className="w-1/2 pl-4">
              <p> This is an example for HOC where i have used HOC concept and some hooks like useState,useEffect</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home
