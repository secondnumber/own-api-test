import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': 'b1990052-b902-4833-a74d-cf5897729da7',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 9) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  addUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  deleteUser(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  getProfile(userId) {
    console.warn('Its outdated method. You should use profileAPI object.');
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put(`profile/status/`, { status: status })
      .then((response) => response.data);
  },
};

export const authAPI = {
  isAuthCurrentUser() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  loginUser(email, password, rememberMe) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => response.data);
  },
  logoutUser() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};
