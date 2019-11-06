import * as TYPES from "../constants";

var globalState = {
  num: 10
};
const defaultState = {
  num: 0
};

export function counterReducer(state = defaultState, action) {
  console.log("counterReducer:", action, state);

  switch (action.type) {
    case TYPES.INCREMENT:
      console.log("counterReducer,+");
      // ES6
      return Object.assign({}, state, {
        num: state.num + 1
      });
    //   return globalState;

    // ES7
    // case TYPES.DECREMENT:
    //     return { ...state, num: state.num - 1 };

    case TYPES.DECREMENT:
      var oldState = state;
      var newState = { ...state, ...{ num: state.num - 1 } };
      console.log("counterReducer,-");
      return newState;

    default:
      return state;
  }
}
