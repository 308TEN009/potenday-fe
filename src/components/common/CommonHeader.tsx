import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Button, Flex, HStack, Link as ChakraLink, Spacer, useDisclosure } from '@chakra-ui/react';
import LoginModal from '@components/login/LoginModal';
import { common } from '@/messages.json';
import { bottomBoxShadow } from '@/theme';
import { useLocation } from 'react-router';

const CommonHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const getFontWeight = (path: string) => {
    return location.pathname.includes(path) ? 'normal' : 'thin';
  };

  return <header>
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
      <HStack spacing={['20px', '40px']} wordBreak={'keep-all'}>
        <Box w={'10vw'}>Logo</Box>
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
              onClick={onOpen}>
        {common.header.login}
      </Button>
    </Flex>
    <LoginModal isOpen={isOpen} onClose={onClose} />
  </header>;
};

export default CommonHeader;
