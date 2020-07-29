import React from 'react';
import Preloader from '../Common/Preloader/Preloader';
import User from './User/User';
import s from './Users.module.css';

const Users = (props) => {
  const pages = [];
  for (let i = 1; i <= props.pagesCount && i <= 10; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map(p => <span className={`${s.page} ${props.page === p && s.selectedPage}`}
                            onClick={() => props.onChangePage(p)}>{p}</span>)}
      {props.isFetching ? <Preloader/> : props.users.map(u => <User user={u}
                                                                    onFollow={props.onFollow}
                                                                    onUnfollow={props.onUnfollow}
                                                                    isFollowingInProgress={props.isFollowingInProgress}
                                                                    followingInProgress={props.followingInProgress}/>)}
    </div>
  );

};
export default Users;