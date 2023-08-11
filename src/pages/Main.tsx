import CommonHeader from '@components/common/CommonHeader';
import { Box, Container } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const Main = () => {
  return <Box w={'100%'}
              h={'100vh'}
              alignItems={'start'}
              bgColor={'background'} zIndex={0}>
    <CommonHeader />
    <Container as={'main'}
               flex={1}
               bgColor={'background'}
               w={'initial'}
               maxW={'initial'}>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  </Box>;
};

export default Main;
