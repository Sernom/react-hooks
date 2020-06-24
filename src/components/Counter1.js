import React from 'react'
import useCounter from '../Hooks/useCounter'

const Counter1 = () => {
  const [count, increment, decrement, reset] = useCounter(2, 20)

  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter1
