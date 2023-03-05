import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {WinnerProjectType} from '../types'
import ProjectHttpService from '../Services/HttpService'

type WinnerProjectTypeState = {
  winnerProjectTypes: WinnerProjectType[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: WinnerProjectTypeState = {
  winnerProjectTypes: [],
  status: 'idle',
  error: null,
}

export const fetchWinnerProjectTypes = createAsyncThunk(
  'winnerProjectTypes/fetchAll',
  async () => {
    const winnerProjectTypes =
      await ProjectHttpService.getAllWinnerProjectTypes()
    return winnerProjectTypes
  }
)

export const updateWinnerProjectType = createAsyncThunk(
  'winnerProjectTypes/update',
  async (updatedWinnerProjectType: WinnerProjectType) => {
    const winnerProjectType = await ProjectHttpService.updateWinnerProjectType(
      updatedWinnerProjectType
    )
    return winnerProjectType
  }
)

const winnerProjectTypeSlice = createSlice({
  name: 'winnerProjectTypes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchWinnerProjectTypes.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(
      fetchWinnerProjectTypes.fulfilled,
      (state, action: PayloadAction<WinnerProjectType[]>) => {
        state.status = 'succeeded'
        state.winnerProjectTypes = action.payload
      }
    )
    builder.addCase(fetchWinnerProjectTypes.rejected, (state, action) => {
      state.status = 'failed'
      state.error =
        action.error.message ??
        'Something went wrong while fetching winner project types'
    })
    builder.addCase(
      updateWinnerProjectType.fulfilled,
      (state, action: PayloadAction<WinnerProjectType>) => {
        const updatedWinnerProjectType = action.payload
        const existingIndex = state.winnerProjectTypes.findIndex(
          (winnerProjectType) =>
            winnerProjectType.id === updatedWinnerProjectType.id
        )
        if (existingIndex !== -1) {
          state.winnerProjectTypes[existingIndex] = updatedWinnerProjectType
        }
      }
    )
  },
})

export default winnerProjectTypeSlice.reducer
