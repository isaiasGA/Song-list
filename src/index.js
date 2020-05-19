import React from "react";
import ReactDOM from "react-dom";
//Set up 'provider' and the reference to our STORE that has all of the REDUCERS COMBINED
import { Provider } from "react-redux";
//createStore has the reducers that we assing to store
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  //We are passing a single prop called 'store'
  // 'store' will store all of the reducers inside which means ti will have all of the data in state.
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
