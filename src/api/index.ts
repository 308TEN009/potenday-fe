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

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log(error);
    if (error.response && error.response.status === 401 && retryCount < MAX_RETRY_COUNT) {
      retryCount++;
      try {
        const { accessToken } = await AuthApi.retrieveNewAccessToken(getRefreshToken());
        localStorage.setItem('accessToken', accessToken);
        error.config.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(error.config);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    retryCount = 0;
    return Promise.reject(error);
  },
);

export default apiClient;
