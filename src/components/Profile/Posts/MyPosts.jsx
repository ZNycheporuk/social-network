import React from 'react';
import s from './MyPosts.module.css';
import NewPostForm from './NewPostForm';
import Post from './Post/Post';


const MyPosts = React.memo(props => {
  const postElements = props.posts
    .map(p => <Post id={p.id} message={p.message} name={p.poster} avaUrl={p.posterAva} likesCount={p.likesCount}/>);

  const onAddPost = (formData) => {
    if (formData.post)
      props.addPost(formData.post);
  };

  return (
    <div className={s.posts}>
      My posts
      <NewPostForm onSubmit={onAddPost}/>
      {postElements}
    </div>
  );
});
export default MyPosts;