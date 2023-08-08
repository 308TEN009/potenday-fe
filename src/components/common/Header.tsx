import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Button, Flex, HStack, Link as ChakraLink, Spacer, useDisclosure } from '@chakra-ui/react';
import LoginModal from '@components/login/LoginModal';

const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const onOpenLoginModal = () => {
		isOpen ? onClose() : onOpen();
	}
  return <header>
    <Flex
			w={'100%'}
			alignItems={'center'}
			justify={'space-between'}
			p={4}
		>
      <Box w={'400px'}>Logo</Box>
      <Spacer />
      <HStack flex={1} spacing='20px' wordBreak={'keep-all'}>
        <ChakraLink as={ReactRouterLink as any} to={'/'} >홈</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/cover-letter'}>자기소개서</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/new-clipping'}>뉴스 스크랩</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/my-page'}>마이페이지</ChakraLink>
				<Spacer />
				<Button w={'100px'} onClick={onOpenLoginModal}>
					로그인
				</Button>
      </HStack>
    </Flex>
		<LoginModal isOpen={isOpen} onClose={onClose}/>
  </header>;
};

export default Header;
