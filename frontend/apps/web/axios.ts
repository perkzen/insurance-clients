import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BE_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    // const token = store.getState().user.accessToken;
    const token = '';
    if (token) {
      config.headers!.authorization = `Bearer ${token}`;
    }
    config.headers!.Accpet = `application/json`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
