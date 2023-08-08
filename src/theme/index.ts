import { extendTheme } from '@chakra-ui/react';

const colors = {
  main: {
    100: 'red',
  },
};
const typography = {
  fontSizes: {
    lg: '36px',
    md: '24px',
    sm: '16px',
  },
};

export default extendTheme({ colors, ...typography });
