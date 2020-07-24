import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
  let messageElements = props.messages.map(m => <Message id={m.id} message={m.message}/>);

  let onSendMessage = () => props.onSendMessage();
  let onMessageTextChange = (event) => props.onMessageTextChange(event.target.value);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
        <div className={s.newMessage}>
          <textarea placeholder='Enter your message:' onChange={onMessageTextChange}
                    value={props.text}/>
          <br/>
          <button onClick={onSendMessage}>Send</button>
        </div>

      </div>
    </div>
  );
};
export default Dialogs;