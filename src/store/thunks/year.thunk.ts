import {createAsyncThunk} from '@reduxjs/toolkit'
import HttpService from '../../Services/HttpService'
import {Year} from '@/types'

export const fetchYears = createAsyncThunk('year/fetchYears', async () => {
  const years = await HttpService.getYears()
  return years
})

// thunk to add year
export const addYear = createAsyncThunk(
  'years/addYear',
  async (year: Year, thunkAPI) => {
    try {
      const response = await HttpService.createYear(year)
      return response
    } catch (err) {
      return thunkAPI.rejectWithValue((err as any).response.data)
    }
  }
)

// thunk to update year by id
export const updateYear = createAsyncThunk(
  'years/updateYear',
  async ({id, year}: {id: string; year: Year}, thunkAPI) => {
    try {
      const response = await HttpService.updateYear(id, year)
      return response
    } catch (err) {
      return thunkAPI.rejectWithValue((err as any).response.data)
    }
  }
)

// thunk to delete year by id
export const deleteYear = createAsyncThunk(
  'years/deleteYear',
  async (id: string, thunkAPI) => {
    try {
      await HttpService.deleteYear(id)
      return id // return deleted record id
    } catch (err) {
      return thunkAPI.rejectWithValue((err as any).response.data)
    }
  }
)
