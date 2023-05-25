import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './(7)_Action'


export default function CounterButtons() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => dispatch(increment())}> +1 </button>
        <button onClick={() => dispatch(decrement())}> -1 </button>
    </div>
  )
}
