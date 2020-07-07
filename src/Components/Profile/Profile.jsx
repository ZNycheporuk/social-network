import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Posts/MyPosts";


const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img alt='Panorama'
             src='https://upload.wikimedia.org/wikipedia/commons/1/11/B%C3%B6dele_Bregenzerwald_Panorama.jpg'/>
      </div>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </div>
  );
}
export default Profile;