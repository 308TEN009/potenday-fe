export interface JobPostOption {
  id: number;
  companyName: string;
  duty: string;
}

export interface CoverLetterForm {
  jobPost: JobPostOption | null;
  jobDesc: string;
  question: string;
  maxLength?: number;
  coverLetter: string;
}

export interface CoverLetterItemProps {
  companyName: string;
  status: string;
  coverLetterKey: string;
  duty: string;
}

export type AssistantType = 'exp' | 'emp' | 'jd';

interface AssistantInput {
  type: AssistantType;
  message: string;
}

export interface AIGeneratorRequest {
  question: string;
  assistantInput: AssistantInput[];
}

export interface SaveCoverLetterRequest {
  question: string;
  answer: string;
}

export interface CoverLetterResponse {
  id: string;
  question: string;
  answer: string;
  employmentOpportunityId: string;
  createAt: string;
  updatedAt: string;
  deletedAt: string;
}
