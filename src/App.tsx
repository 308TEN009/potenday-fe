import { useRoutes } from 'react-router';
import routes from '@/router';
import { ChakraProvider, Container } from '@chakra-ui/react';
import CommonHeader from '@components/common/CommonHeader';
import theme from '@/theme';
import GlobalSetting from '@/theme/GlobalSetting';
import { Suspense } from 'react';

function App() {
  return <ChakraProvider theme={theme}>
    <GlobalSetting />
    <CommonHeader />
    <Container as={'main'}
               w={'initial'}
               maxW={'initial'}
               m={'80px 200px 0px 200px'}>
      <Suspense fallback={<div>loading...</div>}>
        {useRoutes(routes)}
      </Suspense>
    </Container>

  </ChakraProvider>;
}

export default App;
