import { extendTheme } from '@chakra-ui/react';

const colors = {
  main: {
    100: 'red',
  },
  outline: {
    500: '#DEDEDE',
  },
  headerBg: '#D9D9D9',
  mainBg: '#EFEFEF',

  //
  transparent: {
    100: 'transparent',
    200: 'transparent',
    300: 'transparent',
    400: 'transparent',
    500: 'transparent',
    600: 'transparent',
    700: 'transparent',
    800: 'transparent',
  },
  noColor: {
    100: '#FFFFFF',
    200: '#FFFFFF',
    300: '#FFFFFF',
    400: '#FFFFFF',
    500: '#FFFFFF',
    600: '#FFFFFF',
    700: '#FFFFFF',
    800: '#FFFFFF',
  },
};
const typography = {
  fontSizes: {
    lg: '36px',
    ml: '28px',
    md: '24px',
    sm: '20px',
    sx: '16px',
  },
  size: {
    lg: '36px',
    ml: '28px',
    md: '24px',
    sm: '20px',
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
  Heading: {
    defaultProps: {
      size: 'md',
    },
  },
  Textarea: {
    defaultProps: {
      size: 'sm',
    },
  },
  Text: {
    defaultProps: {
      wordBreak: 'keep-all',
      whiteSpace: 'wrap',
      size: 'sm',
    },
  },
};
export default extendTheme({ styles, colors, components, ...typography });
