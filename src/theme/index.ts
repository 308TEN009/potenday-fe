import { extendTheme } from '@chakra-ui/react';

const colors = {
  outline: {
    500: '#DEDEDE',
  },

  main: {
    500: '#6C80AC',
    700: 'white',
  },
  sub1: {
    100: '#6C74CD',
    500: '#6C74CD',
    700: 'white',
  },
  sub2: {
    500: '#8DB0FA',
  },
  gradients: ['#6C74CD', '#8DB0FA'],
  lightgrey1: {
    500: '#EEEEEE',
  },
  lightgrey2: {
    500: '#E4E4E4',
  },
  lightgrey3: {
    500: '#BDBDBD',
  },
  lightgrey4: {
    500: '#999999',
  },
  darkgrey1: {
    500: '#666666',
  },
  darkgrey2: {
    500: '#333333',
  },
  inputOutline: {
    500: 'lightgrey2',
  },
  white: '#FFFFFF',
  background: '#FAFAFF',
};
const typography = {
  fontSizes: {
    lg: '36px',
    ml: '28px',
    md: '24px',
    sm: '20px',
    sx: '16px',
  },
};

const global = {
  '*': {
    fontFamily: `'Spoqa Han Sans Neo', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important`,
    padding: 0,
    margin: 0,
    color: '#333333',
  },
  '#root': {
    width: '100vw',
    height: '100vh',
  },
  '.css-v4o6wz[aria-selected=true]': {
    boxShadow: `
   inset 1px 1px 2px 0 #7780E230,
   inset -1px -1px 2px 0 #6168B950,
   -1px 1px 2px 0 #6168B920,
   1px -1px 2px 0 #6168B920,
   1px -1px 2px 0 #6168B920,
   1px 1px 3px 0 #6168B990,
    `,
  },
};
const styles = { global };

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'normal',
      borderRadius: '12px',
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 'normal',
    },
    defaultProps: {
      fontSize: 'ml',
    },
  },
  Textarea: {
    defaultProps: {
      size: 'sm',
    },
  },
  Text: {
    baseStyle: {
      wordBreak: 'keep-all',
    },
    defaultProps: {
      size: 'sm',
    },
  },
  Th: {
    baseStyle: {
      color: 'lightgrey.500',
    },
  },
};

const size = {
  lg: '36px',
  ml: '28px',
  md: '24px',
  sm: '20px',
};

const breakpoints = {
  sm: '768px',
  md: '1920px',
};

export const bottomBoxShadow = `0 0 0 1px #EEEEEE, 0 1px 2px 0 #EEEEEE`;

export default extendTheme({
  styles,
  colors,
  components,
  breakpoints,
  size,
  ...typography,
});
