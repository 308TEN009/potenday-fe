import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Button, Flex, HStack, Link as ChakraLink, Spacer, useDisclosure } from '@chakra-ui/react';
import LoginModal from '@components/login/LoginModal';

const CommonHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return <header>
    <Flex
      w={'100%'}
      alignItems={'center'}
      justify={'space-between'}
      p={4}
    >
      <Box w={'10vw'}>Logo</Box>
      <Spacer />
      <HStack spacing='35px' wordBreak={'keep-all'}>
        <ChakraLink as={ReactRouterLink as any} to={'/'}>홈</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/cover-letter'}>자기소개서</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/new-clipping'}>뉴스 스크랩</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/my-page'}>마이페이지</ChakraLink>
      </HStack>
      <Spacer />
      <Button w={'5vw'} onClick={onOpen}>
        로그인
      </Button>
    </Flex>
    <LoginModal isOpen={isOpen} onClose={onClose} />
  </header>;
};

export default CommonHeader;
