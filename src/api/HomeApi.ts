import apiClient from '@/api/index';
import type { AxiosResponse } from 'axios';
import type { BookmarkContent, BookmarkCreateRequest, JobPostRequest } from '@/model/home';
import { JobPost } from '@/model/home';

const createBookmark = (request: BookmarkCreateRequest): Promise<any> =>
  apiClient.post('/v1/bookmark-site', request)
           .then((res: AxiosResponse) => res.data);

const retrieveBookmarkList = (): Promise<BookmarkContent[]> =>
  apiClient.get('/v1/bookmark-site/list')
           .then((res: AxiosResponse) => res.data);

const updateBookmark = (bookmarkSiteId: string, request: BookmarkCreateRequest): Promise<any> =>
  apiClient.patch(`/v1/bookmark-site/${bookmarkSiteId}`, request)
           .then((res: AxiosResponse) => res.data);

const createJobPost = (request: JobPostRequest): Promise<any> =>
  apiClient.post('/v1/employment-opportunity', request)
           .then((res: AxiosResponse) => res.data);

const retrieveJobPost = (): Promise<JobPost[]> =>
  apiClient.get('/v1/employment-opportunity/list/active')
           .then((res: AxiosResponse) => res.data);

const HomeApi = {
  createBookmark,
  retrieveBookmarkList,
  updateBookmark,
  createJobPost,
  retrieveJobPost,
};

export default HomeApi;
