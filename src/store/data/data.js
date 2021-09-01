import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: null,
  error: ""
};

const dataSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload.movies;
    },
    clearMovies: (state, action) => {
      state.movies = null;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    }
  }
});

export const dataActions = dataSlice.actions;

export default dataSlice;
