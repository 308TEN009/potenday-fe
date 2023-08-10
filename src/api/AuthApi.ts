import type { SocialLoginType } from '@/model/common';
import apiClient from '@/api/index';
import type { AxiosResponse } from 'axios';

const login = (socialLoginType: SocialLoginType) => {
  return apiClient.get(`/auth/login/${socialLoginType}`).then((res: AxiosResponse) => {
    console.log(res.data);
  });
};

const AuthApi = {
  login
}

export default AuthApi;
