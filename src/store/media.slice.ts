import {NewMedia} from './../types/index'
import {Media} from '@/types'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {createAsyncThunk} from '@reduxjs/toolkit'
import HttpService from '../Services/HttpService'

export const fetchMedia = createAsyncThunk('media/fetchMedia', async () => {
  const Media = await HttpService.getMedia()
  return Media
})

// thunk to add year
export const addMediaThunk = createAsyncThunk(
  'media/add',
  async (media: NewMedia, thunkAPI) => {
    try {
      const response = await HttpService.createMedia(media)
      return response
    } catch (err) {
      return thunkAPI.rejectWithValue((err as any).response.data)
    }
  }
)

// thunk to update Media by id
export const updateMediaThunk = createAsyncThunk(
  'Media/update',
  async (media: Media, thunkAPI) => {
    try {
      const response = await HttpService.updateMedia(media)
      return response
    } catch (err) {
      return thunkAPI.rejectWithValue((err as any).response.data)
    }
  }
)

// thunk to delete Media by id
export const deleteMediaThunk = createAsyncThunk(
  'Media/delete',
  async (id: string, thunkAPI) => {
    try {
      await HttpService.deleteMedia(id)
      return id // return deleted record id
    } catch (err) {
      return thunkAPI.rejectWithValue((err as any).response.data)
    }
  }
)

type MediaState = {
  media: Media[]
  selectedYear: number
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const today = new Date()
const currentYear = today.getFullYear()

const initialState: MediaState = {
  media: [],
  selectedYear: currentYear,
  loading: 'idle',
}

const Medialice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setMedia: (state: MediaState, action: PayloadAction<Media[]>) => {
      state.media = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedia.fulfilled, (state, action) => {
        state.media = action.payload
        state.loading = 'succeeded'
      })
      .addCase(fetchMedia.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(fetchMedia.rejected, (state) => {
        state.loading = 'failed'
      })

      .addCase(addMediaThunk.fulfilled, (state, action) => {
        state.media.push(action.payload as unknown as Media)
      })
      .addCase(addMediaThunk.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(addMediaThunk.rejected, (state) => {
        state.loading = 'failed'
      })

      .addCase(updateMediaThunk.fulfilled, (state, action) => {
        const {id} = action.payload
        const index = state.media.findIndex((y) => y.id === id)
        if (index !== -1) {
          state.media[index] = action.payload
        }
      })
      .addCase(updateMediaThunk.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(updateMediaThunk.rejected, (state) => {
        state.loading = 'failed'
      })

      .addCase(deleteMediaThunk.fulfilled, (state, action) => {
        const id = action.payload
        state.media = state.media.filter((y) => y.id !== id)
      })
      .addCase(deleteMediaThunk.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(deleteMediaThunk.rejected, (state) => {
        state.loading = 'failed'
      })
  },
})

export const {setMedia} = Medialice.actions

export default Medialice.reducer
