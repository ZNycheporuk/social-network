import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {getId} from '../../redux/auth-selectors';
import {addPost, requestProfile, setStatus} from '../../redux/profile-reducer';
import {getIsFetching, getPosts, getProfile, getStatus} from '../../redux/profile-selectors';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : this.props.userId
        ? this.props.userId
        : this.props.history.push('/login');

    this.props.requestProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

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
)(ProfileContainer);
