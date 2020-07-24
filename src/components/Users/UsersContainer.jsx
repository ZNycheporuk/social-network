import React from 'react';
import {connect} from "react-redux";
import {follow, getUsers, unfollow,} from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.page, this.props.pageSize);
  }
  onFollow = (id) => this.props.Follow(id);
  onUnfollow = (id) => this.props.Unfollow(id);
  onChangePage = (page) => this.props.getUsers(page, this.props.pageSize, this.props.pagesCount);
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    page: state.usersPage.page,
    pagesCount: Math.ceil(state.usersPage.totalUsersCount / state.usersPage.pageSize),
    isFetching: state.usersPage.isFetching,
    isFollowingInProgress: state.usersPage.isFollowingInProgress,
  };
};


export default connect(mapStateToProps, {
  Follow: follow,
  Unfollow: unfollow,
  getUsers,
})(UsersContainer);

