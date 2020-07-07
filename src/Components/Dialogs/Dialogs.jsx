import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
  let dialogs = [
    {id: '1', name: 'Ustinya'},
    {id: '2', name: 'Anatolij'},
    {id: '3', name: 'Kyanka'},
    {id: '4', name: 'Max On'},
  ];

  let messages = [
    {id: '1', message: 'Hey'},
    {id: '2', message: 'Yo'},
    {id: '3', message: 'How are you'},
    {id: '4', message: 'Nice'},
  ];

  let dialogElements = dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
  let messageElements = messages.map(m => <Message id={m.id} message={m.message}/>);

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