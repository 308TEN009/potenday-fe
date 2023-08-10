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

export interface CoverLatterItemProps {
  companyName: string;
  status: string;
  coverLatterKey: string;
  duty: string;
};
