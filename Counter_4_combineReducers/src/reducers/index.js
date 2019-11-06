import { combineReducers } from "redux";
import { counterReducer } from "./reducer_counter";
import { secondReducer } from "./reducer_second";

const appReducer = combineReducers({
  secondReducer,
  counterReducer
});

export default appReducer;
