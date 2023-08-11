import apiClient from '@/api/index';

const retrieveAllCoverLetters = () => {
  return apiClient.get('');
};

const CoverLetterApi = {
  retrieveAllCoverLetters,
};

export default CoverLetterApi;
