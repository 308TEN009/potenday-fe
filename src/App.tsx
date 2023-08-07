import './App.css';
import { useRoutes } from 'react-router';
import routes from '@/router';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@/component/common/Header';
import theme from '@/theme';

function App() {
  return <ChakraProvider theme={theme}>
    <Header />
    {useRoutes(routes)}
  </ChakraProvider>;
}

export default App;
