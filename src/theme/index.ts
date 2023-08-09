import { extendTheme } from '@chakra-ui/react';

const colors = {
  main: {
    100: 'red',
  },
};
const typography = {
  fontSizes: {
    lg: '36px',
    ml: '28px',
    md: '24px',
    sm: '16px',
  },
};

const global = {
  '*': {
    fontFamily: `'Spoqa Han Sans Neo', 'sans-serif'`,
    padding: 0,
    margin: 0,
  },
  '#root': {
    width: '100vw',
    height: '100vh',
  },
};
const styles = { global };

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'normal',
    },
    defaultProps: {
      size: 'sm',
    },
  },
};
export default extendTheme({ styles, colors, components, ...typography });
