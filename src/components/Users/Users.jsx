import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import Preloader from '../Common/Preloader/Preloader';
import User from './User/User';

const Users = (props) => {


  return (
    <div>
      <Paginator {...props}/>
      {props.isFetching ? <Preloader/> : props.users.map(u => <User user={u}
                                                                    onFollow={props.onFollow}
                                                                    onUnfollow={props.onUnfollow}
                                                                    isFollowingInProgress={props.isFollowingInProgress}
                                                                    followingInProgress={props.followingInProgress}/>)}
    </div>
  );

};
export default Users;