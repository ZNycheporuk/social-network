import {profileAPI} from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_STATUS_TEXT = 'UPDATE_STATUS_TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

const setProfile = (profile) => ({type: SET_PROFILE, profile});
const setStatusValue = (status) => ({type: SET_STATUS, status});

export const addPost = (text) => ({type: ADD_POST, text});

export const getProfile = (id) => async (dispatch) => {
  const data = await profileAPI.getProfile(id);
  dispatch(setProfile(data));
  dispatch(getStatus(id));
};
export const getStatus = (id) => async (dispatch) => {
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
  newPostText: '',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
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
    }
    case UPDATE_STATUS_TEXT: {
      return {
        ...state,
        newStatusText: action.newText,
      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }

};
export default profileReducer;