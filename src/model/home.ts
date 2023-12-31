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
  jobDescription: string;
}

export interface JobPost {
  _id: string;
  companyName: string;
  applicationJob: string;
  jobDescription: string;
  status: string;
  applyStatus: string;
}

export interface StatusBoardCnt {
  completeCnt: number,
  successCnt: number
}
