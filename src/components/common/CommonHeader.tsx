import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { Button, Flex, HStack, Img, Link as ChakraLink, Spacer, useDisclosure } from '@chakra-ui/react';
import LoginModal from '@components/login/LoginModal';
import { common } from '@/messages.json';
import { bottomBoxShadow } from '@/theme';
import { useLocation } from 'react-router';
import LogoImg from '@assets/images/logo-header.png';
import { useEffect, useState } from 'react';
import AuthApi from '@/api/AuthApi';
import GoLoginModal from '@components/login/GoLoginModal';
import { LOGOUT_CHANNEL, REDIRECTION_CHANNEL } from '@/model/common';

const CommonHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isPopupOpen, onOpen: onPopupOpen, onClose: onPopupClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logoutChannel = new BroadcastChannel(LOGOUT_CHANNEL);
  const redirectWindowChannel = new BroadcastChannel(REDIRECTION_CHANNEL);
  useEffect(() => {
    setIsLoggedIn(() => !!localStorage.getItem('accessToken'));
    logoutChannel.onmessage = () => setIsLoggedIn(false);
    redirectWindowChannel.onmessage = () => {
      window.location.reload();
      onClose();
    };
    if (!isLoggedIn) {
      onPopupOpen();
    }
  }, []);

  const getFontWeight = (path: string) => {
    return location.pathname.includes(path) ? 'medium' : 'regular';
  };

  const onLoginOrLogout = () => {
    setIsLoggedIn(() => !!localStorage.getItem('accessToken'));
    isLoggedIn ? onLogout() : onOpen();
  };

  const onLogout = () => {
    AuthApi.logout()
           .finally(() => {
             localStorage.removeItem('accessToken');
             localStorage.removeItem('refreshToken');
             logoutChannel.postMessage('logout');
           });
  };

  return <header style={{ position: 'sticky', top: 0, zIndex: 999 }}>
    <Flex
      w={'100vw'}
      h={'86px'}
      alignItems={'center'}
      justify={'space-between'}
      bg={'background'}
      boxShadow={bottomBoxShadow}
      p={4}
      fontWeight={'normal'}
      fontSize={'md'}
      color={'darkgrey2.500'}
    >
      <HStack spacing={['20px', '104px']} wordBreak={'keep-all'}
              pl={[0, '124px']}>
        <Img src={LogoImg}
             w={'136px'}
             h={'45px'}
             onClick={() => navigate('/')} />
        <ChakraLink as={ReactRouterLink as any}
                    fontWeight={location.pathname === '/' ? 'medium' : 'regular'}
                    to={'/'}>
          {common.header.home}
        </ChakraLink>
        <ChakraLink as={ReactRouterLink as any}
                    fontWeight={getFontWeight('/cover-letter')}
                    to={'/cover-letter'}>
          {common.header.coverLetter}
        </ChakraLink>
        <ChakraLink as={ReactRouterLink as any}
                    fontWeight={getFontWeight('/my-page')}
                    to={'/my-page'}>
          {common.header.myPage}
        </ChakraLink>
        <ChakraLink as={ReactRouterLink as any}
                    textAlign={'center'}
                    fontWeight={getFontWeight('/news-clipping')}
                    to={'/news-clipping'}>
          {common.header.newsClipping}
        </ChakraLink>
      </HStack>
      <Spacer />
      <Button colorScheme={'none'}
              color={'darkgrey2.500'}
              fontSize={'sm'}
              onClick={onLoginOrLogout}
              pr={[0, '124px']}>
        {isLoggedIn ? common.header.logout : common.header.login}
      </Button>
    </Flex>
    <LoginModal isOpen={isOpen} onClose={onClose} />
    {
      !isLoggedIn &&
      <GoLoginModal isOpen={isPopupOpen}
                    onClose={onPopupClose}
                    onLogin={onOpen} />
    }
  </header>;
};

export default CommonHeader;
