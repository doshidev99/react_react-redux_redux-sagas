//Saga effects is function connect saga + reducers
import { all } from "redux-saga/effects"; // run time saga the same time

import { watchIncrement, watchDecrement } from "./counterSagas"; //function ...
import { watchFetchMovies } from "./movieSagas";

// yield : run sequentially( tuần tự)

export default function* rootSaga() {
  yield all([watchIncrement(), watchDecrement(), watchFetchMovies()]);
}
