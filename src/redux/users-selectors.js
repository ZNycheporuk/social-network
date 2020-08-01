export const getUsers = state => state.usersPage.users;
export const getPageSize = state => state.usersPage.pageSize;
export const getPage = state => state.usersPage.page;
export const getPagesCount = state => Math.ceil(state.usersPage.totalUsersCount / state.usersPage.pageSize);
export const getIsFetching = state => state.usersPage.isFetching;
export const getIsFollowingInProgress = state => state.usersPage.isFollowingInProgress;
