import {createAsyncThunk} from '@reduxjs/toolkit'
import HttpService from '../../Services/HttpService'

export const fetchYears = createAsyncThunk('year/fetchYears', async () => {
  const years = await HttpService.getYears()
  return years
})
