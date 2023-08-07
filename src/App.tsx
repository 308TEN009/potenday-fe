import { useRoutes } from 'react-router';
import routes from '@/router';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@components/common/Header';
import theme from '@/theme';
import Fonts from '@/theme/Fonts';
import { Suspense } from 'react';

function App() {
  return <ChakraProvider theme={theme}>
    <Fonts />
    <Header />
    <Suspense fallback={<div>loading...</div>}>
      {useRoutes(routes)}
    </Suspense>
  </ChakraProvider>;
}

export default App;
