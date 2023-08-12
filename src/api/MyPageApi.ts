import type { ExperienceListResponse, ExperienceRequest } from '@/model/mypage';
import apiClient from '@/api/index';
import type { AxiosResponse } from 'axios';

const MyPageApi = {
  retrieveExperienceList(): Promise<ExperienceListResponse[]> {
    return apiClient.get('/v1/experience/list')
                    .then((res: AxiosResponse) => res.data);
  },
  createExperience(request: ExperienceRequest): Promise<any> {
    return apiClient.post('/v1/experience', request)
                    .then((res: AxiosResponse) => res.data);
  },
  updateExperience(id: string, request): Promise<any> {
    return apiClient.patch(`/v1/experience/${id}`, request)
                    .then((res: AxiosResponse) => res.data);
  },
  deleteExperience(id: string): Promise<any> {
    return apiClient.delete(`/v1/experience/${id}`)
                    .then((res: AxiosResponse) => res.data);
  },
};

export default MyPageApi;
