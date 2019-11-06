import * as TYPES from '../constants';

export const increment = () => {
	return {
		type: TYPES.INCREMENT
	};
};

export const decrement = () => {
	return {
		type: TYPES.DECREMENT
		// index is better than data obj
		// index:5,
		// data:{index}
	};
};

export const update_second_action = () => {
	return {
		type: TYPES.SECONDS
	};
};
