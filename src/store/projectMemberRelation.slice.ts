import {ProjectMemberRelation} from '@/types'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import HttpService from '../Services/HttpService'
import {RootState} from '.'

interface ProjectMemberRelationState {
  projectMemberRelations: ProjectMemberRelation[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
}

const initialState: ProjectMemberRelationState = {
  projectMemberRelations: [],
  status: 'idle',
}

export const createProjectMemberRelation = createAsyncThunk<
  ProjectMemberRelation,
  Omit<ProjectMemberRelation, 'id' | 'created' | 'updated'>
>(
  'projectMemberRelation/create',
  async (projectMemberRelation, {rejectWithValue}) => {
    try {
      return await HttpService.createProjectMemberRelation(
        projectMemberRelation
      )
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

export const deleteProjectMemberRelation = createAsyncThunk<
  ProjectMemberRelation,
  string
>('projectMemberRelation/delete', async (id, {rejectWithValue}) => {
  try {
    return await HttpService.deleteProjectMemberRelation(id)
  } catch (error: any) {
    return rejectWithValue(error.message)
  }
})

const projectMemberRelationSlice = createSlice({
  name: 'projectMemberRelation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProjectMemberRelation.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createProjectMemberRelation.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.projectMemberRelations.push(action.payload)
      })
      .addCase(createProjectMemberRelation.rejected, (state) => {
        state.status = 'failed'
      })
      .addCase(deleteProjectMemberRelation.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteProjectMemberRelation.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const index = state.projectMemberRelations.findIndex(
          (r) => r.id === action.payload.id
        )
        if (index !== -1) {
          state.projectMemberRelations.splice(index, 1)
        }
      })
      .addCase(deleteProjectMemberRelation.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export default projectMemberRelationSlice.reducer

export const selectAllProjectMemberRelations = (state: RootState) =>
  state.projectMemberRelation.projectMemberRelations
