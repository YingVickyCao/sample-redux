import * as TYPES from "../constants";

var globalObj = {
  num: 10
};

const defaultState = {
  num: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      // ES6
      console.log("reducer: +");
      return Object.assign({}, state, {
        num: state.num + 1
      });
    // ES7
    // case TYPES.DECREMENT:
    //   return { ...state, num: state.num - 1 };

    //   return {
    //     num: 10
    //   };

    //   console.log("reducer: +", globalObj);
    //   return globalObj;

    case TYPES.DECREMENT:
      // 将那些无需修改的项原封不动移入, 接着对需修改的项用新生成的对象替换。
      console.log("reducer: +");
      return { ...state, ...{ num: state.num - 1 } };
    //   return {
    //     num: 10
    //   };
    //   return globalObj;

    default:
      return state;
  }
};
