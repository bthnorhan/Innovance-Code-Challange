import { combineReducers } from 'redux';
import {
	SET_STATE_VALUE,
	CLEAR_STATE,
	SET_LOGGED_IN
} from './Types';

const INITIAL_STATE = {
	stateValue: 0,
	isLoggedIn: false
};

const Reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_STATE_VALUE:
			var stateValue = action.payload;
			return { ...state, stateValue };

		case CLEAR_STATE:
			return {
				stateValue: 0,
				isLoggedIn: false
			};

		case SET_LOGGED_IN:
			var isLoggedIn = action.payload;
			return { ...state, isLoggedIn };

		default:
			return state;
	}
};

export default combineReducers({
	state: Reducer,
});