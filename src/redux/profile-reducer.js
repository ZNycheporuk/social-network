import {profileAPI} from '../api/api';

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTOS = 'SET_PHOTOS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const setProfile = (profile) => ({type: SET_PROFILE, profile});
const setPhotos = (photos) => ({type: SET_PHOTOS, photos});
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
export const savePhoto = (photo) => async (dispatch) => {
  const response = await profileAPI.savePhoto(photo);
  if (response.resultCode === 0)
    dispatch(setPhotos(response.data.photos));
};
export const saveProfile = (profile) => async (dispatch, getState) => {
  const response = await profileAPI.setProfile(profile);
  if (response.resultCode === 0)
    dispatch(requestProfile(getState().auth.id));
};
export const setStatus = (status) => async (dispatch) => {
  const response = await profileAPI.setStatus(status);
  if (response.resultCode === 0)
    dispatch(setStatusValue(status));
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
    case SET_PHOTOS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      };
    case SET_STATUS:
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