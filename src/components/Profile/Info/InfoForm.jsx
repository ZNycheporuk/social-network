import React from 'react';
import {reduxForm} from 'redux-form';
import {createField, Input, Textarea} from '../../Common/FormsControls/FormControls';
import s from '../../Common/FormsControls/FormsControls.module.css';

const ProfileInfoForm = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
      </div>
      {error && <div className={s.formSummaryError}>
        {error}
      </div>}
      {createField('Full name', 'fullName', [], Input)}
      {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'}, 'Looking for a job')}
      {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
      {createField('About me', 'aboutMe', [], Textarea)}
      <br/>

      <b>Contacts: </b> {Object.keys(profile.contacts).map(key => (
      <div key={key} className={s.contact}>
        {createField(key, `contacts.${key}`, [], Input)}
      </div>))}
      <button>Save</button>
    </form>);
};

export default reduxForm({form: 'edit-profile'})(ProfileInfoForm);

