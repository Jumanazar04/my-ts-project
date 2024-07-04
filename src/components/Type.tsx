import React, { useState } from 'react'

const Type: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = ()=>{
        setCount(count + 1)
    }

    const decrement = ()=>{
        setCount(count - 1)
    }

  return (
    <>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
    </>
  )
}

export default Type