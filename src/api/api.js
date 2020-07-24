import * as axios from 'axios';

const api = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '52fb7d62-033a-4853-8dff-927702749ea2'
  }
})
export const usersAPI = {
  getUsers(page = 1, pageSize = 10, pagesCount = 549) {
    return api.get(`users?page=${pagesCount - page + 1}&count=${pageSize}`)
      .then(response => response.data);
  }
}
export const followAPI = {
  follow(id) {
    return api.post(`follow/${id}`)
      .then(response => response.data.resultCode);
  },
  unfollow(id) {
    return api.delete(`follow/${id}`)
      .then(response => response.data.resultCode);
  }
}
export const authAPI = {
  auth() {
    return api.get(`auth/me`)
      .then(response => response.data);
  }
}
export const profileAPI = {
  getProfile(id) {
    return api.get(`profile/${id}`)
      .then(response => response.data);
  }
}
