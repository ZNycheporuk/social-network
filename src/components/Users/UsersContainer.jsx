import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  followingInProgress,
  setIsFetching,
  setPage,
  setTotalUsersCount,
  setUsers,
  unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.page, this.props.pageSize)
      .then(data => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount)
      })
  }

  onFollow = (id) => this.props.follow(id);

  onUnfollow = (id) => this.props.unfollow(id);

  onChangePage = (page) => {
    this.props.setPage(page);
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.page, this.props.pageSize, this.props.pagesCount)
      .then(data => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
      })
  }

  render() {

    return (
      <Users users={this.props.users}
             page={this.props.page}
             pagesCount={this.props.pagesCount}
             onFollow={this.onFollow}
             onUnfollow={this.onUnfollow}
             onChangePage={this.onChangePage}
             isFetching={this.props.isFetching}
             isFollowingInProgress={this.props.isFollowingInProgress}
             followingInProgress={this.props.followingInProgress}
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
  follow,
  unfollow,
  setUsers,
  setPage,
  setTotalUsersCount,
  setIsFetching,
  followingInProgress,
})(UsersContainer);

