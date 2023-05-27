import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {Role} from '@/types'
import {createAsyncThunk} from '@reduxjs/toolkit'
import HttpService from '../Services/HttpService'

export const login = createAsyncThunk(
  'auth/login',
  async (payload: {username: string; password: string}) => {
    const {username, password} = payload
    const data = await HttpService.login({username, password})
    return data
  }
)

export const loginStudent = createAsyncThunk(
  'auth/login',
  async (payload: {username: string; password: string}) => {
    const {username, password} = payload
    const data = await HttpService.loginStudent({username, password})
    return data
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await HttpService.logout()
  return response
})

type UserState = {
  isLoggedIn: boolean | null
  username: string
  id: string
  role: Role
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  kickUser: boolean
  authDone: boolean
}

const initialState: UserState = {
  isLoggedIn: null,
  id: '',
  username: '',
  role: 'User',
  status: 'idle',
  kickUser: false,
  authDone: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logFromStorage: (
      state: UserState,
      action: PayloadAction<{role: Role; username: string}>
    ) => {
      const {role, username} = action.payload
      const isValidRole = ['User', 'Admin'].includes(role)
      const isValidUser = isValidRole && !!username?.length
      state.authDone = true
      state.isLoggedIn = isValidUser
      state.kickUser = isValidUser ? false : true
      state.role = isValidRole ? role : 'User'
      state.username = username
      state.status = isValidRole && isValidUser ? 'succeeded' : 'idle'
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true
      state.authDone = true
      state.kickUser = false
      if (!action.payload) throw new Error('Invalid payload at login thunk')
      const {username, role} = action.payload
      if (!username || !role) throw new Error('Invalid payload at login thunk')
      state.username = action.payload.username
      state.role = action.payload.role
      state.id = action.payload.id
      state.status = 'succeeded'
    })
    builder.addCase(login.pending, (state, action) => {
      state.status = 'loading'
    })
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'idle'
    })
    builder.addCase(logout.fulfilled, (state) => {
      return structuredClone(initialState)
    })
  },
})
export const {logFromStorage} = userSlice.actions

export default userSlice.reducer
