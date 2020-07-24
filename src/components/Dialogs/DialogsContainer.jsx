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
const DialogsContainer = connect(mapStateToProps, {sendMessageCreator, updateMessageTextCreator})(Dialogs);
export default DialogsContainer;
