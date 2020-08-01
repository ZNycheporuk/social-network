import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {follow, requestUsers, setPage, unfollow} from '../../redux/users-reducer';
import {
  getIsFetching,
  getIsFollowingInProgress,
  getPage,
  getPagesCount,
  getPageSize,
  getUsers,
} from '../../redux/users-selectors';
import Paginator from '../Common/Paginator/Paginator';
import Preloader from '../Common/Preloader/Preloader';
import User from './User/User';

const Users = ({page, pageSize, requestUsers, pagesCount, ...props}) => {
  useEffect(() => {
    requestUsers(page, pageSize);
  }, [page, pageSize, requestUsers]);
  return (
    <div>
      <Paginator page={page} pagesCount={pagesCount} onChangePage={props.setPage}/>
      {props.isFetching ? <Preloader/> : props.users.map(u => <User user={u}
                                                                    onFollow={props.follow}
                                                                    onUnfollow={props.unfollow}
                                                                    isFollowingInProgress={props.isFollowingInProgress}
                                                                    followingInProgress={props.followingInProgress}/>)}
    </div>
  );

};


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
  connect(mapStateToProps, {follow, unfollow, requestUsers, setPage}),
)(Users);