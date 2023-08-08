import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios';

const instance: AxiosInstance = axios.create({ baseURL: 'http://localhost:8080' } as CreateAxiosDefaults);

// instance.interceptors.response = () => {};
// instance.interceptors.request = () => {};
export default instance as axios;
