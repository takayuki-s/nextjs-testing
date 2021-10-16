import React from 'react'
import { useStateContext } from '../context/StateProvider'

const ContextA: React.FC = () => {
  const { toggle, setToggle } = useStateContext()
  return (
    <>
      <button
        className="bg-gray hover:bg-gray-400 px-3 py-2 mb-5 text-white rounded focus:outline-none"
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        change
      </button>
      <p>Context A</p>
      <p className="mb-5 text-indigo-600" data-testid="toggle-1">
        {toggle ? 'true' : 'false'}
      </p>
    </>
  )
}

export default ContextA
