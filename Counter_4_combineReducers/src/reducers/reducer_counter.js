import * as TYPES from '../constants';

const defaultState = {
	num: 0
};

export function counterReducer(state = defaultState, action) {
	console.log('counterReducer:', action, state);

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
			var oldState = state;
			var newState = { ...state, ...{ num: state.num - 1 } };
			console.log('counterReducer,TYPES.DECREMENT', oldState == newState);
			return newState;

		default:
			return state;
	}
}
