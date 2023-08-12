import type { JobPost } from '@/model/home';
import { atom } from 'recoil';

const selectedJobPostStore = atom<JobPost | null>(
  {
    key: 'selectedJobPostStore',
    default: null,
  },
);

export default selectedJobPostStore;
