import { INCREMENT, DECREMENT } from "./actionTypes";

import {
  ADD_MOVIE,
  FETCH_MOVIE,
  FETCH_SUCCESS,
  FETCH_FAILED
} from "./actionTypes";
//actions

export const incrementAction = payload => {
  return {
    type: INCREMENT,
    payload
  };
};

export const decrementAction = payload => {
  return {
    type: DECREMENT,
    payload
  };
};

export const fetchMoviesAction = sort => {
  return {
    type: FETCH_MOVIE,
    sort
  };
};

export const addMoviesAction = newMoview => {
  return {
    type: ADD_MOVIE,
    newMoview
  };
};

export const fetchSuccessAction = receivedMovies => {
  return {
    type: FETCH_SUCCESS,
    receivedMovies
  };
};
export const fetchFailedAction = error => {
  return {
    type: FETCH_FAILED,
    error
  };
};
