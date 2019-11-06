import { createStore } from "redux";
// import thunk from 'redux-thunk'

import reducer from "./reducers/counter";
let store = createStore(reducer);
export default store;
