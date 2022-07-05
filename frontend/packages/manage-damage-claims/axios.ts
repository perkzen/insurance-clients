import axios, { AxiosRequestConfig } from 'axios';

export const BE_DAMAGE_CLAIMS_URL = '/damage-claims';
export const BE_FRAUD_DETECTION_URL = '/fraud-detection';

const BASE_URL = 'http://localhost:8000/api/v1';

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
