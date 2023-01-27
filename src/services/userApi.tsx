import api from './api';

export async function signUp(name: string, email: string, password: string) {
  return api.post('/auth/sign-up', { name, email, password });
}
