import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts posts={props.state.posts}
               text={props.state.newPostText}
               addPost={props.addPost}
               updatePostText={props.updatePostText}/>
    </div>
  );
};
export default Profile;