import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from './index'
import {Year} from '../types'
import {fetchYears} from './year.thunk'

type YearState = {
  years: Year[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: YearState = {
  years: [],
  loading: 'idle',
}

const yearSlice = createSlice({
  name: 'year',
  initialState,
  reducers: {
    addYear: (state: YearState, action: PayloadAction<Year>) => {
      state.years.push(action.payload)
    },
    updateYear: (state: YearState, action: PayloadAction<Year>) => {
      const index = state.years.findIndex((y) => y.id === action.payload.id)
      if (index !== -1) {
        state.years[index] = action.payload
      }
    },
    deleteYear: (state: YearState, action: PayloadAction<string>) => {
      state.years = state.years.filter((y) => y.id !== action.payload)
    },
    setYears: (state: YearState, action: PayloadAction<Year[]>) => {
      state.years = action.payload
      console.log('🚀 ~ file: year.slice.ts:31 ~ state.years:', action.payload)
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchYears.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchYears.fulfilled, (state, action) => {
      state.years = action.payload
      state.loading = 'succeeded'
    })
    builder.addCase(fetchYears.rejected, (state) => {
      state.loading = 'failed'
    })
  },
})

export const {addYear, updateYear, deleteYear, setYears} = yearSlice.actions

export const selectYears = (state: RootState) => state.years.years

export default yearSlice.reducer
