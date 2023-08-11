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

export interface JobPostRequest {
  companyName: string;
  applicationJob: string;
}

export interface JobPost {
  _id: string;
  companyName: string;
  applicationJob: string;
  status: string
}

export interface StatusBoardCnt {
  completeCnt: number,
  successCnt: number
}
