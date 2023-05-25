import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterDisplay() {
    const count = useSelector((state) => state.count);
  return (
    <div>count : {count}</div>
  )
}
