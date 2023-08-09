export interface BookmarkCreateRequest {
  name: string;
  url: string;
}

export interface BookmarkContent {
  _id: string;
  name: string;
  url: string;
  userId: string;
  createAt: string;
  updatedAt: string;
  deletedAt: string;
}
