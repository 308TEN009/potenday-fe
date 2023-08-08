import { Global } from '@emotion/react';

const GlobalSetting = () => (
  <Global
    styles={
      `
      . {
          width:100vw;
          height:100vh;
      }
      * { 
          font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
          padding: 0;
          margin: 0;
      }
    `
    }
  />
);

export default GlobalSetting;
