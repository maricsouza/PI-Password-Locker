import { store } from '@/redux/store';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080/'
});

api.interceptors.request.use(
  async (config) => {
    config.headers = {
      ...config.headers,
      idUser: store.getState().user.userId,
      token: store.getState().user.token
    } as any;
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        return Promise.reject({ message: err.response.data });
      }
  
      if (err.request) {
        return Promise.reject({message: 'Erro ao se comunicar com a API'})
      }
  
      return Promise.reject({ message: 'Erro federal' })
    }

    return Promise.reject(err)
  },
);