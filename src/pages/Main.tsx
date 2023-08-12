import CommonHeader from '@components/common/CommonHeader';
import { Box, Container } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const Main = () => {
  return <Box w={'100%'}
              minH={'100vh'}
              alignItems={'start'}
              bgColor={'background'} zIndex={0}>
    <CommonHeader />
    <Container as={'main'}
               p={0}
               flex={1}
               w={'initial'}
               maxW={'initial'}>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  </Box>;
};

export default Main;
