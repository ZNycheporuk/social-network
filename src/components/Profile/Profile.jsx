import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {getId} from '../../redux/auth-selectors';
import {addPost, requestProfile, savePhoto, setStatus} from '../../redux/profile-reducer';
import {getIsFetching, getPosts, getProfile, getStatus} from '../../redux/profile-selectors';
import Preloader from '../Common/Preloader/Preloader';
import Info from './Info/Info';
import MyPosts from './Posts/MyPosts';
import s from './Profile.module.css';

const Profile = React.memo(({match, userId, history, requestProfile, ...props}) => {
  useEffect(() => {
    const id = match.params.userId
      ? match.params.userId
      : userId
        ? userId
        : history.push('/login');
    requestProfile(id);
  }, [match.params.userId, userId, history, requestProfile]);

  if (props.isFetching || !props.profile) {
    return <Preloader/>;
  }
  return (
    <div className={s.profile}>
      <Info profile={props.profile} savePhoto={props.savePhoto} status={props.status} setStatus={props.setStatus}
            isOwner={!match.params.userId}/>
      <MyPosts addPost={props.addPost} posts={props.posts}/>
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
  withAuthRedirect,
  connect(mapStateToProps, {requestProfile, setStatus, addPost, savePhoto}),
  withRouter,
)(Profile);
