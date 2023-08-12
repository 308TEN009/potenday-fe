import apiClient from '@/api/index';
import type { AxiosResponse } from 'axios';
import type { AIGeneratorRequest, CoverLetterResponse } from '@/model/coverLetter';

const CoverLetterApi = {
  retrieveAllCoverLetters(id: string): Promise<CoverLetterResponse[]> {
    return apiClient.get(`/v1/employment-opportunity/${id}/personal-statement/list`)
                    .then((res: AxiosResponse) => res.data);
  },

  generateAICoverLetter(request: AIGeneratorRequest) {
    return apiClient.post('/v1/open-ai/personal-statement', request)
                    .then((res: AxiosResponse) => res.data);
  },

  createCoverLetter(id: string, request) {
    return apiClient.post(`/v1/employment-opportunity/${id}/personal-statement`, request)
                    .then((res: AxiosResponse) => res.data);
  },

  updateCoverLetter(id: string, request) {
    return apiClient.patch(`/v1/employment-opportunity/${id}`, request)
                    .then((res: AxiosResponse) => res.data);
  },
};

export default CoverLetterApi;
