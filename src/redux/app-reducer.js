import {authenticate} from './auth-reducer';

const SET_LOGGED_IN = 'SET_LOGGED_IN';

const setLoggedIn = () => ({type: SET_LOGGED_IN});

export const initialize = () => async (dispatch) => {
  await dispatch(authenticate());
  dispatch(setLoggedIn());
};
const initialState = {
  loggedIn: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  }
};
export default appReducer;