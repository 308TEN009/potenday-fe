import type { SocialLoginType } from '@/model/common';
import apiClient from '@/api/index';
import type { AxiosResponse } from 'axios';

export const login = (socialLoginType: SocialLoginType) => {
  return apiClient.get(`/auth/login/${socialLoginType}`).then((res: AxiosResponse) => {
    console.log(res.data);
  });
};
