//Saga effects is function connect saga + reducers

import { delay } from "redux-saga";

import { all } from "redux-saga/effects"; // run time saga the same time

import { sayHello } from "./counterSagas";
import { watchIncrement, watchDecrement } from "./counterSagas"; //function ...

export default function* rootSaga() {
  // yield : run sequentially( tuần tự)
  yield all([sayHello, watchIncrement(), watchDecrement()]);
}
