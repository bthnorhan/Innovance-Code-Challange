import {
	SET_STATE_VALUE,
	CLEAR_STATE,
	SET_LOGGED_IN
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
