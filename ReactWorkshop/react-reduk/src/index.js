import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, combineReducers } from "redux";
// import MultiReducer from "./redux/MultiReducer";

import App from "./App";
// conponent
// import SingleReduxState from "./redux/SingleReduxState";
// import MultiReduxState from "./redux/MultiReduxState";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// Create Redux Storage

// Create variable
const initialState = {
  salary: 0,
  value: [],
};
// Create action and State
//   1
const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        salary: (state.salary += action.payload),
        value: [...state.value, action.payload],
      };
      break;
    case "SUB":
      break;
  }
  return state;
};
//   2
const userReducer = (state = { name: "Souny", age: 24 }, action) => {
  switch (action.type) {
    case "setName":
      state = {
        ...state,
        name: action.payload,
      };
      break;
    case "setAge":
      state = { ...state, age: action.payload };
      break;
  }
  return state;
};
const store = createStore(
  combineReducers({ emp: empReducer, user: userReducer })
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
