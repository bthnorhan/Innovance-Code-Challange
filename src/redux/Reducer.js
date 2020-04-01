import { combineReducers } from 'redux';
import {
	SET_STATE_VALUE,
	CLEAR_STATE,
	SET_LOGGED_IN,
	SET_USER,
	ADD_STAR,
	REMOVE_STAR
} from './Types';

const INITIAL_STATE = {
	stateValue: 0,
	isLoggedIn: false,
	user: '',
	starIds: [],
	stars: []
};

const Reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_STATE_VALUE:
			var stateValue = action.payload;
			return { ...state, stateValue };

		case CLEAR_STATE:
			return {
				stateValue: 0,
				isLoggedIn: false,
				user: '',
				starIds: [],
				stars: []
			};

		case SET_LOGGED_IN:
			var isLoggedIn = action.payload;
			return { ...state, isLoggedIn };

		case SET_USER:
			var user = action.payload;
			return { ...state, user };

		case ADD_STAR:
			var addLaunch = action.payload;
			var stars = [...state.stars, addLaunch];
			var starIds = [...state.starIds, addLaunch.id];
			return { ...state, stars, starIds };

		case REMOVE_STAR:
			var removeLaunch = action.payload;
			var stars = state.stars.filter(item => item.id !== removeLaunch.id);
			var starIds = state.starIds.filter(item => item !== removeLaunch.id);
			return { ...state, stars, starIds };

		default:
			return state;
	}
};

export default combineReducers({
	state: Reducer,
});