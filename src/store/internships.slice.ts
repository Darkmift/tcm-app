import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from './index'
import {Internship} from '../types'

type InternshipState = {
  internships: Internship[]
}

const initialState: InternshipState = {
  internships: [],
}

const internshipSlice = createSlice({
  name: 'internships',
  initialState,
  reducers: {
    addInternship: (
      state: InternshipState,
      action: PayloadAction<Internship>
    ) => {
      state.internships.push(action.payload)
    },
    updateInternship: (
      state: InternshipState,
      action: PayloadAction<Internship>
    ) => {
      const index = state.internships.findIndex(
        (i) => i.id === action.payload.id
      )
      if (index !== -1) {
        state.internships[index] = action.payload
      }
    },
    deleteInternship: (
      state: InternshipState,
      action: PayloadAction<string>
    ) => {
      state.internships = state.internships.filter(
        (i) => i.id !== action.payload
      )
    },
    setInternships: (
      state: InternshipState,
      action: PayloadAction<Internship[]>
    ) => {
      state.internships = action.payload
    },
  },
})

export const {
  addInternship,
  updateInternship,
  deleteInternship,
  setInternships,
} = internshipSlice.actions

export const selectInternships = (state: RootState) =>
  state.internships.internships

export default internshipSlice.reducer