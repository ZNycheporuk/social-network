import * as axios from 'axios';

const api = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '52fb7d62-033a-4853-8dff-927702749ea2'
  }
})
export const usersAPI = {
  async getUsers(page = 1, pageSize = 10, pagesCount = 550) {
    const response = await api.get(`users?page=${pagesCount - page + 1}&count=${pageSize}`);
    return response.data;
  }
}
export const followAPI = {
  async follow(id) {
    const response = await api.post(`follow/${id}`);
    return response.data.resultCode;
  },
  async unfollow(id) {
    const response = await api.delete(`follow/${id}`);
    return response.data.resultCode;
  }
}
export const authAPI = {
  async auth() {
    const response = await api.get(`auth/me`);
    return response.data;
  }
}
export const profileAPI = {
  async getProfile(id) {
    const response = await api.get(`profile/${id}`);
    return response.data;
  }
}
