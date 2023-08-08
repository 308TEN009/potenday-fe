import { Link as ReactRouterLink } from 'react-router-dom';
import {Button, Flex, HStack, Link as ChakraLink, Spacer} from '@chakra-ui/react';

const Header = () => {
  return <header>
    <Flex
			w={'100%'}
			alignItems={'center'}
			justify={'space-between'}
			p={4}
		>
      <div>Logo</div>
      <Spacer />
      <HStack flex={1} spacing='10px'>
        <ChakraLink as={ReactRouterLink as any} to={'/'}>홈</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/cover-letter'}>자기소개서</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/new-clipping'}>뉴스 스크랩</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/my-page'}>마이페이지</ChakraLink>
      </HStack>
			<Spacer />
			<Button>로그인</Button>
    </Flex>
  </header>;
};

export default Header;
