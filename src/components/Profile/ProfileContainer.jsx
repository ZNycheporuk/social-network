import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/AuthRedirect';
import {addPost, getProfile, setStatus} from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : this.props.userId;
    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    userId: state.auth.id,
    status: state.profilePage.status,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {getProfile, setStatus, addPost}),
  withRouter,
)(ProfileContainer);
