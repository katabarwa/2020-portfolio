import { createStore } from "redux";

let reducer = (state, action) => {
  return state;
};

let store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
