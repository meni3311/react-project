import React from 'react'
import useCounter from './useCounter'

function Counter() {
    const [count,addOne, subOne, reset] = useCounter(5)
  return (
    <div>counter: {count}</div>
  )
}

export default Counter