import { atom } from 'recoil';
import type { ExperienceListResponse } from '@/model/mypage';


interface SelectedExpListStoreType {
  originSelected: ExperienceListResponse[],
  currentSelected: ExperienceListResponse[]
}

const selectedExpListStore = atom<SelectedExpListStoreType>({
  key: 'selectedExpStore',
  default: {
    originSelected: [],
    currentSelected: [],
  },
});

export default selectedExpListStore;
