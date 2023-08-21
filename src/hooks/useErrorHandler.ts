import { LOGOUT_CHANNEL } from '@/model/common';

const useErrorHandler = (e) => {
  if (e.response.status === 437) {
    const logoutChannel = new BroadcastChannel(LOGOUT_CHANNEL);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.reload();
    logoutChannel.postMessage('logout');
  }
};

export default useErrorHandler;
