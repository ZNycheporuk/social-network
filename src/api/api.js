import * as axios from 'axios';

const ajax = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '52fb7d62-033a-4853-8dff-927702749ea2',
  },
});
export const usersAPI = {
  async getUsers(page = 1, pageSize = 10, pagesCount = 551) {
    const response = await ajax.get(`users?page=${pagesCount - page + 1}&count=${pageSize}`);
    return response.data;
  },
};
export const followAPI = {
  async follow(id) {
    const response = await ajax.post(`follow/${id}`);
    return response.data.resultCode;
  },
  async unfollow(id) {
    const response = await ajax.delete(`follow/${id}`);
    return response.data.resultCode;
  },
};
export const authAPI = {
  async auth() {
    const response = await ajax.get(`auth/me`);
    return response.data;
  },
  async login(data) {
    const response = await ajax.post(`auth/login`, data);
    return response.data;
  },
  async logout() {
    const response = await ajax.delete(`auth/login`);
    return response.data;
  },
};
export const profileAPI = {
  async getProfile(id) {
    const response = await ajax.get(`profile/${id}`);
    return response.data;
  },
  async getStatus(id) {
    const response = await ajax.get(`profile/status/${id}`);
    return response.data;
  },
  async setStatus(status) {
    const response = await ajax.put(`profile/status`, {
      status,
    });
    return response.data.resultCode;
  },
};
