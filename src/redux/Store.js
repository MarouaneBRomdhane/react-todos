import { createStore } from "redux";
import { reducer } from "./Reducer";
export const store = createStore(
  reducer /* preloadedState, */,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //   this links the store with the browser's extention __REDUX_DEVTOOLS_EXTENSION__
);
