import api from './api';

export async function signUp(name: string, email: string, password: string) {
  return api.post('/auth/sign-up', { name, email, password });
}

export async function login(email: string, password: string) {
  return api.post('/auth/login', { email, password });
}

export async function logout(token: string) {
  return api.post(
    '/auth/logout',
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

const authApi = { signUp, login, logout };

export { authApi };
