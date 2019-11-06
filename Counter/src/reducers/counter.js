import * as TYPES from '../constants';

const defaultState = {
	num: 0
};

export default (state = defaultState, action) => {
	console.log(state.num, action);
	switch (action.type) {
		case TYPES.INCREMENT:
			// ES6
			return Object.assign({}, state, {
				num: state.num + 1
			});

		// ES7
		// case TYPES.DECREMENT:
		//     return { ...state, num: state.num - 1 };

		case TYPES.DECREMENT:
			// 将那些无需修改的项原封不动移入, 接着对需修改的项用新生成的对象替换。
			return { ...state, ...{ num: state.num - 1 } };

		default:
			return state;
	}
};
