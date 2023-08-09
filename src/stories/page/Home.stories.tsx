import type { Meta, StoryObj } from '@storybook/react';
import Home from '@pages/Home';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';

const homePageMeta: Meta<typeof Home> = {
  title: 'Page/Home',
  component: Home,
  decorators: [(story) =>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {story()}
      </ChakraProvider>
    </BrowserRouter>,
  ],

};
export default homePageMeta;
type Story = StoryObj<Home>;
export const Common: Story = {
	args: {},
};
