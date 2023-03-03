import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {Role} from '../types'

type UserState = {
  isLoggedIn: boolean
  role: Role
  kickUser: boolean
  name: string
}

const initialState: UserState = {
  isLoggedIn: false,
  role: 'User',
  kickUser: false,
  name: 'Guest',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (
      state: UserState,
      action: PayloadAction<{role: Role; name: string}>
    ) => {
      state.isLoggedIn = true
      state.kickUser = false
      state.role = action.payload.role
      state.name = action.payload.name
    },
    logout: (state: UserState) => {
      state = structuredClone(initialState)
    },
  },
})

export type {Role}
export const {login, logout} = authSlice.actions
export default authSlice.reducer
