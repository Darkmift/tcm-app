import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {Internship} from '../types'
import HttpService from '../Services/HttpService'

export const getAllInternships = createAsyncThunk<Internship[]>(
  'internships/getAllInternships',
  async () => {
    const internships = await HttpService.getAllInternships()
    return internships
  }
)

export const createInternship = createAsyncThunk<Internship, Internship>(
  'internships/createInternship',
  async (internship) => {
    const createdInternship = await HttpService.createInternship(internship)
    return createdInternship
  }
)

export const updateInternship = createAsyncThunk<Internship, Internship>(
  'internships/updateInternship',
  async (internship) => {
    const updatedInternship = await HttpService.updateInternship(internship)
    return updatedInternship
  }
)

export const deleteInternship = createAsyncThunk<Internship, string>(
  'internships/deleteInternship',
  async (id) => {
    const deletedInternship = await HttpService.deleteInternship(id)
    return deletedInternship
  }
)

export interface InternshipsState {
  status: 'loading' | 'succeeded' | 'failed'
  error: string | null
  internships: Internship[]
}

const initialState: InternshipsState = {
  status: 'loading',
  error: null,
  internships: [],
}

const internshipsSlice = createSlice({
  name: 'internships',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllInternships.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(getAllInternships.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.error = null
      state.internships = action.payload
    })
    builder.addCase(getAllInternships.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message ?? 'Something went wrong'
    })
    builder.addCase(createInternship.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(createInternship.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.error = null
      state.internships.push(action.payload)
    })
    builder.addCase(createInternship.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message ?? 'Something went wrong'
    })
    builder.addCase(updateInternship.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(updateInternship.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.error = null
      const index = state.internships.findIndex(
        (internship) => internship.id === action.payload.id
      )
      if (index !== -1) {
        state.internships[index] = action.payload
      }
    })
    builder.addCase(updateInternship.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message ?? 'Something went wrong'
    })
    builder.addCase(deleteInternship.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(deleteInternship.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.error = null
      state.internships = state.internships.filter(
        (internship) => internship.id !== action.payload.id
      )
    })
    builder.addCase(deleteInternship.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message ?? 'Something went wrong'
    })
  },
})

export default internshipsSlice.reducer
export const selectInternships = (state: {internships: InternshipsState}) =>
  state.internships.internships
export const selectInternshipsStatus = (state: {
  internships: InternshipsState
}) => state.internships.status
export const selectInternshipsError = (state: {
  internships: InternshipsState
}) => state.internships.error
