import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  debugger;
  let dialogElements = props.state.dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
  let messageElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
    </div>
  );
};
export default Dialogs;