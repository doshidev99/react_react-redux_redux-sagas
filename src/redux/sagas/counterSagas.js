/** author{phamdongtruong99}*/

import { INCREMENT, DECREMENT } from "../actions/actionTypes";
// saga effect
import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects"; // run time saga the same time
// takeEvery = watch an action changed

// generator function*

function increment() {
  console.log("this is increment saga");
}

export function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}
function decrement() {
  console.log("this is decrement saga");
}

export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement);
}
