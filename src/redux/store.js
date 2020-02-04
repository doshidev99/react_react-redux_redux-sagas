import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";

//redux saga
import createSagaMiddleware from "redux-saga";
// middleWare
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga); // inside object saga

console.log("store get state", store.getState());

export default store;
