import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: {},
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      state.gptMovies = action.payload;
      const { movieNames, movieResults } = action.payload;

      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});
export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
