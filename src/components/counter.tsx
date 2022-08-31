import React, { useState } from "react"
import { setDecrement, setIncrement, setIncrementByAmount } from "../redux/counterSlice"
import { useAppDispatch } from "../redux/hooks"

const Counter = () => {
  const dispatch = useAppDispatch()

  const [inputValue, setInputValue] = useState(0)

  const handleDecrement = () => {
    dispatch(setDecrement())
  }

  const handleIncrement = () => {
    dispatch(setIncrement())
  }

  const handleChangeByAmount = () => {
    dispatch(setIncrementByAmount({ counter: inputValue }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value))
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <div>
        <input onChange={handleChange} value={inputValue} />
        <button onClick={handleChangeByAmount}>increment</button>
      </div>
    </div>
  )
}

export default Counter