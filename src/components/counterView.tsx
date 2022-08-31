import { selectCounter } from "../redux/counterSlice"
import { useAppSelector } from "../redux/hooks"

const CounterView = () => {
  const counter = useAppSelector(selectCounter)
  return (
    <div>{counter}</div>
  )
}

export default CounterView