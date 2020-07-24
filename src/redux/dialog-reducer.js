const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateMessageTextCreator = (newText) => ({type: UPDATE_MESSSAGE_TEXT, newText,});

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      if (state.newMessageText === '') return state;
      let message = {
        id: state.messages.length,
        message: state.newMessageText,
      };
      let stateCopy = {...state};
      stateCopy.messages = [...state.messages];
      stateCopy.newMessageText = '';
      stateCopy.messages.push(message);
      return stateCopy;
    }
    case UPDATE_MESSSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText
      }
    }
    default:
      return state;
  }
}
export default dialogReducer;