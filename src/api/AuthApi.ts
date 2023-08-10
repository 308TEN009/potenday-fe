import apiClient from '@/api/index';
import type { AccessToken } from '@/model/common';
import type { AxiosResponse } from 'axios';

const retrieveNewAccessToken = (refreshToken: string): Promise<AccessToken> =>
  apiClient.post('/v1/auth/token', refreshToken)
           .then((res: AxiosResponse) => res.data);

const AuthApi = {
  retrieveNewAccessToken,
};

export default AuthApi;
