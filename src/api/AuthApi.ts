import apiClient from '@/api/index';
import type { AccessToken } from '@/model/common';
import type { AxiosResponse } from 'axios';

const AuthApi = {
  retrieveNewAccessToken(refreshToken: string): Promise<AccessToken> {
    return apiClient.post('/v1/auth/token', { refreshToken })
                    .then((res: AxiosResponse) => res.data);
  },
  logout(): Promise<any> {
    return apiClient.post('/v1/auth/logout')
                    .then((res: AxiosResponse) => res.data);
  },
};

export default AuthApi;
