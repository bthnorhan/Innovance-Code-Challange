import {
	SET_STATE_VALUE,
	CLEAR_STATE,
	SET_LOGGED_IN,
	SET_USER,
	ADD_STAR,
	REMOVE_STAR,
	ADD_LAUNCHES
} from "./Types";

export const setStateValue = (stateValue) => (
	{
		type: SET_STATE_VALUE,
		payload: stateValue,
	}
);

export const clearState = () => (
	{
		type: CLEAR_STATE,
	}
);

export const setLoggedIn = (isLoggedIn) => (
	{
		type: SET_LOGGED_IN,
		payload: isLoggedIn,
	}
);

export const setUser = (user) => (
	{
		type: SET_USER,
		payload: user,
	}
);

export const addStar = (launch) => (
	{
		type: ADD_STAR,
		payload: launch,
	}
);

export const removeStar = (launch) => (
	{
		type: REMOVE_STAR,
		payload: launch,
	}
);

export const addLaunches = (launches) => (
	{
		type: ADD_LAUNCHES,
		payload: launches
	}
);