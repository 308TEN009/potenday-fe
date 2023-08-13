import type { NewsContents, NewsRequest } from '@/model/newsClipping';
import apiClient from '@/api/index';
import type { AxiosResponse } from 'axios';

const NewsApi = {
  retrieveNews(): Promise<NewsContents[]> {
    return apiClient.get('/v1/news/list')
                    .then((res: AxiosResponse) => res.data);
  },
  createNews(request: NewsRequest) {
    return apiClient.post('/v1/news', request)
                    .then((res: AxiosResponse) => res.data);
  },
  deleteNews(id: string) {
    return apiClient.delete(`/v1/news/${id}`)
                    .then((res: AxiosResponse) => res.data);
  },
};

export default NewsApi;
