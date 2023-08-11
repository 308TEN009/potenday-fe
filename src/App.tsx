import { useRoutes } from 'react-router';
import routes from '@/router';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

function App() {
  return <ChakraProvider theme={theme}>
    <RecoilRoot>
      <Suspense fallback={<div>loading...</div>}>
        {useRoutes(routes)}
      </Suspense>
    </RecoilRoot>
  </ChakraProvider>;
}

export default App;
