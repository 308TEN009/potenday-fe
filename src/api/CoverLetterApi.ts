import apiClient from '@/api/index';
import type { AxiosResponse } from 'axios';
import type { AIGeneratorRequest, CoverLetterResponse } from '@/model/coverLetter';

const retrieveAllCoverLetters = (id: string): Promise<CoverLetterResponse[]> => {
  return apiClient.get(`/v1/employment-opportunity/${id}/personal-statement/list`)
                  .then((res: AxiosResponse) => res.data);
};

const generateAICoverLetter = (request: AIGeneratorRequest) => {
  return apiClient.post('/v1/open-ai/personal-statement', request)
                  .then((res: AxiosResponse) => res.data);
};

const createCoverLetter = (id: string, request) => {
  return apiClient.post(`/v1/employment-opportunity/${id}/personal-statement`, request)
                  .then((res: AxiosResponse) => res.data);
};

const CoverLetterApi = {
  retrieveAllCoverLetters,
  generateAICoverLetter,
  createCoverLetter,
};

export default CoverLetterApi;
