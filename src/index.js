import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import App from "./App";

//* ACTIONS ...
const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

//* REDUCERS ...
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

//* GLOBAL STORE ...
let store = createStore(counter); // reducer as param

//* DISPLAY IT IN CONSOLE
store.subscribe(() => console.log(store.getState()));

//* DISPACTCH
store.dispatch(increment()); // action as params
store.dispatch(decrement()); // action as params

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
