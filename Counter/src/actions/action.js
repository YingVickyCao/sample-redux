import * as TYPES from '../constants';

export const increment = () => {
	return {
		type: TYPES.INCREMENT
	};
};

export const decrement = () => {
	return {
		type: TYPES.DECREMENT
	};
};
