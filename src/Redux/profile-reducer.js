const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export const addPostCreator = () => ({type: ADD_POST});
export const updatePostTextCreator = (newText) => ({type: UPDATE_POST_TEXT, newText,});

let initialState = {
  posts: [
    {
      id: 1,
      poster: 'Nycheporuk',
      posterAva: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
      message: 'Hi! I\'m here',
      likesCount: 19
    },
    {
      id: 2,
      poster: 'Leylin',
      posterAva: 'https://avatarfiles.alphacoders.com/121/121911.jpg',
      message: 'How are you?',
      likesCount: 7
    },
  ],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.newPostText === '') return state;
      let post = {
        id: state.posts.length,
        poster: 'Nycheporuk',
        posterAva: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
        message: state.newPostText,
        likesCount: 0,
      };
      state.newPostText = '';
      state.posts.push(post);
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }

}
export default profileReducer;