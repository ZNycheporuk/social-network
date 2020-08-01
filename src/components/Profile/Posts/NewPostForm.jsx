import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from './MyPosts.module.css';


const NewPostForm = (props) => {
  return (
    <form className={s.newPost} onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'} name={'post'} placeholder='Enter your new post:'/>
      </div>
      <div>
        <button>New Post</button>
      </div>
    </form>
  );
};
export default reduxForm({form: 'newPost'})(NewPostForm);
