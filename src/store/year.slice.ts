import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from './index'
import {Year} from '../types'
import {createAsyncThunk} from '@reduxjs/toolkit'
import HttpService from '../Services/HttpService'

export const fetchYears = createAsyncThunk('year/fetchYears', async () => {
  const years = await HttpService.getYears()
  return years
})

// thunk to add year
export const addYearThunk = createAsyncThunk(
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
export const updateYearThunk = createAsyncThunk(
  'years/updateYear',
  async (year: Year, thunkAPI) => {
    try {
      const response = await HttpService.updateYear(year)
      return response
    } catch (err) {
      return thunkAPI.rejectWithValue((err as any).response.data)
    }
  }
)

// thunk to delete year by id
export const deleteYearThunk = createAsyncThunk(
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

type YearState = {
  years: Year[]
  selectedYear: number
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const today = new Date()
const currentYear = today.getFullYear()

const initialState: YearState = {
  years: [],
  selectedYear: currentYear,
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
    setYear: (state: YearState, action: PayloadAction<string>) => {
      const target = state.years.find((y) => '' + y.year === action.payload)
      if (!target?.year) {
        throw new Error('Year passed to setYear is not in years state!!')
      }
      state.selectedYear = target.year
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
        state.years.push(action.payload as unknown as Year)
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

export const {setYears, setYear} = yearSlice.actions

export default yearSlice.reducer
