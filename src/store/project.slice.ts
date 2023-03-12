// project.slice.ts

import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Project} from '../types'
import ProjectHttpService from '../Services/HttpService/ProjectHttpService'
import {RootState} from '.'
import HttpService from '@/Services/HttpService'

type ProjectsState = {
  projects: Project[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: ProjectsState = {
  projects: [],
  status: 'idle',
  error: null,
}

export const fetchProjects = createAsyncThunk(
  'projects/fetchAll',
  async (selectedYear: number) => {
    const projects = await ProjectHttpService.getAllProjects(selectedYear)
    return projects
  }
)

export const createProject = createAsyncThunk(
  'projects/create',
  async (newProject: Project) => {
    const project = await ProjectHttpService.createProject(newProject)
    return project
  }
)

export const updateProject = createAsyncThunk(
  'projects/update',
  async (updatedProject: Project) => {
    const project = await ProjectHttpService.updateProject(updatedProject)
    return project
  }
)
export const updateStudentProject = createAsyncThunk(
  'projects/updateStudent',
  async (updatedProject: Project) => {
    const project = await HttpService.updateStudentProject(updatedProject)
    return project
  }
)

export const deleteProject = createAsyncThunk(
  'projects/delete',
  async (id: string) => {
    const project = await ProjectHttpService.deleteProject(id)
    return project
  }
)

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProjects.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(
      fetchProjects.fulfilled,
      (state, action: PayloadAction<Project[]>) => {
        state.status = 'succeeded'
        state.projects = action.payload
      }
    )
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.status = 'failed'
      state.error =
        action.error.message ?? 'Something went wrong while fetching projects'
    })
    builder.addCase(
      createProject.fulfilled,
      (state, action: PayloadAction<Project>) => {
        state.projects.push(action.payload)
      }
    )
    builder.addCase(
      updateProject.fulfilled,
      (state, action: PayloadAction<Project>) => {
        const updatedProject = action.payload
        const existingIndex = state.projects.findIndex(
          (project) => project.id === updatedProject.id
        )
        if (existingIndex !== -1) {
          state.projects[existingIndex] = updatedProject
        }
      }
    )
    builder.addCase(
      updateStudentProject.fulfilled,
      (state, action: PayloadAction<Project>) => {
        const updatedProject = action.payload
        const existingIndex = state.projects.findIndex(
          (project) => project.id === updatedProject.id
        )
        if (existingIndex !== -1) {
          state.projects[existingIndex] = updatedProject
        }
      }
    )
    builder.addCase(
      deleteProject.fulfilled,
      (state, action: PayloadAction<Project>) => {
        const deletedProject = action.payload
        state.projects = state.projects.filter(
          (project) => project.id !== deletedProject.id
        )
      }
    )
  },
})

export const selectProjectById = (id: string) => (state: RootState) =>
  state.projects.projects.find((p) => p.id === id)

export default projectSlice.reducer
