import * as TYPES from "../constants";
const defaultState = {
  second: 0
};
export function secondReducer(state = defaultState, action) {
  console.log("secondReducer:", action, state);
  switch (action.type) {
    case TYPES.SECONDS:
      // ES6
      return Object.assign({}, state, {
        // second: new Date().getSeconds()
        second: 0
      });

    default:
      return state;
  }
}
