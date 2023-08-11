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
    black: 'black',
  },
};
const typography = {
  fontSizes: {
    lg: {
      mobile: '24px',
      desktop: '36px',
    },
    ml: {
      mobile: '20px',
      desktop: '28px',
    },
    md: {
      mobile: '16px',
      desktop: '24px',
    },
    sm: {
      mobile: '14px',
      desktop: '20px',
    },
    sx: {
      mobile: '12px',
      desktop: '16px',
    }
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
      bg: 'white',
      border: '2px solid',
      borderColor: 'outline.500',
    },
    defaultProps: {
      size: 'sm',
      // colorScheme: 'noColor',
      color: 'red',
    },
    defaultStyles: {
      color: 'red',
    }
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
    defaultStyle: {
      wordBreak: 'keep-all',
      whiteSpace: 'wrap',
    },
    defaultProps: {
      size: 'sm',
    },
    sizes: {
      sm: {
        fontSize: 'sm',
      }
    }
  },
};

const size = {
  lg: '36px',
  ml: '28px',
  md: '24px',
  sm: '20px',
};

const breakpoints = {
  mobile: "768px",
  desktop: "1920px",
}

export default extendTheme({
  styles,
  colors,
  components,
  size,
  breakpoints,
  ...typography
});
