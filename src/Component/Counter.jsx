import React, { useState } from 'react'

 function Counter( props ) 
 {
    const init = props.init || 0
    const value = props.value || 1
    
    const [count, setCount] = useState( init )

    function increment() 
    {
        setCount( PrevCount => PrevCount + value ) 
    }
    
    function decrement() 
    {
      setCount( PrevCount => PrevCount - value )
    }

  return (
    <>
    <button onClick = { decrement }> - {value}</button>
    <span> { count } </span>
    <button onClick = {increment}> + {value} </button>
    </>
  );
}
export default Counter;
