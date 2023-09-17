import { configureStore } from "@reduxjs/toolkit";
import { songReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";

const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: moviesReducer,
  },
});

export { store, addMovie, removeMovie, addSong, removeSong };
