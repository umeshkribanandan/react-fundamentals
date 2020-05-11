import { combineReducers } from "redux";
import counter from "./reducers/counter";
import results from "./reducers/results";
import persons from "./reducers/persons";

const rootReducer = combineReducers({
  c: counter,
  r: results,
  p: persons,
});

export default rootReducer;
