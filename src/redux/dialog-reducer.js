const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = (message) => ({type: SEND_MESSAGE, message});


const initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            message: action.message,
          },
        ],
      };
    default:
      return state;
  }
};
export default dialogReducer;