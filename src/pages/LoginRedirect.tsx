import { Box, CircularProgress } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { REDIRECTION_CHANNEL } from '@/model/common';

const LoginRedirect = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (accessToken) localStorage.setItem('accessToken', accessToken);
    if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
    const redirectWindowChannel = new BroadcastChannel(REDIRECTION_CHANNEL);
    redirectWindowChannel.postMessage('');
    window.close();
  }, [searchParams]);
  return <Box>
    <CircularProgress isIndeterminate color='green.300' />
  </Box>;
};

export default LoginRedirect;
