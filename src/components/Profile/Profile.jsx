import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {getId} from '../../redux/auth-selectors';
import {addPost, requestProfile, setStatus} from '../../redux/profile-reducer';
import {getIsFetching, getPosts, getProfile, getStatus} from '../../redux/profile-selectors';
import Preloader from '../Common/Preloader/Preloader';
import Info from './Info/Info';
import MyPosts from './Posts/MyPosts';
import s from './Profile.module.css';

const Profile = (props) => {

  useEffect(() => {
    const userId = props.match.params.userId
      ? props.match.params.userId
      : props.userId
        ? props.userId
        : props.history.push('/login');

    props.requestProfile(userId);
  }, [props.match.params.userId]);

  if (props.isFetching || !props.profile) {
    return <Preloader/>;
  }
  return (
    <div className={s.profile}>
      <Info profile={props.profile} status={props.status} setStatus={props.setStatus}/>
      <MyPosts addPost={props.addPost} posts={props.posts}/>
    </div>
  );
};
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
  connect(mapStateToProps, {requestProfile, setStatus, addPost}),
  withRouter,
)(Profile);
