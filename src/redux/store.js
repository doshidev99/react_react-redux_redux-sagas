import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

console.log("store get state", store.getState());
export default store;
