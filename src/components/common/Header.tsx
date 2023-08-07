import { Link as ReactRouterLink } from 'react-router-dom';
import { HStack, Link as ChakraLink } from '@chakra-ui/react';

const Header = () => {
  return <header>
    <HStack>
      <ChakraLink as={ReactRouterLink as any} to={'/'}>Main</ChakraLink>
      <ChakraLink as={ReactRouterLink as any} to={'/ai'}>AI 자소서 도우미</ChakraLink>
      <ChakraLink as={ReactRouterLink as any} to={'/my-page'}>My Page</ChakraLink>
    </HStack>
  </header>;
};

export default Header;
