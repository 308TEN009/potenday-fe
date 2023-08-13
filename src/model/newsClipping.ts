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

  isChecked?: boolean;
}

export interface NewsRequest {
  _id?: string;
  companyName: string;
  title: string;
  content: string;
  url: string;
}
