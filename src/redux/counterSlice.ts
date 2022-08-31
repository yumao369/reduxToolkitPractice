import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type CounterState = {
  counter: number
}

export const defaultState: CounterState = {
  counter: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: defaultState,
  reducers: {
    setIncrement: (state) => {
      return { ...state, counter: state.counter + 1 }
    },
    setDecrement: (state) => {
      return { ...state, counter: state.counter - 1 }
    },
    setIncrementByAmount: (state, action: PayloadAction<{ counter: number }>) => {
      return { ...state, counter: state.counter + action.payload.counter }
    },
    setDecrementByAmount: (state, action: PayloadAction<{ counter: number }>) => {
      return { ...state, counter: state.counter - action.payload.counter }
    }
  }
})

export const { setIncrement, setDecrement, setIncrementByAmount, setDecrementByAmount } = counterSlice.actions

export const selectCounter = (state: RootState) => state.counterReducer.counter

export default counterSlice.reducer