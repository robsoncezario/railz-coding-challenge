import { TOAST_PUSH, TOAST_REMOVE } from './types';

const initialState = {
	list: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case TOAST_PUSH:
			return {
				...state,
				...{
					list: [...state.list, action.payload],
				},
			};
		case TOAST_REMOVE:
			return {
				...state,
				...{
					list: state.list.filter((a) => a.uuid !== action.payload.uuid),
				},
			};
		default:
			return state;
	}
}
