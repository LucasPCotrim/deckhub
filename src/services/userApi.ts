import api from './api';

export async function getUserInfo(id: number) {
  return api.get(`/users/${id}`);
}

const userApi = { getUserInfo };

export { userApi };
