import apiClient from '@/api/index';
import type { AxiosResponse } from 'axios';
import type { AIGeneratorRequest } from '@/model/coverLetter';

const retrieveAllCoverLetters = () => {
  return apiClient.get('');
};

const generateAICoverLetter = (request: AIGeneratorRequest) => {
  return apiClient.post('/v1/open-ai/personal-statement', request)
                  .then((res: AxiosResponse) => res.data);
};

const CoverLetterApi = {
  retrieveAllCoverLetters,
  generateAICoverLetter,
};

export default CoverLetterApi;
