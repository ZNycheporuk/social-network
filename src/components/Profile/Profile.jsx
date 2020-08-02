import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import userPhoto from '../../assets/Images/user8.jpg';
import {getId} from '../../redux/auth-selectors';
import {addPost, requestProfile, savePhoto, saveProfile, setStatus} from '../../redux/profile-reducer';
import {getIsFetching, getPosts, getProfile, getStatus} from '../../redux/profile-selectors';
import Preloader from '../Common/Preloader/Preloader';
import Info from './Info/Info';
import InfoForm from './Info/InfoForm';
import MyPosts from './Posts/MyPosts';
import s from './Profile.module.css';

const Profile = React.memo(({match, userId, history, requestProfile, profile, ...props}) => {

  useEffect(() => {
    const id = match.params.userId
      ? match.params.userId
      : userId
        ? userId
        : history.push('/login');
    requestProfile(id);
  }, [match.params.userId, userId, history, requestProfile]);

  const [editMode, setEditMode] = useState(false);
  const onMainPhotoSelected = event => {
    if (event.target.files.length)
      props.savePhoto(event.target.files[0]);
  };
  const onSubmit = async formData => {
    // console.log(formData);
    await props.saveProfile(formData);
    setEditMode(false);
  };

  const isOwner = !match.params.userId;
  if (props.isFetching || !profile) {
    return <Preloader/>;
  }

  return (
    <div className={s.profile}>
      <img className={s.ava} src={profile.photos.large != null ? profile.photos.large : userPhoto}
           alt='ava'/>
      <div>
        {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
      </div>
      {editMode
        ? <InfoForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
        : <>
          <Info profile={profile} savePhoto={props.savePhoto} status={props.status} setStatus={props.setStatus}
                isOwner={isOwner} setEditMode={setEditMode}/>
          <MyPosts addPost={props.addPost} posts={props.posts}/>
        </>
      }
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    posts: getPosts(state),
    profile: getProfile(state),
    userId: getId(state),
    status: getStatus(state),
    isFetching: getIsFetching(state),
  };
};

export default compose(
  connect(mapStateToProps, {requestProfile, setStatus, addPost, savePhoto, saveProfile}),
  withRouter,
)(Profile);
