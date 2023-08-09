import CommonHeader from '@components/common/CommonHeader';
import { Container } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const Main = () => {
  return <>
    <CommonHeader />
    <Container as={'main'}
               w={'initial'}
               maxW={'initial'}
               m={'80px 150px 0px 150px'}>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  </>
    ;
};

export default Main;
