// Importing necessary dependencies
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {InsertMember, Member} from '../types'
import HttpService from '../Services/HttpService'

// Creating the asynchronous thunk functions for fetching members data asynchronously
export const getAllMembers = createAsyncThunk<Member[]>(
  'members/getAllMembers',
  async () => {
    const members = await HttpService.getAllMembers()
    return members
  }
)

export const createMember = createAsyncThunk(
  'members/createMember',
  async (member: InsertMember): Promise<Member> => {
    const createdMember = await HttpService.createMember(member)
    return createdMember
  }
)

export const updateMember = createAsyncThunk<Member, Member>(
  'members/updateMember',
  async (member) => {
    const updatedMember = await HttpService.updateMember(member)
    return updatedMember
  }
)

export const deleteMember = createAsyncThunk<Member, string>(
  'members/deleteMember',
  async (id) => {
    const deletedMember = await HttpService.deleteMember(id)
    return deletedMember
  }
)

// Defining the initial state
export interface MembersState {
  status: 'loading' | 'succeeded' | 'failed'
  error: string | null
  members: Member[]
}

const initialState: MembersState = {
  status: 'loading',
  error: null,
  members: [],
}

// Creating the members slice with reducers and extraReducers parameters
const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMembers.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(getAllMembers.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.error = null
      state.members = action.payload
    })
    builder.addCase(getAllMembers.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message ?? 'Something went wrong'
    })
    builder.addCase(createMember.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(createMember.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.error = null
      state.members.push(action.payload)
    })
    builder.addCase(createMember.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message ?? 'Something went wrong'
    })
    builder.addCase(updateMember.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(updateMember.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.error = null
      const index = state.members.findIndex(
        (member) => member.id === action.payload.id
      )
      if (index !== -1) {
        state.members[index] = action.payload
      }
    })
    builder.addCase(updateMember.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message ?? 'Something went wrong'
    })
    builder.addCase(deleteMember.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(deleteMember.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.error = null
      state.members = state.members.filter(
        (member) => member.id !== action.payload.id
      )
    })
    builder.addCase(deleteMember.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message ?? 'Something went wrong'
    })
  },
})

// Exporting the required values from the slice
export default membersSlice.reducer
export const selectMembers = (state: {members: MembersState}) =>
  state.members.members
export const selectMembersStatus = (state: {members: MembersState}) =>
  state.members.status
export const selectedMemberError = (state: {members: MembersState}) =>
  state.members.error
