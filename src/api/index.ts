import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios';
import AuthApi from '@/api/AuthApi';

const apiClient: AxiosInstance = axios.create({ baseURL: import.meta.env.VITE_BASE_URL } as CreateAxiosDefaults);

const getAccessToken = () => localStorage.getItem('accessToken');
const getRefreshToken = () => localStorage.getItem('refreshToken');

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = `Bearer ${getAccessToken()}`;
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const MAX_RETRY_COUNT = 3;
let retryCount = 0;

apiClient.interceptors.response.use(async (response) => {
    if (response.status === 401 && retryCount < MAX_RETRY_COUNT) {
      retryCount++;
      const { accessToken } = await AuthApi.retrieveNewAccessToken(getRefreshToken());
      response.config.headers.Authorization = accessToken;
      return apiClient(response.config);
    }
    retryCount = 0;
    return response;
  },
  (error) => {
    return Promise.reject(error);
  });

export default apiClient;
