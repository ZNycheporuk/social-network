import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink activeClassName={s.active} to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  );
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  );
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <Dialog id='1' name='Ustinya'/>
        <Dialog id='2' name='Anatolij'/>
        <Dialog id='3' name='Kyanka'/>
        <Dialog id='4' name='Max On'/>
      </div>
      <div className={s.messages}>
        <Message message='Hi'/>
        <Message message='How are you?'/>
        <Message message='Nice'/>
      </div>
    </div>
  );
}
export default Dialogs;