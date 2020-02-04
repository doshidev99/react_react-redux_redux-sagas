/** author{phamdongtruong99}
 * send GET/POST apit request to server
 *
 */

import axios from "axios";

import { takeLatest, call, put } from "redux-saga/effects";

const urlGetMovie = "http://104.248.125.52:3001/categories";

export function* getMoviesFromAPI() {
  const response = yield fetch(urlGetMovie, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: ""
  });
  const movies = yield JSON.parse(response.data);
  return movies;
}

export const Api = {
  getMoviesFromAPI
};
