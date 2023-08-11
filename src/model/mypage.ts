export interface ExperienceContents {
  content: string;
}

export interface ExperienceRequest {
  title: string;
  experienceDetailList: ExperienceContents[];
}

export interface ExperienceItem {
  _id: string;
  content: string;
  experienceId: string;
  createAt: string;
  updatedAt: string;
  deletedAt: string;
}

export interface ExperienceListResponse {
  _id: string;
  title: string;
  userId: string;
  create: string;
  updatedAt: string;
  deletedAt: string;
  experienceDetailList: ExperienceItem[];
}
