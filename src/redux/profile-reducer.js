import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_PROFILE = 'SET_PROFILE';

const setProfile = (profile) => ({type: SET_PROFILE, profile,});

export const addPost = () => ({type: ADD_POST});
export const updatePostText = (newText) => ({type: UPDATE_POST_TEXT, newText,});

export const getProfile = (id) => async (dispatch) => {
  // dispatch(setIsFetching(true));
  const data = await profileAPI.getProfile(id)
  // dispatch(setIsFetching(false));
  dispatch(setProfile(data));
}

let initialState = {
  posts: [
    {
      id: 1,
      poster: 'Nycheporuk',
      posterAva: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
      message: 'Hi! I\'m here',
      likesCount: 19,
    },
    {
      id: 2,
      poster: 'Leylin',
      posterAva: 'https://avatarfiles.alphacoders.com/121/121911.jpg',
      message: 'How are you?',
      likesCount: 7
    },
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      if (state.newPostText === '') return state;
      let post = {
        id: state.posts.length,
        poster: 'Nycheporuk',
        posterAva: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
        message: state.newPostText,
        likesCount: 0,
      };

      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.newPostText = '';
      stateCopy.posts.push(post);
      return stateCopy;
    }
    case UPDATE_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    case SET_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    default:
      return state;
  }

}
export default profileReducer;