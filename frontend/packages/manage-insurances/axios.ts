import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1/insurances';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('accessToken');
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
