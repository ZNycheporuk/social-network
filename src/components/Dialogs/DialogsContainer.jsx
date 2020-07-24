// import React from 'react';
import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    text: state.dialogsPage.newMessageText,
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: () => dispatch(sendMessageCreator()),
    onMessageTextChange: (text) => dispatch(updateMessageTextCreator(text)),
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
