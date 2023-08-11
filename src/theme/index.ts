import { extendTheme } from '@chakra-ui/react';

const colors = {
  outline: {
    500: '#DEDEDE',
  },

  main: {
    500: '#6C80AC',
  },
  sub1: {
    500: '#6C74CD',
  },
  sub2: {
    500: '#8DB0FA',
  },
  gradients: ['#6C74CD', '#8DB0FA'],
  // highlight1: '#6C74CD',
  // highlight2: {
  //   500: '#6C80AC',
  // },
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
      borderRadius: '12px',
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
    baseStyle: {
      wordBreak: 'keep-all',
      whiteSpace: 'nowrap',
    },
    defaultProps: {
      size: 'sm',
    },
    sizes: {
      sm: {
        fontSize: 'sm',
      },
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
