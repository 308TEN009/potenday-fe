import type { ExperienceListResponse, ExperienceRequest } from '@/model/mypage';
import apiClient from '@/api/index';
import type { AxiosResponse } from 'axios';

const retrieveExperienceList = (): Promise<ExperienceListResponse[]> =>
  apiClient.get('/v1/experience/list')
           .then((res: AxiosResponse) => res.data);

const createExperience = (request: ExperienceRequest): Promise<any> =>
  apiClient.post('/v1/experience', request)
           .then((res: AxiosResponse) => res.data);

const MyPageApi = {
  createExperience,
  retrieveExperienceList,
};

export default MyPageApi;
