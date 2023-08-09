import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Button, Flex, HStack, Link as ChakraLink, Spacer, useDisclosure } from '@chakra-ui/react';
import LoginModal from '@components/login/LoginModal';
import * as message from '@/messages.json';

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
        <ChakraLink as={ReactRouterLink as any} to={'/'}>{message.common.header.home}</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/cover-letter'}>{message.common.header.coverLetter}</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/news-clipping'}>{message.common.header.newsClipping}</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/my-page'}>{message.common.header.myPage}</ChakraLink>
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
