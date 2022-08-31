import { combineReducers, configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"

const reducers = combineReducers({ counterReducer })

const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>

export type AppDisPatch = typeof store.dispatch

export default store