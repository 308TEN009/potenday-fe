import { useRoutes } from 'react-router';
import routes from '@/router';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import { Suspense } from 'react';

function App() {
  return <ChakraProvider theme={theme}>
    <Suspense fallback={<div>loading...</div>}>
      {useRoutes(routes)}
    </Suspense>
  </ChakraProvider>;
}

export default App;
