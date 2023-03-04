import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import authReducer from './user.slice'
import yearsReducer from './year.slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    years: yearsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type AppDispatch = typeof store.dispatch
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

store.subscribe(() => {
  const state = store.getState()
  console.log('🚀 ~ file: index.ts:24 ~ store.subscribe ~ state:', state)

  console.log('Years have changed!')
  // Do something here
})
