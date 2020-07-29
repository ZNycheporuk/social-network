import React from 'react';
import {NavLink} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import s from './Dialogs.module.css';

const NewMessageForm = (props) => {
  return (
    <form className={s.newMessage} onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'} name={'message'} placeholder='Enter your message:'/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const NewMessageReduxForm = reduxForm({form: 'newMessage'})(NewMessageForm);

const Dialogs = (props) => {
  const dialogElements = props.dialogs.map(d => (
      <div className={s.dialog}>
        <NavLink activeClassName={s.active} to={'/dialogs/' + d.id}>{d.name}</NavLink>
      </div>
    ),
  );
  const messageElements = props.messages.map(m => (
    <div className={s.message}>{m.message}</div>
  ));
  //
  const onSubmit = (formData) => {
    if (formData.message)
      props.sendMessage(formData.message);

  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}

        <NewMessageReduxForm onSubmit={onSubmit}/>

      </div>
    </div>
  );
};
export default Dialogs;