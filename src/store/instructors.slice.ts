import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Instructor } from '../types';
import InstructorHttpService from '../Services/HttpService';

export const fetchAllInstructors = createAsyncThunk(
  'instructors/fetchAllInstructors',
  async () => {
    const instructors = await InstructorHttpService.getAllInstructors();
    return instructors;
  }
);

export const addNewInstructor = createAsyncThunk(
  'instructors/addNewInstructor',
  async (newInstructor: Instructor) => {
    const instructor = await InstructorHttpService.createInstructor(newInstructor);
    return instructor;
  }
);

export const updateInstructorDetails = createAsyncThunk(
  'instructors/updateInstructorDetails',
  async (updatedInstructor: Instructor) => {
    const instructor = await InstructorHttpService.updateInstructor(updatedInstructor);
    return instructor;
  }
);

export const deleteInstructor = createAsyncThunk(
  'instructors/deleteInstructor',
  async (id: string) => {
    await InstructorHttpService.deleteInstructor(id);
    return id;
  }
);

interface InstructorsState {
  allInstructors: Instructor[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: InstructorsState = {
  allInstructors: [],
  status: 'idle',
  error: null,
};

const instructorsSlice = createSlice({
  name: 'instructors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllInstructors.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchAllInstructors.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.allInstructors = action.payload;
    });
    builder.addCase(fetchAllInstructors.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || null;
    });
    builder.addCase(addNewInstructor.fulfilled, (state, action) => {
      state.allInstructors.push(action.payload);
    });
    builder.addCase(updateInstructorDetails.fulfilled, (state, action) => {
      const instructorIndex = state.allInstructors.findIndex(
        (instructor) => instructor.id === action.payload.id
      );
      if (instructorIndex !== -1) {
        state.allInstructors[instructorIndex] = action.payload;
      }
    });
    builder.addCase(deleteInstructor.fulfilled, (state, action) => {
      const indexToDelete = state.allInstructors.findIndex((instructor) => instructor.id === action.payload);
      if (indexToDelete !== -1) {
        state.allInstructors.splice(indexToDelete, 1);
      }
    });
  },
});

export default instructorsSlice.reducer;