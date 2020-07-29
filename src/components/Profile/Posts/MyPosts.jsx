import React from 'react';
import {Field, reduxForm} from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';


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
const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm);

const MyPosts = (props) => {
  const postElements = props.posts
    .map(p => <Post id={p.id} message={p.message} name={p.poster} avaUrl={p.posterAva} likesCount={p.likesCount}/>);

  const onAddPost = (formData) => {
    if (formData.post)
      props.addPost(formData.post);
  };

  return (
    <div className={s.posts}>
      My posts
      <NewPostReduxForm onSubmit={onAddPost}/>
      {postElements}
    </div>
  );
};
export default MyPosts;