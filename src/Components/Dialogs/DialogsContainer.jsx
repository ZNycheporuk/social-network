import React from 'react';
import {sendMessageCreator, updateMessageTextCreator} from "../../Redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let onSendMessage = () => props.store.dispatch(sendMessageCreator());
  let onMessageTextChange = (text) => {
    props.store.dispatch(updateMessageTextCreator(text));
  };
  let state = props.store.getState().dialogsPage;
  return <Dialogs onSendMessage={onSendMessage}
                  onMessageTextChange={onMessageTextChange}
                  text={state.newMessageText}
                  dialogs={state.dialogs}
                  messages={state.messages}/>
};
export default DialogsContainer;