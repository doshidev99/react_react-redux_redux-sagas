import React from "react";
import { Provider } from "react-redux";
import { Counter, Movie } from "./components";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Movie />
    </Provider>
  );
}

export default App;
