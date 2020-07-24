import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}});
// export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const authenticate = () => async (dispatch) => {
  const response = await authAPI.auth()
  if (response.resultCode === 0) {
    let {id, email, login} = {...response.data};
    dispatch(setAuthUserData(id, email, login));
  }
}
let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching};
    }
    default:
      return state;
  }
}
export default authReducer;