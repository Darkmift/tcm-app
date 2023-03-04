import {createAsyncThunk} from '@reduxjs/toolkit'
import HttpService from '../../Services/HttpService'
import {Role} from '@/types'

export const login = createAsyncThunk(
  'auth/login',
  async ({
    username,
    password,
  }: {
    username: string
    password: string
    role: Role
  }) => {
    const response = await HttpService.login({username, password})
    return response
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await HttpService.logout()
  return response
})
