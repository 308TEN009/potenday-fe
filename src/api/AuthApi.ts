import apiClient from '@/api/index';
import type { AccessToken } from '@/model/common';
import type { AxiosResponse } from 'axios';

const retrieveNewAccessToken = (refreshToken: string): Promise<AccessToken> =>
  apiClient.post('/v1/auth/token', { refreshToken })
           .then((res: AxiosResponse) => res.data);

const logout = (): Promise<any> =>
  apiClient.post('/v1/auth/logout')
           .then((res: AxiosResponse) => res.data);

const AuthApi = {
  retrieveNewAccessToken,
  logout
};

export default AuthApi;
