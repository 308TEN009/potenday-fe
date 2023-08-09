import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios';

const apiClient: AxiosInstance = axios.create({ baseURL: import.meta.env.VITE_BASE_URL } as CreateAxiosDefaults);

// instance.interceptors.response = () => {};
// instance.interceptors.request = () => {};
export default apiClient;
