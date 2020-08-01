import {profileAPI} from '../api/api';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const setProfile = (profile) => ({type: SET_PROFILE, profile});
const setStatusValue = (status) => ({type: SET_STATUS, status});
const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const addPost = (text) => ({type: ADD_POST, text});
export const deletePost = (id) => ({type: DELETE_POST, id});

export const requestProfile = (id) => async (dispatch) => {
  dispatch(setIsFetching(true));
  dispatch(requestStatus(id));
  const data = await profileAPI.getProfile(id);
  dispatch(setProfile(data));
  dispatch(setIsFetching(false));
};
export const requestStatus = (id) => async (dispatch) => {
  const response = await profileAPI.getStatus(id);
  dispatch(setStatusValue(response));
};
export const setStatus = (status) => async (dispatch) => {
  const resultCode = await profileAPI.setStatus(status);
  if (resultCode === 0) dispatch(setStatusValue(status));
};

const initialState = {
  posts: [
    {
      id: 1,
      poster: 'Nycheporuk',
      posterAva: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
      text: 'Hi! I\'m here',
      likesCount: 19,
    },
    {
      id: 2,
      poster: 'Leylin',
      posterAva: 'https://avatarfiles.alphacoders.com/121/121911.jpg',
      text: 'How are you?',
      likesCount: 7,
    },
  ],
  isFetching: false,
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length,
            poster: 'Nycheporuk',
            posterAva: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
            text: action.text,
            likesCount: 0,
          },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.id),
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      console.log('in set status');
      return {
        ...state,
        status: action.status,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }

};
export default profileReducer;