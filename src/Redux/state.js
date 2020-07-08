import renderEntireTree from "../render";

let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        poster: 'SharkNM',
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
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Ustinya'},
      {id: 2, name: 'Dendy'},
      {id: 3, name: 'Kyanka'},
      {id: 4, name: 'Max On'},
      {id: 5, name: 'SharkNM'},
      {id: 6, name: 'Alex'},
      {id: 7, name: 'Vetal'},
    ],
    messages: [
      {id: 1, message: 'Hey'},
      {id: 2, message: 'Yo'},
      {id: 3, message: 'I\'m React developer'},
      {id: 4, message: 'I\'m Angular developer'},
    ],
  },
};
export let addPost = () => {
  let post = {
    id: state.profilePage.posts.length,
    poster: 'Nycheporuk',
    posterAva: 'https://avatarfiles.alphacoders.com/715/71560.jpg',
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.newPostText = '';
  state.profilePage.posts.push(post);
  renderEntireTree(state, addPost, updatePostText);
};
export let updatePostText = (text) => {
  state.profilePage.newPostText = text;
  renderEntireTree(state, addPost, updatePostText);
}
export default state;
