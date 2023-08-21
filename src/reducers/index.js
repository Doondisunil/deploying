import { combineReducers } from "redux";
import counter from "./counter";

const allReducers = combineReducers({
  counter: counter,
});

export default allReducers;
