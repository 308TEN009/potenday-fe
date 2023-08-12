import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { Button, Flex, HStack, Img, Link as ChakraLink, Spacer, useDisclosure } from '@chakra-ui/react';
import LoginModal from '@components/login/LoginModal';
import { common } from '@/messages.json';
import { bottomBoxShadow } from '@/theme';
import { useLocation } from 'react-router';
import LogoImg from '@assets/images/logo.svg';
import { useEffect, useState } from 'react';
import AuthApi from '@/api/AuthApi';

const CommonHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('accessToken'));
  }, []);

  const getFontWeight = (path: string) => {
    return location.pathname.includes(path) ? 'normal' : 'thin';
  };

  const onLogout = () => {
    AuthApi.logout()
           .then(() => {
             localStorage.removeItem('accessToken');
             localStorage.removeItem('refreshToken');
           })
           .then(() => window.location.reload());
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
      fontWeight={'thin'}
      fontSize={['sx', 'sm']}
    >
      <HStack spacing={['20px', '180px']} wordBreak={'keep-all'}
              pl={[0, '124px']}>
        <Img src={LogoImg}
             w={'43px'}
             h={'32px'}
             onClick={() => navigate('/')} />
        <ChakraLink as={ReactRouterLink as any}
                    fontWeight={location.pathname === '/' ? 'normal' : 'thin'}
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
      <Button colorScheme={'transparent'}
              color={'black'}
              fontSize={['sx', 'sm']}
              onClick={isLoggedIn ? onLogout : onOpen}
              pr={[0, '124px']}>
        {isLoggedIn ? common.header.logout : common.header.login}
      </Button>
    </Flex>
    <LoginModal isOpen={isOpen} onClose={onClose} />
  </header>;
};

export default CommonHeader;
