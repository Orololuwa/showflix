import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: null
};

const dataSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    setFeeds: (state, action) => {
      state.movies = action.payload.movies;
    }
  }
});

export const dataActions = dataSlice.actions;

export default dataSlice;
