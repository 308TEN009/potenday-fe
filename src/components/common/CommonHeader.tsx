import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Button, Flex, HStack, Link as ChakraLink, Spacer, useDisclosure } from '@chakra-ui/react';
import LoginModal from '@components/login/LoginModal';
import { common } from '@/messages.json';

const CommonHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return <header>
    <Flex
      w={'100vw'}
      h={'86px'}
      alignItems={'center'}
      justify={'space-between'}
      bg={'headerBg'}
      p={4}
    >
      <HStack spacing='35px' wordBreak={'keep-all'}>
        <Box w={'10vw'}>Logo</Box>
        <ChakraLink as={ReactRouterLink as any} to={'/'}>{common.header.home}</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/cover-letter'}>{common.header.coverLetter}</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/news-clipping'}>{common.header.newsClipping}</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/my-page'}>{common.header.myPage}</ChakraLink>
      </HStack>
      <Spacer />
      <Button w={'5vw'}
              colorScheme={'transparent'}
              color={'black'}
              fontSize={'sm'}
              onClick={onOpen}>
        {common.header.login}
      </Button>
    </Flex>
    <LoginModal isOpen={isOpen} onClose={onClose} />
  </header>;
};

export default CommonHeader;
