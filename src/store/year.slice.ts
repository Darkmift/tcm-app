import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from './index'
import {Year} from '../types'
import {
  fetchYears,
  addYear as addYearThunk,
  updateYear as updateYearThunk,
  deleteYear as deleteYearThunk,
} from './thunks/year.thunk'

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
    setYears: (state: YearState, action: PayloadAction<Year[]>) => {
      state.years = action.payload
      console.log(
        '🚀 ~ file: year.slice.ts ~ setYears ~ state.years:',
        state.years
      )
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    builder
      .addCase(fetchYears.fulfilled, (state, action) => {
        state.years = action.payload
      })
      .addCase(fetchYears.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(fetchYears.rejected, (state) => {
        state.loading = 'failed'
      })

      .addCase(addYearThunk.fulfilled, (state, action) => {
        state.years.push(action.payload)
      })
      .addCase(addYearThunk.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(addYearThunk.rejected, (state) => {
        state.loading = 'failed'
      })

      .addCase(updateYearThunk.fulfilled, (state, action) => {
        const {id} = action.payload
        const index = state.years.findIndex((y) => y.id === id)
        if (index !== -1) {
          state.years[index] = action.payload
        }
      })
      .addCase(updateYearThunk.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(updateYearThunk.rejected, (state) => {
        state.loading = 'failed'
      })

      .addCase(deleteYearThunk.fulfilled, (state, action) => {
        const id = action.payload
        state.years = state.years.filter((y) => y.id !== id)
      })
      .addCase(deleteYearThunk.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(deleteYearThunk.rejected, (state) => {
        state.loading = 'failed'
      })
  },
})

export const {setYears} = yearSlice.actions

export const selectYears = (state: RootState) => state.years.years

export default yearSlice.reducer
