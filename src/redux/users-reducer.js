import {followAPI, usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

const setUsers = (users) => ({type: SET_USERS, users});
const setFollow = (id) => ({type: FOLLOW, id});
const setUnfollow = (id) => ({type: UNFOLLOW, id});
const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
const setPage = (page) => ({type: SET_PAGE, page});
const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
const followingInProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, id});

export const getUsers = (page, pageSize, pagesCount) => async (dispatch) => {
  dispatch(setPage(page));
  dispatch(setIsFetching(true));
  const data = await usersAPI.getUsers(page, pageSize, pagesCount);
  dispatch(setIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};
export const unfollow = (id) => async (dispatch) => {
  dispatch(followingInProgress(true, id));
  const resultCode = await followAPI.unfollow(id);
  if (resultCode === 0) dispatch(setUnfollow(id));
  dispatch(followingInProgress(false, id));

};
export const follow = (id) => async (dispatch) => {
  dispatch(followingInProgress(true, id));
  const resultCode = await followAPI.follow(id);
  if (resultCode === 0) dispatch(setFollow(id));
  dispatch(followingInProgress(false, id));
};

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  page: 1,
  isFetching: false,
  isFollowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state, users: state.users.map(user => {
          if (user.id === action.id) return {...user, followed: true};
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state, users: state.users.map(user => {
          if (user.id === action.id) return {...user, followed: false};
          return user;
        }),
      };
    }
    case SET_USERS: {
      return {...state, users: action.users};
      // return {...state, users: [...state.users, ...action.users]};
    }
    case SET_PAGE: {
      return {...state, page: action.page};
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.totalUsersCount};
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching};
    }
    case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
      return {
        ...state, isFollowingInProgress: action.isFetching
          ? [...state.isFollowingInProgress, action.id]
          : state.isFollowingInProgress.filter(id => id !== action.id),
      };
    }
    default:
      return state;
  }
};
export default usersReducer;