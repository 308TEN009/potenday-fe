import { atom } from 'recoil';

const experienceModalInfoStore = atom(
  {
    key: 'experienceModalStore',
    default: {
      isEdit: false,
      originExperience: null,
    },
  },
);

export default experienceModalInfoStore;
