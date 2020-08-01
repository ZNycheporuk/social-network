import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {follow, requestUsers, unfollow} from '../../redux/users-reducer';
import {
  getIsFetching,
  getIsFollowingInProgress,
  getPage,
  getPagesCount,
  getPageSize,
  getUsers,
} from '../../redux/users-selectors';
import Users from './Users';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.page, this.props.pageSize);
  }

  onFollow = (id) => this.props.follow(id);
  onUnfollow = (id) => this.props.unfollow(id);
  onChangePage = (page) => this.props.requestUsers(page, this.props.pageSize);

  render() {
    return (
      <Users users={this.props.users}
             page={this.props.page}
             pagesCount={this.props.pagesCount}
             isFetching={this.props.isFetching}
             isFollowingInProgress={this.props.isFollowingInProgress}
             onFollow={this.onFollow}
             onUnfollow={this.onUnfollow}
             onChangePage={this.onChangePage}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    page: getPage(state),
    pagesCount: getPagesCount(state),
    isFetching: getIsFetching(state),
    isFollowingInProgress: getIsFollowingInProgress(state),
  };
};


export default compose(
  connect(mapStateToProps, {follow, unfollow, requestUsers}),
)(UsersContainer);