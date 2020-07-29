import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer';
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;