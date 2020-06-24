import React, { useState, useEffect } from 'react'

const HookMouse = () => {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse Event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    // Component did mount
    console.log('useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    // Component will unmount
    return () => {
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return ( 
    <div>
      Hooks X - {x} Y- {y}
    </div>
   );
}
 
export default HookMouse;