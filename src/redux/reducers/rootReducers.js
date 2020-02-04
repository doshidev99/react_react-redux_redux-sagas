import { combineReducers } from "redux";

import counterReducers from "./counterReducers";
import movieReducers from "./movieReducers";

export const rootReducer = combineReducers({
  counterReducers,
  movieReducers
});
