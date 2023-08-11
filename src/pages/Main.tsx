import CommonHeader from '@components/common/CommonHeader';
import { Box, Container } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const Main = () => {
  return <Box w={'100%'}
              h={'100vh'}
              alignItems={'start'}
              bgColor={'background'}>
    <CommonHeader />
    <Container as={'main'}
               flex={1}
               bgColor={'background'}
               w={'initial'}
               maxW={'initial'}
               m={['50px 0px', '80px 150px 0px 150px']}>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  </Box>;
};

export default Main;
