import { Global } from '@emotion/react';

const GlobalSetting = () => (
  <Global
    styles={
      `
      
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
