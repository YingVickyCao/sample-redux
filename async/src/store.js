import { createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from 'redux-thunk'

import { counterReducer } from "./reducers/reducer_counter";
import { secondReducer } from "./reducers/reducer_second";
let reducer = combineReducers({ secondReducer, counterReducer });

let store = createStore(reducer);
export default store;
