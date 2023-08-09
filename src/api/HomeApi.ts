import apiClient from '@/api/index';
import type { AxiosResponse } from 'axios';
import type { BookmarkContent, BookmarkCreateRequest } from '@/model/home';

export const createBookmark = (request: BookmarkCreateRequest): Promise<any> =>
  apiClient.post('/v1/bookmark-site', request)
           .then((res: AxiosResponse) => res.data);

export const retrieveBookmarkList = (): Promise<BookmarkContent[]> =>
  apiClient.get('/v1/bookmark-site/list')
           .then((res: AxiosResponse) => res.data);

export const updateBookmark = (bookmarkSiteId: string, request: BookmarkCreateRequest): Promise<any> =>
  apiClient.patch(`/v1/bookmark-site/${bookmarkSiteId}`, request)
           .then((res: AxiosResponse) => res.data);
