import { Center, CircularProgress } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { REDIRECTION_CHANNEL } from '@/model/common';

const LoginRedirect = () => {
  const [searchParams] = useSearchParams();
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (accessToken) localStorage.setItem('accessToken', accessToken);
    if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
    alert(`accessToken: ${accessToken} refreshToken: ${refreshToken}`)
    if (!accessToken || !refreshToken) {
      setHasError(true);
      return;
    }
    const redirectWindowChannel = new BroadcastChannel(REDIRECTION_CHANNEL);
    redirectWindowChannel.postMessage('');
    window.close();
  }, [searchParams]);
  return <Center>
    {hasError
      ? 'ERROR'
      : <CircularProgress isIndeterminate color='green.300' />}
  </Center>;
};

export default LoginRedirect;
