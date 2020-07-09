import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
});

let store = createStore(reducers);
export default store;