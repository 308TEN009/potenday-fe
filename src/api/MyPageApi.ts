import type { ExperienceListResponse, ExperienceRequest } from '@/model/mypage';
import apiClient from '@/api/index';
import type { AxiosResponse } from 'axios';

const retrieveExperienceList = (): Promise<ExperienceListResponse[]> =>
  apiClient.get('/v1/experience/list')
           .then((res: AxiosResponse) => res.data);

const createExperience = (request: ExperienceRequest): Promise<any> =>
  apiClient.post('/v1/experience', request)
           .then((res: AxiosResponse) => res.data);

const updateExperience = (id: string, request): Promise<any> =>
  apiClient.patch(`/v1/experience/${id}`, request)
           .then((res: AxiosResponse) => res.data);

const deleteExperience = (id: string): Promise<any> =>
  apiClient.delete(`/v1/experience/${id}`)
           .then((res: AxiosResponse) => res.data);

const MyPageApi = {
  createExperience,
  retrieveExperienceList,
  updateExperience,
  deleteExperience
};

export default MyPageApi;
