import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios';
import AuthApi from '@/api/AuthApi';

const apiClient: AxiosInstance = axios.create({ baseURL: import.meta.env.VITE_BASE_URL } as CreateAxiosDefaults);

const getAccessToken = () => localStorage.getItem('accessToken') as string;
const getRefreshToken = () => localStorage.getItem('refreshToken') as string;

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

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401 && retryCount < MAX_RETRY_COUNT) {
      retryCount++;
      try {
        const { accessToken, refreshToken } = await AuthApi.retrieveNewAccessToken(getRefreshToken());
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        error.config.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(error.config);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    if (error.response && error.response.status === 401) {
      error.response.status = 437;
      return Promise.reject(error);
    }
    retryCount = 0;
    return Promise.reject(error);
  },
);

export default apiClient;
