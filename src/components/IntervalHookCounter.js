import React, { useState, useEffect } from 'react'

const IntervalHookCounter = () => {

  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    // Component did mount
    const interval = setInterval(tick, 1000)

    // Component will unmount
    return () => {
      clearInterval(interval)
    }
  }, [])

  return ( 
    <div>
      <h1>Count {count}</h1>
    </div>
   );
}
 
export default IntervalHookCounter;