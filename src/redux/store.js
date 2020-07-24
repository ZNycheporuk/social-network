import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let store = {
  _state: {
    profilePage: {
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
      newMessageText: '',
    },
  },
  _callSubscriber() {
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._callSubscriber();
  }
};

export default store;
