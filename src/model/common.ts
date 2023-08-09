export interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface OptionItem<T> {
  index: number;
  key: string;
  value: T;
}

export type SocialLoginType = 'kakao' | 'naver' | 'google';
