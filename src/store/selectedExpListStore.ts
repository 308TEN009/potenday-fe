import { atom } from 'recoil';

const selectedExpListStore = atom({
  key: 'selectedExpStore',
  default: {
    originSelected: [],
    currentSelected: [],
  },
});

export default selectedExpListStore;
