import {
  ADD_MOVIE,
  FETCH_MOVIE,
  FETCH_SUCCESS,
  FETCH_FAILED
} from "../actions/actionTypes";

const movieReducers = (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.receivedMovies;
    case FETCH_FAILED:
      return [];
    case ADD_MOVIE:
      return [...movies, action.newMovie];
    default:
      return movies;
  }
};

export default movieReducers;
