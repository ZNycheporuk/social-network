import React from 'react';
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

export default reduxForm({form: 'newMessage'})(NewMessageForm);