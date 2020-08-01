import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {sendMessage} from '../../redux/dialog-reducer';
import {getDialogs, getMessages} from '../../redux/dialog-selectors';
import s from './Dialogs.module.css';
import NewMessageForm from './NewMessageForm';


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

        <NewMessageForm onSubmit={onSubmit}/>

      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    dialogs: getDialogs(state),
    messages: getMessages(state),
  };
};
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {sendMessage}),
)(Dialogs);

