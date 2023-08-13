export interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (e: any) => void;
  callBack?: () => any;
}

export const REDIRECTION_CHANNEL = 'REDIRECTION_CHANNEL';
export const LOGOUT_CHANNEL = 'LOGOUT_CHANNEL';

export interface AccessToken {
  accessToken: string;
  refreshToken: string;
}
