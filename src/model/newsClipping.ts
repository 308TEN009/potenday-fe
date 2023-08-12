export interface NewsContents {
  _id: string;
  companyName: string;
  title: string;
  content: string;
  url: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface NewsRequest {
  companyName: string;
  title: string;
  content: string;
  url: string;
}
