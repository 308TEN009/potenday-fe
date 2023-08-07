import { Link as ReactRouterLink } from 'react-router-dom';
import { Flex, HStack, Link as ChakraLink } from '@chakra-ui/react';

const Header = () => {
  return <header>
    <Flex w={'100%'} alignItems='center' justify={'space-between'} >
      <div>Logo</div>
      <HStack spacing='10px'>
        <ChakraLink as={ReactRouterLink as any} to={'/'}>홈</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/cover-letter'}>자기소개서</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/new-clipping'}>뉴스 스크랩</ChakraLink>
        <ChakraLink as={ReactRouterLink as any} to={'/my-page'}>마이페이지</ChakraLink>
      </HStack>
    </Flex>
  </header>;
};

export default Header;
