import profileReducer, {addPost, deletePost} from './profile-reducer';

const state = {
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
};
it(`after adding post, length should increment`, () => {
  let action = addPost('my first test');
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});
it(`after adding post, message should be correct`, () => {
  let action = addPost('my first test');
  let newState = profileReducer(state, action);
  expect(newState.posts[2].text).toBe('my first test');
});
it(`after deleting post, length should decrement`, () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});
it(`after deleting post, length shouldn't decrement, if id isn't correct`, () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});