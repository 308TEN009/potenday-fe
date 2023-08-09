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
