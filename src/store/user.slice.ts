import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {login, logout} from './thunks/user.thunk'
import {Role} from '@/types'

type UserState = {
  isLoggedIn: boolean
  username: string
  role: Role
  kickUser: boolean
}

const initialState: UserState = {
  isLoggedIn: false,
  username: '',
  role: 'User',
  kickUser: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logFromStorage: (
      state: UserState,
      action: PayloadAction<{role: Role; username: string}>
    ) => {
      state.isLoggedIn = true
      state.kickUser = false
      state.role = action.payload.role
      state.username = action.payload.username
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true
      if (!action.payload) throw new Error('Invalid payload at login thunk')
      const {username, role} = action.payload
      if (!username || !role) throw new Error('Invalid payload at login thunk')
      state.username = action.payload.username
      state.role = action.payload.role
    })
    builder.addCase(logout.fulfilled, (state) => {
      state = initialState
    })
  },
})
export const {logFromStorage} = userSlice.actions

export default userSlice.reducer
