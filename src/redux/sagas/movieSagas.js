import {
  FETCH_FAILED,
  FETCH_MOVIE,
  FETCH_SUCCESS
} from "../actions/actionTypes";

import { put, takeLatest } from "redux-saga/effects";

import { Api } from "./api";
// put = dispatch action

function* fetchMovies() {
  try {
    const receivedMovies = yield Api.getMoviesFromAPI();
    yield put({ type: FETCH_SUCCESS, receivedMovies });
  } catch (error) {
    yield put({
      type: FETCH_FAILED,
      error
    });
  }
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIE, fetchMovies);
}
